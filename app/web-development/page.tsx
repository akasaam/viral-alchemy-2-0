import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { TextReveal } from "@/components/text-reveal"
import { MovingBorder } from "@/components/moving-border"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackButton } from "@/components/back-button"
import { CardWithTruncate } from "@/components/card-with-truncate"

export default function WebsiteDevelopment() {
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
                    text="Website Development Services"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                  />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create stunning, high-performance websites that drive results for your business.
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
                    message="Hello, I'm interested in your website development services!"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MovingBorder className="p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Website Development"
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
                  text="Building Digital Experiences That Convert"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We combine stunning design with powerful functionality to create websites that drive business results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <CardWithTruncate
                title="Custom Web Design"
                description="Tailored designs that reflect your brand identity and engage your audience."
                content={
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Responsive Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>User Experience Focus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Brand Consistency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Conversion-Optimized</span>
                    </li>
                  </ul>
                }
                footer={
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                }
              />
              <CardWithTruncate
                title="E-Commerce Development"
                description="Powerful online stores that drive sales and provide seamless shopping experiences."
                content={
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Secure Payment Gateways</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Inventory Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mobile Shopping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Analytics Integration</span>
                    </li>
                  </ul>
                }
                footer={
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                }
              />
              <CardWithTruncate
                title="CMS Implementation"
                description="Easy-to-use content management systems that give you control over your website."
                content={
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>WordPress Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom CMS Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>User-Friendly Interface</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Training & Support</span>
                    </li>
                  </ul>
                }
                footer={
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                }
              />
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
                  text="How We Build Your Website"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our proven development process ensures your project is completed on time, on budget, and exceeds
                  expectations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold tracking-wide">Discovery</h3>
                <p className="text-muted-foreground">
                  We learn about your business, goals, and target audience to create a strategic plan.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold tracking-wide">Design</h3>
                <p className="text-muted-foreground">
                  We create wireframes and mockups that align with your brand and business objectives.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold tracking-wide">Development</h3>
                <p className="text-muted-foreground">
                  Our developers bring the designs to life with clean, efficient code and powerful functionality.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold tracking-wide">Launch & Support</h3>
                <p className="text-muted-foreground">
                  We thoroughly test your website, launch it, and provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Technologies
                </div>
                <TextReveal
                  text="Built With Modern Technologies"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We use the latest technologies and frameworks to build fast, secure, and scalable websites.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                    width={64}
                    height={64}
                    alt="React"
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">React</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                    width={64}
                    height={64}
                    alt="Next.js"
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">Next.js</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"
                    width={64}
                    height={64}
                    alt="WordPress"
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">WordPress</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                    width={64}
                    height={64}
                    alt="Shopify"
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">Shopify</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                    width={64}
                    height={64}
                    alt="Tailwind CSS"
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-16 w-16 flex items-center justify-center">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                    width={64}
                    height={64}
                    alt="Node.js"
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">Node.js</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Get Started
                </div>
                <TextReveal
                  text="Ready to Build Your Dream Website?"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Contact us today to discuss your project and get a free consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <Card className="w-full">
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
                      <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
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
