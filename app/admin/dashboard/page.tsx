"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Users, BarChart, Database, HardDrive, Loader2 } from "lucide-react"
import { fetchAnalyticsData, type AnalyticsData } from "@/lib/analytics-service"
import { DataTable } from "@/components/data-table"
import { SimpleChart } from "@/components/simple-chart"

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if authenticated
    const isAuthenticated = document.cookie.includes("admin_authenticated=true")
    if (!isAuthenticated) {
      router.push("/admin/login")
      return
    }

    // Fetch analytics data
    const fetchData = async () => {
      try {
        const data = await fetchAnalyticsData()
        setAnalyticsData(data)
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch analytics data:", err)
        setError("Failed to load analytics data. Please try again.")
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  const handleLogout = () => {
    // Clear authentication cookie
    document.cookie = "admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary mb-4" />
          <div className="mb-4 text-2xl font-bold">Loading Dashboard Data...</div>
          <div className="text-muted-foreground">Please wait while we fetch your analytics</div>
        </div>
      </div>
    )
  }

  if (error || !analyticsData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold">Error</div>
          <div className="text-muted-foreground mb-4">{error || "Failed to load data"}</div>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Viral Alchemy Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Welcome to your admin dashboard. Last updated: {new Date(analyticsData.lastUpdated).toLocaleString()}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.visitors.total.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {analyticsData.visitors.change > 0 ? "+" : ""}
                {analyticsData.visitors.change}% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.pageViews.total.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {analyticsData.pageViews.change > 0 ? "+" : ""}
                {analyticsData.pageViews.change}% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cache Size</CardTitle>
              <HardDrive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.cacheStats.size}</div>
              <p className="text-xs text-muted-foreground">{analyticsData.cacheStats.items} items cached</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cache Consent Rate</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.consentRate.percentage}%</div>
              <p className="text-xs text-muted-foreground">
                {analyticsData.consentRate.accepted.toLocaleString()} of{" "}
                {analyticsData.consentRate.total.toLocaleString()} users
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pages">Top Pages</TabsTrigger>
              <TabsTrigger value="cache">Cache Management</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <SimpleChart
                  title="Visitors (Last 30 Days)"
                  data={analyticsData.visitors.history}
                  dataKey="count"
                  valueFormatter={(value) => value.toLocaleString()}
                />

                <SimpleChart
                  title="Page Views (Last 30 Days)"
                  data={analyticsData.pageViews.history}
                  dataKey="count"
                  valueFormatter={(value) => value.toLocaleString()}
                />
              </div>
            </TabsContent>

            <TabsContent value="pages">
              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataTable
                    data={analyticsData.topPages}
                    columns={[
                      {
                        key: "path",
                        title: "Page Path",
                        render: (item) => <div className="font-medium">{item.path}</div>,
                      },
                      {
                        key: "title",
                        title: "Page Title",
                        render: (item) => <div>{item.title}</div>,
                      },
                      {
                        key: "views",
                        title: "Page Views",
                        render: (item) => <div>{item.views.toLocaleString()}</div>,
                      },
                      {
                        key: "visitors",
                        title: "Unique Visitors",
                        render: (item) => <div>{item.visitors.toLocaleString()}</div>,
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cache">
              <div className="grid gap-4 md:grid-cols-2">
                <SimpleChart
                  title="Cache Size Over Time (MB)"
                  data={analyticsData.cacheStats.history}
                  dataKey="size"
                  valueFormatter={(value) => `${value.toFixed(1)} MB`}
                />

                <Card>
                  <CardHeader>
                    <CardTitle>Cache Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Current Cache Size:</span>
                        <span className="font-medium">{analyticsData.cacheStats.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cached Items:</span>
                        <span className="font-medium">{analyticsData.cacheStats.items}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>User Consent Rate:</span>
                        <span className="font-medium">{analyticsData.consentRate.percentage}%</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button>Clear All Cache</Button>
                      <Button variant="outline">Optimize Cache</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Admin Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button variant="outline" className="h-20 text-left justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Manage Users</span>
                    <span className="text-xs text-muted-foreground">View and manage user accounts</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-20 text-left justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Analytics</span>
                    <span className="text-xs text-muted-foreground">View detailed site analytics</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-20 text-left justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Cache Management</span>
                    <span className="text-xs text-muted-foreground">Manage site caching</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-20 text-left justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Content Management</span>
                    <span className="text-xs text-muted-foreground">Edit website content</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-20 text-left justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Settings</span>
                    <span className="text-xs text-muted-foreground">Configure site settings</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-20 text-left justify-start">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Backup & Restore</span>
                    <span className="text-xs text-muted-foreground">Manage site backups</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
