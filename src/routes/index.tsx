import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Home,
  GitBranch,
  Database,
  Users,
  LineChart,
  HelpCircle,
  Settings,
  Zap,
  Mail,
  GitMerge,
  Share2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Glimpse — Smarter marketing decisions powered by data" },
      {
        name: "description",
        content:
          "Turn your marketing data into clear insights, better decisions, and continuously optimized campaigns.",
      },
    ],
  }),
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
        style={{ background: "var(--gradient-icon)" }}
      >
        <span className="text-sm font-black italic">G</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">Glimpse</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-8 pt-6">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex">
        {["Products", "Industries", "Resources", "Partners"].map((item) => (
          <button
            key={item}
            className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            {item}
            {(item === "Products" || item === "Industries") && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-5">
        <button className="text-sm font-medium text-foreground/80 hover:text-foreground">Login</button>
        <button
          className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
        >
          See a demo
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}

function GradientIcon({ size = 64 }: { size?: number }) {
  return (
    <span
      className="hero-icon-shimmer hero-float inline-flex items-center justify-center rounded-2xl align-middle text-white"
      style={{
        background: "var(--gradient-icon)",
        width: size,
        height: size,
        boxShadow: "0 8px 20px -8px oklch(0.6 0.22 320 / 0.5)",
      }}
    >
      <TrendingUp className="h-1/2 w-1/2 relative z-10" strokeWidth={2.5} />
    </span>
  );
}

function LeftColumn() {
  return (
    <div className="flex flex-col">
      {/* Pill */}
      <div
        className="hero-rise inline-flex w-fit items-center gap-2 rounded-full border border-black/5 bg-white px-3.5 py-1.5"
        style={{ boxShadow: "var(--shadow-soft)", animationDelay: "0ms" }}
      >
        <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--brand-purple)" }} fill="currentColor" />
        <span className="text-sm font-medium text-foreground">Made for smarter decisions</span>
      </div>

      {/* Headline */}
      <h1
        className="hero-rise mt-7 text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
        style={{ animationDelay: "120ms" }}
      >
        Smarter marketing
        <br />
        decisions <GradientIcon /> powered
        <br />
        by data
      </h1>

      {/* Sub */}
      <p
        className="hero-rise mt-7 max-w-[480px] text-lg leading-relaxed text-muted-foreground"
        style={{ animationDelay: "240ms" }}
      >
        Turn your marketing data into clear insights, better decisions, and continuously optimized.
      </p>

      {/* CTA */}
      <button
        className="hero-rise hero-cta mt-8 inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)", animationDelay: "360ms" }}
      >
        See a demo
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
      </button>

      {/* Stats */}
      <div className="mt-12 flex items-start gap-12">
        {[
          { v: "5k+", l: "Campaigns optimized" },
          { v: "40%+", l: "Higher conversion" },
          { v: "3×", l: "Faster decisions" },
        ].map((s, i) => (
          <div key={s.l} className="hero-rise" style={{ animationDelay: `${480 + i * 100}ms` }}>
            <div className="text-3xl font-bold tracking-tight text-foreground">{s.v}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderLine({ w = "100%", h = 8 }: { w?: string | number; h?: number }) {
  return <div className="rounded-full bg-slate-200/70" style={{ width: w, height: h }} />;
}

function WorkflowNode({
  icon,
  label,
  className = "",
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`hero-pop flex w-[180px] flex-col gap-2 rounded-lg border border-slate-200/80 bg-white px-3 py-2.5 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md ${className}`}
      style={{ boxShadow: "0 2px 6px -2px oklch(0.4 0.06 270 / 0.08)", animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2">
        <span className="text-slate-500">{icon}</span>
        <span className="text-xs font-semibold text-foreground">{label}</span>
      </div>
      <PlaceholderLine w="80%" h={5} />
    </div>
  );
}

function Connector({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`hero-connector w-px ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function Illustration() {
  return (
    <div className="relative h-[640px] w-full">
      {/* Glows */}
      <div
        className="hero-glow pointer-events-none absolute -bottom-10 -left-20 h-[400px] w-[400px]"
        style={{ background: "var(--gradient-glow-pink)" }}
      />
      <div
        className="hero-glow pointer-events-none absolute -bottom-10 right-0 h-[450px] w-[500px]"
        style={{ background: "var(--gradient-glow-blue)", animationDelay: "1.5s" }}
      />

      {/* Main app card */}
      <div
        className="hero-rise absolute left-4 right-0 top-4 flex h-[400px] rounded-2xl border border-slate-200/70 bg-white"
        style={{ boxShadow: "var(--shadow-card)", animationDelay: "150ms" }}
      >
        {/* Sidebar */}
        <div className="flex w-[44%] flex-col gap-5 border-r border-slate-100 p-5">
          {[
            { icon: <Home className="h-4 w-4" />, active: false },
            { icon: <GitBranch className="h-4 w-4" />, active: true, label: "Automation" },
            { icon: <Database className="h-4 w-4" />, active: false },
            { icon: <Users className="h-4 w-4" />, active: false },
            { icon: <LineChart className="h-4 w-4" />, active: false },
            { icon: <HelpCircle className="h-4 w-4" />, active: false },
            { icon: <Settings className="h-4 w-4" />, active: false },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={row.active ? "text-foreground" : "text-slate-400"}>{row.icon}</span>
              {row.label ? (
                <span className="text-sm font-medium text-foreground">{row.label}</span>
              ) : (
                <PlaceholderLine w={140} h={6} />
              )}
            </div>
          ))}
        </div>

        {/* Workflow area */}
        <div className="relative flex-1 p-6">
          <div className="flex flex-col items-center gap-0">
            <WorkflowNode icon={<Zap className="h-3.5 w-3.5" />} label="Trigger" delay={400} />
            <Connector className="h-5" delay={550} />
            <WorkflowNode icon={<Mail className="h-3.5 w-3.5" />} label="Welcome email" delay={650} />
            <Connector className="h-5" delay={800} />
            <WorkflowNode icon={<GitMerge className="h-3.5 w-3.5" />} label="Condition" delay={900} />

            {/* Branch */}
            <div className="relative mt-3 flex w-full justify-center gap-8">
              <div className="hero-pop flex flex-col items-center" style={{ animationDelay: "1050ms" }}>
                <span className="mb-1 rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                  YES
                </span>
                <WorkflowNode icon={<Mail className="h-3.5 w-3.5" />} label="Reminder email" delay={1100} />
              </div>
              <div className="hero-pop flex flex-col items-center" style={{ animationDelay: "1150ms" }}>
                <span className="mb-1 rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-semibold text-rose-700">
                  NO
                </span>
                <WorkflowNode icon={<Mail className="h-3.5 w-3.5" />} label="Reminder email" delay={1200} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lincoln Curtis chip */}
      <div
        className="hero-pop hero-float absolute left-[34%] top-[140px] z-20"
        style={{ animationDelay: "1300ms, 1.8s", animationFillMode: "forwards, none" }}
      >
        <div
          className="relative rounded-full px-3 py-1 text-xs font-semibold text-foreground"
          style={{ background: "var(--chip-lavender)" }}
        >
          Lincoln Curtis
          <svg className="absolute -bottom-1.5 left-6" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M5 8L0 0H10L5 8Z" fill="var(--chip-lavender)" />
          </svg>
        </div>
      </div>

      {/* Erin Lipshutz chip */}
      <div
        className="hero-pop hero-float-alt absolute right-2 top-[260px] z-20"
        style={{ animationDelay: "1450ms, 2.2s" }}
      >
        <div
          className="relative rounded-full px-3 py-1 text-xs font-semibold text-foreground"
          style={{ background: "var(--chip-pink)" }}
        >
          Erin Lipshutz
          <svg className="absolute -top-1.5 left-3 rotate-180" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M5 8L0 0H10L5 8Z" fill="var(--chip-pink)" />
          </svg>
        </div>
      </div>

      {/* Active workflow card */}
      <div
        className="absolute left-[24%] top-[340px] z-30 w-[360px] rounded-2xl border border-slate-100 bg-white p-4"
        style={{ boxShadow: "0 20px 40px -16px oklch(0.4 0.06 270 / 0.25)" }}
      >
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
            <Share2 className="h-4 w-4 text-slate-600" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-muted-foreground">Active workflow</div>
            <div className="text-sm font-bold text-foreground">Campaign Performance Overview</div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex -space-x-2">
            {["oklch(0.7 0.1 30)", "oklch(0.75 0.1 350)", "oklch(0.55 0.05 260)"].map((c, i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border-2 border-white"
                style={{ background: c }}
              />
            ))}
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
            <Share2 className="h-3 w-3" />
            Share report
          </button>
        </div>
      </div>

      {/* Bottom stat cards */}
      <div className="absolute bottom-2 left-2 right-0 z-10 flex items-center justify-between gap-3 px-4">
        {[
          { c: "oklch(0.85 0.08 285)", l: "Clicks", v: "70k" },
          { c: "oklch(0.88 0.06 220)", l: "Leads", v: "169" },
          { c: "oklch(0.88 0.06 350)", l: "Sales", v: "$98" },
        ].map((s) => (
          <div
            key={s.l}
            className="flex flex-1 items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <span className="h-3 w-3 rounded" style={{ background: s.c }} />
            <span className="text-sm text-muted-foreground">{s.l}</span>
            <span className="ml-auto text-sm font-bold text-foreground">{s.v}</span>
          </div>
        ))}
      </div>

      {/* faint connector line behind report card */}
      <div className="absolute left-1/2 top-[400px] h-12 w-px bg-slate-200" />
    </div>
  );
}

function BrandStrip() {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-[1280px] items-center justify-between gap-8 px-8 pb-10">
      <p className="text-sm text-muted-foreground">Helping leading brands work smarter</p>
      <div className="flex items-center gap-12 text-slate-400">
        <span className="flex items-center gap-2 text-base font-bold tracking-wider">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="6" width="2" height="12"/><rect x="7" y="6" width="2" height="12"/><rect x="11" y="6" width="2" height="12"/><rect x="15" y="6" width="2" height="12"/><rect x="19" y="6" width="2" height="12"/></svg>
          INTERCOM
        </span>
        <span className="flex items-center gap-2 text-base font-bold">
          <svg width="22" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2L0 6l6 4 6-4-6-4zm12 0l-6 4 6 4 6-4-6-4zM0 14l6 4 6-4-6-4-6 4zm18-4l-6 4 6 4 6-4-6-4zM6 19l6 4 6-4-6-4-6 4z"/></svg>
          Dropbox
        </span>
        <span className="flex items-center gap-2 text-base font-bold lowercase">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2a2 2 0 100 4h2V4a2 2 0 00-2-2zm0 6H4a2 2 0 100 4h5V8zm6 12a2 2 0 100-4h-2v2a2 2 0 002 2zm0-6h5a2 2 0 100-4h-5v4zM4 15a2 2 0 102 2v-2H4zm6-11a2 2 0 104 0V2a2 2 0 00-4 0v2zm10 5a2 2 0 100 4h2a2 2 0 100-4h-2zm-6 11a2 2 0 10-4 0v2a2 2 0 004 0v-2z"/></svg>
          slack
        </span>
        <span className="flex items-center gap-2 text-base font-bold lowercase">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18l-9 14L3 5z"/></svg>
          zendesk
        </span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Nav />
      <main className="relative mx-auto mt-16 grid w-full max-w-[1280px] grid-cols-1 gap-8 px-8 lg:grid-cols-[1fr_640px]">
        <LeftColumn />
        <Illustration />
      </main>
      <BrandStrip />
    </div>
  );
}
