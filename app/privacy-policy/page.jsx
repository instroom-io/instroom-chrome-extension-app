import { LegalLayout } from "@/components/ui/legal-layout"

export const metadata = { title: "Privacy Policy | Instroom" }

const WHAT_WE_COLLECT = [
  {
    label: "Contact Information",
    desc: "In the Contact Us page of this site, we require your name and email address in order to reply to your concerns. Without this information, we will be unable to respond to your inquiries or answer any questions you may have for us.",
  },
  {
    label: "Account Information",
    desc: "When you register, we collect your name, email address, and company name to set up and manage your Instroom account.",
  },
  {
    label: "Usage Data",
    desc: "We collect information about how you interact with the extension, including profiles analyzed and features used, to improve our services.",
  },
  {
    label: "Payment Information",
    desc: "Billing details are processed securely through third-party payment processors. We do not store your card details.",
  },
]

const WHAT_WE_DO = [
  "To provide you with clear and precise responses to your inquiries.",
  "To serve as an internal record for account and service management.",
  "To serve as a reference for service improvement.",
  "To serve as a reference for distribution of promotional or advertising materials.",
  "To conform with and carry out other procedures that may be required by applicable law.",
  "To act under emergency circumstances to protect our safety and security and those of our affiliates, agents, users of the Site, or the public in general.",
]

const YOUR_RIGHTS = [
  "The right to object to processing of your personal data.",
  "The right to access your personal information in our records.",
  "The right to alter, modify, or correct inaccurate personal information.",
  "The right to request deletion of your personal data.",
  "The right to data portability.",
]

const SECTIONS = [
  {
    title: "PRIVACY STATEMENT",
    content: (
      <p className="legal-p">
        This Privacy Policy sets out how instroom.io collects, uses, stores, shares, and protects any
        personal information you provide when you use this website. This Privacy Policy is hereby adopted
        in compliance with applicable data privacy laws and regulations.
      </p>
    ),
  },
  {
    title: "HOW WE KEEP YOUR PERSONAL INFORMATION SECURED",
    content: "Our employees, clients, and affiliates are well-aware of Instroom's positive views and all undertakings in compliance with applicable data privacy laws. We will not process your personal information in a way that is not aligned with the provisions of applicable data privacy laws and what is prescribed in this policy. We will exercise our best efforts to ensure that data is current, accurate, reliable, and complete for its intended use. We will take all reasonable precautions to protect your information from loss, misuse, destruction, alteration, disclosure, and unauthorized access.",
  },
  {
    title: "GRANTING OF CONSENT / APPROVAL TO USE AND DISCLOSE PERSONAL INFORMATION",
    content: "By using this website and/or submitting your information to us through this website, you indicate your willingness to disclose this information to Instroom.io. If you do not wish to disclose your personal information, we will not be able to provide you our services since we will have no basis to accommodate your request for a specific service.",
  },
  {
    title: "PROTECTING YOUR PERSONAL INFORMATION",
    content: "We highly value the integrity, confidentiality, and security of your information. Thus, we strictly enforce our Privacy Policy within the company and we have implemented technological, organizational, and physical security measures that are designed to protect your information from unauthorized access, use, alteration, and disclosure. Moreover, Instroom.io has implemented several security protocols and devices as an extra layer of security to ensure total privacy and protection of your personal information.",
  },
  {
    title: "CHANGES IN OUR PRIVACY POLICY",
    content: "Instroom.io reserves the right to amend or modify the provisions in this Privacy Policy at any time to reflect changes in our data collection practices and procedures. Updates or changes to our Privacy Policy are announced on this page, and site visitors/users are encouraged to check this page to be aware of such changes.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">

      {/* Introduction */}
      <h2 className="legal-h2">INTRODUCTION</h2>
      <p className="legal-p">
        Protecting and securing the privacy and confidentiality of your personal information is of utmost
        importance to us. We conduct our business in compliance with the applicable laws and regulations
        on data privacy and exercise transparency with the way we handle your personal information. This
        Privacy Policy is designed to help you understand how we collect and use the personal information
        you provide to us and to assist you in making informed decisions when using our site and services.
      </p>

      {/* Privacy Statement */}
      <h2 className="legal-h2">{SECTIONS[0].title}</h2>
      {SECTIONS[0].content}

      {/* What We Collect */}
      <h2 className="legal-h2">WHAT WE COLLECT</h2>
      <p className="legal-p">
        It is necessary that we collect, use, process, store, and evaluate your personal information in
        order to serve you the best we can. This information is vital for successful business process
        executions such as in performing the very nature of our business — Influencer Analytics. In
        addition, the personal information we require from you is reasonable and within the boundaries
        of the law. These may include:
      </p>
      <ul className="legal-ul">
        {WHAT_WE_COLLECT.map(({ label, desc }) => (
          <li key={label}>
            <strong style={{ color: "#fff" }}>{label}</strong> — {desc}
          </li>
        ))}
      </ul>
      <p className="legal-p">
        We will not seek any information from you that is considered "Sensitive Information." This includes
        information relating to race or ethnic origin, political opinions, religious beliefs, physical or
        mental health, trade union membership or affiliation, sexual life, or criminal record. We highly
        recommend that you do not provide sensitive information of this nature.
      </p>

      {/* What We Do With Personal Information */}
      <h2 className="legal-h2">WHAT WE DO WITH YOUR PERSONAL INFORMATION</h2>
      <p className="legal-p">
        Instroom.io shall be the sole owner of all information collected on this site. We will implement
        all reasonable steps to protect the personal information we hold from loss, misuse, modification,
        unauthorized or accidental access or disclosure, alteration, or destruction. Furthermore, we will
        never sell, share, or have it processed in ways different from what is presented in this policy,
        which includes:
      </p>
      <ul className="legal-ul">
        {WHAT_WE_DO.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* Remaining plain-text sections */}
      {SECTIONS.slice(1).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          {typeof content === "string" ? <p className="legal-p">{content}</p> : content}
        </div>
      ))}

      {/* Retention, Access, and Control */}
      <h2 className="legal-h2">RETENTION, ACCESS, AND CONTROL OF PERSONAL INFORMATION</h2>
      <p className="legal-p">
        Under applicable data privacy laws, certain rights are granted to you in relation to your personal
        data, which includes:
      </p>
      <ul className="legal-ul">
        {YOUR_RIGHTS.map(item => <li key={item}>{item}</li>)}
      </ul>
      <p className="legal-p">
        If you wish to have access to your personal information in our records, or if you think that such
        personal information we have of you is incomplete, not updated, or otherwise inaccurate, please
        get in touch with our Data Privacy Officer via the contact details provided below. We will be glad
        to comply with your request. Please be aware that we reserve the right to take reasonable steps
        to authenticate your identity before providing such access.
      </p>

      {/* Cookies */}
      <h2 className="legal-h2">COOKIES</h2>
      <p className="legal-p">
        We use cookies and similar tracking technologies to enhance your experience. Please refer to our{" "}
        <a href="/cookie-policy" className="legal-link">Cookie Policy</a> for full details on how we
        use cookies and how you can manage your preferences.
      </p>

      {/* Contact */}
      <h2 className="legal-h2">OUR CONTACT INFORMATION</h2>
      <p className="legal-p">
        For Data Privacy concerns, please contact Instroom's Data Privacy Officer at:
      </p>
      <p className="legal-p">
        <strong style={{ color: "#fff" }}>Instroom.io Data Privacy Officer</strong><br />
        <a href="mailto:support@instroom.io" className="legal-link">support@instroom.io</a>
      </p>

    </LegalLayout>
  )
}