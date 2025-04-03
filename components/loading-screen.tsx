"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">VA</div>
        </div>
        <div className="mt-4 h-1 w-48 bg-muted overflow-hidden rounded-full">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 loading-bar" style={{ width: "100%" }} />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Transforming Digital Presence...</p>
      </div>
    </div>
  )
}

