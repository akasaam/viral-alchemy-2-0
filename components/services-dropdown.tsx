"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ServiceItem {
  title: string
  description: string
  image: string
  link: string
}

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const services: ServiceItem[] = [
    {
      title: "Social Media",
      description: "Build your brand presence and engage your audience across all social platforms.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      link: "/social-media",
    },
    {
      title: "Graphics Design",
      description: "Create stunning visual content that captures attention and communicates your brand message.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
      link: "/graphics-design",
    },
    {
      title: "Video Editing",
      description: "Professional video editing services that bring your stories to life with impact.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
      link: "/video-editing",
    },
    {
      title: "Meta Ads",
      description: "Drive targeted traffic and conversions with strategic Facebook and Instagram advertising.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop",
      link: "/meta-ads",
    },
    {
      title: "Web Development",
      description: "Create stunning, high-performance websites that drive results for your business.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      link: "/web-development",
    },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 z-50 mt-2 w-[400px] rounded-lg border bg-background shadow-lg"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="grid grid-cols-1 gap-3 p-4">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      width={48}
                      height={48}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-medium leading-tight">{service.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
