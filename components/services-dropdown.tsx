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
      title: "Social Media Marketing",
      description: "Build your brand presence and engage your audience.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      link: "/social-media-marketing",
    },
    {
      title: "Search Engine Optimization",
      description: "Improve your visibility and drive organic traffic.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
      link: "/search-engine-optimization",
    },
    {
      title: "Content Marketing",
      description: "Tell your brand story and establish authority.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      link: "/content-marketing",
    },
    {
      title: "Website Development",
      description: "Create stunning, high-performance websites.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      link: "/website-development",
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
            className="absolute left-0 z-50 mt-2 w-[600px] rounded-lg border bg-background shadow-lg"
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="grid grid-cols-2 gap-4 p-4">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="flex gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="h-12 w-12 overflow-hidden rounded-md">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      width={48}
                      height={48}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
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

