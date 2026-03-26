import Image from "next/image"
import Link  from "next/link"
import logo  from "@/assets/logo-white.png"

const FG = "'Space Grotesk', sans-serif"
const FI = "'Inter', sans-serif"

const LEGAL_CSS = `
  .legal-h2 { font-size: clamp(1.2rem,2.5vw,1.5rem); font-weight:700; color:#fff; margin-bottom:10px; margin-top:36px; font-family:'Space Grotesk',sans-serif; }
  .legal-p  { font-size:14.5px; color:rgba(255,255,255,0.6); line-height:1.85; margin-bottom:12px; font-family:'Inter',sans-serif; }
  .legal-ul { list-style:none; padding:0; margin:0 0 12px; }
  .legal-ul li { display:flex; align-items:flex-start; gap:8px; font-size:14.5px; color:rgba(255,255,255,0.6); line-height:1.8; margin-bottom:6px; font-family:'Inter',sans-serif; }
  .legal-ul li::before { content:"•"; color:#4ade80; font-size:10px; margin-top:5px; flex-shrink:0; }
  a.legal-link { color:#4ade80; text-decoration:underline; text-underline-offset:3px; }
`

export function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div style={{ backgroundColor: "#050e05", minHeight: "100vh", fontFamily: FI }}>
      <style>{LEGAL_CSS}</style>

      {/* Ambient bg */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 60% at 50% 20%, rgba(20,110,45,0.55) 0%, rgba(10,55,22,0.2) 45%, transparent 70%)" }} />
      </div>

      {/* Nav */}
      <header className="relative z-10 w-full" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(5,14,5,0.8)", backdropFilter: "blur(12px)" }}>
        <div className="mx-auto flex h-[64px] max-w-5xl items-center justify-between px-4 md:px-8">
          <Link href="/">
            <Image src={logo} alt="Instroom" height={38} style={{ width: "auto" }} className="object-contain" />
          </Link>
          <Link href="/" style={{ fontFamily: FI, fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 mx-auto max-w-3xl px-4 md:px-8 py-14 md:py-20">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-block", backgroundColor: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 999, padding: "4px 14px", marginBottom: 16 }}>
            <span style={{ fontFamily: FI, fontSize: 12, color: "#4ade80", fontWeight: 600, letterSpacing: "0.05em" }}>Legal</span>
          </div>
          <h1 style={{ fontFamily: FG, fontSize: "clamp(1.9rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>{title}</h1>
          <p style={{ fontFamily: FI, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Last updated: {lastUpdated}</p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,rgba(34,197,94,0.4),transparent)", marginBottom: 40 }} />

        {/* Body */}
        <div>{children}</div>

        {/* Footer note */}
        <div style={{ marginTop: 56, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
          <p style={{ fontFamily: FI, fontSize: 13, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            Questions? Contact us at{" "}
            <a href="mailto:support@instroom.io" className="legal-link">support@instroom.io</a>
          </p>
        </div>
      </main>

      {/* Copyright */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#080f08" }}>
        <p style={{ fontFamily: FI, fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", padding: "16px 0" }}>
          Copyright © 2026 Instroom.io. All rights reserved.
        </p>
      </div>
    </div>
  )
}
