"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { TextReveal } from "@/components/text-reveal"
import { MovingBorder } from "@/components/moving-border"
import { HorizontalScroll, HorizontalScrollItem } from "@/components/horizontal-scroll"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServicesDropdown } from "@/components/services-dropdown"
import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.97])

  // Handle form submission to WhatsApp
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("first-name")
    const lastName = formData.get("last-name")
    const email = formData.get("email")
    const company = formData.get("company")
    const message = formData.get("message")

    const whatsappMessage = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    )

    window.open(`https://wa.me/917501411769?text=${whatsappMessage}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">VA</div>
            </div>
            <span className="text-xl font-bold">Viral Alchemy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <ServicesDropdown />

            <Link href="/case-studies" className="text-sm font-medium hover:text-primary">
              Case Studies
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-6 bg-background border-b"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/case-studies"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-grid relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-30"
            style={{ opacity, scale }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <TextReveal
                    text="Transform Your Digital Presence"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                  />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We turn ordinary brands into extraordinary digital experiences through strategic marketing alchemy.
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
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MovingBorder className="p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Digital Marketing Strategy"
                    className="rounded-lg object-cover"
                    priority
                  />
                </MovingBorder>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <TextReveal
                  text="Digital Marketing Solutions"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We offer a comprehensive suite of digital marketing services to help your brand stand out in the
                  digital landscape.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-1xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-5">
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="relative overflow-hidden h-[400px]  hover:bg-gray-200/15 flex flex-col w-full">
                  <CardHeader>
                    <CardTitle>Social Media</CardTitle>
                    <CardDescription>
                      Build your brand presence and engage your audience across all social platforms.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Content Creation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Community Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Platform Strategy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Analytics & Reporting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Influencer Partnerships</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/social-media">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="relative overflow-hidden h-[400px] hover:bg-gray-200/15  flex flex-col w-full">
                  <CardHeader>
                    <CardTitle>Graphics Design</CardTitle>
                    <CardDescription>
                      Create stunning visual content that captures attention and communicates your brand message.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Logo Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Brand Identity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Marketing Materials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Social Media Graphics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Print Design</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/graphics-design">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="relative overflow-hidden h-[400px] hover:bg-gray-200/15  flex flex-col w-full">
                  <CardHeader>
                    <CardTitle>Video Editing</CardTitle>
                    <CardDescription>
                      Professional video editing services that bring your stories to life with impact.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Promotional Videos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Social Media Content</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Motion Graphics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Color Correction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Audio Enhancement</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/video-editing">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="relative overflow-hidden h-[400px] hover:bg-gray-200/15  flex flex-col w-full">
                  <CardHeader>
                    <CardTitle>Meta Ads</CardTitle>
                    <CardDescription>
                      Drive targeted traffic and conversions with strategic Facebook and Instagram advertising.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Campaign Strategy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Audience Targeting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Ad Creative Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Performance Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>ROI Tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/meta-ads">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="relative overflow-hidden h-[400px] hover:bg-gray-200/15  flex flex-col w-full">
                  <CardHeader>
                    <CardTitle>Web Development</CardTitle>
                    <CardDescription>
                      Create stunning, high-performance websites that drive results for your business.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Custom Web Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>E-Commerce Solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Responsive Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>SEO Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Website Maintenance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/web-development">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Case Studies
                </div>
                <TextReveal
                  text="Our Success Stories"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See how we've helped brands like yours achieve remarkable results in the digital space.
                </p>
              </div>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/case-studies">View All Case Studies</Link>
              </Button>
            </div>

            <HorizontalScroll>
              <HorizontalScrollItem>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                      width={600}
                      height={400}
                      alt="TechNova Rebrand"
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>TechNova Rebrand</CardTitle>
                    <CardDescription>
                      How we helped a tech startup increase their conversion rate by 150% through strategic rebranding.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      TechNova was struggling to stand out in a crowded market. We developed a comprehensive rebranding
                      strategy that included a new visual identity, messaging framework, and digital presence.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </HorizontalScrollItem>
              <HorizontalScrollItem>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                      width={600}
                      height={400}
                      alt="EcoLife Social Campaign"
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>EcoLife Social Campaign</CardTitle>
                    <CardDescription>
                      How we helped a sustainable lifestyle brand increase their social media engagement by 200%.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      EcoLife wanted to expand their reach and connect with environmentally conscious consumers. We
                      developed a multi-platform social media strategy that resonated with their target audience.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </HorizontalScrollItem>
              <HorizontalScrollItem>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop"
                      width={600}
                      height={400}
                      alt="Luxury Brand Campaign"
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Luxury Brand Campaign</CardTitle>
                    <CardDescription>
                      How we helped a luxury fashion brand increase online sales by 120% through targeted digital
                      marketing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This luxury brand needed to transition from traditional marketing to digital channels without
                      losing their premium positioning. We created a strategy that maintained their exclusive brand
                      image.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </HorizontalScrollItem>
              <HorizontalScrollItem>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                      width={600}
                      height={400}
                      alt="SaaS Growth Strategy"
                      className="object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>SaaS Growth Strategy</CardTitle>
                    <CardDescription>
                      How we helped a B2B SaaS company increase lead generation by 180% through content marketing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This SaaS company was struggling to generate quality leads. We developed a comprehensive content
                      strategy that positioned them as thought leaders in their industry.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </HorizontalScrollItem>
            </HorizontalScroll>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    About Us
                  </div>
                  <TextReveal
                    text="The Viral Alchemy Story"
                    className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                  />
                  <p className="text-muted-foreground md:text-xl">
                    Founded in 2018, Viral Alchemy was born from a passion for helping brands navigate the ever-evolving
                    digital landscape.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our team of digital marketing experts combines creativity with data-driven strategies to deliver
                    exceptional results for our clients. We believe in transparency, collaboration, and continuous
                    innovation.
                  </p>
                  <p className="text-muted-foreground">
                    What sets us apart is our commitment to understanding your business goals and crafting tailored
                    solutions that drive real growth. We don't just execute campaigns; we build lasting partnerships.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/join-our-team">Work With Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MovingBorder className="p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Our Team"
                    className="rounded-lg object-cover"
                  />
                </MovingBorder>
              </div>
            </div>
          </div>
        </section>

       

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Contact Us
                  </div>
                  <TextReveal
                    text="Let's Transform Your Digital Presence"
                    className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                  />
                  <p className="text-muted-foreground md:text-xl">
                    Ready to take your brand to the next level? Get in touch with our team to discuss your digital
                    marketing needs.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">Siliguri, West Bengal, India</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">saambarlin@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">+91 7074225593</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <WhatsAppButton
                    phoneNumber="+917074225593"
                    message="Hello, I'd like to discuss working with Viral Alchemy!"
                    className="w-full md:w-auto"
                  />
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Page</Link>
                  </Button>
                </div>
                <div className="mt-6 p-4 border rounded-lg bg-muted/30">
                  <p className="text-center text-muted-foreground">
                    KholaChand Fapri, Bypass Road army camp road, near hathway cable store, Siliguri, West Bengal 734008
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4" onSubmit={handleContactSubmit}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First Name
                          </label>
                          <Input id="first-name" name="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last Name
                          </label>
                          <Input id="last-name" name="last-name" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input id="email" name="email" placeholder="john.doe@example.com" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Company
                        </label>
                        <Input id="company" name="company" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          className="min-h-[120px]"
                          required
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
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">VA</div>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Viral Alchemy. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm font-medium hover:underline underline-offset-4">
              Sitemap
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
