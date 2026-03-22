import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { AnimatedDotPattern } from "@/components/animated-dot-pattern"
import { eventGalleryImages, travelGalleryImages } from "@/lib/activities-gallery"
import { SITE_NAME } from "@/lib/routes"
import { ArrowLeft, CalendarDays, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: `ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ | ${SITE_NAME}`,
  description:
    `ຮູບພາບກິດຈະກຳ ແລະ ການທັດສະນະສຶກສາ ທ່ອງທ່ຽວຂອງນັກສຶກສາ ${SITE_NAME} — ຈັດງານ ແລະ ປະສົບການຮຽນຮູ້ນອກສະຖານທີ່`,
  openGraph: {
    title: `ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ | ${SITE_NAME}`,
    description: `ຕິດຕາມກິດຈະກຳ ແລະ ທ່ອງທ່ຽວຂອງ ${SITE_NAME}`,
    type: "website",
  },
}

function GalleryGrid({ images, altPrefix }: { images: string[]; altPrefix: string }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {images.map((src, i) => (
        <li key={src}>
          <figure className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all hover:border-[#e61435]/25 hover:shadow-md">
            <div className="relative aspect-4/3 bg-[#EEF2F6]">
              <Image
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </figure>
        </li>
      ))}
    </ul>
  )
}

export default function ActivitiesTravelPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="pt-16 md:pt-20">
        <header className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
          <AnimatedDotPattern gap={20} dotOpacity={0.18} durationSec={12} />

          <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#e61435] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              ກັບໜ້າຫຼັກ
            </Link>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(242,13,73,0.1)] text-[#e61435]">
                <CalendarDays className="h-7 w-7" aria-hidden />
              </div>
              <div className="max-w-3xl">
                <p className="text-[#e61435] font-semibold text-sm tracking-wide mb-2">ຊີວິດນັກສຶກສາ</p>
                <h1 className="font-black text-3xl md:text-4xl text-[#0F172A] text-balance leading-tight">
                  ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ
                </h1>
                <p className="mt-4 text-[#64748B] text-base md:text-lg leading-relaxed">
                  ຮູບພາບບັນທຶກຈາກກິດຈະກຳໃນສະຖາບັນ ແລະ ການທັດສະນະສຶກສາ ທ່ອງທ່ຽວຂອງນັກສຶກສາ{" "}
                  <span className="font-semibold text-[#334155]">ວິທະຍາໄລ ບີຊີທີ</span> — ສ້າງປະສົບການຮຽນຮູ້ຮ່ວມກັນນອກຫ້ອງຮຽນ
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16 md:space-y-20">
          <section aria-labelledby="events-heading">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(242,13,73,0.08)] text-[#e61435]">
                <CalendarDays className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 id="events-heading" className="font-bold text-2xl md:text-3xl text-[#0F172A]">
                  ກິດຈະກຳ
                </h2>
                <p className="text-sm text-[#64748B] mt-1">ງານສັງສັນ, ອົບຮົມ ແລະ ກິດຈະກຳໃນສະຖາບັນ</p>
              </div>
            </div>
            <GalleryGrid images={eventGalleryImages} altPrefix="ກິດຈະກຳຂອງວິທະຍາໄລ ບີຊີທີ" />
          </section>

          <section aria-labelledby="travels-heading">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(242,13,73,0.08)] text-[#e61435]">
                <Mountain className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 id="travels-heading" className="font-bold text-2xl md:text-3xl text-[#0F172A]">
                  ທ່ອງທ່ຽວ ແລະ ທັດສະນະສຶກສາ
                </h2>
                <p className="text-sm text-[#64748B] mt-1">ທີ່ທ່ອງທ່ຽວ ແລະ ຮຽນຮູ້ນອກຫ້ອງຮຽນ</p>
              </div>
            </div>
            <GalleryGrid images={travelGalleryImages} altPrefix="ທ່ອງທ່ຽວຂອງວິທະຍາໄລ ບີຊີທີ" />
          </section>
        </div>
 
      </div>
    </main>
  )
}
