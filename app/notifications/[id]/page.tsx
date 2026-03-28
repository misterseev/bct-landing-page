import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/navbar"
import { announcements, getAnnouncementById } from "@/data/announcements"
import { SITE_NAME } from "@/config/site"
import { ArrowLeft, Calendar } from "lucide-react"

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return announcements.map((a) => ({ id: a.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = getAnnouncementById(id)
  if (!item) return { title: "ບໍ່ພົບຂ່າວ" }
  return {
    title: `${item.title} | ${SITE_NAME}`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      images: item.image ? [item.image] : undefined,
    },
  }
}

export default async function NotificationDetailPage({ params }: Props) {
  const { id } = await params
  const item = getAnnouncementById(id)
  if (!item) notFound()

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-16 md:pt-20">
        <article className="pb-16 md:pb-20">
          {/* ຮູບເຕັມຄວາມກວ້າງຈໍ (edge-to-edge) */}
          <div className="relative w-full min-h-50 aspect-21/9 bg-[#E2E8F0] md:min-h-70 md:aspect-3/1">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* ເນື້ອຫາຂ່າວ — ຄືເກົ່າ: ກ້ອງຂາວ, ຂອບ, ຕົວໜັງສືເກົ່າ */}
          <div className="max-w-3xl mx-auto px-4 md:px-8 -mt-2 md:-mt-4">
            <div className="overflow-hidden bg-white border-2 border-brand/20">
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate mb-4">
                  <Calendar className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <time dateTime={item.dateTime ?? item.date}>{item.date}</time>
                </div>
                <h1 className="font-black text-2xl md:text-3xl text-navy text-balance leading-tight">
                  {item.title}
                </h1>
                <div className="mt-6 space-y-4 text-navy-mid leading-relaxed text-base md:text-[17px]">
                  {item.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 md:px-8 mt-10 text-center">
            <Link
              href="/notifications"
              className="w-full inline-flex items-center justify-center border bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-brand/30 hover:text-brand transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-3" aria-hidden /> ກັບຄືນເພື່ອເບິ່ງຂ່າວອື່ນໆ
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
