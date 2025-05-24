"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CacheConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [cachePreference, setCachePreference] = useState<string | null>(null)

  useEffect(() => {
    // Check if user has already set a preference
    const preference = localStorage.getItem("cachePreference")
    setCachePreference(preference)

    // Show consent dialog if no preference is set
    if (!preference) {
      // Slight delay to avoid showing immediately on page load
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cachePreference", "accepted")
    setCachePreference("accepted")
    setShowConsent(false)

    // Enable caching
    if ("caches" in window) {
      // Cache static assets
      caches.open("viral-alchemy-static-v1").then((cache) => {
        // Cache CSS, JS, and images
        const urlsToCache = [
          "/globals.css",
          // Add other important assets here
        ]
        cache.addAll(urlsToCache)
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem("cachePreference", "rejected")
    setCachePreference("rejected")
    setShowConsent(false)

    // Clear any existing caches
    if ("caches" in window) {
      caches.delete("viral-alchemy-static-v1")
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto max-w-md px-4">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Improve Your Experience</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowConsent(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>We use browser caching to make our website load faster on your next visit.</CardDescription>
        </CardHeader>
        <CardContent className="pb-2 text-sm text-muted-foreground">
          <p>
            By accepting, you allow us to store certain files in your browser's cache to improve loading times. This
            doesn't collect any personal data.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <Button variant="outline" className="flex-1" onClick={handleReject}>
            Reject
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            onClick={handleAccept}
          >
            Accept
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
