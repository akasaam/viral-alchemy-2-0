import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { TextReveal } from "@/components/text-reveal"
import { MovingBorder } from "@/components/moving-border"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackButton } from "@/components/back-button"

export default function SocialMedia() {
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
                    text="Social Media Management"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                  />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Build your brand presence and engage your audience across all social platforms with strategic
                    content and community management.
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
                    message="Hello, I'm interested in your social media services!"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MovingBorder className="p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Social Media Management"
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
                  text="Strategic Social Media Management"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We create tailored social media strategies that align with your business goals and resonate with your
                  target audience across all platforms.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-1xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col h-[400px] w-[300px] hover:bg-gray-200/15 ">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Instagram Management</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Content Creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Story & Reel Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hashtag Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Community Engagement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Analytics & Insights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Growth Strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-[400px] w-[300px] hover:bg-gray-200/15 ">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Facebook Management</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Page Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Content Scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Community Building</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Event Promotion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Customer Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Performance Tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-[400px] w-[300px] hover:bg-gray-200/15 ">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Twitter Management</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Content Calendar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Trend Monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Real-time Engagement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Thread Creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Follower Growth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Crisis Management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-[400px] w-[300px] hover:bg-gray-200/15  ">
                <CardHeader className="pb-4">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Youtube className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>YouTube Management</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Channel Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Video SEO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Content Strategy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Thumbnail Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Subscriber Growth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Community Engagement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
                  text="How We Boost Your Social Media Presence"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our proven social media management process ensures your brand stands out in the crowded digital
                  landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold tracking-wide">Strategy</h3>
                <p className="text-muted-foreground">
                  We analyze your audience, competitors, and industry trends to develop a strategic plan.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold tracking-wide">Create</h3>
                <p className="text-muted-foreground">
                  We develop engaging content that resonates with your audience and reflects your brand voice.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold tracking-wide">Engage</h3>
                <p className="text-muted-foreground">
                  We actively manage your social media presence, engaging with your audience and building community.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold tracking-wide">Optimize</h3>
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
                  text="Ready to Transform Your Social Media Presence?"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Contact us today to discuss your social media needs and get a free consultation.
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
                        placeholder="Tell us about your social media goals..."
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
