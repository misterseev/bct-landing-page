"use client"

import { Target, Eye, Lightbulb, Users, Award, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { SITE_NAME_SHORT } from "@/config/site"

const values = [
  {
    icon: Award,
    title: "ຄຸນນະພາບສູງ",
    description:
      "ພວກເຮົາຍຶດໝັ້ນມາດຕະຖານການສຶກສາ ແລະ ວິຊາຊີບອັນສູງສຸດໃນທຸກຂົງເຂດວຽກງານ.",
  },
  {
    icon: Lightbulb,
    title: "ນະວັດຕະກຳ",
    description:
      "ສົ່ງເສີມການນຳໃຊ້ເທັກໂນໂລຊີໃໝ່ ແລະ ແວທີ່ສ້າງສັນໃນການສອນ ແລະ ການແກ້ບັນຫາ.",
  },
  {
    icon: ShieldCheck,
    title: "ຄວາມໂປ່ງໃສ ແລະ ຈະລິຍະທຳ",
    description:
      "ດຳເນີນງານດ້ວຍຄວາມສັດຊື່, ຄວາມໂປ່ງໃສ ແລະ ຮັບຜິດຊອບຕໍ່ສັງຄົມອຍ່າງສຸພາບ.",
  },
  {
    icon: Users,
    title: "ຮ່ວມມື ແລະ ສາຍພົວພັນ",
    description:
      "ເຊື່ອວ່າການຮຽນຮູ້ ແລະ ການເຕີບໂຕຈະເກີດຂຶ້ນໄດ້ດີເມື່ອມີການຮ່ວມມື ແລະ ຊຸມຊົນທີ່ອົບອຸ່ນ.",
  },
]

const viewport = { once: true, margin: "-80px" }

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,13,73,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,13,73,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
          <span className="text-brand font-semibold text-sm tracking-widest">
            ປະຫວັດຄວາມເປັນມາ
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-navy mt-3 text-balance">
            ກ່ຽວກັບ {SITE_NAME_SHORT}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[rgba(217,119,6,0.06)] border border-[rgba(217,119,6,0.2)]">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-gold  font-semibold text-sm">ຈຸດເລີ່ມຕົ້ນຂອງສະຖາບັນ</span>
            </div>
            <p className="text-slate leading-relaxed text-base">
              {SITE_NAME_SHORT} ຖືກສ້າງຕັ້ງດ້ວຍວິໄສທັດອັນຊັດເຈນ ເພື່ອໃຫ້ການສຶກສາດ້ານເທັກໂນໂລຊີທີ່ມີຄຸນນະພາບເຂົ້າເຖິງນັກສຶກສາໃນທົ່ວ ສປປ ລາວ.
              ຮັບຮູ້ວ່າຕະຫຼາດແຮງງານດ້ານໄອທີໃນອາຊີຕາເວັນອອກສຽງໃຕ້ມີຄວາມຕ້ອງການສູງ, ຜູ້ຮ່ວມກຳເນີດໄດ້ຈັດຕັ້ງສະຖາບັນໃຫ້ເປັນສະພານກາງລະຫວ່າງການຮຽນໃນຫ້ອງຮຽນ
              ແລະ ການປະຕິບັດຕົວຈິງໃນອຸດສາຫະກຳ.
            </p>
            <p className="text-slate leading-relaxed text-base">
              ຈາກຈຸດເລີ່ມຕົ້ນອັນອ່ອນໂຍນ, ສະຖາບັນໄດ້ເຕີບໃຫຍ່ເປັນສະຖາບັນອາຊີວະສຶກສາທີ່ໄດ້ຮັບຄວາມເຄົາລົບ,
              ໂດຍສອນຫຼັກສູດປະລິນຍາຕີ້ຊັ້ນສູງ (Higher Diploma) ລະຍະເວລາ 3 ປີ — ສ້າງທັກສະດ້ານເທັກນິກ, ຄວາມສາມາດດ້ານພາສາ
              ແລະ ສະຕິພົນທາງສັງຄົມໃຫ້ແກ່ຜູ້ສຳເລັດການສຶກສາ ເພື່ອໃຫ້ສາມາດເຕີບໂຕໃນຕະຫຼາດແຮງງານສະໄໝໃໝ່ໄດ້ຢ່າງໝັ້ນຄົງ.
            </p>
            {/* <a href="/profile" className="underline hover:text-brand">ໂປຣຟາຍ ບີຊີທີ</a> */}
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 border border-[#E2E8F0] bg-surface hover:border-brand transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                  <Target className="text-brand" size={22} />
                </div>
                <div>
                  <h3 className=" font-bold text-navy text-lg mb-2">ພາລະກິດ</h3>
                  <p className="text-slate leading-relaxed text-sm">
                    ຈັດຫາການສຶກສາດ້ານໄອທີທີ່ມີຄຸນນະພາບ ແລະ ເຂົ້າເຖິງໄດ້ງ່າຍ ເພື່ອເສີມສ້າງນັກສຶກສາໃນ ສປປ ລາວ
                    ໃຫ້ມີອາຊີບທີ່ໝັ້ນຄົງ ແລະ ມີສ່ວນຮ່ວມພັດທະນາປະເທດຊາດອຍ່າງມີປະໂຫຍດ.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-6 border border-[rgba(217,119,6,0.2)] bg-surface hover:border-gold transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(217,119,6,0.08)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(217,119,6,0.15)] transition-colors">
                  <Eye className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className=" font-bold text-navy text-lg mb-2">ວິໄສທັດ</h3>
                  <p className="text-slate leading-relaxed text-sm">
                    ກາຍເປັນວິທະຍາໄລອາຊີວະສຶກສາດ້ານໄອທີຊັ້ນນໍາໃນພາກພື້ນ — ໄດ້ຮັບການຍອມຮັນໃນດ້ານຄຸນນະພາບການສອນ,
                    ນະວັດຕະກຳທາງວິຊາການ ແລະ ການຜະລິດບຸກຄະລາກອນທີ່ພ້ອມຮັບໃຊ້ໃນເສດຖະກິດດິຈິຕອລ.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl text-center text-navy mb-10"
          >
            ຄ່ານຳໃຊ້ຫຼັກຂອງພວກເຮົາ
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-surface border border-[#E2E8F0] hover:border-brand transition-all duration-300 hover:-translate-y-1 group text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(242,13,73,0.06)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgba(242,13,73,0.12)] transition-colors">
                    <Icon className="text-brand" size={26} />
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-2">{value.title}</h4>
                  <p className="text-slate text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
