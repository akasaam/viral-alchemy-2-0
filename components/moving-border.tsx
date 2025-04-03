"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "16px",
  ry = "16px",
  className,
  containerClassName,
  borderClassName,
  ...props
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  className?: string
  containerClassName?: string
  borderClassName?: string
  [key: string]: any
}) => {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-lg", containerClassName)}>
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(130deg, #9333ea, transparent 30%),
            linear-gradient(180deg, #ec4899, transparent 30%),
            linear-gradient(310deg, #3b82f6, transparent 30%)
          `,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <motion.rect
            width="100"
            height="100"
            rx={rx}
            ry={ry}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="0 1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: duration / 1000,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className={cn("w-full h-full", borderClassName)}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#9333ea" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={cn("relative z-10 bg-background rounded-lg", className)} {...props}>
        {children}
      </div>
    </div>
  )
}

