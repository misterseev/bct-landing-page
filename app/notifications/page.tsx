import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"
import { AnimatedDotPattern } from "@/components/animated-dot-pattern"
import { announcements } from "@/data/announcements"
import { SITE_NAME } from "@/config/site"
import { Bell, Calendar, ArrowLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: `ແຈ້ງການຈາກ ບີຊີທີ | ${SITE_NAME}`,
  description:
    `ປະກາດ ແລະ ແຈ້ງການສຳຄັນຈາກ ${SITE_NAME} — ກຳນົດການຮຽນ, ກິດຈະກຳ ແລະ ຂໍ້ມູນທີ່ກ່ຽວຂ້ອງກັບນັກສຶກສາ ແລະ ຜູ້ສົນໃຈ`,
  openGraph: {
    title: `ແຈ້ງການຈາກ ບີຊີທີ | ${SITE_NAME}`,
    description: `ຕິດຕາມປະກາດ ແລະ ແຈ້ງການຈາກ ${SITE_NAME}`,
    type: "website",
  },
}

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-16 md:pt-20">
        <header className="relative overflow-hidden border-b border-[#E2E8F0] bg-white">
          <AnimatedDotPattern gap={20} dotOpacity={0.18} durationSec={12} />

          <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-brand transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              ກັບໜ້າຫຼັກ
            </Link>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(242,13,73,0.1)] text-brand">
                <Bell className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <p className="text-brand font-semibold text-sm tracking-wide mb-2">ຂ່າວສານ ແລະ ປະກາດ</p>
                <h1 className="font-black text-3xl md:text-4xl text-navy text-balance leading-tight">
                  ແຈ້ງການຈາກ ບີຊີທີ
                </h1>
                <p className="mt-4 text-slate text-base md:text-lg max-w-2xl">
                  ຕິດຕາມປະກາດສຳຄັນ ກຳນົດການຮຽນ-ການສອນ ແລະ ກິດຈະກຳຈາກ{" "}
                  <span className="font-bold">ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ</span> ສຳລັບນັກສຶກສາ ແລະ ຜູ້ສົນໃຈ
                </p>
              </div>
            </div>
          </div>
        </header>

        <section
          className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16 relative"
          aria-labelledby="announcements-heading"
        >
          <h2 id="announcements-heading" className="sr-only">
            ລາຍການແຈ້ງການ
          </h2>
          <ul className="flex flex-col gap-4 md:gap-6">
            {announcements.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/notifications/${item.id}`}
                  className="group block border border-[#E2E8F0] bg-white overflow-hidden transition-all hover:border-brand/25 "
                >
                  <div className="flex flex-col sm:flex-row sm:items-stretch">
                    <div className="relative aspect-16/10 sm:aspect-auto sm:w-[min(42%,280px)] shrink-0 bg-[#EEF2F6]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 280px"
                      />
                      {/* Priority Badge */}
                      <div className="absolute top-2 left-2">
                        <span className={`inline-flex items-center justify-center px-3 py-1 text-xs font-bold ${
                          item.priority === "HIGH" ? "bg-red-500 text-white" :
                          item.priority === "MEDIUM" ? "bg-yellow-500 text-white" :
                          "bg-green-500 text-white"
                        }`}>
                          {item.priority === "HIGH" ? "ສຳຄັນທີ່ສຸດ" : item.priority === "MEDIUM" ? "ທຳມະດາ" : "ທົ່ວໄປ"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate mb-3">
                        <Calendar className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                        <time dateTime={item.dateTime ?? item.date}>{item.date}</time>
                      </div>
                      <h3 className="font-bold text-lg md:text-xl text-navy leading-snug group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-slate leading-relaxed text-sm md:text-base line-clamp-3">
                        {item.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        ອ່ານລາຍລະອຽດ
                        <ChevronRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-slate-400">
            ຂໍ້ມູນຂ້າງເທິງເປັນຕົວຢ່າງ — ສາມາດເຊື່ອມຕໍ່ກັບລະບົບ CMS ຫຼື API ຕາມຕ້ອງການ
          </p>
        </section>
 
      </div>
    </main>
  )
}
