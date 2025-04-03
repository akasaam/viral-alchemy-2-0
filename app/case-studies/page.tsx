import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TextReveal } from "@/components/text-reveal"
import { BackButton } from "@/components/back-button"
import { CardWithTruncate } from "@/components/card-with-truncate"

export default function CaseStudies() {
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
                  text="Our Success Stories"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  See how we've helped brands like yours achieve remarkable results in the digital space.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="TechNova Rebrand"
                    className="object-cover transition-all hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="flex-grow">
                  <CardWithTruncate
                    title="TechNova Rebrand"
                    description="How we helped a tech startup increase their conversion rate by 150% through strategic rebranding."
                    content={
                      <p className="text-sm text-muted-foreground">
                        TechNova was struggling to stand out in a crowded market. We developed a comprehensive
                        rebranding strategy that included a new visual identity, messaging framework, and digital
                        presence.
                      </p>
                    }
                    footer={
                      <Button variant="outline" className="w-full">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                    height="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="EcoLife Social Campaign"
                    className="object-cover transition-all hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="flex-grow">
                  <CardWithTruncate
                    title="EcoLife Social Campaign"
                    description="How we helped a sustainable lifestyle brand increase their social media engagement by 200%."
                    content={
                      <p className="text-sm text-muted-foreground">
                        EcoLife wanted to expand their reach and connect with environmentally conscious consumers. We
                        developed a multi-platform social media strategy that resonated with their target audience.
                      </p>
                    }
                    footer={
                      <Button variant="outline" className="w-full">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                    height="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Luxury Brand Campaign"
                    className="object-cover transition-all hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="flex-grow">
                  <CardWithTruncate
                    title="Luxury Brand Campaign"
                    description="How we helped a luxury fashion brand increase online sales by 120% through targeted digital marketing."
                    content={
                      <p className="text-sm text-muted-foreground">
                        This luxury brand needed to transition from traditional marketing to digital channels without
                        losing their premium positioning. We created a strategy that maintained their exclusive brand
                        image.
                      </p>
                    }
                    footer={
                      <Button variant="outline" className="w-full">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                    height="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="SaaS Growth Strategy"
                    className="object-cover transition-all hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="flex-grow">
                  <CardWithTruncate
                    title="SaaS Growth Strategy"
                    description="How we helped a B2B SaaS company increase lead generation by 180% through content marketing."
                    content={
                      <p className="text-sm text-muted-foreground">
                        This SaaS company was struggling to generate quality leads. We developed a comprehensive content
                        strategy that positioned them as thought leaders in their industry.
                      </p>
                    }
                    footer={
                      <Button variant="outline" className="w-full">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                    height="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="E-commerce Optimization"
                    className="object-cover transition-all hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="flex-grow">
                  <CardWithTruncate
                    title="E-commerce Optimization"
                    description="How we helped an online retailer increase their conversion rate by 85% and average order value by 35%."
                    content={
                      <p className="text-sm text-muted-foreground">
                        This e-commerce brand was experiencing high traffic but low conversion rates. We implemented a
                        comprehensive optimization strategy that improved the user experience and checkout process.
                      </p>
                    }
                    footer={
                      <Button variant="outline" className="w-full">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                    height="300px"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Startup Launch Campaign"
                    className="object-cover transition-all hover:scale-105 h-full w-full"
                  />
                </div>
                <div className="flex-grow">
                  <CardWithTruncate
                    title="Startup Launch Campaign"
                    description="How we helped a fintech startup achieve 10,000 users within the first month of launch."
                    content={
                      <p className="text-sm text-muted-foreground">
                        This fintech startup needed to make a big splash in a competitive market. We developed an
                        integrated marketing campaign that included PR, social media, and influencer partnerships to
                        drive awareness and user acquisition.
                      </p>
                    }
                    footer={
                      <Button variant="outline" className="w-full">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    }
                    height="300px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Work With Us
                </div>
                <TextReveal
                  text="Ready to Be Our Next Success Story?"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  Let's discuss how we can help your brand achieve remarkable results in the digital space.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Link href="/#contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

