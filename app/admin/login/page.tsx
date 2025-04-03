"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Lock, User } from "lucide-react"

// Admin credentials - in a real app, these would be stored securely
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "password"

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated = document.cookie.includes("admin_authenticated=true")
    if (isAuthenticated) {
      router.push("/admin/dashboard")
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple validation
    if (!username || !password) {
      setError("Please enter both username and password")
      setIsLoading(false)
      return
    }

    // Check credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      try {
        // Set cookie for authentication
        document.cookie = "admin_authenticated=true; path=/; max-age=86400" // 24 hour expiry

        // Add a small delay to ensure cookie is set
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Redirect to admin dashboard
        router.push("/admin/dashboard")
      } catch (error) {
        console.error("Navigation error:", error)
        setError("Error navigating to dashboard. Please try again.")
        setIsLoading(false)
      }
    } else {
      setError("Invalid username or password")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-grid relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-30" />

      <Card className="w-full max-w-md relative z-10 border-2 border-primary/20 shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">Admin Portal</CardTitle>
            <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  placeholder="admin"
                  className="pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            {error && <div className="text-sm font-medium text-destructive">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Login"}
            </Button>
            {isLoading && (
              <div className="mt-4 text-center text-sm text-muted-foreground">
                If you're not redirected automatically,{" "}
                <a href="/admin/dashboard" className="text-primary hover:underline">
                  click here
                </a>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-xs text-center text-muted-foreground mt-2">
            For security reasons, this portal is restricted to authorized personnel only.
          </p>
          <p className="text-xs text-center text-muted-foreground mt-1">
            <strong>Demo credentials:</strong> username: admin, password: password
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

