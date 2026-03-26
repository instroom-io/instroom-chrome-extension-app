import { LegalLayout } from "@/components/ui/legal-layout"

export const metadata = { title: "Cookie Policy | Instroom" }

const COOKIE_TYPES = [
  {
    name: "Essential Cookies",
    desc: "Necessary for the website to function properly. They enable core features like authentication and session management. Without them, the service cannot be provided.",
    items: [
      { key: "session_token", def: "Keeps you logged into your account." },
      { key: "csrf_token",    def: "Protects against cross-site request forgery attacks." },
    ],
  },
  {
    name: "Analytics Cookies",
    desc: "Help us understand how visitors interact with our website so we can improve the user experience.",
    items: [
      { key: "_ga, _gid", def: "Google Analytics cookies that track page visits and session duration." },
      { key: "_fbp",      def: "Facebook Pixel for measuring ad performance (if applicable)." },
    ],
  },
  {
    name: "Preference Cookies",
    desc: "Remember your preferences such as language settings or dashboard configurations.",
    items: [
      { key: "ui_prefs", def: "Stores your dashboard layout and display preferences." },
    ],
  },
  {
    name: "Marketing Cookies",
    desc: "Used to show you relevant advertisements on third-party platforms. These cookies track browsing activity across sites.",
    items: [
      { key: "_gcl_au", def: "Google Ads conversion tracking." },
    ],
  },
]

const SECTIONS = [
  {
    title: "1. What Are Cookies?",
    content: "Cookies are small text files stored on your device by your browser when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you interact with the site.",
  },
  {
    title: "3. Cookies in the Chrome Extension",
    content: "The Instroom Chrome extension does not place cookies on third-party websites you visit. It reads publicly available page data in real-time solely to provide the analytics features. No data is stored in cookies by the extension itself.",
  },
  {
    title: "5. Third-Party Cookies",
    content: "Some cookies on our site are placed by third-party services such as Google Analytics and payment processors. These third parties have their own privacy policies governing the use of such cookies, which we encourage you to review.",
  },
  {
    title: "6. Cookie Consent",
    content: `When you first visit instroom.io, you will be presented with a cookie consent banner. By clicking "Accept All", you consent to the use of all cookie categories described above. You may choose "Manage Preferences" to opt out of non-essential cookies.`,
  },
  {
    title: "7. Updates to This Policy",
    content: "We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised date.",
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="January 1, 2026">

      <p className="legal-p">
        This Cookie Policy explains how Instroom.io ("we", "our", or "us") uses cookies and similar
        tracking technologies when you visit our website or use our Chrome extension. By continuing
        to use our services, you consent to the use of cookies as described in this policy.
      </p>

      {/* Section 1 */}
      <h2 className="legal-h2">{SECTIONS[0].title}</h2>
      <p className="legal-p">{SECTIONS[0].content}</p>

      {/* Section 2 – Cookie Types */}
      <h2 className="legal-h2">2. Types of Cookies We Use</h2>
      {COOKIE_TYPES.map(({ name, desc, items }) => (
        <div key={name} style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#4ade80", marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>
            {name}
          </h3>
          <p className="legal-p" style={{ marginBottom: 8 }}>{desc}</p>
          <ul className="legal-ul">
            {items.map(({ key, def }) => (
              <li key={key}>
                <strong style={{ color: "#fff" }}>{key}</strong> — {def}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Section 4 – Manage Cookies */}
      <h2 className="legal-h2">4. How to Manage Cookies</h2>
      <p className="legal-p">You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
      <ul className="legal-ul">
        {[
          "View cookies currently stored on your device.",
          "Delete all or specific cookies.",
          "Block cookies from specific or all websites.",
          "Set preferences for first-party vs third-party cookies.",
        ].map((item) => <li key={item}>{item}</li>)}
      </ul>
      <p className="legal-p">
        Please note that disabling essential cookies may impact the functionality of Instroom.
        For browser-specific instructions, visit your browser's help documentation.
      </p>

      {/* Remaining sections */}
      {SECTIONS.slice(1).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          <p className="legal-p">{content}</p>
        </div>
      ))}

    </LegalLayout>
  )
}