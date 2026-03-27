import { LegalLayout } from "@/components/ui/legal-layout"

export const metadata = { title: "Terms of Use | Instroom" }

const SITE_RESTRICTIONS = [
  `Copying, distributing, or disclosing any part of the Service in any medium, including without limitation by any automated or non-automated "scraping," which refers to data extraction from another known source.`,
  `Using any automated system, including without limitation "robots," "spiders," "offline readers," etc., to access the Site and Services in a manner that sends more messages to Instroom servers than a human can reasonably produce in the same period of time by using a conventional online web browser, except when Instroom grants the operators of public search engines revocable permission to use spiders to copy materials from the Site for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials.`,
  "Transmitting spam, chain letters, or other unsolicited email.",
  "Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.",
  "Taking any action that imposes, or may impose at our sole discretion, an unreasonable or disproportionately large load on our infrastructure.",
  "Uploading unrelated or non-textual data, viruses, worms, or other software agents through the Services.",
  "Collecting or harvesting any personally identifiable information from the Service, except as expressly permitted by the features of the Services.",
  "Using the Service for any purposes other than the defined Service and for your general information only.",
  "Impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity.",
  "Interfering with the proper working status of the Service.",
  "Accessing any content on the Service through any technology or means other than those provided or authorized by the Service.",
]

const SECTIONS = [
  {
    title: "AVAILABILITY OF WEBSITE",
    content: "We do not guarantee continuous, uninterrupted, or secure access to this Website or to any contents published in this Website. We shall not be liable for any disruption or non-availability of this Site resulting from external causes and/or circumstances outside our control including, but not limited to, Internet Service Provider (ISP) equipment and/or infrastructure failure, host equipment failure, communications network failure, power failure, natural events, acts of war, or legal restrictions and censorship.",
  },
  {
    title: "TRADEMARKS AND COPYRIGHT",
    content: "The materials used on this Site are owned by and duly licensed to Instroom.io. These materials include, but are not limited to, the design, layout, look, appearance, and graphics. Reproduction of or copying any of these materials, without our consent, is strictly prohibited. Instroom.io does not warrant or make any representations regarding the use of or the result of the material in this website in terms of correctness, reliability, accuracy, timeliness, or otherwise. Unauthorized use of this website may give rise to a claim for damages and/or may result in criminal offence.",
  },
  {
    title: "USE OF COOKIES",
    content: "This Site uses cookies to enhance your browsing preferences. Cookies are small text files that we place in your computer's browser to store your preferences. Cookies, by themselves, do not tell us your email address or other personal information unless you choose to provide this information to us. We use cookies to understand site usage and to improve the content and services of our Site. Please note that some parts of this Site may not function properly if you do not accept or choose not to accept the Site's cookies. You can configure your browser to accept all cookies or to alert you every time a cookie is offered.",
  },
  {
    title: "CHANGES TO TERMS OF USE",
    content: "The provisions in these Terms of Use are subject to change without notice. The changes made shall be posted in this website and shall take effect upon posting. You should therefore read our Terms of Use before you use or browse our Site. Your continued use of the Site after any modifications to the Terms of Use shall indicate your acceptance of its amended version.",
  },
  {
    title: "GOVERNING LAW AND JURISDICTION",
    content: "This Site is controlled, operated, and managed by Instroom.io with all reasonable efforts carried out in order to fully comply with applicable laws and regulations. We do not guarantee the safeness, correctness, and lawfulness of the materials or contents in this website if and when viewed or accessed from outside the jurisdiction where Instroom.io operates. Thus, by using or accessing our Website, you agree that the appropriate laws shall exclusively govern the validity, composition, interpretation, and implementation of our Terms of Use. Furthermore, you hereby consent that in case of disputes, involved parties shall be presided over by courts of competent jurisdiction. If any provision of these Terms of Use is found to be invalid by a court of competent jurisdiction, such invalidity shall not affect the legitimacy of all the remaining provisions, which shall remain in full effect.",
  },
]

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="January 1, 2026">

      {/* Intro */}
      <p className="legal-p">
        This website (the "Site") is owned and managed by Instroom.io ("Instroom," "we," "us," or "our")
        and officially published via the registered domain instroom.io. The terms "you," "your," "yours,"
        and "yourself" refer to all visitors of this website. By accessing or using our website, including
        any content and information herein (collectively, the "Services" or "Service"), you are agreeing
        to comply with and be bound by the provisions stated in these Terms of Use ("Terms of Use" or "Terms").
      </p>

      {/* Availability of Website */}
      <h2 className="legal-h2">{SECTIONS[0].title}</h2>
      <p className="legal-p">{SECTIONS[0].content}</p>

      {/* Limitations of Liability */}
      <h2 className="legal-h2">LIMITATIONS OF LIABILITY</h2>
      <p className="legal-p">
        The content and all pages contained in this Site focus on materials, services, articles, and
        applications that are designed and published to provide you with general information and awareness
        about Instroom. The content in the Site's major sections is outlined as follows:
      </p>
      <ul className="legal-ul">
        <li><strong style={{ color: "#fff" }}>Dashboard</strong> – General overview of your Instroom account, metrics, and usage.</li>
        <li><strong style={{ color: "#fff" }}>Analytics</strong> – Detailed influencer analytics extracted from Instagram and TikTok profiles.</li>
        <li><strong style={{ color: "#fff" }}>Campaigns</strong> – Tools for managing influencer campaigns and tracking performance.</li>
        <li><strong style={{ color: "#fff" }}>Pricing</strong> – Information on Instroom subscription plans and features.</li>
      </ul>
      <p className="legal-p">
        Collectively, the content of the Site is provided as is and on an "as available" basis. Your use
        or access of this Site or any of its published content is entirely at your own risk. A high level
        of diligence is taken so that information published in the Site is correct at the time of publishing.
        However, we do not guarantee the accuracy, timeliness, execution, completeness, or suitability of
        Services or any content of this Site. By using or accessing this Site, you hereby acknowledge that
        any information or materials used in this Site may contain inaccuracies or errors and we expressly
        exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
        Therefore, we shall not be liable for any damages caused by or arising from your use and/or access
        of the Site. Further, we shall not be responsible for any direct or indirect loss or damage,
        foreseeable or otherwise, including any indirect, consequential, special or exemplary damages
        arising from the use and/or access of the Site or any information contained herein.
      </p>
      <p className="legal-p">
        All reasonable effort has been made to ensure that these terms and conditions adhere with applicable
        data privacy laws. However, in the event that any of these terms are found to be unlawful, invalid,
        or otherwise unenforceable, that specific term is to be deemed severed from these Terms, and shall
        not affect the validity and enforceability of the remaining terms and conditions.
      </p>

      {/* Site Restrictions */}
      <h2 className="legal-h2">SITE RESTRICTIONS</h2>
      <p className="legal-p">You agree not to engage in any of the following activities:</p>
      <ul className="legal-ul">
        {SITE_RESTRICTIONS.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <p className="legal-p">
        Instroom.io will take necessary actions against any individual or parties found to have deliberately
        committed and/or participated in committing any of the aforementioned restrictions.
      </p>

      {/* Trademarks, Cookies, Changes, Governing Law */}
      {SECTIONS.slice(1).map(({ title, content }) => (
        <div key={title}>
          <h2 className="legal-h2">{title}</h2>
          <p className="legal-p">{content}</p>
        </div>
      ))}

      {/* Social Networks and Third-Party Links */}
      <h2 className="legal-h2">SOCIAL NETWORKS AND THIRD-PARTY LINKS</h2>
      <p className="legal-p">
        The Site may contain links to third-party websites, social media tools, apps, and services which
        are not under the control of Instroom.io. We are not responsible for the contents of those websites
        and shall not be liable for any damages or loss arising from use or access to those websites.
        Moreover, these third-party links and features are being provided for your information and browsing
        convenience only. We do not endorse, approve nor recommend such links and features. The use of
        third-party links, including the services or features these third-party links offer, are entirely
        at your own risk.
      </p>
      <p className="legal-p">
        In no event shall Instroom.io be liable, directly or indirectly, to anyone for any damage or loss
        arising from or relating to any use, continued use or reliance on any third-party advertisement
        displayed on the site, any products, services or other materials relating to any such advertisement,
        any linked third-party site or any link contained in a linked site.
      </p>

      {/* Contact */}
      <h2 className="legal-h2">OUR CONTACT INFORMATION</h2>
      <p className="legal-p">
        For any concerns regarding these Terms of Use, please contact Instroom's data protection officer at:
      </p>
      <p className="legal-p">
        <strong style={{ color: "#fff" }}>Instroom.io Data Privacy Officer</strong><br />
        <a href="mailto:support@instroom.io" className="legal-link">support@instroom.io</a>
      </p>

    </LegalLayout>
  )
}