import { LegalLayout } from "@/components/ui/legal-layout"

export const metadata = { title: "Terms of Use | Instroom" }

const PERMITTED_USE = [
  "You may use Instroom solely for lawful business purposes such as influencer marketing research.",
  "You may not use Instroom to harvest data for spam, harassment, or any illegal activity.",
  "You may not attempt to reverse-engineer, copy, or redistribute the extension.",
  "You may not use automated tools to exceed your plan's usage limits.",
]

const SUBSCRIPTION = [
  "Paid plans are billed monthly and renew automatically unless cancelled.",
  "All fees are non-refundable except where required by applicable law.",
  "We reserve the right to change pricing with 30 days' notice.",
  "Failure to pay may result in suspension or termination of your account.",
]

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: "By creating an account or using Instroom, you confirm that you are at least 18 years old and have the legal capacity to enter into these terms. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Description of Service",
    content: "Instroom is a Chrome extension that extracts publicly available metrics from Instagram and TikTok profiles, including engagement rates, follower counts, average likes, comments, and contact information. The service is provided on a subscription basis with a limited free tier.",
  },
  {
    title: "4. Account Responsibilities",
    content: (
      <p className="legal-p">
        You are responsible for maintaining the confidentiality of your account credentials and for
        all activity that occurs under your account. Notify us immediately of any unauthorized use
        at <a href="mailto:support@instroom.io" className="legal-link">support@instroom.io</a>.
      </p>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: "All content, design, code, and branding associated with Instroom are the exclusive property of Instroom.io. You may not use our intellectual property without prior written consent.",
  },
  {
    title: "7. Third-Party Platforms",
    content: "Instroom accesses publicly available data from Instagram and TikTok. We are not affiliated with Meta or ByteDance. Use of Instroom must comply with the terms of service of those platforms. We are not responsible for changes to those platforms that may affect the functionality of our extension.",
  },
  {
    title: "8. Disclaimer of Warranties",
    content: `Instroom is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the service will be uninterrupted, error-free, or that the data fetched will be accurate or complete.`,
  },
  {
    title: "9. Limitation of Liability",
    content: "To the maximum extent permitted by law, Instroom shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, even if we have been advised of the possibility of such damages.",
  },
  {
    title: "10. Termination",
    content: "We reserve the right to suspend or terminate your account at our sole discretion if you violate these Terms. You may cancel your account at any time through your account settings.",
  },
  {
    title: "11. Governing Law",
    content: "These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in the competent courts of the jurisdiction where Instroom.io operates.",
  },
  {
    title: "12. Changes to Terms",
    content: "We may revise these Terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify you of material changes via email or a notice on our website.",
  },
]

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="January 1, 2026">

      <p className="legal-p">
        By accessing or using the Instroom Chrome extension or website at instroom.io, you agree to
        be bound by these Terms of Use. Please read them carefully before using our services.
      </p>

      {/* Sections 1 & 2 */}
      {SECTIONS.slice(0, 2).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          <p className="legal-p">{content}</p>
        </div>
      ))}

      {/* 3. Permitted Use */}
      <h2 className="legal-h2">3. Permitted Use</h2>
      <ul className="legal-ul">
        {PERMITTED_USE.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* Section 4 – Account Responsibilities (has a link) */}
      <div key={SECTIONS[2].title}>
        <h2 className="legal-h2">{SECTIONS[2].title}</h2>
        {SECTIONS[2].content}
      </div>

      {/* 5. Subscription & Payments */}
      <h2 className="legal-h2">5. Subscription &amp; Payments</h2>
      <ul className="legal-ul">
        {SUBSCRIPTION.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* Sections 6–12 */}
      {SECTIONS.slice(3).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          {typeof content === "string" ? <p className="legal-p">{content}</p> : content}
        </div>
      ))}

    </LegalLayout>
  )
}