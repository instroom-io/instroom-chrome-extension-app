"use client"
import { useState } from "react"
import { signup } from "@/app/actions/auth"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import logoWhite from "@/assets/logo-white.png"

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const ORBS = [
  { size: 500, blur: 80,  opacity: "0.30",   pos: { top: "10%",   left: "60%" }, anim: "float1 10s ease-in-out infinite", bg: "#22c55e,#15803d" },
  { size: 350, blur: 100, opacity: "0.20",   pos: { bottom: "5%", right: "5%" }, anim: "float2 13s ease-in-out infinite", bg: "#4ade80,#166534" },
  { size: 250, blur: 120, opacity: "0.15",   pos: { top: "60%",   left: "10%" }, anim: "float3 16s ease-in-out infinite", bg: "#22c55e,#14532d" },
]

const FLOAT_CSS = `
  @keyframes float1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-40px,30px) scale(1.08)}66%{transform:translate(30px,-40px) scale(0.95)}}
  @keyframes float2{0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(30px,-50px) scale(1.1)}70%{transform:translate(-20px,20px) scale(0.92)}}
  @keyframes float3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(50px,-30px) scale(1.05)}}
`

const INPUT_CLS = "h-10 rounded-xl border border-[#0a1f10]/10 bg-white text-[#0a1f10] placeholder:text-[#0a1f10]/25 focus:border-[#22c55e]/60 focus:ring-1 focus:ring-[#22c55e]/20 shadow-sm transition-all"
const LABEL_CLS = "text-[10px] font-bold uppercase tracking-widest text-[#0a1f10]/60"

const FIELDS = [
  [
    { id: "name",    name: "name",    type: "text",     label: "Full Name", placeholder: "John Doe",        required: true  },
    { id: "company", name: "company", type: "text",     label: "Company",   placeholder: "Your Brand",      required: false },
  ],
  [
    { id: "email",            name: "email",            type: "email",    label: "Email Address", placeholder: "you@example.com", required: true, fullWidth: true },
  ],
  [
    { id: "password",         name: "password",         type: "password", label: "Password", placeholder: "", required: true  },
    { id: "confirm-password", name: "confirm-password", type: "password", label: "Confirm",  placeholder: "", required: true  },
  ],
]

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 120% 100% at 60% 50%,#1a5c30 0%,#0a1f10 55%,#060f09 100%)" }}>
      {ORBS.map(({ size, blur, opacity, pos, anim, bg }, i) => (
        <div key={i} className="absolute rounded-full"
          style={{ width: size, height: size, ...pos, filter: `blur(${blur}px)`, opacity, background: `radial-gradient(circle,${bg})`, animation: anim }} />
      ))}
      <style>{FLOAT_CSS}</style>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function Alert({ type, message }) {
  const styles = {
    error:   { border: "border-red-400/30",   bg: "bg-red-50",   text: "text-red-500",   icon: "⚠️" },
    success: { border: "border-green-400/30", bg: "bg-green-50", text: "text-green-600", icon: "✅" },
  }
  const { border, bg, text, icon } = styles[type]
  return (
    <div className={`rounded-xl border ${border} ${bg} px-4 py-3 text-sm ${text} flex items-center gap-2`}>
      <span>{icon}</span>{message}
    </div>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export function SignupForm({ className, ...props }) {
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState("")
  const [success, setSuccess] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setError(""); setSuccess(""); setLoading(true)
    const result = await signup(new FormData(e.target))
    if (result.error) setError(result.error)
    else { setSuccess(result.success); e.target.reset() }
    setLoading(false)
  }

  return (
    <>
      <AnimatedBackground />

      <div
        className={cn("flex w-full max-w-4xl overflow-hidden rounded-3xl", className)}
        style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7),0 0 0 1px rgba(34,197,94,0.1)" }}
        {...props}
      >
        {/* ── LEFT: Form ── */}
        <div className="relative flex w-full flex-col justify-center bg-[#f4f9f5] px-10 pr-16 py-12 md:w-[52%] min-h-[620px]">
          <div className="absolute -right-8 top-0 h-full w-20 hidden md:block z-10"
            style={{ background: "#f4f9f5", borderRadius: "0 55% 55% 0/0 38% 38% 0" }} />

          <h2 className="mb-1 text-2xl font-bold tracking-tight text-[#0a1f10]">Create Account</h2>
          <p className="mb-6 text-sm text-[#0a1f10]/40">Start your journey with Instroom today.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error   && <Alert type="error"   message={error}   />}
            {success && <Alert type="success" message={success} />}

            <FieldGroup className="flex flex-col gap-3">
              {FIELDS.map((row, ri) => (
                <div key={ri} className={row.length > 1 ? "grid grid-cols-2 gap-3" : ""}>
                  {row.map(({ id, name, type, label, placeholder, required }) => (
                    <Field key={id} className="flex flex-col gap-1.5">
                      <FieldLabel htmlFor={id} className={LABEL_CLS}>{label}</FieldLabel>
                      <Input id={id} name={name} type={type} placeholder={placeholder}
                        required={required} disabled={loading} className={INPUT_CLS} />
                    </Field>
                  ))}
                </div>
              ))}

              <Field className="flex flex-col gap-3 pt-1">
                <Button type="submit" disabled={loading}
                  className="h-11 w-full rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", boxShadow: "0 4px 20px rgba(34,197,94,0.4)" }}>
                  {loading
                    ? <span className="flex items-center gap-2"><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Creating…</span>
                    : "Create Account"}
                </Button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#0a1f10]/10" />
                  <span className="text-xs text-[#0a1f10]/30">or</span>
                  <div className="h-px flex-1 bg-[#0a1f10]/10" />
                </div>

                <Button variant="outline" type="button" disabled={loading}
                  className="h-11 w-full rounded-xl border border-[#0a1f10]/10 bg-white text-[#0a1f10]/70 hover:bg-[#f0faf3] hover:text-[#0a1f10] shadow-sm transition-all flex items-center justify-center gap-2">
                  <GoogleIcon /> Sign up with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>

        {/* ── RIGHT: Branding ── */}
        <div className="relative hidden md:flex md:w-[48%] flex-col items-center justify-center px-10 py-12 text-center overflow-hidden"
          style={{ background: "linear-gradient(145deg,rgba(20,60,30,0.6) 0%,rgba(6,15,9,0.7) 100%)", backdropFilter: "blur(20px)" }}>
          <div className="absolute top-0    inset-x-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(34,197,94,0.5),transparent)" }} />
          <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(34,197,94,0.2),transparent)" }} />
          <div className="absolute left-0   inset-y-0 w-px" style={{ background: "linear-gradient(180deg,transparent,rgba(34,197,94,0.3),transparent)" }} />

          <div className="relative mb-7">
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60" style={{ background: "rgba(34,197,94,0.35)" }} />
            <Image src={logoWhite} alt="Instroom" width={140} height={40} className="relative object-contain drop-shadow-2xl" />
          </div>

          <h2 className="mb-3 text-3xl font-bold text-white leading-snug">Join<br />Instroom!</h2>
          <p className="mb-8 text-sm text-white/40 leading-relaxed max-w-[240px]">
            Extract key metrics from Instagram and TikTok right from your browser. Start free today.
          </p>

          <a href="/login"
            className="inline-flex h-11 items-center justify-center rounded-xl px-8 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
            Already have an account?
          </a>
          <p className="mt-4 text-xs text-white/25">Sign in instead</p>
        </div>
      </div>
    </>
  )
}