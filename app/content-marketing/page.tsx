import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Mail, Video, Newspaper } from "lucide-react"
import { TextReveal } from "@/components/text-reveal"
import { MovingBorder } from "@/components/moving-border"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackButton } from "@/components/back-button"
import { CardWithTruncate } from "@/components/card-with-truncate"

export default function ContentMarketing() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-grid relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-30" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mb-8">
              <BackButton />
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <TextReveal
                    text="Content Marketing"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                  />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Tell your brand story and establish authority with compelling content that converts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                  <WhatsAppButton
                    phoneNumber="+917501411769"
                    message="Hello, I'm interested in your content marketing services!"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MovingBorder className="p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Content Marketing"
                    className="rounded-lg object-cover"
                    priority
                  />
                </MovingBorder>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Approach
                </div>
                <TextReveal
                  text="Strategic Content Creation"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We create compelling content that engages your audience, builds your brand authority, and drives
                  conversions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-1xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <CardWithTruncate className="h-[400px] w-[300px] hover:bg-gray-200/15 flex flex-col w-full ">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Blog Writing</CardTitle>
                  <CardDescription>
                    Engage your audience with informative and SEO-optimized blog content.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Keyword Research</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Topic Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>SEO Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Content Calendar</span>
                    </li>
                  </ul>
                </CardContent>
              </CardWithTruncate>
              <CardWithTruncate className="h-[400px] w-[300px] hover:bg-gray-200/15 flex flex-col w-full">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Campaigns</CardTitle>
                  <CardDescription>Nurture leads and drive conversions with strategic email marketing.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Campaign Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Email Copywriting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>A/B Testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Performance Analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </CardWithTruncate>
              <CardWithTruncate className="h-[400px] w-[300px] hover:bg-gray-200/15 flex flex-col w-full">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Video Production</CardTitle>
                  <CardDescription>
                    Engage your audience with compelling video content across platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Concept Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Scriptwriting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Production</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Distribution Strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </CardWithTruncate>
              <CardWithTruncate className="h-[400px] w-[300px] hover:bg-gray-200/15 flex flex-col w-full">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Newspaper className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Whitepapers & Guides</CardTitle>
                  <CardDescription>Establish thought leadership with in-depth industry content.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Research & Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Content Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Design & Layout</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Lead Generation</span>
                    </li>
                  </ul>
                </CardContent>
              </CardWithTruncate>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Process
                </div>
                <TextReveal
                  text="How We Create Content That Converts"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our proven content marketing process ensures your content resonates with your audience and drives
                  results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold tracking-wide">Research</h3>
                <p className="text-muted-foreground">
                  We analyze your audience, competitors, and industry trends to develop a content strategy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold tracking-wide">Create</h3>
                <p className="text-muted-foreground">
                  We develop engaging, SEO-optimized content that aligns with your brand voice and business goals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold tracking-wide">Distribute</h3>
                <p className="text-muted-foreground">
                  We strategically distribute your content across relevant channels to maximize reach and engagement.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold tracking-wide">Analyze</h3>
                <p className="text-muted-foreground">
                  We continuously monitor performance, providing detailed reports and optimizing for better results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Get Started
                </div>
                <TextReveal
                  text="Ready to Tell Your Brand Story?"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Contact us today to discuss your content marketing needs and get a free consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <Input id="email" placeholder="john.doe@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your content needs..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

