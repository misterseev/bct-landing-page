"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Newspaper, Bell, Briefcase, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { HOME, ROUTES, SITE_NAME_SHORT } from "@/lib/routes"

type NavChild = {
  label: string
  href: string
  description: string
  icon?: typeof Newspaper
}

type NavLink = {
  label: string
  href: string
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  { label: "ກ່ຽວກັບ ບີຊີທີ", href: HOME.about },
  { label: "ຫ້ອງຮຽນ", href: HOME.classrooms },
  { label: "ການຮຽນ-ການສອນ", href: HOME.schedule },
  {
    label: "ຂ່າວສານ",
    href: HOME.news,
    children: [
      {
        label: "ແຈ້ງການຈາກ ບີຊີທີ",
        href: ROUTES.notifications,
        description: "ປະກາດ, ກຳນົດການຮຽນ-ການສອນ ແລະ ກິດຈະກຳສຳຄັນຈາກສະຖາບັນ",
        icon: Bell,
      },
      {
        label: "ກິດຈະກຳ ແລະ ທ່ອງທ່ຽວ",
        href: ROUTES.activitiesTravel,
        description: "ຈັດງານກິດຈະກຳ ແລະ ການທັດສະນະສຶກສາ",
        icon: Newspaper,
      },
      {
        label: "ປະກາດຮັບສະໝັກ",
        href: HOME.careers,
        description: "ໂອກາດຮ່ວມງານກັບທີມສອນ ແລະ ພາກສ່ວນບໍລິຫານຂອງສະຖາບັນ",
        icon: Briefcase,
      },
      {
        label: "ສື່ມວນຊົນ ແລະ ບົດຄວາມ",
        href: HOME.media,
        description: "ບົດຄວາມ ວິທີຮຽນ ສະຖິຕິ ແລະ ຂໍ້ມູນທີ່ນໍາສະເໜີ",
        icon: FileText,
      },
    ],
  },
  { label: "ຂໍ້ມູນຕິດຕໍ່", href: HOME.contact },
]

export default function Navbar() {
  const pathname = usePathname()
  /** ໜ້າຫຼັກເທົ່ານັ້ນທີ່ໃຊ້ຕົວໜັງສືຂາວເທິງ hero ຕອນຍັງບໍ່ scroll */
  const isHomePage = pathname === "/"

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpenHref, setMegaOpenHref] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = useCallback((href: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setMegaOpenHref(href)
  }, [])

  const scheduleCloseMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpenHref(null), 120)
  }, [])

  const cancelCloseMega = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const activeMega = navLinks.find((l) => l.href === megaOpenHref && l.children?.length)
  /** ພື້ນຫຼັງຂາວ: scroll, mega menu, ຫຼື ບໍ່ແມ່ນໜ້າຫຼັກ (ເຊັ່ນ /notifications) */
  const navOnLightBg = !isHomePage || scrolled || Boolean(megaOpenHref)
  const navTextClass = navOnLightBg ? "text-[#334155]" : "text-white"
  const navHoverClass = navOnLightBg ? "hover:text-[#e61435]" : "hover:text-white/90"

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navOnLightBg ? "bg-white/95 backdrop-blur-lg border-b border-[#E2E8F0]" : "bg-transparent"
      }`}
      onMouseLeave={scheduleCloseMega}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-14 h-10 rounded-lg bg-[#e61435] flex items-center justify-center">
            <span className="font-black text-white text-sm leading-none">BCT</span>
          </div>
          <div className="hidden sm:block">
            <div
              className={`font-bold text-sm leading-tight transition-colors ${
                navOnLightBg ? "text-gray-700" : "text-white"
              }`}
            >
              {SITE_NAME_SHORT}
            </div>
            <div className={`text-xs leading-tight ${navOnLightBg ? "text-[#64748B]" : "text-white/85"}`}>
              ເພື່ອການສຶກສາດ້ານໄອທີ
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-3 flex-1 justify-end min-w-0">
          {navLinks.map((link) => {
            const hasChildren = Boolean(link.children?.length)
            if (hasChildren) {
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => openMega(link.href)}
                  onMouseLeave={scheduleCloseMega}
                >
                  <button
                    type="button"
                    aria-expanded={megaOpenHref === link.href}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-bold rounded-md transition-colors ${navTextClass} ${navHoverClass} ${
                      megaOpenHref === link.href ? "text-[#e61435]" : ""
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${megaOpenHref === link.href ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </li>
              )
            }
            return (
              <li key={link.href} onMouseEnter={() => setMegaOpenHref(null)}>
                <a
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-bold rounded-md transition-colors ${navTextClass} ${navHoverClass}`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            navOnLightBg ? "text-[#0F172A]" : "text-white"
          } hover:bg-[rgba(242,13,73,0.08)]`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="ເປີດ ຫຼື ປິດເມນູນຳທາງ"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mega menu: full viewport width */}
      <AnimatePresence>
        {activeMega?.children && (
          <motion.div
            key={activeMega.href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:block absolute left-0 right-0 top-full border-t border-[#E2E8F0] bg-white shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)]"
            onMouseEnter={cancelCloseMega}
            onMouseLeave={scheduleCloseMega}
          >
            <div className="w-full max-w-[100vw] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#e61435] mb-2">
                ຂ່າວສານ ແລະ ຂໍ້ມູນ
              </p>
              <h2 className="text-lg md:text-xl font-bold text-[#0F172A] mb-6 md:mb-8 max-w-3xl">
                ເລືອກຫົວຂໍ້ທີ່ຕ້ອງການ — ອ່ານລາຍລະອຽດແຕ່ລະພາກສ່ວນ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {activeMega.children.map((child) => {
                  const Icon = child.icon ?? Newspaper
                  return (
                    <a
                      key={child.href}
                      href={child.href}
                      className="group flex flex-col rounded-xl p-5 transition-all border border-white hover:border-[#e61435]/40 hover:bg-white hover:-translate-y-0.5"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(242,13,73,0.08)] text-[#e61435] transition-colors group-hover:bg-[#e61435] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <span className="font-bold text-[#0F172A] text-sm leading-snug group-hover:text-[#e61435] transition-colors">
                        {child.label}
                      </span>
                      <p className="mt-2 text-xs md:text-sm text-[#64748B] leading-relaxed line-clamp-4">
                        {child.description}
                      </p>
                      <span className="mt-3 text-xs font-semibold text-[#e61435] opacity-0 group-hover:opacity-100 transition-opacity">
                        ເບິ່ງເພີ່ມ →
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-[#E2E8F0] overflow-hidden max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto"
          >
            <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  {link.children?.length ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((prev) => (prev === link.href ? null : link.href))
                        }
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-[#0F172A] hover:bg-[rgba(242,13,73,0.06)] rounded-md font-medium"
                        aria-expanded={mobileExpanded === link.href}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform ${
                            mobileExpanded === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 gap-3 px-2 pb-3 pt-1">
                              {link.children.map((child) => {
                                const Icon = child.icon ?? Newspaper
                                return (
                                  <a
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => {
                                      setIsOpen(false)
                                      setMobileExpanded(null)
                                    }}
                                    className="flex gap-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3 active:bg-white"
                                  >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(242,13,73,0.08)] text-[#e61435]">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <div className="font-semibold text-sm text-[#0F172A]">{child.label}</div>
                                      <p className="mt-1 text-xs text-[#64748B] leading-relaxed">{child.description}</p>
                                    </div>
                                  </a>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-[#64748B] hover:text-[#e61435] hover:bg-[rgba(242,13,73,0.06)] rounded-md transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.li>
              ))}
              <motion.li
                className="pt-2"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
              >
                <a
                  href={HOME.admissions}
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-5 py-3 bg-[#e61435] text-white  font-bold rounded-lg hover:bg-[#c40038] transition-colors"
                >
                  ສະໝັກຮຽນ
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
