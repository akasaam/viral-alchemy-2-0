"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Rocket, Clock, Users } from "lucide-react";
import { TextReveal } from "@/components/text-reveal";
import { MovingBorder } from "@/components/moving-border";
import { CardWithTruncate } from "@/components/card-with-truncate";
import { BackButton } from "@/components/back-button";

export default function JoinOurTeam() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    message: "",
    resume: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create message for WhatsApp
    let message = `*Job Application*\n\n`;
    message += `*Name:* ${formData.firstName} ${formData.lastName}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Position:* ${formData.position}\n`;
    message += `*Message:* ${formData.message}\n\n`;
    message += `*Note:* Resume will be sent separately as WhatsApp doesn't support file attachments via URL.`;

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/917501411769?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      message: "",
      resume: null,
    });

    // Alert user about resume
    alert(
      "Your application has been sent! Please send your resume directly through WhatsApp for a complete application."
    );
  };

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
                    text="Join Our Team"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Be part of a creative, innovative team that's transforming
                    the digital marketing landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Link href="#open-positions">View Open Positions</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#why-join-us">Why Join Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MovingBorder className="p-1">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    width={550}
                    height={550}
                    alt="Team Collaboration"
                    className="rounded-lg object-cover"
                    priority
                  />
                </MovingBorder>
              </div>
            </div>
          </div>
        </section>

        <section id="why-join-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Why Join Us
                </div>
                <TextReveal
                  text="What Makes viral alchemy Special"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We're more than just a digital marketing agency. We're a
                  family of creative minds and strategic thinkers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <CardWithTruncate className="h-[400px] flex flex-col w-full">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Growth Opportunities</CardTitle>
                  <CardDescription>
                    We invest in your professional development and career
                    growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Professional Training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mentorship Programs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Career Advancement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Skill Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Leadership Opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Industry Certifications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </CardWithTruncate>
              <CardWithTruncate className="h-[400px] flex flex-col w-full">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Work-Life Balance</CardTitle>
                  <CardDescription>
                    We believe in maintaining a healthy balance between work and
                    personal life.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Flexible Working Hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Remote Work Options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Paid Time Off</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mental Health Days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Wellness Programs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Family-Friendly Policies</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </CardWithTruncate>
              <CardWithTruncate className="h-[400px] flex flex-col w-full">
                <CardHeader>
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Collaborative Culture</CardTitle>
                  <CardDescription>
                    We foster a supportive environment where everyone's ideas
                    are valued.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Team Building Activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Open Communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Diverse & Inclusive</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Recognition Programs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Collaborative Projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Knowledge Sharing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </CardWithTruncate>
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
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our core values guide everything we do and shape our company
                  culture.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new ideas and technologies to stay ahead of the
                  curve.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and ethical standards
                  in all we do.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and diverse perspectives.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest quality in everything we deliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="open-positions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Careers
                </div>
                <TextReveal
                  text="Open Positions"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join our team of talented professionals and help us create
                  digital marketing magic.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 space-y-6">
              <Card className="overflow-hidden w-full">
                <CardHeader>
                  <CardTitle>Senior Digital Marketing Specialist</CardTitle>
                  <CardDescription>Full-time • Remote</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're looking for an experienced digital marketing
                    specialist to lead campaigns and develop strategies for our
                    clients. The ideal candidate has 3+ years of experience in
                    digital marketing with a strong background in SEO, PPC, and
                    social media marketing.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden w-full">
                <CardHeader>
                  <CardTitle>Web Developer</CardTitle>
                  <CardDescription>Full-time • Hybrid</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're seeking a talented web developer to join our growing
                    team. The ideal candidate has experience with modern web
                    technologies including React, Next.js, and responsive design
                    principles. You'll be responsible for building beautiful,
                    functional websites for our clients.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden w-full">
                <CardHeader>
                  <CardTitle>Content Writer</CardTitle>
                  <CardDescription>Part-time • Remote</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're looking for a creative content writer with a passion
                    for digital marketing. The ideal candidate has excellent
                    writing skills, SEO knowledge, and the ability to create
                    engaging content across various industries. You'll be
                    responsible for blog posts, social media content, and
                    website copy.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Apply
                </div>
                <TextReveal
                  text="Join Our Growing Team"
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                />
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't see a position that fits your skills? We're always
                  looking for talented individuals to join our team.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg py-12">
              <Card>
                <CardHeader>
                  <CardTitle>General Application</CardTitle>
                  <CardDescription>
                    Tell us about yourself and why you'd be a great fit for
                    viral alchemy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium leading-none"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium leading-none"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="position"
                        className="text-sm font-medium leading-none"
                      >
                        Position of Interest
                      </label>
                      <Input
                        id="position"
                        name="position"
                        placeholder="e.g., Digital Marketing Specialist"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none"
                      >
                        Why do you want to join viral alchemy?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about yourself and why you'd be a great fit..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="resume"
                        className="text-sm font-medium leading-none"
                      >
                        Resume/CV
                      </label>
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        onChange={handleFileChange}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Your resume will be sent via WhatsApp after form
                        submission.
                      </p>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
