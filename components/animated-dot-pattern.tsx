import { cn } from "@/lib/utils"

export type AnimatedDotPatternProps = {
  className?: string
  /** ຫ່າງລະຫວ່າງຈຸດ (px) — ຄວນກົງກັບການເຄື່ອນໃນ keyframes ຖ້າປ່ຽນຫຼາຍ */
  gap?: number
  /** ຄວາມເຂັ້ມຈຸດ (0–1) */
  dotOpacity?: number
  /** ສີ RGB ຂອງຈຸດ (default ສີແບຣນ BCT) */
  color?: { r: number; g: number; b: number }
  /** ຄວາມໄວ (ວິນາທີຕໍ່ຮອບ) */
  durationSec?: number
  /** ຂະໜາດຈຸດ (px) */
  dotSize?: number
}

/**
 * ພື້ນຫຼັງຈຸດຈ້ຳ + animation ລວຍໄປ-ລວຍມາ (CSS keyframes `dot-pattern-sway` ໃນ globals.css)
 * ໃຊ້ໄດ້ໃນ section ທີ່ `position: relative` ແລ້ວວາງ absolute ເຕັມພື້ນທີ່
 */
export function AnimatedDotPattern({
  className,
  gap = 20,
  dotOpacity = 0.18,
  color = { r: 230, g: 20, b: 53 },
  durationSec = 12,
  dotSize = 1,
}: AnimatedDotPatternProps) {
  const { r, g, b } = color

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0 h-full w-full will-change-[background-position]"
        style={{
          backgroundImage: `radial-gradient(rgba(${r}, ${g}, ${b}, ${dotOpacity}) ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gap}px ${gap}px`,
          backgroundPosition: "0 0",
          animation: `dot-pattern-sway ${durationSec}s ease-in-out infinite`,
        }}
      />
    </div>
  )
}
