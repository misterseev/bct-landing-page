"use client"

import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { HOME } from "@/config/site"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const, delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 70%, #fff 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 flex justify-start items-end">
        <div className="max-w-4xl space-y-5 sm:space-y-6">

          {/* Badge */}
          <motion.div
            {...fadeUp(0.2)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0" />
            ຍຶດໝັ້ນຄຸນນະພາບການສຶກສາອັນດັບໜຶ່ງ
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.35)}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-lg"
          >
            BCT College
            <br className="hidden xs:block" />
            {" "}for IT Education
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            {...fadeUp(0.5)}
            className="font-black text-base sm:text-xl md:text-3xl lg:text-4xl text-white/90 uppercase drop-shadow-md"
          >
            ວິທະຍາສາດຄອມພິວເຕີ
            <br className="sm:hidden" />
            {" "}ແລະ ວິສະວະກຳຊອບແວ
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.65)}
            className="flex flex-col sm:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-2"
          >
            <a
              href="/admissions"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-brand text-white font-bold text-sm sm:text-base rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-lg shadow-[rgba(242,13,73,0.4)] hover:shadow-[rgba(242,13,73,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              ສະໝັກຮຽນ
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={HOME.classrooms}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 border border-white/50 text-white font-bold text-sm sm:text-base rounded-xl hover:bg-white/15 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              ສຳຫຼວດຫ້ອງຮຽນ
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        href={HOME.about}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-slate hover:text-brand transition-colors flex flex-col items-center gap-1 z-10"
        aria-label="ເລື່ອນລົງສູ່ພາກກ່ຽວກັບພວກເຮົາ"
      >
        <span className="text-[10px] sm:text-xs font-medium tracking-widest opacity-60">ເລື່ອນລົງ</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
