"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface FormFieldProps extends React.ComponentProps<"input"> {
  label: string
  required?: boolean
  error?: string
  prefix?: string
}

function FormField({ id, label, required, error, prefix, className, ...props }: FormFieldProps) {
  const [focused, setFocused] = React.useState(false)

  return (
    <div className="space-y-1.5 w-full">
      <label htmlFor={id} className="text-sm font-semibold text-navy-light">
        {label}
        {required && <span className="text-brand ml-0.5">*</span>}
      </label>

      <motion.div
        animate={
          focused
            ? { boxShadow: "0 0 0 3px rgba(230,20,53,0.12)", borderColor: "#e61435" }
            : error
              ? { boxShadow: "0 0 0 3px rgba(230,20,53,0.08)", borderColor: "#e61435" }
              : { boxShadow: "0 0 0 0px rgba(230,20,53,0)", borderColor: "#E2E8F0" }
        }
        transition={{ duration: 0.18 }}
        className="rounded-xl border bg-white overflow-hidden flex items-center"
      >
        {prefix && (
          <span className="pl-4 pr-2 text-sm font-semibold text-navy-light select-none shrink-0 border-r border-[#E2E8F0] h-11 flex items-center">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "border-0 shadow-none h-11 text-sm text-navy-light placeholder:text-slate-400",
            "focus-visible:ring-0 focus-visible:border-0",
            prefix ? "rounded-none pl-3 pr-4" : "rounded-xl px-4",
            className,
          )}
          {...props}
        />
      </motion.div>

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

export { FormField }
