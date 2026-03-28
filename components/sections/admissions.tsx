"use client"

import { useState } from "react"
import { CheckCircle, FileText, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { SITE_NAME_SHORT } from "@/config/site"

const requirements = [
  "ມີໃບຢັ້ງຢືນການສຳເລັດມັດທະຍົມປາຍ (ມ.7) ຫຼື ທຽບເທົ່າ",
  "ສຳເນົາບັດປະຈຳຕົວ ຫຼື ຫນັງສືຜ່ານແດນ",
  "ຮູບຖ່າຍຂະໜາດຫນັງສືຜ່ານແດນ ຈຳນວນ 2 ຮູບ (ຖ່າຍບໍ່ເກີນ 6 ເດືອນ)",
  "ແບບຟອມສະໝັກທີ່ກົງກັບຂໍ້ມູນຈິງ",
  "ຄ່າທຳນຽມສະໝັກ (ກະລຸນາສອບຖາມຈຳນວນທີ່ຫ້ອງການຮັບສະໝັກ)",
]

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "ຍື່ນເອກະສານສະໝັກ",
    description: `ກອກແບບຟອມອອນໄລນ໌ຂ້າງລຸ່ມນີ້ ຫຼື ເດີນທາງມາຍື່ນທີ່ຫ້ອງການຮັບສະໝັກຂອງ ${SITE_NAME_SHORT} ໂດຍກົງ.`,
  },
  {
    icon: Phone,
    step: "02",
    title: "ສຳພາດ ຫຼື ປະເມີນຜົນ",
    description: "ມີການສຳພາດ ຫຼື ກິດຈະກຳປະເມີນສັ້ນໆ ເພື່ອທຳຄວາມເຂົ້າໃຈເຖິງເປົ້າໝາຍ ແລະ ຄວາມເໝາະສົມກັບຫຼັກສູດ.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "ແຈ້ງຜົນການຄັດເລືອກ",
    description: "ຜູ້ທີ່ຜ່ານການຄັດເລືອກຈະໄດ້ຮັບແຈ້ງການທາງໂທລະສັບ ແລະ ອີເມວ ພາຍໃນ 5–7 ວັນເຮັດການ.",
  },
  {
    icon: Send,
    step: "04",
    title: "ລົງທະບຽນ ແລະ ເລີ່ມຮຽນ",
    description: "ດຳເນີນການລົງທະບຽນ, ຊຳລະຄ່າຮຽນ ຕາມກຳນົດ ແລະ ເຂົ້າຮ່ວມສັບປະດາປະຖົມນຳເຂົ້າເພື່ອເລີ່ມການຮຽນ.",
  },
]

const programs = [
  "ວິທະຍາສາດ ຄອມພິວເຕີ ແລະ ວິສະວະກຳຊອບແວ",
  "ພາສາອັງກິດ",
  "ການເມືອງ ແລະ ສັງຄົມວິທະຍາ",
]

const viewport = { once: true, margin: "-80px" }

export default function Admissions() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="admissions" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-150 h-150 rounded-full pointer-events-none"
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
          <span className="text-brand font-semibold text-sm tracking-widest">
            ຮັບສະໝັກຮຽນ
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-navy mt-3 text-balance">
            ເລີ່ມຕົ້ນເສັ້ນທາງການສຶກສາ
          </h2>
          <p className="text-slate mt-4 max-w-xl mx-auto text-balance leading-relaxed">
            ຮັບສະໝັກຕະຫຼອດປີ ຕາມກຳນົດຂອງສະຖາບັນ. ກະລຸນາເລີ່ມຕົ້ນຂັ້ນຕອນທຳອິດເພື່ອສືບຕໍ່ຄວາມຝັນດ້ານເທັກໂນໂລຊີຂອງທ່ານ.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="p-8 rounded-2xl border border-[#E2E8F0] bg-white">
              <h3 className="font-bold text-navy text-xl mb-6">
                ເງື່ອນໄຂການຮັບສະໝັກ
              </h3>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand shrink-0 mt-0.5" />
                    <span className="text-slate text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-navy text-xl mb-6">ຂັ້ນຕອນການສະໝັກ</h3>
              <div className="space-y-4">
                {steps.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[rgba(242,13,73,0.06)] border border-[rgba(242,13,73,0.15)] flex items-center justify-center">
                          <Icon className="text-brand" size={20} />
                        </div>
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand text-white text-[10px] font-black flex items-center justify-center">
                          {step.step.replace("0", "")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-base">{step.title}</h4>
                        <p className="text-slate text-sm leading-relaxed mt-1">{step.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden"
          >
            <div className="px-8 py-6 border-b border-[#E2E8F0] bg-[rgba(242,13,73,0.03)]">
              <h3 className="font-bold text-navy text-xl">ແບບຟອມສະໝັກຮຽນ</h3>
              <p className="text-slate text-sm mt-1">ພວກເຮົາຈະຕິດຕໍ່ກັບທ່ານພາຍໃນ 2 ວັນເຮັດການ.</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-12 text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center">
                  <CheckCircle className="text-brand" size={32} />
                </div>
                <h4 className="font-bold text-navy text-2xl">ໄດ້ຮັບແບບຟອມຂອງທ່ານແລ້ວ</h4>
                <p className="text-slate max-w-xs leading-relaxed">
                  ຂອບໃຈທີ່ສົນໃຈສຶກສາກັບ {SITE_NAME_SHORT}. ພະນັກງານຮັບສະໝັກຈະຕິດຕໍ່ກັບທ່ານໃນໄວໆນີ້.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div>
                  <label className="block text-slate text-sm font-medium mb-2" htmlFor="name">
                    ຊື່-ນາມສະກຸນ *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="ກະລຸນາລະບຸຊື່ເຕັມຕາມເອກະສານ"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#E2E8F0] text-navy placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate text-sm font-medium mb-2" htmlFor="phone">
                      ເບີໂທລະສັບ *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+856 …"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-[#E2E8F0] text-navy placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate text-sm font-medium mb-2" htmlFor="email">
                      ທີ່ຢູ່ອີເມວ
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-[#E2E8F0] text-navy placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate text-sm font-medium mb-2" htmlFor="program">
                    ສາຂາທີ່ສົນໃຈ *
                  </label>
                  <select
                    id="program"
                    required
                    value={formState.program}
                    onChange={(e) => setFormState({ ...formState, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#E2E8F0] text-navy focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-white">
                    --ເລືອກ--
                    </option>
                    {programs.map((p) => (
                      <option key={p} value={p} className="bg-white">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate text-sm font-medium mb-2" htmlFor="message">
                    ຂໍ້ຄວາມເພີ່ມເຕີມ (ຖ້າມີ)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="ຫາກມີຄຳຖາມ ຫຼື ຂໍ້ມູນເພີ່ມເຕີມ ກະລຸນາລະບຸໃຫ້ຊາບ"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-[#E2E8F0] text-navy placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer py-4 bg-brand text-white font-bold text-base rounded-xl hover:bg-brand-hover transition-all duration-200  shadow-[rgba(242,13,73,0.2)] hover:shadow-[rgba(242,13,73,0.35)] flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  ສົ່ງແບບຟອມສະໝັກ
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
