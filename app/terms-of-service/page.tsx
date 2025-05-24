import { BackButton } from "@/components/back-button";
import { TextReveal } from "@/components/text-reveal";

export default function TermsOfService() {
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
                  text="Terms of Service"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                />
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                  Last updated: March 25, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground">
                  These Terms of Service constitute a legally binding agreement
                  made between you and viral alchemy ("we," "us," or "our"),
                  concerning your access to and use of our website and services.
                </p>
                <p className="text-muted-foreground">
                  You agree that by accessing the website and/or services, you
                  have read, understood, and agree to be bound by all of these
                  Terms of Service. If you do not agree with all of these Terms
                  of Service, then you are expressly prohibited from using the
                  website and/or services and you must discontinue use
                  immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground">
                  Unless otherwise indicated, the website and services are our
                  proprietary property and all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics on the website (collectively, the
                  "Content") and the trademarks, service marks, and logos
                  contained therein (the "Marks") are owned or controlled by us
                  or licensed to us, and are protected by copyright and
                  trademark laws and various other intellectual property rights.
                </p>
                <p className="text-muted-foreground">
                  The Content and Marks are provided on the website "AS IS" for
                  your information and personal use only. Except as expressly
                  provided in these Terms of Service, no part of the website or
                  services and no Content or Marks may be copied, reproduced,
                  aggregated, republished, uploaded, posted, publicly displayed,
                  encoded, translated, transmitted, distributed, sold, licensed,
                  or otherwise exploited for any commercial purpose whatsoever,
                  without our express prior written permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  User Representations
                </h2>
                <p className="text-muted-foreground">
                  By using the website and/or services, you represent and
                  warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    All registration information you submit will be true,
                    accurate, current, and complete.
                  </li>
                  <li>
                    You will maintain the accuracy of such information and
                    promptly update such registration information as necessary.
                  </li>
                  <li>
                    You have the legal capacity and you agree to comply with
                    these Terms of Service.
                  </li>
                  <li>
                    You are not a minor in the jurisdiction in which you reside.
                  </li>
                  <li>
                    You will not access the website or services through
                    automated or non-human means, whether through a bot, script,
                    or otherwise.
                  </li>
                  <li>
                    You will not use the website or services for any illegal or
                    unauthorized purpose.
                  </li>
                  <li>
                    Your use of the website or services will not violate any
                    applicable law or regulation.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Prohibited Activities
                </h2>
                <p className="text-muted-foreground">
                  You may not access or use the website or services for any
                  purpose other than that for which we make them available. The
                  website and services may not be used in connection with any
                  commercial endeavors except those that are specifically
                  endorsed or approved by us.
                </p>
                <p className="text-muted-foreground">
                  As a user of the website or services, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Systematically retrieve data or other content from the
                    website or services to create or compile, directly or
                    indirectly, a collection, compilation, database, or
                    directory without written permission from us.
                  </li>
                  <li>
                    Make any unauthorized use of the website or services,
                    including collecting usernames and/or email addresses of
                    users by electronic or other means for the purpose of
                    sending unsolicited email, or creating user accounts by
                    automated means or under false pretenses.
                  </li>
                  <li>
                    Use the website or services to advertise or offer to sell
                    goods and services.
                  </li>
                  <li>
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the website or services.
                  </li>
                  <li>
                    Engage in unauthorized framing of or linking to the website
                    or services.
                  </li>
                  <li>
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </li>
                  <li>
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </li>
                  <li>
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </li>
                  <li>
                    Interfere with, disrupt, or create an undue burden on the
                    website or services or the networks or services connected to
                    the website or services.
                  </li>
                  <li>
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </li>
                  <li>
                    Use any information obtained from the website or services in
                    order to harass, abuse, or harm another person.
                  </li>
                  <li>
                    Use the website or services as part of any effort to compete
                    with us or otherwise use the website or services and/or the
                    Content for any revenue-generating endeavor or commercial
                    enterprise.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  In no event will we or our directors, employees, or agents be
                  liable to you or any third party for any direct, indirect,
                  consequential, exemplary, incidental, special, or punitive
                  damages, including lost profit, lost revenue, loss of data, or
                  other damages arising from your use of the website or
                  services, even if we have been advised of the possibility of
                  such damages.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have questions or comments about these Terms of
                  Service, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  viral alchemy
                  <br />
                  KholaChand Fapri, Bypass Road
                  <br />
                  Siliguri, West Bengal 734008
                  <br />
                  India
                  <br />
                  Email: saambarlin@gmail.com
                  <br />
                  Phone: +91 7501411769
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
