"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchableSelectOption {
  value: string
  label: string
}

export interface SearchableSelectGroup {
  group: string
  options: SearchableSelectOption[]
}

interface SearchableSelectProps {
  id?: string
  label: string
  required?: boolean
  placeholder?: string
  groups: SearchableSelectGroup[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

function SearchableSelect({
  id,
  label,
  required,
  placeholder = "-- ເລືອກ --",
  groups,
  value,
  onChange,
  error,
  className,
}: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const ref = React.useRef<HTMLDivElement>(null)
  const searchRef = React.useRef<HTMLInputElement>(null)

  const selected = groups.flatMap((g) => g.options).find((o) => o.value === value)

  // Focus search on open
  React.useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50)
    else setQuery("")
  }, [open])

  // Close on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const filtered = groups
    .map((g) => ({
      ...g,
      options: g.options.filter((o) =>
        o.label.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter((g) => g.options.length > 0)

  const totalCount = filtered.reduce((s, g) => s + g.options.length, 0)

  return (
    <div className={cn("space-y-1.5 w-full", className)} ref={ref}>
      <label htmlFor={id} className="text-sm font-semibold text-navy-light">
        {label}
        {required && <span className="text-brand ml-0.5">*</span>}
      </label>

      <div className="relative">
        {/* Trigger */}
        <motion.button
          id={id}
          type="button"
          onClick={() => setOpen((v) => !v)}
          animate={
            open
              ? { borderColor: "#e61435", boxShadow: "0 0 0 3px rgba(230,20,53,0.12)" }
              : error
                ? { borderColor: "#e61435", boxShadow: "0 0 0 3px rgba(230,20,53,0.08)" }
                : { borderColor: "#E2E8F0", boxShadow: "0 0 0 0px rgba(230,20,53,0)" }
          }
          transition={{ duration: 0.18 }}
          className={cn(
            "w-full h-11 px-4 pr-10 rounded-xl border bg-white text-left text-sm",
            "flex items-center gap-2",
            selected ? "text-navy-light" : "text-slate-400",
          )}
        >
          <span className="truncate flex-1">{selected ? selected.label : placeholder}</span>
          {selected && (
            <span
              role="button"
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
              className="text-slate-400 hover:text-brand transition-colors"
            >
              <X size={13} />
            </span>
          )}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          >
            <ChevronDown size={16} />
          </motion.span>
        </motion.button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute z-[9999] mt-1.5 w-full bg-white border border-[#E2E8F0] rounded-xl shadow-xl overflow-hidden"
            >
              {/* Search bar */}
              <div className="px-3 pt-3 pb-2 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <Search size={14} className="text-slate-400 shrink-0" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ຄົ້ນຫາໂຮງຮຽນ..."
                    className="flex-1 text-sm bg-transparent outline-none text-navy-light placeholder:text-slate-400"
                  />
                  {query && (
                    <button type="button" onClick={() => setQuery("")} className="text-slate-400 hover:text-brand">
                      <X size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Options list */}
              <div className="overflow-y-auto max-h-60 py-1.5">
                {totalCount === 0 ? (
                  <div className="px-4 py-6 text-center text-sm text-slate-400">ບໍ່ພົບໂຮງຮຽນ</div>
                ) : (
                  filtered.map((g) => (
                    <div key={g.group}>
                      <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 tracking-wider uppercase sticky top-0 bg-white">
                        {g.group}
                      </div>
                      {g.options.map((opt) => {
                        const isSelected = opt.value === value
                        return (
                          <motion.button
                            key={opt.value}
                            type="button"
                            onClick={() => { onChange(opt.value); setOpen(false); }}
                            whileHover={{ backgroundColor: "rgba(230,20,53,0.05)" }}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors",
                              isSelected ? "text-brand font-semibold bg-[rgba(230,20,53,0.04)]" : "text-navy-light",
                            )}
                          >
                            <span>{opt.label}</span>
                            <AnimatePresence>
                              {isSelected && (
                                <motion.span
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                  <Check size={14} className="text-brand" />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-brand font-medium"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export { SearchableSelect }
