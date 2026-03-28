"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Send,
  Phone,
  Mail,
  BookOpen,
  Code2,
  Globe,
  Users,
  GraduationCap,
  Award,
  Clock,
  Star,
  Sparkles,
} from "lucide-react"
import Navbar from "@/components/layout/navbar"
import { SITE_NAME_SHORT } from "@/config/site"
import { FormField } from "@/components/ui/form-field"
import { FormSelect } from "@/components/ui/form-select"
import { SearchableSelect } from "@/components/ui/searchable-select"
import { SCHOOL_GROUPS } from "@/data/schools"
import dynamic from "next/dynamic"

const AdmissionReceipt = dynamic(
  () => import("@/components/admission-receipt").then((m) => m.AdmissionReceipt),
  { ssr: false },
)

/* ─── Data ─────────────────────────────────────────────────────── */

const programs = [
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
    tags: ["Programming", "Web Dev", "AI/ML", "Database"],
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
    tags: ["IELTS Prep", "Business English", "Communication"],
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
    tags: ["Public Policy", "Social Science", "Leadership"],
  },
]

const stats = [
  { icon: GraduationCap, value: "5000+", label: "ນັກສຶກສາທີ່ສຳເລັດ" },
  { icon: Award, value: "10+", label: "ເປີດຮຽນໄດ້ຫຼາຍກວ່າ" },
  { icon: BookOpen, value: "3", label: "ສາຂາວິຊາຮຽນ" },
  { icon: Star, value: "95%", label: "ອັດຕາການສຳເລັດ" },
]

const requirements = [
  "ໃບຢັ້ງຢືນສຳເລັດ ມ.7 ຫຼື ທຽບເທົ່າ",
  "ສຳເນົາບັດປະຈຳຕົວ ຫຼື ໜັງສືຜ່ານແດນ",
  "ຮູບຖ່າຍ 2 ຮູບ (ຖ່າຍບໍ່ເກີນ 6 ເດືອນ)",
  "ແບບຟອມສະໝັກທີ່ຄົບຖ້ວນ",
  "ຄ່າທຳນຽມສະໝັກຕາມທີ່ກຳນົດ",
]

const STEPS = ["ສາຂາຮຽນ", "ຂໍ້ມູນສ່ວນຕົວ", "ຂໍ້ມູນຕິດຕໍ່"]


/* ─── Sub-components ────────────────────────────────────────────── */

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8 md:mb-10">
      {STEPS.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={
                  done
                    ? { backgroundColor: "#e61435", borderColor: "#e61435", scale: 1 }
                    : active
                      ? { backgroundColor: "#fff", borderColor: "#e61435", scale: 1.1 }
                      : { backgroundColor: "#F1F5F9", borderColor: "#E2E8F0", scale: 1 }
                }
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center"
              >
                {done ? (
                  <CheckCircle size={16} className="text-white" />
                ) : (
                  <span
                    className={`text-xs font-black ${active ? "text-brand" : "text-slate-400"}`}
                  >
                    {i + 1}
                  </span>
                )}
              </motion.div>
              <span
                className={`text-[10px] font-semibold whitespace-nowrap ${active ? "text-brand" : done ? "text-slate" : "text-slate-400"
                  }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <motion.div
                animate={{ backgroundColor: done ? "#e61435" : "#E2E8F0" }}
                transition={{ duration: 0.4 }}
                className="h-0.5 w-12 sm:w-20 mx-1 mb-5 rounded-full"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}


/* ─── Page ──────────────────────────────────────────────────────── */

export default function AdmissionsPage() {
  const [step, setStep] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [refNo] = useState(() => {
    const d = new Date()
    return `BCT-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`
  })
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    school: "",
    message: "",
    graduationYear: "",
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const next = () => {
    setDirection(1)
    setStep((s) => s + 1)
  }
  const back = () => {
    setDirection(-1)
    setStep((s) => s - 1)
  }

  const canNext0 = Boolean(selectedProgram)
  const canNext1 = form.firstName && form.lastName && form.gender
  const canSubmit = form.phone

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  }

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-navy pt-24 pb-20 md:pt-32 md:pb-28">
        {/* bg decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(230,20,53,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(230,20,53,0.1) 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(230,20,53,0.15)] border border-[rgba(230,20,53,0.3)] mb-6"
            >
              <Sparkles size={13} className="text-brand" />
              <span className="text-brand text-xs font-bold tracking-widest">ຮັບສະໝັກຮຽນ</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            >
              ເລີ່ມຕົ້ນ
              <span className="text-brand"> ເສັ້ນທາງ</span>
              <br />ໃໝ່ຂອງທ່ານ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              ສະໝັກຮຽນກັບ {SITE_NAME_SHORT} ວັນນີ້ — ຮຽນໃນສະພາບແວດລ້ອມທີ່ທັນສະໄໝ, ຄາດຄົນ ແລະ ມຸ່ງໄປສູ່ອາຊີບທີ່ໝັ້ນຄົງ.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-[rgba(255,255,255,0.05)] border-3 border-[rgba(255,255,255,0.2)] px-5 py-4 flex flex-col gap-2"
              >
                <Icon size={32} className="text-brand" />
                <div className="font-black text-2xl text-white">{value}</div>
                <div className="text-slate text-xs font-semibold leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-10 xl:gap-16 items-start">

          {/* Left: info panel */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-[#E2E8F0] p-6"
            >
              <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                <CheckCircle size={16} className="text-brand" />
                ເງື່ອນໄຂການຮັບສະໝັກ
              </h3>
              <ul className="space-y-2.5">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                    <span className="text-sm text-slate leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#e8e2e541] p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(230,20,53,0.15)] flex items-center justify-center shrink-0">
                <Clock size={18} className="text-brand" />
              </div>
              <div>
                <div className="font-bold text-sm">ຮັບສະໝັກຕະຫຼອດປີ</div>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  ທີມຮັບສະໝັກພ້ອມຕອບຄຳຖາມທຸກວັນ. ຫຼັງຮັບໃບສະໝັກ ຈະຕິດຕໍ່ກັບທ່ານພາຍໃນ 2 ວັນເຮັດການ.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-[#E2E8F0] overflow-hidden"
          >
            {submitted ? (
              <AdmissionReceipt
                form={form}
                selectedProgram={selectedProgram}
                refNo={refNo}
              />
            ) : (
              <>
                {/* Form header */}
                <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-8 rounded-lg bg-brand flex items-center justify-center">
                      <span className="font-black text-white text-xs">BCT</span>
                    </div>
                    <span className="text-xs font-bold text-slate tracking-widest">ແບບຟອມສະໝັກຮຽນ</span>
                  </div>
                  <h2 className="font-black text-xl text-navy mt-3">
                    {step === 0 && "ເລືອກສາຂາທີ່ສົນໃຈ"}
                    {step === 1 && "ຂໍ້ມູນສ່ວນຕົວ"}
                    {step === 2 && "ຂໍ້ມູນຕິດຕໍ່"}
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {step === 0 && "ເລືອກ 1 ສາຂາທີ່ທ່ານຕ້ອງການ"}
                    {step === 1 && "ກອກຂໍ້ມູນຕາມເອກະສານຕົວຈິງ"}
                    {step === 2 && "ພວກເຮົາຈະໃຊ້ຂໍ້ມູນນີ້ຕິດຕໍ່ທ່ານ"}
                  </p>
                </div>

                {/* Progress */}
                <div className="px-6 sm:px-8 pt-6">
                  <StepIndicator current={step} />
                </div>

                {/* Step content */}
                <div className="px-6 sm:px-8 pb-8 pt-2 relative">
                  <AnimatePresence mode="wait" custom={direction}>
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="space-y-3"
                      >
                        {programs.map((p) => {
                          const Icon = p.icon
                          const active = selectedProgram === p.id
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => setSelectedProgram(p.id)}
                              className="w-full text-left"
                            >
                              <motion.div
                                animate={
                                  active
                                    ? { borderColor: p.color, backgroundColor: p.bg, y: -2 }
                                    : { borderColor: "#E2E8F0", backgroundColor: "#fff", y: 0 }
                                }
                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                className="rounded-2xl border-2 p-4 flex items-center gap-4 cursor-pointer"
                              >
                                <motion.div
                                  animate={{ backgroundColor: active ? p.color : "rgba(241,245,249,1)" }}
                                  transition={{ duration: 0.2 }}
                                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                >
                                  <Icon size={22} style={{ color: active ? "#fff" : p.color }} />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-bold text-navy text-sm">{p.label}</div>
                                  <div className="text-xs text-slate">{p.sublabel}</div>
                                  <div className="flex items-center gap-2 mt-1.5">
                                    <span className="text-[10px] font-semibold text-slate-400 bg-[#F1F5F9] px-2 py-0.5 rounded-full">
                                      {p.duration}
                                    </span>
                                    <span className="text-[10px] font-semibold text-slate-400 bg-[#F1F5F9] px-2 py-0.5 rounded-full">
                                      {p.level}
                                    </span>
                                  </div>
                                </div>
                                <motion.div
                                  animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                >
                                  <CheckCircle size={22} style={{ color: p.color }} />
                                </motion.div>
                              </motion.div>
                            </button>
                          )
                        })}
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="space-y-4"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField id="firstName" label="ຊື່ແທ້" required type="text" placeholder="ຊື່ຕາມເອກະສານ" value={form.firstName} onChange={set("firstName")} />
                          <FormField id="lastName" label="ນາມສະກຸນ" required type="text" placeholder="ນາມສະກຸນ" value={form.lastName} onChange={set("lastName")} />
                        </div>
                        <FormField id="dob" label="ວັນເດືອນປີເກີດ" type="date" value={form.dob} onChange={set("dob")} />
                        <FormSelect
                          id="gender"
                          label="ເພດ"
                          required
                          placeholder="-- ເລືອກ --"
                          value={form.gender}
                          onChange={(v) => setForm((f) => ({ ...f, gender: v }))}
                          options={[
                            { value: "male", label: "ຊາຍ" },
                            { value: "female", label: "ຍິງ" },
                            { value: "other", label: "ອື່ນໆ" },
                          ]}
                        />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="space-y-4"
                      >
                        <FormField id="phone" label="ເບີໂທລະສັບຕິດຕໍ່" type="tel" prefix="+856" placeholder="20 XXX XXX XX" value={form.phone} onChange={set("phone")} />
                        <FormField id="email" label="ອີເມວຂອງນັກສຶກສາ" type="email" placeholder="student@gmail.com" value={form.email} onChange={set("email")} />
                        <SearchableSelect
                          id="school"
                          label="ໂຮງຮຽນທີ່ຈົບ ມ.7"
                          placeholder="ຄົ້ນຫາ ຫຼື ເລືອກໂຮງຮຽນ..."
                          groups={SCHOOL_GROUPS}
                          value={form.school}
                          onChange={(v) => setForm((f) => ({ ...f, school: v }))}
                        />
                        <FormField id="graduationYear" label="ປີຈົບຮຽນສາມັນ" type="text" placeholder="ປີຈົບຮຽນ" value={form.graduationYear} onChange={set("graduationYear")} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  {/* Navigation buttons */}
                  <div className={`flex mt-8 absolute left-0 bottom-0 w-full ${step > 0 ? "justify-between" : "justify-end"}`}>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={back}
                        className="flex items-center justify-center gap-2 cursor-pointer p-4 w-full h-full text-slate font-semibold text-sm bg-surface transition-colors"
                      >
                        ກັບຄືນ
                      </button>
                    )}
                    {step < STEPS.length - 1 ? (
                      <motion.button
                        type="button"
                        onClick={next}
                        disabled={step === 0 ? !canNext0 : !canNext1}
                        className="flex items-center justify-center gap-2 cursor-pointer p-4 w-full h-full bg-brand text-white font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      >
                        ຕໍ່ໄປ 
                      </motion.button>
                    ) : (
                      <motion.button
                        type="button"
                        onClick={() => canSubmit && setSubmitted(true)}
                        disabled={!canSubmit}
                        className="flex items-center justify-center gap-2 cursor-pointer p-4 w-full h-full bg-brand text-white font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      >
                       ຍືນໃບສະໝັກ
                      </motion.button>
                    )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
