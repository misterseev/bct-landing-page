"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const classrooms = [
  {
    src: "/images/classrooms/class-room-01.jpg",
    alt: "ຫ້ອງຮຽນຄອມພິວເຕີ — ນັກສຶກສາຝຶກຂຽນໂປຣແກຣມ",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/classrooms/class-room-02.jpg",
    alt: "ຫ້ອງປະຕິບັດຄອມພິວເຕີ",
    width: 800,
    height: 1100,
  },
  {
    src: "/images/classrooms/class-room-03.jpg",
    alt: "ຫ້ອງຮຽນທົ່ວໄປ — ຄາບສອນ",
    width: 1000,
    height: 700,
  },
  {
    src: "/images/classrooms/class-room-04.jpg",
    alt: "ຫ້ອງທົດລອງວິຊາການ",
    width: 800,
    height: 1000,
  },
  {
    src: "/images/classrooms/class-room-05.jpg",
    alt: "ຫ້ອງຮຽນພາສາອັງກິດ",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/classrooms/class-room-06.jpg",
    alt: "ກິດຈະກຳກຸ່ມ — ນັກຮຽນປຶກສາກັນ",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/classrooms/class-room-12.jpg",
    alt: "ຫ້ອງສະໝຸດ ແລະ ພື້ນທີ່ຮຽນ",
    width: 1100,
    height: 750,
  },
  {
    src: "/images/classrooms/class-room-08.jpg",
    alt: "ມອມໃບສະນີຍະບັດແກ່ນັກສຶກສາ",
    width: 800,
    height: 950,
  },
  {
    src: "/images/classrooms/class-room-09.jpg",
    alt: "ມອມໃບສະນີຍະບັດແກ່ນັກສຶກສາ",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/classrooms/class-room-10.jpg",
    alt: "ນັກຮຽນນຳສະເໜີໂປຣເຈັກ",
    width: 950,
    height: 1100,
  },
  {
    src: "/images/communitys/mistersee-popular.jpg",
    alt: "ມອບໃບສະນີຍະບັດແກ່ ທ່ານ ຊີ ວ່າງ",
    width: 950,
    height: 1100,
  },
]

const viewport = { once: true, margin: "-80px" }

export default function Classrooms() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
    }
    document.addEventListener("keydown", onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex, closeLightbox])

  const lightboxRoom = lightboxIndex !== null ? classrooms[lightboxIndex] : null

  return (
    <section id="classrooms" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,13,73,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,13,73,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-brand font-semibold text-sm tracking-widest">
            ສິ່ງອຳນວຍຄວາມສະດວກ
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-navy mt-3 text-balance">
            ຫ້ອງຮຽນຂອງພວກເຮົາ
          </h2>
          <p className="mt-4 text-slate text-base max-w-xl mx-auto leading-relaxed">
            ສຳຫຼວດສະພາບແວດລ້ອມການຮຽນຮູ້ທີ່ທັນສະໄໝ ພ້ອມອຸປະກອນ ແລະ ເຕັກໂນໂລຊີ ທີ່ຄົບຖ້ວນ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="columns-1 sm:columns-2 md:columns-3 gap-4"
        >
          {classrooms.map((room, i) => (
            <motion.div
              key={room.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid mb-4 rounded-xs group overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative block w-full cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label={`ເບິ່ງຮູບໃຫຍ່: ${room.alt}`}
              >
                <Image
                  src={room.src}
                  alt={room.alt}
                  width={room.width}
                  height={room.height}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="pointer-events-none absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {room.alt}
                </p>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxRoom && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="ເບິ່ງຮູບພາບ"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-110 cursor-pointer rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="ປິດ"
            >
              <X size={22} strokeWidth={2} />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative mx-auto flex max-h-[min(90vh,900px)] w-full max-w-[min(95vw,1200px)] flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[min(85vh,820px)] w-full">
                <Image
                  src={lightboxRoom.src}
                  alt={lightboxRoom.alt}
                  width={lightboxRoom.width}
                  height={lightboxRoom.height}
                  className="mx-auto max-h-[min(85vh,820px)] w-auto max-w-full object-contain"
                  sizes="95vw"
                  priority
                />
              </div>
              <p className="mt-4 max-w-2xl text-center text-sm text-white/90 md:text-base">
                {lightboxRoom.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
