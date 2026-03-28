"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps {
  id?: string
  label: string
  required?: boolean
  placeholder?: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

function FormSelect({
  id,
  label,
  required,
  placeholder = "-- ເລືອກ --",
  options,
  value,
  onChange,
  error,
  className,
}: FormSelectProps) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  const selected = options.find((o) => o.value === value)

  // Close on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className={cn("space-y-1.5 w-full", className)} ref={ref}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-navy-light">
          {label}
          {required && <span className="text-brand ml-0.5">*</span>}
        </label>
      )}

      <div className="relative">
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
            "w-full h-11 px-4 pr-10 rounded-xl border bg-white text-left text-sm transition-colors",
            "flex items-center justify-between gap-2",
            selected ? "text-navy-light" : "text-slate-400",
          )}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          >
            <ChevronDown size={16} />
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.ul
              role="listbox"
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute z-9999 mt-1.5 w-full bg-white border border-[#E2E8F0] rounded-xl shadow-lg overflow-hidden py-1.5"
            >
              {options.map((opt) => {
                const isSelected = opt.value === value
                return (
                  <motion.li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt.value)
                      setOpen(false)
                    }}
                    whileHover={{ backgroundColor: "rgba(230,20,53,0.05)" }}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 cursor-pointer text-sm transition-colors",
                      isSelected ? "text-brand font-semibold" : "text-navy-light",
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
                  </motion.li>
                )
              })}
            </motion.ul>
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

export { FormSelect }
export type { SelectOption }
