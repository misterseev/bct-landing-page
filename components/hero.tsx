"use client"

import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { HOME } from "@/lib/routes"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const, delay },
})

export default function Hero() {
  return (
    <section className=" relative min-h-screen border flex flex-col items-left justify-center pl-26 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bct-main-bg.png"
          alt="ຮູບພາບວິທະຍາໄລ ບີຊີທີ"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Bottom white fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-68 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.9) 60%, #dddddd 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">

        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center gap-2 px-4 py-2 max-w-sm rounded-full border border-white/40 bg-white/15 backdrop-blur-sm text-white text-xs font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-[#e61435] animate-pulse" />
          ຍຶດໝັ້ນຄຸນນະພາບການສຶກສາອັນດັບໜຶ່ງ
        </motion.div>

        <motion.h1
          {...fadeUp(0.35)}
          className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight text-balance drop-shadow-lg"
        >
          BCT College for IT Education
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="font-black text-xl md:text-4xl text-white/90 uppercase text-balance drop-shadow-md"
        >
          ວິທະຍາສາດຄອມພິວເຕີ ແລະ ວິສະວະກຳຊອບແວ
        </motion.p>


        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <a
            href={HOME.admissions}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e61435] text-white font-bold text-base rounded-xl hover:bg-[#c40038] transition-all duration-200 shadow-lg shadow-[rgba(242,13,73,0.4)] hover:shadow-[rgba(242,13,73,0.6)] hover:-translate-y-0.5"
          >
            ສະໝັກຮຽນ
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={HOME.classrooms}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/50 text-white font-bold text-base rounded-xl hover:bg-white/15 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            ສຳຫຼວດຫ້ອງຮຽນ
          </a>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        href={HOME.about}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#64748B] hover:text-[#e61435] transition-colors flex flex-col items-center gap-1 group z-10"
        aria-label="ເລື່ອນລົງສູ່ພາກກ່ຽວກັບພວກເຮົາ"
      >
        <span className="text-xs font-medium tracking-widest opacity-60">ເລື່ອນລົງ</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
