"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedDotPattern } from "@/components/animated-dot-pattern"
import { featuredActivityCards, type ActivityFeatureCard } from "@/data/activities"
import { ArrowLeft, CalendarDays } from "lucide-react"

const DISPLAY_LIMIT = 5

const ACTIVITY_IMAGE_WIDTH = 560
const ACTIVITY_IMAGE_HEIGHT = 320

const viewportCard = { once: true, margin: "-40px" as const }

const easeOut = [0.25, 0.4, 0.25, 1] as const

function ActivityAlternatingCard({
  item,
  index,
}: {
  item: ActivityFeatureCard
  index: number
}) {
  const imageOnRight = index % 2 === 1
  const imageFloatClass = imageOnRight
    ? "max-md:float-none md:float-right md:ml-6 md:mb-3"
    : "max-md:float-none md:float-left md:mr-6 md:mb-3"

  const baseDelay = index * 0.08

  return (
    <motion.article
      className="flow-root py-6 md:py-8 lg:py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportCard}
      transition={{
        duration: 0.6,
        ease: easeOut,
        delay: baseDelay,
      }}
    >
      <div
        className={`relative mb-4 h-55 w-full shrink-0 overflow-hidden bg-[#EEF2F6] md:h-80 md:w-[min(560px,48%)] ${imageFloatClass}`}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={ACTIVITY_IMAGE_WIDTH}
          height={ACTIVITY_IMAGE_HEIGHT}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 768px) 100vw, 560px"
          priority={index < 2}
        />
      </div>

      <span
        className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
          item.kind === "ທ່ອງທ່ຽວ"
            ? "bg-[rgba(217,119,6,0.12)] text-[#B45309] border border-[rgba(217,119,6,0.25)]"
            : "bg-brand-dim text-brand border border-[rgba(242,13,73,0.2)]"
        }`}
      >
        {item.kind}
      </span>

      <h3 className="mt-3 text-xl font-bold text-navy md:text-2xl text-balance">{item.title}</h3>

      <div className="mt-3 space-y-3 text-slate leading-relaxed text-base md:text-[17px]">
        {item.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </motion.article>
  )
}

export function ActivitiesTravelView() {
  const items = featuredActivityCards.slice(0, DISPLAY_LIMIT)

  return (
    <div className="pt-16 md:pt-20">
      <motion.header
        className="relative overflow-hidden border-b border-[#E2E8F0] bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <AnimatedDotPattern gap={20} dotOpacity={0.18} durationSec={12} />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.08 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-brand transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              ກັບໜ້າຫຼັກ
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <motion.div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(242,13,73,0.1)] text-brand"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.12 }}
            >
              <CalendarDays className="h-7 w-7" aria-hidden />
            </motion.div>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.15 }}
            >
              <p className="text-brand font-semibold text-sm tracking-wide mb-2">ຊີວິດນັກສຶກສາ</p>
              <h1 className="font-black text-3xl md:text-4xl text-navy text-balance leading-tight">
                ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ
              </h1>
              <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
                ກິດຈະກຳໃນສະຖາບັນ ແລະ ການທ່ອງທ່ຽວທັດສະນະສຶກສາຂອງນັກສຶກສາ{" "}
                <span className="font-semibold text-navy-mid">ວິທະຍາໄລ ບີຊີທີ</span>  ຮູບພາບຢູ່ດ້ານເທິງ
                (ສະຫຼັບຊ້າຍ-ຂວາຕາມລຳດັບ); ຕົວໜັງສືເລີ່ມຢູ່ຂ້າງຮູບ ແລະ ລົງໃຕ້ຮູບເຕັມຄວາມກວ້າງເມື່ອເນື້ອຫາຍາວ.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <motion.section
        className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16"
        aria-labelledby="activities-cards-heading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4 }}
      >
        <h2 id="activities-cards-heading" className="sr-only">
          ລາຍການກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ {DISPLAY_LIMIT} ລາຍການ
        </h2>
        <ul className="flex flex-col gap-10 md:gap-14 lg:gap-16 list-none p-0 m-0">
          {items.map((item, index) => (
            <li key={item.id}>
              <ActivityAlternatingCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  )
}
