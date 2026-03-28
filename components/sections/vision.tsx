"use client"

import { GraduationCap, Users, Calendar, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { SITE_NAME_SHORT } from "@/config/site"

const stats = [
  { icon: GraduationCap, value: "500+", label: "ຜູ້ສຳເລັດການສຶກສາ / ວາງແຜນອາຊີບ" },
  { icon: Calendar, value: "10+", label: "ປີດຳເນີນງານຢ່າງຕໍ່ເນື່ອງ" },
  { icon: Users, value: "3", label: "ພາກວິຊາຫຼັກ" },
  { icon: Trophy, value: "95%", label: "ອັດຕາການມີວຽກເຮັດຫຼັງສຳເລັດການສຶກສາ" },
]

const viewport = { once: true, margin: "-80px" }

export default function Vision() {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)",
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
          <span className="text-gold font-semibold text-sm tracking-widest">
            ວິໄສທັດ ແລະ ທິດທາງ
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-navy mt-3 text-balance">
            ເປົ້າໝາຍ ແລະ ຜົນສຳເລັດ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 border border-[#E2E8F0] bg-white overflow-hidden group hover:border-brand transition-all duration-300 "
          >
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: "linear-gradient(90deg, #e61435, transparent)" }}
            />
            <span className="text-brand font-semibold text-xs tracking-widest mb-4 block">
              ຄຳປະກາດດ້ານວິໄສທັດ
            </span>
            <blockquote className="font-bold text-2xl text-navy leading-snug mb-4 text-balance">
              &ldquo;ເພື່ອກາຍເປັນວິທະຍາໄລອາຊີວະສຶກສາດ້ານເທັກໂນໂລຊີຊັ້ນນໍາໃນພາກພື້ນ ພ້ອມທັງສົ່ງເສີມນະວັດຕະກຳ
              ແລະ ຄຸນນະພາບສູງໃນການສຶກສາ.&rdquo;
            </blockquote>
            <p className="text-slate text-sm leading-relaxed">
              {SITE_NAME_SHORT} ມຸ່ງມາດສ້າງອະນາຄົດທີ່ນັກສຶກສາລາວທຸກຄົນສາມາດເຂົ້າເຖິງການສຶກສາດ້ານໄອທີທີ່ມີຄຸນນະພາບ
              ແລະ ມີໂອກາດມີສ່ວນຮ່ວມໃນເສດຖະກິດດິຈິຕອລໃນລະດັບສາກົນຢ່າງສະເໝີພາບ.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative p-8 border border-[rgba(217,119,6,0.2)] bg-white overflow-hidden group hover:border-gold transition-all duration-300 "
          >
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: "linear-gradient(90deg, #D97706, transparent)" }}
            />
            <span className="text-gold font-semibold text-xs tracking-widest mb-4 block">
              ຄວາມໝາຍຄວາມເປັນຕົວຈິງ
            </span>
            <blockquote className="font-bold text-2xl text-navy leading-snug mb-4 text-balance">
              &ldquo;ສ້າງໂອກາດການສຶກສາດ້ານເທັກໂນໂລຊີທີ່ມີຄຸນນະພາບສູງ ແລະ ຜະລິດບຸກຄະລາກອນທີ່ມີຄວາມສາມາດ
              ເພື່ອພັດທະນາເສດຖະກິດດິຈິຕອລຂອງ ສປປ ລາວໃຫ້ເຂັ້ມແຂງ.&rdquo;
            </blockquote>
            <p className="text-slate text-sm leading-relaxed">
              ພວກເຮົາຍຶດໝັ້ນການສອນທີ່ສອດຄ່ອງກັບຄວາມຕ້ອງການຂອງອຸດສາຫະກຳ, ສົ່ງເສີມການຮຽນຮູ້ຕະຫຼອດຊີວິດ
              ແລະ ຮັກສາມາດຕະຖານວິຊາການອັນສຸພາບ.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 bg-white border border-[#E2E8F0] hover:border-brand transition-all duration-300 hover:-translate-y-1 "
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(242,13,73,0.07)] flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-brand" size={22} />
                </div>
                <div className="font-black text-4xl text-gold mb-1">{stat.value}</div>
                <div className="text-navy font-semibold text-sm leading-snug">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
