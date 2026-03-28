"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Download, Loader2, Code2, Globe, Users, ArrowLeft } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { SITE_NAME_SHORT } from "@/config/site"

/* ─── Types ─── */

export interface ReceiptForm {
  firstName: string
  lastName: string
  dob: string
  gender: string
  phone: string
  email: string
  school: string
  graduationYear: string
}

const PROGRAMS = [
  {
    id: "cs",
    icon: Code2,
    label: "IT - Programming",
    sublabel: "ວິທະຍາສາດຄອມພິວເຕີ ແລະ ວິສະວະກຳຊອບແວ",
    duration: "3 ປີ",
    level: "ປະລິນຍາຕີ້ຊັ້ນສູງ",
    color: "#e61435",
    bg: "rgba(230,20,53,0.06)",
    border: "rgba(230,20,53,0.2)",
  },
  {
    id: "en",
    icon: Globe,
    label: "ພາສາອັງກິດ",
    sublabel: "ສຳລັບດ້ານໄອທີ ແລະ ທຸລະກິດ",
    duration: "3 ປີ",
    level: "ປະລິນຍາຕີ້ຊັ້ນສູງ",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.06)",
    border: "rgba(14,165,233,0.2)",
  },
  {
    id: "ps",
    icon: Users,
    label: "ການເມືອງ",
    sublabel: "ກ່ຽວກັບສັງຄົມວິທະຍາ",
    duration: "3 ປີ",
    level: "ປະລິນຍາຕີ້ຊັ້ນສູງ",
    color: "#d97706",
    bg: "rgba(217,119,6,0.06)",
    border: "rgba(217,119,6,0.2)",
  },
]

/* ─── Component ─── */

interface AdmissionReceiptProps {
  form: ReceiptForm
  selectedProgram: string | null
  refNo: string
}

export function AdmissionReceipt({ form, selectedProgram, refNo }: AdmissionReceiptProps) {
  const receiptRef = React.useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = React.useState(false)

  const program = PROGRAMS.find((p) => p.id === selectedProgram)

  const qrValue = `REF:${refNo}|NAME:${form.firstName} ${form.lastName}|PROGRAM:${selectedProgram}|PHONE:+856${form.phone}`

  const handleDownload = async () => {
    if (!receiptRef.current) return
    setDownloading(true)
    try {
      const html2canvas = (await import("html2canvas")).default
      const jsPDF = (await import("jspdf")).default

      const el = receiptRef.current
      const UNSUPPORTED = /oklch|lab\(|color-mix/i

      // Snapshot original inline style strings
      const snapshot: Array<{ node: HTMLElement; style: string }> = []
      const nodes = [el, ...Array.from(el.querySelectorAll("*"))] as HTMLElement[]

      // Inline ALL computed styles so elements are self-contained without stylesheets
      nodes.forEach((node) => {
        snapshot.push({ node, style: node.getAttribute("style") ?? "" })
        const computed = window.getComputedStyle(node)
        for (let i = 0; i < computed.length; i++) {
          const prop = computed[i]
          let val = computed.getPropertyValue(prop)
          if (UNSUPPORTED.test(val)) val = "transparent"
          node.style.setProperty(prop, val)
        }
      })

      const canvas = await html2canvas(el, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        onclone: (_doc, clonedEl) => {
          const doc = clonedEl.ownerDocument

          // Extract @font-face rules before removing stylesheets
          const fontRules: string[] = []
          doc.querySelectorAll('link[rel="stylesheet"], style').forEach((s) => {
            try {
              const sheet = (s as HTMLLinkElement | HTMLStyleElement).sheet
              if (sheet) {
                Array.from(sheet.cssRules).forEach((rule) => {
                  if (rule instanceof CSSFontFaceRule) {
                    fontRules.push(rule.cssText)
                  }
                })
              }
            } catch { /* cross-origin sheets — skip */ }
            s.remove()
          })

          // Re-inject only @font-face rules so Lao glyphs render
          if (fontRules.length > 0) {
            const fontStyle = doc.createElement("style")
            fontStyle.textContent = fontRules.join("\n")
            doc.head.appendChild(fontStyle)
          }
        },
      })

      // Restore original inline styles
      snapshot.forEach(({ node, style }) => {
        if (style) node.setAttribute("style", style)
        else node.removeAttribute("style")
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5",
      })

      const pageW = pdf.internal.pageSize.getWidth()
      const pageH = pdf.internal.pageSize.getHeight()
      const imgW = canvas.width
      const imgH = canvas.height
      const ratio = Math.min(pageW / imgW, pageH / imgH)
      const w = imgW * ratio
      const h = imgH * ratio
      const x = (pageW - w) / 2
      const y = (pageH - h) / 2

      pdf.addImage(imgData, "PNG", x, y, w, h)
      pdf.save(`${refNo}.pdf`)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Receipt card — captured for PDF */}
      <div ref={receiptRef} className="bg-white">
        {/* Header */}
        <div className="bg-brand px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-20 h-8 flex items-center justify-center">
              <span className="font-black text-white text-4xl">BCT</span>
            </div>
            <div>
              <div className="text-white font-black text-sm">{SITE_NAME_SHORT}</div>
              <div className="text-slate-100 text-[10px]">ໃບຢັ້ງຢືນການສະໝັກ</div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[rgba(230,20,53,0.15)] border-2 border-white flex items-center justify-center">
            <CheckCircle size={20} className="text-white" />
          </div>
        </div>

        {/* Zigzag top */}
        <div
          className="h-3"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #F1F5F9 25%, transparent 25%), linear-gradient(225deg, #F1F5F9 25%, transparent 25%)",
            backgroundSize: "12px 12px",
            backgroundPositionY: "-6px",
            backgroundColor: "#fff",
          }}
        />

        {/* Body */}
        <div className="px-6 pt-2 pb-6 space-y-5">
          {/* Status + ref */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] text-slate-400 font-bold tracking-widest mb-1">ສະຖານະ</div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(230,20,53,0.08)] border border-[rgba(230,20,53,0.2)] text-brand text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                ລໍຖ້າການຢືນຢັນ
              </span>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-slate-400 font-bold tracking-widest mb-1">ເລກທີ</div>
              <div className="font-mono font-bold text-xs text-navy">{refNo}</div>
            </div>
          </div>

          <div className="border-t border-dashed border-[#E2E8F0]" />

          {/* Program */}
          {program && (() => {
            const Icon = program.icon
            return (
              <div>
                <div className="text-sm text-slate-500 font-bold  mb-2">ສາຂາທີ່ເລືອກ</div>
                <div
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ backgroundColor: program.bg, borderColor: program.border }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: program.color }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-navy">{program.label}</div>
                    <div className="text-xs text-slate-500">{program.level} · {program.duration}</div>
                  </div>
                </div>
              </div>
            )
          })()}

          <div className="border-t border-dashed border-[#E2E8F0]" />

          {/* Info grid */}
          <div>
            <div className="text-sm text-slate-600 font-bold mb-3">ຂໍ້ມູນຜູ້ສະໝັກ</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { label: "ຊື່ແທ້", value: form.firstName || "—" },
                { label: "ນາມສະກຸນ", value: form.lastName || "—" },
                { label: "ວັນເດືອນປີເກີດ", value: form.dob || "—" },
                {
                  label: "ເພດ",
                  value:
                    form.gender === "male" ? "ຊາຍ" : form.gender === "female" ? "ຍິງ" : form.gender || "—",
                },
                { label: "ເບີໂທ", value: form.phone ? `+856 ${form.phone}` : "—" },
                { label: "ອີເມວ", value: form.email || "—" },
                { label: "ໂຮງຮຽນ", value: form.school || "—" },
                { label: "ປີຈົບ", value: form.graduationYear || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-start items-center gap-3">
                  <div className="text-[10px] text-slate-400 font-semibold">{label}:</div>
                  <div className="text-xs text-navy font-semibold mt-0.5 truncate">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-dashed border-[#E2E8F0]" />

          {/* Footer: note + QR */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-slate-500 leading-relaxed">
                ທີມຮັບສະໝັກຈະຕິດຕໍ່ກັບທ່ານ<br />
                <span className="font-bold text-navy">ພາຍໃນ 2 ວັນເຮັດການ</span>
              </p>
              <div className="mt-2 text-[10px] text-slate-400">
                ວັນທີ: {new Date().toLocaleDateString("lo-LA")}
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-center gap-1.5">
              <div className="p-2 rounded-ld border border-[#E2E8F0] bg-white">
                <QRCodeSVG
                  value={qrValue}
                  size={80}
                  fgColor="#0F172A"
                  bgColor="#ffffff"
                  level="M"
                />
              </div>
              <span className="text-[9px] text-slate-400 font-semibold">ສະແກນເພື່ອຢືນຢັນ</span>
            </div>
          </div>
        </div>

        {/* Zigzag bottom */}
        <div
          className="h-3"
          style={{
            backgroundImage:
              "linear-gradient(315deg, #F1F5F9 25%, transparent 25%), linear-gradient(45deg, #F1F5F9 25%, transparent 25%)",
            backgroundSize: "12px 12px",
            backgroundColor: "#fff",
          }}
        />
      </div>

      {/* Action buttons — outside receipt (not in PDF) */}
      <div className="px-6 py-4 flex items-center justify-between gap-3 border-t border-[#F1F5F9]">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-brand transition-colors"
        >
           <ArrowLeft size={14} /> ກັບໄປໜ້າຫຼັກ
        </a>

        <motion.button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          whileHover={!downloading ? { scale: 1.02 } : {}}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 cursor-pointer rounded-sm bg-brand text-white text-sm font-bold disabled:opacity-60 transition-all"
        >
          {downloading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              ກຳລັງດາວໂຫລດ...
            </>
          ) : (
            <>
              <Download size={15} />
              ດາວໂຫລດ PDF
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}
