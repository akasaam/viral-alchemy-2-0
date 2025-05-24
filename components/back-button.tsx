"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface BackButtonProps {
  className?: string
}

export function BackButton({ className = "" }: BackButtonProps) {
  const router = useRouter()

  return (
    <Button variant="ghost" size="sm" onClick={() => router.back()} className={`flex items-center gap-1 ${className}`}>
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  )
}
