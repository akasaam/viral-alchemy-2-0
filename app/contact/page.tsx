import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { TextReveal } from "@/components/text-reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackButton } from "@/components/back-button";

export default function Contact() {
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
                  text="Get in Touch"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                />
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                  Ready to transform your digital presence? We&apos;d love to
                  hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
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
                    Ready to take your brand to the next level? Get in touch
                    with our team to discuss your digital marketing needs.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">
                      Siliguri, West Bengal ,India
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">
                      saambarlin@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <p className="text-muted-foreground">+91 7501411769</p>
                  </div>
                </div>
                <WhatsAppButton
                  phoneNumber="+917501411769"
                  message="Hello, I'd like to discuss working with viral alchemy!"
                  className="w-full md:w-auto"
                />
                <div className="mt-6 p-4 border rounded-lg bg-muted/30">
                  <p className="text-center text-muted-foreground">
                    KholaChand Fapri, Bypass Road army camp road, near hathway
                    cable store, Siliguri, West Bengal 734008
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First Name
                          </label>
                          <Input
                            id="first-name"
                            name="first-name"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last Name
                          </label>
                          <Input
                            id="last-name"
                            name="last-name"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="john.doe@example.com"
                          type="email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Inc."
                        />
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  FAQ
                </div>
                <TextReveal
                  text="Frequently Asked Questions"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight tracking-wide"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  Find answers to common questions about our services and
                  process.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12 space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-wide">
                  What services do you offer?
                </h3>
                <p className="text-muted-foreground">
                  We offer a comprehensive suite of digital marketing services
                  including social media marketing, search engine optimization
                  (SEO), content marketing, and website development. Each
                  service is tailored to meet your specific business goals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-wide">
                  How much do your services cost?
                </h3>
                <p className="text-muted-foreground">
                  Our pricing varies based on the scope of work, your specific
                  needs, and the services required. We offer customized packages
                  to fit different budgets. Contact us for a free consultation
                  and quote.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-wide">
                  How long does it take to see results?
                </h3>
                <p className="text-muted-foreground">
                  The timeline for results varies depending on the service and
                  your starting point. Some services like PPC advertising can
                  show immediate results, while others like SEO typically take
                  3-6 months to see significant improvements. We&apos;ll provide
                  realistic timelines during our consultation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-wide">
                  Do you work with businesses of all sizes?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we work with businesses of all sizes, from startups to
                  established enterprises. Our strategies are tailored to your
                  specific needs, goals, and budget.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-wide">
                  How do you measure success?
                </h3>
                <p className="text-muted-foreground">
                  We establish clear KPIs at the beginning of our engagement
                  based on your business goals. These might include metrics like
                  website traffic, conversion rates, lead generation, social
                  media engagement, and ROI. We provide regular reports that
                  track these metrics and show the impact of our work on your
                  business goals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-wide">
                  What industries do you specialize in?
                </h3>
                <p className="text-muted-foreground">
                  We have experience working with clients across various
                  industries including technology, e-commerce, healthcare,
                  finance, education, and more. Our diverse experience allows us
                  to bring fresh perspectives and proven strategies to your
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
