"use client"
import { useActionState, useState, useEffect } from "react"
import { login } from "@/app/actions/auth"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import logoWhite from "@/assets/logo-white.png"

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const ORBS = [
  { size: 500, blur: 80,  opacity: 30,  pos: { top: "10%",    left: "60%"  }, anim: "float1 10s ease-in-out infinite", bg: "#22c55e, #15803d" },
  { size: 350, blur: 100, opacity: 20,  pos: { bottom: "5%",  right: "5%"  }, anim: "float2 13s ease-in-out infinite", bg: "#4ade80, #166534" },
  { size: 250, blur: 120, opacity: 15,  pos: { top: "60%",    left: "10%"  }, anim: "float3 16s ease-in-out infinite", bg: "#22c55e, #14532d" },
]

const INPUT_CLS = "h-11 rounded-xl border border-[#0a1f10]/10 bg-white text-[#0a1f10] placeholder:text-[#0a1f10]/25 focus:border-[#22c55e]/60 focus:ring-1 focus:ring-[#22c55e]/20 shadow-sm transition-all"
const LABEL_CLS = "text-[10px] font-bold uppercase tracking-widest text-[#0a1f10]/70"

const FLOAT_CSS = `
  @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-40px,30px) scale(1.08)} 66%{transform:translate(30px,-40px) scale(0.95)} }
  @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(30px,-50px) scale(1.1)}  70%{transform:translate(-20px,20px) scale(0.92)} }
  @keyframes float3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(50px,-30px) scale(1.05)} }
`

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 120% 100% at 60% 50%, #1a5c30 0%, #0a1f10 55%, #060f09 100%)" }}>
      {ORBS.map(({ size, blur, opacity, pos, anim, bg }, i) => (
        <div key={i} className="absolute rounded-full"
          style={{ width: size, height: size, ...pos, filter: `blur(${blur}px)`, opacity: opacity / 100, background: `radial-gradient(circle, ${bg})`, animation: anim }} />
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

function Shimmer({ dir = "90deg", opacities = [0.5, 0.2] }) {
  return (
    <div className="absolute inset-x-0 h-px"
      style={{ background: `linear-gradient(${dir}, transparent, rgba(34,197,94,${opacities[0]}), transparent)` }} />
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export function LoginForm({ className, ...props }) {
  const [state, formAction, isPending] = useActionState(login, null)
  const [error, setError] = useState("")

  useEffect(() => {
    if (state?.error) setError(state.error)
  }, [state])

  return (
    <>
      <AnimatedBackground />

      <div
        className={cn("flex w-full max-w-4xl overflow-hidden rounded-3xl", className)}
        style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(34,197,94,0.1)" }}
        {...props}
      >
        {/* ── LEFT: Form ── */}
        <div className="relative flex w-full flex-col justify-center bg-[#f4f9f5] px-10 pr-16 py-12 md:w-[52%] min-h-[580px]">
          <div className="absolute -right-8 top-0 h-full w-20 hidden md:block z-10"
            style={{ background: "#f4f9f5", borderRadius: "0 55% 55% 0 / 0 38% 38% 0" }} />

          <h2 className="mb-1 text-2xl font-bold tracking-tight text-[#0a1f10]">Sign In</h2>
          <p className="mb-7 text-sm text-[#0a1f10]/60">Welcome back! Please enter your details.</p>

          <form action={formAction} className="flex flex-col gap-5">
            {error && !isPending && (
              <div className="rounded-xl border border-red-400/30 bg-red-50 px-4 py-3 text-sm text-red-500 flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            <FieldGroup className="flex flex-col gap-4">
              <Field className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="email" className={LABEL_CLS}>Email Address</FieldLabel>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className={INPUT_CLS} />
              </Field>

              <Field className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password" className={LABEL_CLS}>Password</FieldLabel>
                  <a href="#" className="text-xs font-medium text-[#22c55e] hover:underline underline-offset-4 transition-colors whitespace-nowrap">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required className={INPUT_CLS} />
              </Field>

              <Field className="flex flex-col gap-3 pt-1">
                <Button type="submit" disabled={isPending}
                  className="h-11 w-full rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", boxShadow: "0 4px 20px rgba(34,197,94,0.4)" }}>
                  {isPending
                    ? <span className="flex items-center gap-2"><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Signing in…</span>
                    : "Sign In"}
                </Button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#0a1f10]/10" />
                  <span className="text-xs text-[#0a1f10]/30">Sign in with</span>
                  <div className="h-px flex-1 bg-[#0a1f10]/10" />
                </div>

                <Button variant="outline" type="button"
                  className="h-11 w-full rounded-xl border border-[#0a1f10]/10 bg-white text-[#0a1f10]/70 hover:bg-[#f0faf3] hover:text-[#0a1f10] shadow-sm transition-all flex items-center justify-center gap-2">
                  <GoogleIcon /> Continue with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>

        {/* ── RIGHT: Branding ── */}
        <div className="relative hidden md:flex md:w-[48%] flex-col items-center justify-center px-10 py-12 text-center overflow-hidden"
          style={{ background: "linear-gradient(145deg, rgba(20,60,30,0.6) 0%, rgba(6,15,9,0.7) 100%)", backdropFilter: "blur(20px)" }}>

          <div className="absolute top-0 inset-x-0"><Shimmer opacities={[0.5]} /></div>
          <div className="absolute bottom-0 inset-x-0"><Shimmer opacities={[0.2]} /></div>
          <div className="absolute left-0 inset-y-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(34,197,94,0.3), transparent)" }} />

          <div className="relative mb-7">
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60" style={{ background: "rgba(34,197,94,0.35)" }} />
            <Image src={logoWhite} alt="Instroom" width={140} height={40} className="relative object-contain drop-shadow-2xl" />
          </div>

          <h2 className="mb-3 text-3xl font-bold text-white leading-snug">Glad to see<br />you back!</h2>
          <p className="mb-8 text-sm text-white/40 leading-relaxed max-w-[260px]">
            The ultimate influencer analytics tool for Instagram and TikTok. Trusted by creators, marketers & agencies worldwide.
          </p>

          <a href="/signup"
            className="inline-flex h-11 items-center justify-center rounded-xl px-8 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", boxShadow: "0 0 28px rgba(34,197,94,0.45)" }}>
            Create Free Account
          </a>

          <p className="mt-4 text-xs text-white/25">No credit card required</p>
        </div>
      </div>
    </>
  )
}