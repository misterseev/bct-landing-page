"use client"

import { Clock, Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { SITE_NAME_SHORT } from "@/config/site"

const days = ["ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ"]

const morningSlots = [
  { time: "08:00 – 09:30", subject: "ວິຊາພື້ນຖານຄອມພິວເຕີ / ວິສາວະວິທາ" },
  { time: "09:45 – 11:15", subject: "ຫ້ອງປະຕິບັດການຂຽນໂປຣແກຣມ" },
  { time: "11:30 – 12:30", subject: "ພາສາອັງກິດ" },
  { time: "13:30 – 15:00", subject: "ວິຊາເລືອກຕາມພາກວິຊາ" },
  { time: "15:00 – 16:00", subject: "ຮຽນດ້ວຍຕົນເອງ / ຝຶກປະຕິບັດ" },
]

const viewport = { once: true, margin: "-80px" }

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(242,13,73,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand font-semibold text-sm">
            ຕາຕະລາງຮຽນ
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-navy mt-3 text-balance">
            ເວລາຮຽນ-ສອນ
          </h2>
          <p className="text-slate mt-4 max-w-xl mx-auto">
            {SITE_NAME_SHORT} ດຳເນີນການຮຽນ-ການສອນຕັ້ງແຕ່ວັນຈັນຫາວັນສຸກ ໂດຍມີສອງຮອບເວລາ ເພື່ອອຳນວຍຄວາມສະດວກໃຫ້ນັກສຶກສາ.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-6 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 border border-[#E2E8F0] bg-white relative overflow-hidden group hover:border-brand transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: "linear-gradient(90deg, #e61435, transparent)" }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(242,13,73,0.07)] flex items-center justify-center">
                  <Sun className="text-brand" size={20} />
                </div>
                <div>
                  <div className="font-bold text-navy text-base">ຮອບເຊົ້າ</div>
                  <div className="text-slate text-xs">ຕອນເຊົ້າ</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand">
                <Clock size={15} />
                <span className="font-bold text-xl">08:00 – 16:00</span>
              </div>
              <div className="text-slate text-sm mt-1">08:00 – 16:00 ໂມງ</div>
              <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                <div className="text-slate text-xs">ວັນຮຽນ</div>
                <div className="text-navy text-sm font-semibold mt-1">ວັນຈັນ – ວັນສຸກ</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-6 border border-[rgba(217,119,6,0.2)] bg-white relative overflow-hidden group hover:border-gold transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: "linear-gradient(90deg, #D97706, transparent)" }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(217,119,6,0.07)] flex items-center justify-center">
                  <Moon className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-bold text-navy text-base">ຮອບແລງ</div>
                  <div className="text-slate text-xs">ຕອນແລງ</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <Clock size={15} />
                <span className="font-bold text-xl">18:00 – 20:00</span>
              </div>
              <div className="text-slate text-sm mt-1">18:00 – 20:00 ໂມງ</div>
              <div className="mt-4 pt-4 border-t border-[rgba(217,119,6,0.1)]">
                <div className="text-slate text-xs">ວັນຮຽນ</div>
                <div className="text-navy text-sm font-semibold mt-1">ວັນຈັນ – ວັນສຸກ</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 border border-[#E2E8F0] bg-white overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
              <div>
                <div className="font-bold text-navy text-base">ຕາຕະລາງປະຈຳອາທິດ</div>
                <div className="text-slate text-xs mt-0.5">ຮອບເຊົ້າ — ຕົວຢ່າງຕາຕະລາງ</div>
              </div>
              <div className="px-3 py-1 rounded-full bg-[rgba(242,13,73,0.07)] border border-[rgba(242,13,73,0.15)] text-brand text-xs font-semibold">
                ວັນຈັນ – ວັນສຸກ
              </div>
            </div>

            <div className="grid grid-cols-6 bg-surface">
              <div className="px-3 py-3 text-slate text-xs font-semibold tracking-wide">ເວລາ</div>
              {days.map((day) => (
                <div key={day} className="px-2 py-3 text-center">
                  <div className="text-navy text-xs font-bold leading-tight">{day}</div>
                </div>
              ))}
            </div>

            {morningSlots.map((slot, idx) => (
              <div
                key={slot.time}
                className={`grid grid-cols-6 border-t border-[#E2E8F0] ${
                  idx % 2 === 0 ? "bg-transparent" : "bg-surface/50"
                }`}
              >
                <div className="px-3 py-3 text-slate text-xs font-mono whitespace-nowrap">{slot.time}</div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="px-2 py-3 text-left text-navy text-xs leading-snug"
                  >
                    {slot.subject}
                  </div>
                ))}
              </div>
            ))}

            <div className="px-6 py-4 border-t border-[rgba(217,119,6,0.15)] bg-[rgba(217,119,6,0.03)] flex items-center gap-3">
              <Moon size={16} className="text-gold shrink-0" />
              <p className="text-slate text-sm">
                ຮອບແລງ{" "}
                <span className="text-gold font-semibold">18:00 – 20:00</span> ມີຈັດຫ້ອງສອນເສີມ
                ແລະ ຝຶກປະຕິບັດໃນຫ້ອງຄອມພິວເຕີ ຕັ້ງແຕ່ວັນຈັນຫາວັນສຸກ ຕາມການກຳນົດຂອງພາກວິຊາ.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
