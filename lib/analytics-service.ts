// Types for analytics data
export interface VisitorData {
  total: number
  change: number
  history: { date: string; count: number }[]
}

export interface PageViewData {
  total: number
  change: number
  history: { date: string; count: number }[]
}

export interface CacheStats {
  size: string
  items: number
  history: { date: string; size: number }[]
}

export interface ConsentRate {
  percentage: number
  accepted: number
  total: number
}

export interface PageData {
  path: string
  title: string
  views: number
  visitors: number
}

export interface AnalyticsData {
  visitors: VisitorData
  pageViews: PageViewData
  cacheStats: CacheStats
  consentRate: ConsentRate
  topPages: PageData[]
  lastUpdated: string
}

// Generate random data within a range
function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Generate dates for the last n days
function generateDates(days: number): string[] {
  const dates: string[] = []
  const today = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    dates.push(date.toISOString().split("T")[0])
  }

  return dates
}

// Generate visitor history with realistic patterns
function generateVisitorHistory(days: number, baseCount: number): { date: string; count: number }[] {
  const dates = generateDates(days)
  const history: { date: string; count: number }[] = []

  // Create a realistic pattern with weekday peaks
  for (let i = 0; i < dates.length; i++) {
    const date = new Date(dates[i])
    const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday

    // Weekdays have higher traffic
    let multiplier = 1
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      multiplier = 1.2
    } else {
      multiplier = 0.8
    }

    // Add some randomness
    const randomFactor = randomInRange(85, 115) / 100

    // Calculate the count for this day
    const count = Math.floor(baseCount * multiplier * randomFactor)

    history.push({ date: dates[i], count })
  }

  return history
}

// Generate page view history based on visitor history
function generatePageViewHistory(
  visitorHistory: { date: string; count: number }[],
  pagesPerVisitor: number,
): { date: string; count: number }[] {
  return visitorHistory.map((item) => ({
    date: item.date,
    count: Math.floor(item.count * pagesPerVisitor * (randomInRange(90, 110) / 100)),
  }))
}

// Generate cache size history
function generateCacheSizeHistory(days: number): { date: string; size: number }[] {
  const dates = generateDates(days)
  const history: { date: string; size: number }[] = []

  // Start with a base size and gradually increase
  let baseSize = 18

  for (let i = 0; i < dates.length; i++) {
    // Add some randomness and a slight upward trend
    const randomFactor = randomInRange(95, 105) / 100
    baseSize += randomInRange(0, 2) / 10 // Small increase each day

    const size = Number.parseFloat((baseSize * randomFactor).toFixed(1))
    history.push({ date: dates[i], size })
  }

  return history
}

// Generate top pages data
function generateTopPages(): PageData[] {
  const pages = [
    { path: "/", title: "Home Page" },
    { path: "/search-engine-optimization", title: "SEO Services" },
    { path: "/social-media-marketing", title: "Social Media Marketing" },
    { path: "/content-marketing", title: "Content Marketing" },
    { path: "/website-development", title: "Website Development" },
    { path: "/about", title: "About Us" },
    { path: "/contact", title: "Contact Us" },
    { path: "/case-studies", title: "Case Studies" },
    { path: "/blog", title: "Blog" },
    { path: "/join-our-team", title: "Careers" },
  ]

  return pages
    .map((page) => {
      // Generate realistic view and visitor counts
      const visitors = randomInRange(page.path === "/" ? 2000 : 500, page.path === "/" ? 5000 : 2000)

      const viewsPerVisitor = randomInRange(12, 25) / 10 // 1.2 to 2.5 views per visitor
      const views = Math.floor(visitors * viewsPerVisitor)

      return {
        ...page,
        views,
        visitors,
      }
    })
    .sort((a, b) => b.views - a.views) // Sort by views descending
}

// Main function to generate all analytics data
export async function fetchAnalyticsData(): Promise<AnalyticsData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Generate visitor data
  const visitorHistory = generateVisitorHistory(30, 400)
  const totalVisitors = visitorHistory.reduce((sum, day) => sum + day.count, 0)

  // Calculate visitor change percentage (compare last 15 days to previous 15 days)
  const recentVisitors = visitorHistory.slice(15).reduce((sum, day) => sum + day.count, 0)
  const previousVisitors = visitorHistory.slice(0, 15).reduce((sum, day) => sum + day.count, 0)
  const visitorChange = Number.parseFloat((((recentVisitors - previousVisitors) / previousVisitors) * 100).toFixed(1))

  // Generate page view data
  const avgPagesPerVisitor = randomInRange(22, 28) / 10 // 2.2 to 2.8 pages per visitor
  const pageViewHistory = generatePageViewHistory(visitorHistory, avgPagesPerVisitor)
  const totalPageViews = pageViewHistory.reduce((sum, day) => sum + day.count, 0)

  // Calculate page view change percentage
  const recentPageViews = pageViewHistory.slice(15).reduce((sum, day) => sum + day.count, 0)
  const previousPageViews = pageViewHistory.slice(0, 15).reduce((sum, day) => sum + day.count, 0)
  const pageViewChange = Number.parseFloat(
    (((recentPageViews - previousPageViews) / previousPageViews) * 100).toFixed(1),
  )

  // Generate cache stats
  const cacheHistory = generateCacheSizeHistory(30)
  const currentCacheSize = cacheHistory[cacheHistory.length - 1].size.toFixed(1) + " MB"
  const cacheItems = randomInRange(140, 170)

  // Generate consent rate data
  const totalUsers = totalVisitors
  const consentPercentage = randomInRange(75, 82)
  const acceptedUsers = Math.floor((totalUsers * consentPercentage) / 100)

  // Generate top pages data
  const topPages = generateTopPages()

  return {
    visitors: {
      total: totalVisitors,
      change: visitorChange,
      history: visitorHistory,
    },
    pageViews: {
      total: totalPageViews,
      change: pageViewChange,
      history: pageViewHistory,
    },
    cacheStats: {
      size: currentCacheSize,
      items: cacheItems,
      history: cacheHistory,
    },
    consentRate: {
      percentage: consentPercentage,
      accepted: acceptedUsers,
      total: totalUsers,
    },
    topPages,
    lastUpdated: new Date().toISOString(),
  }
}

