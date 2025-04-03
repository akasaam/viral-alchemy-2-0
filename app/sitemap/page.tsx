import Link from "next/link"
import { BackButton } from "@/components/back-button"
import { TextReveal } from "@/components/text-reveal"

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Join Our Team", url: "/join-our-team" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Social Media Marketing", url: "/social-media-marketing" },
        { name: "Search Engine Optimization", url: "/search-engine-optimization" },
        { name: "Content Marketing", url: "/content-marketing" },
        { name: "Website Development", url: "/website-development" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Sitemap", url: "/sitemap" },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-grid relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-30" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mb-8">
              <BackButton />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <TextReveal
                  text="Sitemap"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                />
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                  Find everything you need on our website
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-3">
                {sitemapSections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.url} className="text-muted-foreground hover:text-primary transition-colors">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

