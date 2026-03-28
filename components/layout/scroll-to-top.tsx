"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollUp}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="ກັບຂຶ້ນເທິງ"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand text-white shadow-lg shadow-brand/30 flex items-center justify-center cursor-pointer"
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
