"use client"

import { useState, useRef } from "react"
import { Search, ChevronLeft, ChevronRight, ChevronDown, Star, Bell, ArrowLeft, BookOpen } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/layout/navbar"

/* ─── Types ─────────────────────────────────────────────── */
type BookStatus = "available" | "taken" | "mine"

interface Book {
  id: string
  title: string
  author: string
  rating: number
  category: string
  cover: string   // tailwind bg color class
  takenBy?: { name: string; avatar: string }
  status: BookStatus
}

/* ─── Mock data ──────────────────────────────────────────── */
const CATEGORIES = ["ທຸກໝວດ", "Design & UX", "Programming", "Business", "ວິທະຍາສາດ", "ພາສາ"]

const RECOMMENDED: Book[] = [
  { id: "r1", title: "Change by Design", author: "Tim Brown", rating: 4.5, category: "Design & UX", cover: "bg-red-500", status: "available" },
  { id: "r2", title: "Let Me Pencil You In", author: "Cora Mack", rating: 4.5, category: "Business", cover: "bg-yellow-400", status: "taken", takenBy: { name: "ສົມໃຈ", avatar: "S" } },
  { id: "r3", title: "Ethereum 2018–2019", author: "Chase Thornton", rating: 4.5, category: "Programming", cover: "bg-slate-800", status: "available" },
  { id: "r4", title: "Applied Artificial Intelligence", author: "Francis Salazar", rating: 4.5, category: "Programming", cover: "bg-teal-500", status: "mine" },
  { id: "r5", title: "Unlimited Memory", author: "Kevin Horsley", rating: 4.5, category: "ວິທະຍາສາດ", cover: "bg-orange-300", status: "available" },
  { id: "r6", title: "The New Business Road Test", author: "Susie Hunt", rating: 4.5, category: "Business", cover: "bg-blue-700", status: "available" },
  { id: "r7", title: "All This Has Nothing to Do with Me", author: "Beulah Pratt", rating: 4.5, category: "ພາສາ", cover: "bg-indigo-400", status: "available" },
  { id: "r8", title: "Clean Code", author: "Robert C. Martin", rating: 4.8, category: "Programming", cover: "bg-gray-700", status: "available" },
]

const LAST_ADDED: Book[] = [
  { id: "l1", title: "Deep Work", author: "Cal Newport", rating: 4.7, category: "Business", cover: "bg-emerald-600", status: "available" },
  { id: "l2", title: "Atomic Habits", author: "James Clear", rating: 4.9, category: "Business", cover: "bg-orange-500", status: "mine" },
  { id: "l3", title: "The Pragmatic Programmer", author: "David Thomas", rating: 4.6, category: "Programming", cover: "bg-purple-700", status: "taken", takenBy: { name: "ໄຊຍະ", avatar: "ໄ" } },
  { id: "l4", title: "Designing Data-Intensive Apps", author: "Martin Kleppmann", rating: 4.8, category: "Programming", cover: "bg-sky-600", status: "available" },
  { id: "l5", title: "The Lean Startup", author: "Eric Ries", rating: 4.4, category: "Business", cover: "bg-green-500", status: "available" },
  { id: "l6", title: "Zero to One", author: "Peter Thiel", rating: 4.5, category: "Business", cover: "bg-zinc-800", status: "available" },
]

const LIST_BOOKS: Book[] = [
  { id: "t1", title: "Super Modded: The Behance Book of Creative Work", author: "Ash Maurya", rating: 4.5, category: "Design & UX", cover: "bg-blue-500", status: "taken", takenBy: { name: "Manuel Blake", avatar: "M" } },
  { id: "t2", title: "Scaling Lean: Mastering the Key Metrics for Startup Growth", author: "Ash Maurya", rating: 4.5, category: "Design & UX", cover: "bg-purple-500", status: "available" },
  { id: "t3", title: "The Zero Marginal Cost Society", author: "Jeremy Rifkin", rating: 3.5, category: "Programming", cover: "bg-teal-600", status: "mine" },
  { id: "t4", title: "Sprint: Solve Big Problems", author: "Jake Knapp", rating: 4.2, category: "Business", cover: "bg-orange-600", status: "available" },
  { id: "t5", title: "Don't Make Me Think", author: "Steve Krug", rating: 4.7, category: "Design & UX", cover: "bg-red-600", status: "available" },
]

const CATEGORY_COLORS: Record<string, string> = {
  "Design & UX": "bg-blue-500",
  "Programming": "bg-purple-500",
  "Business": "bg-amber-500",
  "ວິທະຍາສາດ": "bg-teal-500",
  "ພາສາ": "bg-pink-500",
}

/* ─── Sub-components ─────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
      <Star className="h-3 w-3 fill-amber-400 stroke-amber-400" />
      {rating.toFixed(1)}<span className="text-slate-400 font-normal">/5</span>
    </span>
  )
}

function BookCard({ book }: { book: Book }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex flex-col w-[120px] shrink-0 cursor-pointer group"
    >
      <div className={`relative w-full h-[160px] rounded-lg ${book.cover} shadow-md overflow-hidden mb-2`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <BookOpen className="h-10 w-10 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <p className="text-xs font-semibold text-navy leading-snug line-clamp-2 group-hover:text-brand transition-colors">
        {book.title}
      </p>
      <p className="text-[11px] text-slate mt-0.5 line-clamp-1">{book.author}</p>
      <div className="mt-1">
        <StarRating rating={book.rating} />
      </div>
    </motion.div>
  )
}

function StatusBadge({ book }: { book: Book }) {
  if (book.status === "mine") {
    return (
      <button className="px-3 py-1.5 rounded-lg bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors">
        ສົ່ງຄືນ
      </button>
    )
  }
  if (book.status === "taken" && book.takenBy) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-600">
          {book.takenBy.avatar}
        </div>
        <div>
          <p className="text-[11px] text-slate leading-none">{book.takenBy.name}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">ແຈ້ງເຕືອນ</p>
        </div>
        <button className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors">
          <Bell className="h-3.5 w-3.5" />
        </button>
      </div>
    )
  }
  return (
    <button className="px-3 py-1.5 rounded-lg bg-brand/10 text-brand text-xs font-semibold hover:bg-brand hover:text-white transition-colors">
      ຢືມປຶ້ມ
    </button>
  )
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function LibraryPage() {
  const [tab, setTab] = useState<"recommended" | "last">("recommended")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("ທຸກໝວດ")
  const [catOpen, setCatOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const books = tab === "recommended" ? RECOMMENDED : LAST_ADDED

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" })
  }

  const filteredList = LIST_BOOKS.filter((b) => {
    const matchCat = category === "ທຸກໝວດ" || b.category === category
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-16 md:pt-20">
        {/* ─── Header ─── */}
        <header className="bg-white border-b border-[#E2E8F0]">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-brand transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              ກັບໜ້າຫຼັກ
            </Link>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black text-navy">ຫ້ອງສະໝຸດ ບີຊີທີ</h1>
                <p className="text-sm text-slate">ຄົ້ນຫາ ແລະ ຢືມປຶ້ມຮຽນ ຈາກຫ້ອງສະໝຸດສະຖາບັນ</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-8">
          {/* ─── Search + Category ─── */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ພິມຊື່ປຶ້ມ ຫຼື ຊື່ຜູ້ແຕ່ງ"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
              />
            </div>
            <div className="relative">
              <button
                onClick={() => setCatOpen((o) => !o)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm font-medium text-navy-mid hover:border-brand/40 transition min-w-[140px] justify-between"
              >
                {category}
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {catOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 w-full bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-20 overflow-hidden"
                  >
                    {CATEGORIES.map((c) => (
                      <li key={c}>
                        <button
                          onClick={() => { setCategory(c); setCatOpen(false) }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-brand/5 hover:text-brand ${category === c ? "text-brand font-semibold bg-brand/5" : "text-navy-mid"}`}
                        >
                          {c}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ─── Tabs ─── */}
          <div>
            <div className="flex gap-1 border-b border-[#E2E8F0] mb-6">
              {(["recommended", "last"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${tab === t ? "text-brand" : "text-slate hover:text-navy"}`}
                >
                  {t === "recommended" ? "ແນະນຳ" : "ເພີ່ມໃໝ່"}
                  {tab === t && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* ─── Book Carousel ─── */}
            <div className="relative">
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide py-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-4"
                  >
                    {books.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => scroll("left")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-white hover:border-brand hover:text-brand transition-colors text-slate"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="h-px flex-1 bg-[#E2E8F0]" />
                <button
                  onClick={() => scroll("right")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] bg-white hover:border-brand hover:text-brand transition-colors text-slate"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ─── Book List Table ─── */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-180">
                {/* Table header */}
                <div className="grid grid-cols-[minmax(200px,1fr)_80px_130px_150px] gap-4 px-5 py-3 border-b border-[#E2E8F0] bg-surface">
                  <button className="flex items-center gap-1 text-xs font-semibold text-navy-mid hover:text-brand transition-colors text-left">
                    ຊື່ປຶ້ມ
                    <ChevronDown className="h-3 w-3 shrink-0" />
                  </button>
                  <span className="text-xs font-semibold text-navy-mid">ຄະແນນ</span>
                  <span className="text-xs font-semibold text-navy-mid">ໝວດ</span>
                  <span className="text-xs font-semibold text-navy-mid">ສະຖານະ</span>
                </div>

                {/* Rows */}
                {filteredList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-slate">
                    <BookOpen className="h-10 w-10 mb-3 text-slate-300" />
                    <p className="text-sm">ບໍ່ພົບປຶ້ມທີ່ຄົ້ນຫາ</p>
                  </div>
                ) : (
                  filteredList.map((book, i) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-[minmax(200px,1fr)_80px_130px_150px] gap-4 items-center px-5 py-4 border-b border-[#E2E8F0] last:border-0 hover:bg-surface/70 transition-colors"
                    >
                      {/* Title + Author */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`h-10 w-8 shrink-0 rounded-md ${book.cover} shadow-sm`} />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-navy leading-snug truncate">{book.title}</p>
                          <p className="text-xs text-slate mt-0.5 truncate">{book.author}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="shrink-0">
                        <StarRating rating={book.rating} />
                      </div>

                      {/* Category */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`h-2 w-2 rounded-full shrink-0 ${CATEGORY_COLORS[book.category] ?? "bg-slate-400"}`} />
                        <span className="text-xs text-navy-mid whitespace-nowrap">{book.category}</span>
                      </div>

                      {/* Status */}
                      <div className="shrink-0 min-w-42">
                        <StatusBadge book={book} />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
