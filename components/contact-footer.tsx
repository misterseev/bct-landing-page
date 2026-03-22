"use client"

import { MapPin, Phone, Mail, Facebook, Youtube, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedDotPattern } from "./animated-dot-pattern"
import { HOME, ROUTES, SITE_NAME_SHORT } from "@/lib/routes"

const quickLinks = [
  { label: "ກ່ຽວກັບພວກເຮົາ", href: HOME.about },
  { label: "ຫ້ອງຮຽນ", href: HOME.classrooms },
  { label: "ຕາຕະລາງຮຽນ", href: HOME.schedule },
  { label: "ເປັນຫຍັງຕ້ອງເລືອກບີຊີທີ", href: HOME.whyBct },
  { label: "ຮັບສະໝັກຮຽນ", href: HOME.admissions },
  { label: "ຂ່າວສານ", href: ROUTES.notifications },
  { label: "ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ", href: ROUTES.activitiesTravel },
  { label: "ຕິດຕໍ່", href: HOME.contact },
]

const contactItems = [
  {
    icon: MapPin,
    label: "ທີ່ຢູ່",
    value: "ວິທະຍາໄລ ບີຊີທີ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ",
  },
  {
    icon: Phone,
    label: "ໂທລະສັບ",
    value: "+856 20 XXX XXX XX",
    href: "tel:+85620XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "ອີເມວ",
    value: "info@bctcollege.edu.la",
    href: "mailto:info@bctcollege.edu.la",
  },
]

const socials = [
  { icon: Facebook, label: "ເຟສບຸກ", href: "#" },
  { icon: Youtube, label: "ຢູທູບ", href: "#" },
  { icon: Globe, label: "ເວັບໄຊທ໌", href: "#" },
]

const viewport = { once: true, margin: "-80px" }

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <AnimatedDotPattern gap={20} dotOpacity={0.18} durationSec={12} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#e61435] font-semibold text-sm tracking-widest">
              ຕິດຕໍ່ສອບຖາມ
            </span>
            <h2 className="font-black text-4xl md:text-5xl text-[#0F172A] mt-3 text-balance">
              ຂໍ້ມູນຕິດຕໍ່ພວກເຮົາ
            </h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto text-balance leading-relaxed">
              ຫາກມີຂໍ້ສົງໄສ ຫຼື ຕ້ອງການຂໍ້ມູນເພີ່ມເຕີມກ່ຽວກັບຫຼັກສູດ, ກະລຸນາຕິດຕໍ່ພວກເຮົາ — ພະນັກງານຮັບສະໝັກຍິນດີໃຫ້ຄຳແນະນຳອັນສຸພາບ
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                {contactItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#e61435] transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[rgba(242,13,73,0.06)] flex items-center justify-center shrink-0">
                        <Icon className="text-[#e61435]" size={20} />
                      </div>
                      <div>
                        <div className="text-[#64748B] text-xs font-semibold tracking-wide mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#0F172A] font-semibold hover:text-[#e61435] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-[#0F172A] font-semibold">{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-[#64748B] text-xs font-semibold tracking-widest mb-4">
                  ຕິດຕາມພວກເຮົາ
                </div>
                <div className="flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#e61435] hover:border-[#e61435] transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden aspect-4/3 flex flex-col items-center justify-center gap-4 relative"
            >
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(242,13,73,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,13,73,1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 text-center px-8">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(242,13,73,0.07)] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#e61435]" size={28} />
                </div>
                <div className="font-bold text-[#0F172A] text-lg mb-2">
                  {SITE_NAME_SHORT}, ນະຄອນຫຼວງວຽງຈັນ
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                  ຍິນດີຕ້ອນຮັບທ່ານເຂົ້າເຢີມຊົມສະຖານທີ່ຕາມການນັດໝາຍ; ລາຍລະອຽດທີ່ຕັ້ງຈະແຈ້ງໃຫ້ຊາບເມື່ອສອບຖາມການຮັບສະໝັກ
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[rgba(242,13,73,0.07)] border border-[rgba(242,13,73,0.2)] text-[#e61435] text-sm font-semibold rounded-lg hover:bg-[rgba(242,13,73,0.12)] transition-colors"
                >
                  <MapPin size={14} />
                  ເປີດແຜນທີ່ອອນໄລນ໌
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e61435] flex items-center justify-center">
                  <span className="font-black text-white text-sm">BCT</span>
                </div>
                <div>
                  <div className="font-bold text-white text-sm leading-tight">
                    {SITE_NAME_SHORT}
                  </div>
                  <div className="text-[#94A3B8] text-xs">ເພື່ອການສຶກສາດ້ານໄອທີ</div>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                ພັດທະນາບຸກຄະລາກອນດ້ານເທັກໂນໂລຊີໃຫ້ສປປ ລາວ ຜ່ານການສຶກສາທີ່ມີຄຸນນະພາບ ການຝຶກປະຕິບັດຈິງ ແລະ ຫຼັກສູດທີ່ສອດຄ່ອງກັບອຸດສາຫະກຳ
              </p>
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-[#e61435] transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm tracking-widest mb-5">
                ລິ້ງດ່ວນ
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#94A3B8] text-sm hover:text-[#e61435] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm tracking-widest mb-5">
                ສາຂາວິຊາ
              </h4>
              <ul className="space-y-2">
                {[
                  "ວິສາວະວິທາຄອມພິວເຕີ ແລະ ວິທະຍາການ",
                  "ພາສາອັງກິດ",
                  "ການເມືອງ ແລະ ສັງຄົມວິທະຍາ",
                ].map((p) => (
                  <li key={p}>
                    <a
                      href={HOME.classrooms}
                      className="text-[#94A3B8] text-sm hover:text-[#e61435] transition-colors"
                    >
                      {p}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <div className="text-[#94A3B8] text-xs">ລະດັບທີ່ສອນ</div>
                  <div className="text-[#D97706] font-semibold text-sm mt-1">
                    ປະລິນຍາຕີ້ຊັ້ນສູງ · ຊັ້ນສູງ
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#94A3B8] text-sm">
              &copy; {new Date().getFullYear()} ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ — ສະຫງວນລິຂະສິດ
            </p>
            <p className="text-[#475569] text-xs">
              ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານເທັກໂນໂລຊີ · ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
