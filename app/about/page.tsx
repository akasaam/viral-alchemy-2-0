import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { MovingBorder } from "@/components/moving-border"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackButton } from "@/components/back-button"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-grid relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-30" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mb-8">
              <BackButton />
            </div>
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
                  <WhatsAppButton
                    phoneNumber="+917074225593"
                    message="Hello, I'd like to learn more about Viral Alchemy's services!"
                  />
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Mission
                </div>
                <TextReveal
                  text="Transforming Digital Presence"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  We're on a mission to help brands stand out in the crowded digital landscape through strategic
                  marketing alchemy.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-6 text-center">
                <p className="text-lg">
                  At Viral Alchemy, we believe that exceptional digital marketing is both an art and a science. It
                  requires creativity, strategic thinking, and data-driven decision making.
                </p>
                <p className="text-lg">
                  Our mission is to transform ordinary brands into extraordinary digital experiences by combining these
                  elements in perfect harmony - just like alchemists of old transformed base metals into gold.
                </p>
                <p className="text-lg">
                  We're committed to staying at the forefront of digital marketing trends and technologies, continuously
                  evolving our strategies to help our clients achieve remarkable results in an ever-changing landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Values
                </div>
                <TextReveal
                  text="What We Stand For"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  Our core values guide everything we do and shape our company culture.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-8 w-8"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-wide">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new ideas and technologies to stay ahead of the curve.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-8 w-8"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-wide">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and ethical standards in all we do.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-8 w-8"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-wide">Collaboration</h3>
                <p className="text-muted-foreground">We believe in the power of teamwork and diverse perspectives.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-8 w-8"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold tracking-wide">Excellence</h3>
                <p className="text-muted-foreground">We strive for the highest quality in everything we deliver.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Join Us
                </div>
                <TextReveal
                  text="Become Part of Our Story"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  We're always looking for talented individuals to join our growing team.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Link href="/join-our-team">View Open Positions</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
