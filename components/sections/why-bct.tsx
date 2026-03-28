"use client"

import { BookOpen, FlaskConical, Users, Compass, Briefcase, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { SITE_NAME_SHORT } from "@/config/site"

const reasons = [
  {
    icon: TrendingUp,
    title: "ຫຼັກສູດສອດຄ່ອງກັບອຸດສາຫະກຳ",
    description:
      "ປັບປຸງເນື້ອຫາຢ່າງຕໍ່ເນື່ອງໃຫ້ສອດຄ່ອງກັບແນວໂນ້ມ, ເຄື່ອງມື ແລະ ເທັກໂນໂລຊີທີ່ຕະຫຼາດແຮງງານໃນ ສປປ ລາວ ແລະ ອາຊີຕາເວັນອອກສຽງໃຕ້ຕ້ອງການ.",
  },
  {
    icon: Users,
    title: "ຄະນະອາຈານມີປະສົບການ",
    description:
      "ຮຽນຮູ້ຈາກອາຈານທີ່ມີພື້ນຖານວິຊາການແໜ້ນໜາ ພ້ອມປະສົບການໃນອຸດສາຫະກຳຈິງ ນຳສະເໜີບົດຮຽນທີ່ນຳໄປໃຊ້ໄດ້ໃນຫ້ອງຮຽນ.",
  },
  {
    icon: FlaskConical,
    title: "ຝຶກປະຕິບັດໃນຫ້ອງຄອມພິວເຕີ",
    description:
      "ສ້າງທັກສະຜ່ານຫ້ອງປະຕິບັດທີ່ທັນສະໄໝ ແລະ ການຮຽນຮູ້ແບບໂຄງການ — ຜູ້ສຳເລັດການສຶກສາມີຄວາມພ້ອມເລີ່ມວຽກໄດ້ຢ່າງໝັ້ນໃຈ.",
  },
  {
    icon: BookOpen,
    title: "ຫ້ອງຮຽນຂະໜາດພໍດີ",
    description:
      "ຈຳນວນນັກສຶກສາຕໍ່ຫ້ອງບໍ່ຫຼາຍເກີນໄປ ເພື່ອໃຫ້ອາຈານດູແລເປັນສ່ວນຕົວ ແລະ ກະຕຸ້ນການຮຽນຮູ້ແບບໂຕ້ຕອບໄດ້ດີກວ່າ.",
  },
  {
    icon: Compass,
    title: "ແນະນຳອາຊີບ ແລະ ການວາງແຜນ",
    description:
      "ຫ້ອງການວາງແຜນອາຊີບຊ່ວຍປະສານງານຝຶກງານ, ສະໜັບສະໜູນການຫາວຽກ, ຈັດອົບຮົມປະກອບປະຫວັດຄວາມສາມາດ ແລະ ກິດຈະກຳພົບປະນັດກັບຜູ້ວ່າຈ້າງ.",
  },
  {
    icon: Briefcase,
    title: "ປະລິນຍາຕີ້ຊັ້ນສູງທີ່ໄດ້ຮັບການຍອມຮັນ",
    description:
      "ຮັບປະລິນຍາຕີ້ຊັ້ນສູງ (Higher Diploma, ຊັ້ນສູງ) ທີ່ເປີດຊ່ອງທາງທັງການຈ້າງງານ ແລະ ການສຶກສາຕໍ່ທັງໃນ ສປປ ລາວ ແລະ ຕ່າງປະເທດ.",
  },
]

const viewport = { once: true, margin: "-80px" }

export default function WhyBCT() {
  return (
    <section id="why-bct" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(242,13,73,1) 0, rgba(242,13,73,1) 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-brand font-semibold text-sm">
              ເປັນຫຍັງຄວນເລືອກພວກເຮົາ
            </span>
            <h2 className="font-black text-4xl md:text-5xl text-navy mt-3 text-balance max-w-lg">
              ຈຸດເດັ່ນຂອງ {SITE_NAME_SHORT}
            </h2>
          </div>
          <p className="text-slate max-w-md leading-relaxed lg:text-right text-balance">
            ພວກເຮົາມີຄວາມມຸ່ງໝັ້ນທີ່ຈະກຽມຄວາມພ້ອມໃຫ້ທ່ານສຳລັບອາຊີບດ້ານເທັກໂນໂລຊີໃນຊີວິດຈິງ — ນີ້ແມ່ນສິ່ງທີ່ແຕກຕ່າງຂອງສະຖາບັນເຮົາ.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative p-8 rounded-2xl border border-[#E2E8F0] bg-surface hover:border-brand transition-all duration-300 hover:-translate-y-1 group overflow-hidden hover:shadow-md"
              >
                <span className="absolute top-4 right-6 font-black text-5xl text-[rgba(242,13,74,0.13)] select-none">
                  0{index + 1}
                </span>

                <div className="w-12 h-12 rounded-xl bg-[rgba(242,13,73,0.06)] flex items-center justify-center mb-5 group-hover:bg-[rgba(242,13,73,0.12)] transition-colors">
                  <Icon className="text-brand" size={22} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-3 text-balance">
                  {reason.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-8 md:p-12 rounded-3xl border border-[rgba(217,119,6,0.2)] bg-surface text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(217,119,6,0.04) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <div className="text-gold text-4xl mb-4" aria-hidden="true">&ldquo;</div>
            <blockquote className="font-bold text-xl md:text-2xl text-navy max-w-3xl mx-auto leading-snug text-balance mb-6">
              ການຮຽນທີ່ {SITE_NAME_SHORT} ຊ່ວຍໃຫ້ຂ້າພະເຈົ້າມີທັກສະປະຕິບັດ ແລະ ຄວາມໝັ້ນໃຈໃນການເຂົ້າວຽກດ້ານພັດທະນາຊອບແວເປັນຄັ້ງທຳອິດກ່ອນສຳເລັດການສຶກສາ —
              ການຝຶກໃນຫ້ອງປະຕິບັດມີຄວາມໝາຍຄວາມເປັນຕົວຈິງຫຼາຍ.
            </blockquote>
            <div className="text-slate text-sm">
              — ຜູ້ສຳເລັດການສຶກສາ, ຮຸ່ນ 2023 · ນັກພັດທະນາຊອບແວ
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
