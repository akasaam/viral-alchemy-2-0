import { BackButton } from "@/components/back-button"
import { TextReveal } from "@/components/text-reveal"

export default function PrivacyPolicy() {
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
                  text="Privacy Policy"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none tracking-wide"
                />
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">Last updated: March 25, 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Introduction</h2>
                <p className="text-muted-foreground">
                  Viral Alchemy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website or
                  use our services.
                </p>
                <p className="text-muted-foreground">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                  please do not access the site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We may collect information about you in a variety of ways. The information we may collect via the
                  website includes:
                </p>
                <h3 className="text-xl font-semibold">Personal Data</h3>
                <p className="text-muted-foreground">
                  Personally identifiable information, such as your name, email address, telephone number, and other
                  similar information that you voluntarily provide to us when you register with the website or when you
                  choose to contact us.
                </p>
                <h3 className="text-xl font-semibold">Derivative Data</h3>
                <p className="text-muted-foreground">
                  Information our servers automatically collect when you access the website, such as your IP address,
                  browser type, operating system, access times, and the pages you have viewed directly before and after
                  accessing the website.
                </p>
                <h3 className="text-xl font-semibold">Device Data</h3>
                <p className="text-muted-foreground">
                  Device information such as your mobile device ID, model, and manufacturer, and information about the
                  location of your device, if you access the website from a mobile device.
                </p>
                <h3 className="text-xl font-semibold">Financial Data</h3>
                <p className="text-muted-foreground">
                  Financial information, such as data related to your payment method (e.g., valid credit card number,
                  card brand, expiration date) that we may collect when you purchase, order, return, exchange, or
                  request information about our services.
                </p>
                <h3 className="text-xl font-semibold">Cookies and Web Beacons</h3>
                <p className="text-muted-foreground">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to
                  help customize the website and improve your experience. For more information on how we use cookies,
                  please refer to our Cookie Policy section below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Use of Your Information</h2>
                <p className="text-muted-foreground">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and
                  customized experience. Specifically, we may use information collected about you via the website to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Create and manage your account.</li>
                  <li>Process your payments and refunds.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>
                    Fulfill and manage purchases, orders, payments, and other transactions related to the website.
                  </li>
                  <li>Increase the efficiency and operation of the website.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
                  <li>Notify you of updates to the website.</li>
                  <li>Offer new products, services, and/or recommendations to you.</li>
                  <li>Perform other business activities as needed.</li>
                  <li>
                    Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.
                  </li>
                  <li>Request feedback and contact you about your use of the website.</li>
                  <li>Resolve disputes and troubleshoot problems.</li>
                  <li>Respond to product and customer service requests.</li>
                  <li>Send you marketing and promotional communications.</li>
                  <li>
                    Personalize your website experience and deliver content and product and service offerings relevant
                    to your interests.
                  </li>
                  <li>
                    Develop and display content and advertising tailored to your interests on our website and other
                    sites.
                  </li>
                  <li>Generate a personal profile about you to make future visits to the website more personalized.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Marketing & Advertising</h2>
                <p className="text-muted-foreground">
                  We may use your personal information for marketing and advertising purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Sending promotional emails about new products, special offers, or other information we think you may
                    find interesting.
                  </li>
                  <li>Contacting you for market research purposes to better understand your needs and preferences.</li>
                  <li>Customizing the website according to your interests and browsing behavior.</li>
                  <li>Delivering personalized advertisements based on your interests and online activities.</li>
                  <li>
                    Measuring the effectiveness of our marketing campaigns and improving our marketing strategies.
                  </li>
                  <li>Creating lookalike audiences for advertising purposes on third-party platforms.</li>
                  <li>Retargeting you with advertisements after you've visited our website.</li>
                </ul>
                <p className="text-muted-foreground">
                  You have the right to opt-out of receiving marketing communications from us at any time. You can
                  exercise this right by clicking on the "unsubscribe" or "opt-out" link in the marketing emails we send
                  you, or by contacting us using the contact details provided below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Disclosure of Your Information</h2>
                <p className="text-muted-foreground">
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </p>
                <h3 className="text-xl font-semibold">By Law or to Protect Rights</h3>
                <p className="text-muted-foreground">
                  If we believe the release of information about you is necessary to respond to legal process, to
                  investigate or remedy potential violations of our policies, or to protect the rights, property, and
                  safety of others, we may share your information as permitted or required by any applicable law, rule,
                  or regulation.
                </p>
                <h3 className="text-xl font-semibold">Third-Party Service Providers</h3>
                <p className="text-muted-foreground">
                  We may share your information with third parties that perform services for us or on our behalf,
                  including payment processing, data analysis, email delivery, hosting services, customer service, and
                  marketing assistance.
                </p>
                <h3 className="text-xl font-semibold">Marketing Communications</h3>
                <p className="text-muted-foreground">
                  With your consent, or with an opportunity for you to withdraw consent, we may share your information
                  with third parties for marketing purposes, as permitted by law.
                </p>
                <h3 className="text-xl font-semibold">Business Partners</h3>
                <p className="text-muted-foreground">
                  We may share your information with our business partners to offer you certain products, services, or
                  promotions.
                </p>
                <h3 className="text-xl font-semibold">Advertising Partners</h3>
                <p className="text-muted-foreground">
                  We may share your information with advertising partners who may use technologies such as cookies to
                  gather information about your activities on our website and other sites to provide you with targeted
                  advertising based upon your browsing activities and interests.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Cookie Policy</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze site
                  traffic, and personalize content. By using our website, you consent to our use of cookies in
                  accordance with this Cookie Policy.
                </p>
                <h3 className="text-xl font-semibold">What are Cookies?</h3>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit a website. They are widely
                  used to make websites work more efficiently and provide information to the website owners.
                </p>
                <h3 className="text-xl font-semibold">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly
                    and cannot be switched off in our systems.
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so
                    we can measure and improve the performance of our site.
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced
                    functionality and personalization.
                  </li>
                  <li>
                    <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising
                    partners to build a profile of your interests and show you relevant advertisements on other sites.
                  </li>
                </ul>
                <h3 className="text-xl font-semibold">Your Cookie Choices</h3>
                <p className="text-muted-foreground">
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you
                  can usually modify your browser settings to decline cookies if you prefer. However, this may prevent
                  you from taking full advantage of the website.
                </p>
                <p className="text-muted-foreground">
                  We also provide a cookie consent banner that allows you to choose which types of cookies you want to
                  accept.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Security of Your Information</h2>
                <p className="text-muted-foreground">
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Viral Alchemy
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
  )
}

