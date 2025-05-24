"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import { motion } from "framer-motion"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export function WhatsAppButton({
  phoneNumber = "+917074225593",
  message = "Hello, I'm interested in your services!",
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleClick}
        className={`flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white ${className}`}
      >
        <WhatsappIcon className="h-5 w-5" />
        <span>Chat on WhatsApp</span>
      </Button>
    </motion.div>
  )
}
