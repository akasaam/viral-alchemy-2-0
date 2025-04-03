"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useDragControls } from "framer-motion"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()
  const [isDragging, setIsDragging] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <div ref={containerRef} className={cn("relative h-[50vh] md:h-[80vh] overflow-hidden cursor-grab", className)}>
      <motion.div
        style={{ x }}
        className="flex absolute top-0 left-0 py-12 h-full"
        drag="x"
        dragControls={dragControls}
        dragConstraints={containerRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        whileDrag={{ cursor: "grabbing" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function HorizontalScrollItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("h-full w-[320px] md:w-[400px] px-4 flex-shrink-0", className)}>{children}</div>
}

