import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

// ── DATA ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home",     href: "#"         },
  { label: "Features", href: "#features" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "About Us", href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

const BRANDS = [
  { name: "yummii yummii",    src: "/Src_Homepage/brands/yummii.png"     },
  { name: "VITAL RELIEFWEAR", src: "/Src_Homepage/brands/vital.png"      },
  { name: "ALCANSIDE",        src: "/Src_Homepage/brands/alcanside.png"  },
  { name: "FLASKE",           src: "/Src_Homepage/brands/flaske.png"     },
  { name: "Dreamfully",       src: "/Src_Homepage/brands/dreamfully.png" },
  { name: "Awesome Maps",     src: "/Src_Homepage/brands/awesome.png"    },
  { name: "CuliStack",        src: "/Src_Homepage/brands/culistack.png"  },
];

const FEATURES = [
  { title: "Engagement Rate Calculation",     desc: "See your audience's interaction level with a quick snapshot of engagement rate on any profile.",                           highlight: false, radius: "28px 28px 28px 4px" },
  { title: "Email & Contact Info Extraction", desc: "Instantly retrieve email addresses from Instagram and TikTok profiles, making influencer outreach easier than ever.",      highlight: true,  radius: "28px"               },
  { title: "Average Likes & Comments",        desc: "Quickly calculate average likes and comments across posts to assess engagement quality.",                                  highlight: false, radius: "28px"               },
  { title: "Followers Count & Location Data", desc: "Get insights into how large a profile's following is and where their audience is based, crucial for targeted campaigns.", highlight: true,  radius: "28px 28px 4px 28px" },
];

const HOW_STEPS = [
  { number: "1", title: "Install the Extension",    desc: "Add the Instroom Chrome extension to your browser in just a few clicks."                              },
  { number: "2", title: "Open Instagram or TikTok", desc: "Browse any profile, and the extension will automatically fetch the data you need."                    },
  { number: "3", title: "Get the Stats",            desc: "View the engagement rate, average likes, follower count, email, and more – instantly on your screen." },
];

const WHY_ITEMS = [
  { icon: "/Src_Homepage/icons/save-time.png",      title: "Save Time",                         desc: "Stop manually calculating engagement and collecting contact details. Get all the data you need with a single click." },
  { icon: "/Src_Homepage/icons/easy-to-use.png",    title: "Easy to Use",                       desc: "No complicated setup. Simply install, click, and get started."                                                       },
  { icon: "/Src_Homepage/icons/boost-campaign.png", title: "Boost Campaign Performance",        desc: "Know exactly who to reach out to and how to target your audience for better campaign results."                      },
  { icon: "/Src_Homepage/icons/influencers.png",    title: "Built for Influencers & Marketers", desc: "Tailored for both influencers and brands, helping you make informed decisions faster."                              },
];

const PRICING_PLANS = [
  { price: "$0",   title: "Free Version",                btnText: "Get Started Now",       radius: "28px 28px 28px 4px", desc: "Get basic engagement stats, followers count, and location data for up to 10 profiles per day.", features: [] },
  { price: "$79",  title: "Team Version – $79/month",    btnText: "Upgrade to Pro Now",    radius: "28px",               desc: "", features: ["Included seats: 10", "Max extra seats: 25", "Extra seat cost: $7/mo", "Max influencers: 500", "Max campaigns: 10", "Brands: 3"] },
  { price: "$199", title: "Agency Version - $199/month", btnText: "Upgrade to Agency Now", radius: "28px 28px 4px 28px", desc: "", features: ["Included seats: 30", "Max extra seats: Unlimited", "Extra seat cost: $5/mo", "Max influencers: Unlimited", "Max campaigns: Unlimited", "Brands: 10"] },
];

const FAQS = [
  { question: "How do I install the extension?",               answer: `Simply click "Add to Chrome" above, and you'll be ready to go in seconds!`                        },
  { question: "Is my data private?",                           answer: "Yes, Instroom does not store any personal data. All data is fetched in real-time and never saved." },
  { question: "Can I use this for both Instagram and TikTok?", answer: "Absolutely! Instroom works seamlessly on both Instagram and TikTok profiles."                      },
  { question: "What happens if I hit the daily limit?",        answer: "On the free plan, you can analyze up to 10 profiles per day. Upgrade to Pro for unlimited access." },
];

const CTA_STATS = [
  { label: "Followers",          value: "21.3M",       green: false },
  { label: "Engagement Rate ⓘ",  value: "0.89%",       green: false },
  { label: "Avg. Likes ⓘ",       value: "189K",        green: false },
  { label: "Avg. Comments ⓘ",    value: "735",         green: false },
  { label: "Avg. Video Views ⓘ", value: "2.5M",        green: false },
  { label: "Location",           value: "Philippines", green: true  },
  { label: "Remaining Credits",  value: "53",          green: false },
];

const SOCIAL_LINKS = [
  { label: "TikTok",    href: "#", d: "M9 3h3v10a3 3 0 1 1-3-3V7a7 7 0 1 0 7 7V3h3a3 3 0 0 0 3-3H16a6 6 0 0 1-6 6V3z" },
  { label: "Instagram", href: "#", d: "M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" },
  { label: "Facebook",  href: "#", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "LinkedIn",  href: "#", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "YouTube",   href: "#", d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
];

const FOOTER_LINKS = [
  { heading: "Quick Links", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms & Conditions", href: "#" }, { label: "About Us", href: "#about" }, { label: "Contact Us", href: "#contact" }] },
  { heading: "Legals",      items: [{ label: "Term Of Service", href: "#" }, { label: "Privacy Policy", href: "#" }, { label: "Cookie Policy", href: "#" }] },
];

// ── SHARED STYLES ─────────────────────────────────────────────────────────────

const FONT_GROTESK = "'Space Grotesk', sans-serif";
const FONT_INTER   = "'Inter', sans-serif";

// ── SUB-COMPONENTS ─────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 md:px-8 xl:px-12">
        <Link href="/" className="flex items-center no-underline">
          <img src="/logo.png" alt="Instroom" className="object-contain" style={{ height: 50, width: "auto" }} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="nav-link no-underline text-white/80 text-sm lg:text-[15px]" style={{ fontWeight: 400 }}>
              {label}
            </Link>
          ))}
          <Link href="/login" className="btn-login no-underline text-white text-sm lg:text-[15px]" style={{ fontWeight: 500, border: "1.5px solid #4ade80", borderRadius: 8, padding: "8px 18px" }}>
            Login
          </Link>
        </nav>

        {/* Mobile */}
        <Link href="/login" className="btn-login md:hidden no-underline text-white text-sm" style={{ fontWeight: 500, border: "1.5px solid #4ade80", borderRadius: 8, padding: "7px 16px" }}>
          Login
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-visible pt-[68px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[140%] bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgba(20,110,45,0.75)_0%,rgba(10,55,22,0.3)_50%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 xl:px-12 flex flex-col justify-between" style={{ minHeight: "calc(100vh - 68px)" }}>

        {/* Hero content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10 md:py-16">
          <div className="w-full md:max-w-[520px] shrink-0 text-center md:text-left">
            <h1 className="fade-up mb-6 font-bold leading-[1.15]" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(2.2rem,5vw,3.75rem)", animationDelay: "0ms" }}>
              <span className="text-white">The </span>
              <span className="text-white/60">Ultimate Influencer</span><br />
              <span style={{ color: "#4ade80" }}>Analytics Tool for</span><br />
              <span className="text-white/60">Instagram </span>
              <span className="text-white">And TikTok</span>
            </h1>
            <p className="fade-up mb-8 leading-relaxed text-white mx-auto md:mx-0" style={{ fontFamily: FONT_INTER, fontSize: "clamp(0.9rem,2vw,1rem)", maxWidth: 420, animationDelay: "120ms" }}>
              Instroom is your go-to Chrome extension for easily extracting key metrics from Instagram and TikTok profiles. Whether you're an influencer, marketer, or brand, quickly get the engagement rate, contact info, followers count, and much more – right from your browser.
            </p>
            <div className="fade-up flex flex-wrap items-center justify-center md:justify-start gap-3" style={{ animationDelay: "240ms" }}>
              <Link href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="btn-outline rounded-lg text-white no-underline" style={{ fontFamily: FONT_INTER, fontSize: 14, fontWeight: 500, border: "1.5px solid rgba(255,255,255,0.35)", padding: "12px 20px", whiteSpace: "nowrap" }}>
                Download the Chrome Extension
              </Link>
              <Link href="#pricing" className="btn-solid rounded-lg text-white no-underline" style={{ fontFamily: FONT_INTER, fontSize: 14, fontWeight: 500, backgroundColor: "#166534", padding: "12px 20px", whiteSpace: "nowrap" }}>
                Upgrade to Pro Now
              </Link>
            </div>
          </div>

          <div className="fade-up flex w-full md:flex-1 items-center justify-center md:justify-end" style={{ animationDelay: "80ms" }}>
            <img src="Hero.gif"  className="hero-img w-full object-contain" style={{ maxWidth: "clamp(260px,45vw,520px)" }} />
          </div>
        </div>

        {/* Brand strip */}
        <div className="fade-up pb-8 mt-auto" style={{ animationDelay: "320ms" }}>
          <p className="mb-4 text-center text-white/40" style={{ fontFamily: FONT_INTER, fontSize: 13 }}>
            trusted by creators, marketers and agencies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 px-4">
            {BRANDS.map(({ name, src }) => (
              <img key={name} src={src} alt={name} className="brand-logo object-contain" style={{ maxHeight: 28, maxWidth: 100, opacity: 0.4 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 xl:px-12">
        <div className="scroll-fade mb-12 text-center">
          <h2 className="font-bold uppercase text-white" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(1.8rem,4vw,2.6rem)", letterSpacing: "0.2em" }}>
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ title, desc, highlight, radius }, i) => (
            <div
              key={title}
              className="scroll-fade feature-card flex flex-col p-6"
              style={{
                backgroundColor: highlight ? "#1a5c35" : "#0d0d0d",
                border: `1px solid ${highlight ? "rgba(74,222,128,0.18)" : "rgba(255,255,255,0.08)"}`,
                minHeight: 260,
                borderRadius: radius,
                boxShadow: highlight ? "0 8px 32px rgba(20,110,45,0.25)" : "0 4px 24px rgba(0,0,0,0.4)",
                gap: 20,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <h3 className="font-bold text-white text-center" style={{ fontFamily: FONT_GROTESK, fontSize: 16, lineHeight: 1.35, letterSpacing: "0.02em" }}>{title}</h3>
              <p className="text-center" style={{ fontFamily: FONT_INTER, fontSize: 13, color: highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)", lineHeight: 1.85 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative z-10 w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

          <div className="scroll-left shrink-0 w-full md:w-auto flex justify-center">
            <img src="how-it-works.png" alt="How it works" className="how-img object-contain" style={{ width: "clamp(200px,40vw,320px)", height: "auto" }} />
          </div>

          <div className="flex-1 w-full">
            <div className="scroll-right">
              <h2 className="mb-8 font-bold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
                How Does It Work
              </h2>
            </div>
            <div className="flex flex-col">
              {HOW_STEPS.map(({ number, title, desc }, i, arr) => (
                <div key={number} className="scroll-left flex items-start gap-4" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex flex-col items-center">
                    <div className="step-num flex shrink-0 items-center justify-center font-bold text-white" style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "#22c55e", fontFamily: FONT_GROTESK, fontSize: 15 }}>
                      {number}
                    </div>
                    {i < arr.length - 1 && <div className="my-1.5" style={{ width: 2, height: 48, backgroundColor: "rgba(34,197,94,0.25)" }} />}
                  </div>
                  <div className="pb-6">
                    <h3 className="mb-1 font-bold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: 17 }}>{title}</h3>
                    <p style={{ fontFamily: FONT_INTER, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative z-10 w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 xl:px-12">
        <div className="scroll-fade mb-12 text-center">
          <p className="mb-1" style={{ fontFamily: FONT_INTER, fontSize: 13, color: "#4ade80", letterSpacing: "0.05em", fontWeight: 600 }}>Best Extension</p>
          <h2 className="font-bold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
            Why Choose <span style={{ color: "#4ade80" }}>Instroom?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 max-w-4xl mx-auto">
          {WHY_ITEMS.map(({ icon, title, desc }, i) => (
            <div key={title} className="scroll-scale why-card flex items-start gap-4" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="why-icon flex shrink-0 items-center justify-center rounded-full" style={{ width: 48, height: 48, backgroundColor: "#14532d", marginTop: 2 }}>
                <img src={icon} alt={title} className="object-contain" style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <h3 className="why-title mb-2 font-bold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: 18 }}>{title}</h3>
                <p style={{ fontFamily: FONT_INTER, fontSize: 13.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 300 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 w-full py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(20,110,45,0.75)_0%,rgba(10,55,22,0.3)_50%,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 xl:px-12">
        <div className="scroll-fade mb-12 text-center">
          <p className="mb-1.5" style={{ fontFamily: FONT_INTER, fontSize: 13, color: "#4ade80", letterSpacing: "0.05em", fontWeight: 600 }}>Best Pricing</p>
          <h2 className="font-bold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
            Our Pricing <span style={{ color: "#4ade80" }}>Plans</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map(({ price, title, desc, features, btnText, radius }, i) => (
            <div
              key={title}
              className="scroll-fade pricing-card relative flex flex-col justify-between pt-12 pb-8 px-6"
              style={{
                minHeight: 400,
                borderRadius: radius,
                backgroundColor: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Price badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#166534", border: "2px solid rgba(74,222,128,0.3)", borderRadius: 999, padding: "6px 20px", fontFamily: FONT_GROTESK, fontSize: 16, whiteSpace: "nowrap" }}>
                {price}
              </div>

              <div>
                <h3 className="mb-4 font-bold text-white text-center" style={{ fontFamily: FONT_GROTESK, fontSize: 17 }}>{title}</h3>
                {desc ? (
                  <p className="text-center" style={{ fontFamily: FONT_INTER, fontSize: 13.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{desc}</p>
                ) : (
                  <ul className="flex flex-col gap-2">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2" style={{ fontFamily: FONT_INTER, fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                        <span style={{ color: "#4ade80", fontSize: 10 }}>•</span>{f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button className="btn-solid mt-6 w-full rounded-lg font-medium text-white" style={{ fontFamily: FONT_INTER, fontSize: 14, fontWeight: 500, backgroundColor: "#166534", border: "1px solid rgba(74,222,128,0.2)", padding: "13px 0", cursor: "pointer" }}>
                {btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="relative z-10 w-full py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8 xl:px-12">
        <div className="scroll-fade mb-10 text-center">
          <h2 className="font-bold" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "#4ade80" }}>
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <div className="scroll-fade" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, backgroundColor: "#0d0d0d", boxShadow: "0 4px 24px rgba(0,0,0,0.4)", overflow: "hidden" }}>
          {FAQS.map(({ question, answer }, i) => (
            <details key={question} className="faq-item" style={{ borderBottom: i < FAQS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 md:px-7 py-5 hover:bg-white/5 active:bg-white/10">
                <div className="faq-icon flex shrink-0 items-center justify-center font-bold text-white" style={{ backgroundColor: "#166534", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 999, width: 32, height: 32, fontFamily: FONT_GROTESK, fontSize: 20, lineHeight: "1" }}>
                  +
                </div>
                <span className="font-bold text-white text-sm md:text-base" style={{ fontFamily: FONT_GROTESK }}>{question}</span>
              </summary>
              <div className="px-5 md:px-7 pb-5" style={{ fontFamily: FONT_INTER, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="relative z-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_85%_at_45%_50%,rgba(20,110,45,0.80)_0%,rgba(10,55,22,0.35)_50%,transparent_72%)]" />
      <div className="relative mx-auto flex flex-col md:flex-row max-w-6xl items-center justify-between gap-10 px-4 md:px-8 pt-16 pb-10 md:pt-24 md:pb-12 xl:px-12">

        <div className="scroll-left w-full md:max-w-[460px] text-center md:text-left">
          <h2 className="mb-6 text-white" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(2rem,5vw,3.25rem)", lineHeight: 1.15, fontWeight: 400 }}>
            Simplify your <strong>Influencer Marketing Workflow.</strong>
          </h2>
          <Link href="#" className="btn-outline inline-block rounded-lg text-white no-underline" style={{ fontFamily: FONT_INTER, fontSize: 14, fontWeight: 500, backgroundColor: "#0d0d0d", border: "1px solid rgba(255,255,255,0.15)", padding: "13px 28px" }}>
            Get Started Now
          </Link>
        </div>

        {/* Stats widget */}
        <div className="scroll-right cta-card w-full md:w-[300px] shrink-0" style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden", animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs font-bold italic text-green-400">in</div>
            <span className="font-semibold text-white" style={{ fontFamily: FONT_INTER, fontSize: 14 }}>Instroom</span>
          </div>
          <div className="divide-y divide-white/5 px-4">
            {CTA_STATS.map(({ label, value, green }) => (
              <div key={label} className="flex items-center justify-between py-2.5">
                <span style={{ fontFamily: FONT_INTER, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{label}</span>
                <span className="font-semibold" style={{ fontFamily: FONT_INTER, fontSize: 12, color: green ? "#4ade80" : "#fff" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative z-10 w-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-16 xl:px-12">
        <div className="scroll-fade flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-8" style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>

          <div className="w-full md:max-w-[340px]">
            <h2 className="mb-5 font-bold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: "clamp(1.4rem,3vw,1.75rem)" }}>Contact Us</h2>
            <div className="flex flex-col gap-3">
              <input type="text"   placeholder="Full Name"     className="input-field w-full bg-transparent text-white placeholder-white/40 outline-none" style={{ fontFamily: FONT_INTER, fontSize: 14, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "11px 16px" }} />
              <input type="email"  placeholder="Email Address" className="input-field w-full bg-transparent text-white placeholder-white/40 outline-none" style={{ fontFamily: FONT_INTER, fontSize: 14, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "11px 16px" }} />
              <textarea           placeholder="Message" rows={3} className="input-field w-full resize-none bg-transparent text-white placeholder-white/40 outline-none" style={{ fontFamily: FONT_INTER, fontSize: 14, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "11px 16px" }} />
              <button className="btn-solid w-fit rounded-lg font-medium text-white" style={{ fontFamily: FONT_INTER, fontSize: 14, fontWeight: 500, backgroundColor: "#166534", border: "1px solid rgba(74,222,128,0.2)", padding: "11px 28px", cursor: "pointer" }}>
                Submit →
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center" style={{ maxWidth: 260 }}>
            <img src="ContactUs.png" alt="Contact" className="contact-img mb-4 object-contain" style={{ width: 200, height: 200 }} />
            <p className="text-center" style={{ fontFamily: FONT_INTER, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
              For support or questions, feel free to contact us at <span className="text-white">support@instroom.io.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 w-full" style={{ backgroundColor: "#0d1a0d" }}>
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-12 xl:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-[220px]">
            <img src="/logo.png" alt="Instroom" className="mb-3 object-contain" style={{ height: 60, width: "auto" }} />
            <p className="mb-5" style={{ fontFamily: FONT_INTER, fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              The Ultimate Influencer Analytics Tool for Instagram &amp; TikTok
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, d }) => (
                <a key={label} href={href} className="social-icon" aria-label={label} style={{ opacity: 0.55 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ heading, items }) => (
            <div key={heading}>
              <h4 className="mb-4 font-semibold text-white" style={{ fontFamily: FONT_GROTESK, fontSize: 16 }}>{heading}</h4>
              <ul className="flex flex-col gap-2">
                {items.map(({ label, href }) => (
                  <li key={label} className="flex items-center gap-2">
                    <span style={{ color: "#4ade80", fontSize: 8 }}>•</span>
                    <a href={href} className="footer-link" style={{ fontFamily: FONT_INTER, fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────────

export default async function Home() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#050e05" }}>

      <style>{`
        /* ── Keyframes ─────────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        /* ── Hero load animations ──────────────────────── */
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }

        /* ── Scroll-driven animations (Chrome 115+, FF 110+) ── */
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }

        @supports (animation-timeline: view()) {
          /* default — slide up */
          .scroll-fade {
            opacity: 0;
            transform: translateY(28px);
            animation: fadeUp 0.6s ease forwards;
            animation-timeline: view();
            animation-range: entry 0% entry 26%;
          }
          /* slide in from left */
          .scroll-left {
            opacity: 0;
            transform: translateX(-40px);
            animation: slideLeft 0.6s ease forwards;
            animation-timeline: view();
            animation-range: entry 0% entry 26%;
          }
          /* slide in from right */
          .scroll-right {
            opacity: 0;
            transform: translateX(40px);
            animation: slideRight 0.6s ease forwards;
            animation-timeline: view();
            animation-range: entry 0% entry 26%;
          }
          /* scale up */
          .scroll-scale {
            opacity: 0;
            transform: scale(0.88);
            animation: scaleIn 0.6s ease forwards;
            animation-timeline: view();
            animation-range: entry 0% entry 26%;
          }
        }
        @supports not (animation-timeline: view()) {
          .scroll-fade,
          .scroll-left,
          .scroll-right,
          .scroll-scale { opacity: 1; transform: none; }
        }

        /* ── Nav ───────────────────────────────────────── */
        .nav-link { position: relative; transition: color 0.2s; }
        .nav-link::after { content: ""; position: absolute; bottom: -2px; left: 0; width: 0; height: 1.5px; background: #4ade80; transition: width 0.25s ease; }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }

        /* ── Buttons ───────────────────────────────────── */
        .btn-login  { transition: background-color 0.2s, transform 0.15s; }
        .btn-login:hover  { background-color: rgba(74,222,128,0.1); }
        .btn-login:active { transform: scale(0.96); }

        .btn-outline { transition: background-color 0.2s, transform 0.15s, box-shadow 0.2s; }
        .btn-outline:hover  { background-color: rgba(255,255,255,0.05); box-shadow: 0 0 16px rgba(255,255,255,0.08); transform: scale(1.03); }
        .btn-outline:active { transform: scale(0.96); }

        .btn-solid { transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s; }
        .btn-solid:hover  { opacity: 0.88; transform: scale(1.03); box-shadow: 0 4px 18px rgba(22,101,52,0.55); }
        .btn-solid:active { transform: scale(0.96); }

        /* ── Hero image ────────────────────────────────── */
        .hero-img { transition: transform 0.5s ease; }
        .hero-img:hover { transform: scale(1.02) translateY(-4px); }

        /* ── Brand logos ───────────────────────────────── */
        .brand-logo { transition: opacity 0.25s, transform 0.25s; }
        .brand-logo:hover { opacity: 0.85 !important; transform: scale(1.1); }

        /* ── Feature cards ─────────────────────────────── */
        .feature-card {
          cursor: default;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.7) !important;
          border-color: rgba(74,222,128,0.35) !important;
        }

        /* ── How-it-works image ────────────────────────── */
        .how-img { transition: transform 0.45s ease; }
        .how-img:hover { transform: scale(1.05); }

        /* ── Step numbers ──────────────────────────────── */
        .step-num { transition: transform 0.2s, box-shadow 0.2s; cursor: default; }
        .step-num:hover { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(34,197,94,0.18); }

        /* ── Why cards ─────────────────────────────────── */
        .why-card { cursor: default; }
        .why-icon { transition: transform 0.25s ease, background-color 0.25s; }
        .why-card:hover .why-icon { transform: scale(1.12) rotate(5deg); background-color: #166534; }
        .why-title { transition: color 0.2s; }
        .why-card:hover .why-title { color: #4ade80; }

        /* ── Pricing cards ─────────────────────────────── */
        .pricing-card {
          cursor: default;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.7) !important;
          border-color: rgba(255,255,255,0.22) !important;
        }

        /* ── FAQ ───────────────────────────────────────── */
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-icon { transition: transform 0.3s ease, background-color 0.25s; }
        details[open] .faq-icon { transform: rotate(45deg); background-color: #22c55e; }

        /* ── CTA widget ────────────────────────────────── */
        .cta-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .cta-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }

        /* ── Contact image ─────────────────────────────── */
        .contact-img { transition: transform 0.4s ease; }
        .contact-img:hover { transform: scale(1.05); }

        /* ── Form inputs ───────────────────────────────── */
        .input-field { transition: border-color 0.2s ease; }
        .input-field:focus { border-color: rgba(74,222,128,0.5) !important; }

        /* ── Social icons ──────────────────────────────── */
        .social-icon { display: inline-block; transition: opacity 0.2s, transform 0.2s; }
        .social-icon:hover { opacity: 1 !important; transform: scale(1.25) translateY(-2px); }

        /* ── Footer links ──────────────────────────────── */
        .footer-link { transition: color 0.15s, padding-left 0.15s; }
        .footer-link:hover { color: rgba(255,255,255,0.9) !important; padding-left: 2px; }
      `}</style>

      {/* Fixed full-page background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_20%,rgba(20,110,45,0.70)_0%,rgba(10,55,22,0.25)_45%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(18,100,40,0.45)_0%,rgba(8,45,18,0.15)_50%,transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_95%,rgba(15,90,35,0.35)_0%,transparent_65%)]" />
      </div>

      <Header />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}