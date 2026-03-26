import { LegalLayout } from "@/components/ui/legal-layout"

export const metadata = { title: "Privacy Policy | Instroom" }

const INFO_COLLECTED = [
  { label: "Account Information",  desc: "When you register, we collect your name, email address, and company name." },
  { label: "Usage Data",           desc: "We collect information about how you interact with the extension, including profiles analyzed and features used." },
  { label: "Payment Information",  desc: "Billing details are processed securely through third-party payment processors. We do not store your card details." },
  { label: "Device Information",   desc: "Browser type, IP address, and operating system for security and analytics purposes." },
]

const HOW_WE_USE = [
  "To provide, operate, and maintain the Instroom service.",
  "To process transactions and manage your subscription.",
  "To send administrative communications such as updates and security alerts.",
  "To improve our services through analytics and usage patterns.",
  "To comply with legal obligations.",
]

const SHARING = [
  "Service providers who assist in operating our platform (e.g., payment processors, hosting providers).",
  "Law enforcement or regulatory authorities when required by law.",
]

const YOUR_RIGHTS = [
  "Access the personal data we hold about you.",
  "Request correction of inaccurate data.",
  "Request deletion of your personal data.",
  "Object to or restrict processing of your data.",
  "Data portability.",
]

const SIMPLE_SECTIONS = [
  {
    title: "5. Data Retention",
    content: (
      <p className="legal-p">
        We retain your account data for as long as your account is active or as needed to provide
        services. You may request deletion of your data at any time by contacting us at{" "}
        <a href="mailto:support@instroom.io" className="legal-link">support@instroom.io</a>.
      </p>
    ),
  },
  {
    title: "6. Cookies",
    content: (
      <p className="legal-p">
        We use cookies and similar tracking technologies to enhance your experience. Please refer to
        our <a href="/cookie-policy" className="legal-link">Cookie Policy</a> for more details.
      </p>
    ),
  },
  {
    title: "8. Security",
    content: "We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "9. Children's Privacy",
    content: "Instroom is not directed to children under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    title: "10. Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">

      <p className="legal-p">
        At Instroom ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your information when you use
        our Chrome extension and website located at instroom.io.
      </p>

      {/* 1. Information We Collect */}
      <h2 className="legal-h2">1. Information We Collect</h2>
      <p className="legal-p">We may collect the following types of information:</p>
      <ul className="legal-ul">
        {INFO_COLLECTED.map(({ label, desc }) => (
          <li key={label}>
            <strong style={{ color: "#fff" }}>{label}:</strong> {desc}
          </li>
        ))}
      </ul>

      {/* 2. How We Use Your Information */}
      <h2 className="legal-h2">2. How We Use Your Information</h2>
      <ul className="legal-ul">
        {HOW_WE_USE.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* 3. Data Fetched by the Extension */}
      <h2 className="legal-h2">3. Data Fetched by the Extension</h2>
      <p className="legal-p">
        Instroom fetches publicly available data from Instagram and TikTok profiles in real-time
        when you use the extension.{" "}
        <strong style={{ color: "#fff" }}>We do not store, sell, or share this fetched profile data.</strong>{" "}
        All data is displayed directly to you and discarded after your session.
      </p>

      {/* 4. Sharing of Information */}
      <h2 className="legal-h2">4. Sharing of Information</h2>
      <p className="legal-p">We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
      <ul className="legal-ul">
        {SHARING.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* Sections 5 & 6 with links */}
      {SIMPLE_SECTIONS.slice(0, 2).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          {content}
        </div>
      ))}

      {/* 7. Your Rights */}
      <h2 className="legal-h2">7. Your Rights</h2>
      <p className="legal-p">Depending on your location, you may have the right to:</p>
      <ul className="legal-ul">
        {YOUR_RIGHTS.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* Sections 8–10 plain text */}
      {SIMPLE_SECTIONS.slice(2).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          {typeof content === "string" ? <p className="legal-p">{content}</p> : content}
        </div>
      ))}

    </LegalLayout>
  )
}