import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "../assets/viovox-symbol.svg.asset.json";
import {
  Brain,
  Focus,
  Waves,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ArrowDown,
  Eye,
  EyeOff,
  ScrollText,
  Instagram,
  Mail,
  ArrowRight,
  Sparkles,
  MousePointerClick,
  Volume2,
  Bot,
  Smile,
  Sun,
  Moon,
  Monitor,
  Camera,
} from "lucide-react";

const WAITLIST_URL = "https://tally.so/r/jazje1";
const EMAIL = "hello@viovox.net";
const INSTAGRAM = "https://www.instagram.com/viovox_nyt?igsh=ZTN4NTVrZWhicTRs&utm_source=qr";
const TWITTER = "https://x.com/deloment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viovox — A neural interface, in the making" },
      {
        name: "description",
        content:
          "Viovox is an early research project exploring a hands-free phone interface — driven by natural signals like blink, focus and jaw clench.",
      },
      { property: "og:title", content: "Viovox — A neural interface, in the making" },
      {
        property: "og:description",
        content: "An early research project exploring a hands-free, signal-driven phone interface.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Viovox",
          url: "https://viovox.net/",
          logo: logoAsset.url,
          email: EMAIL,
          sameAs: [INSTAGRAM, TWITTER],
        }),
      },
    ],
  }),
  component: Landing,
});

const userSignals = [
  { icon: Eye, name: "Blink", desc: "A natural blink the system can pick up." },
  { icon: EyeOff, name: "Wink", desc: "A deliberate one-eye wink." },
  { icon: Focus, name: "Focus", desc: "Sustained attention on something on screen." },
  { icon: Brain, name: "Relax", desc: "A calm, low-activity baseline." },
  { icon: Smile, name: "Jaw clench", desc: "A subtle, intentional jaw tension." },
];

const commands = [
  { icon: ScrollText, name: "Scroll", desc: "Move through a feed or page." },
  { icon: ArrowRightIcon, name: "Next", desc: "Jump to the next item." },
  { icon: ArrowLeft, name: "Back", desc: "Step back through the interface." },
  { icon: Bot, name: "Call AI", desc: "Summon the assistant." },
  { icon: MousePointerClick, name: "Select / Tap", desc: "Confirm the active element." },
  { icon: Volume2, name: "Volume", desc: "Raise or lower the sound." },
];

const principles = [
  {
    title: "Hands-free, by intent",
    body: "We're exploring a phone interface you don't have to touch — built around natural signals like blink, focus and jaw clench.",
  },
  {
    title: "Signal-first thinking",
    body: "Instead of forcing new \"brain commands\", we map gestures your body already produces into clear, reliable inputs.",
  },
  {
    title: "An honest research project",
    body: "Viovox is early. We're prototyping, testing, and writing about what works — no hardware sold, no promises of dates.",
  },
  {
    title: "Accessibility-first, not accessibility-only",
    body: "People who can't fully rely on touch are our north star — but a hands-free phone is for everyone who'd rather not be glued to a screen.",
  },
];

const useCases = [
  { title: "Accessibility", body: "An interface we hope can serve people who can't fully rely on touch — and stays open to everyone else." },
  { title: "Driving & cycling", body: "A future where you can stay focused on the road without reaching for the phone." },
  { title: "Workouts", body: "Control music, timers and calls mid-set without breaking flow." },
  { title: "Reading & focus", body: "Turn pages and switch tabs without disturbing your posture." },
];

const steps = [
  { n: "01", title: "Read the signal", body: "We're researching how to fuse EEG from a wearable sensor with glance and micro-expression cues from the phone's front camera." },
  { n: "02", title: "Translate into intent", body: "Brain signals plus what the camera sees — blink, focus, relax, jaw clench — get mapped to clear, repeatable inputs." },
  { n: "03", title: "Drive the phone", body: "Those inputs become commands — scroll, next, back, select, volume, call AI." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Signals />
        <Features />
        <HowItWorks />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={logoAsset.url}
            alt="Viovox"
            className="h-8 w-8 transition-transform group-hover:scale-110"
          />
          <span className="font-display font-semibold tracking-tight text-lg">
            Viovox
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#signals" className="hover:text-foreground transition-colors">Signals</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#cases" className="hover:text-foreground transition-colors">Use cases</a>
        </nav>
        <a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--glow-soft)] hover:shadow-[var(--glow-primary)] transition-all"
        >
          Follow <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function EEGWave() {
  return (
    <svg
      viewBox="0 0 1200 200"
      className="w-full h-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="oklch(0.62 0.22 260)" stopOpacity="0" />
          <stop offset="0.5" stopColor="oklch(0.75 0.20 240)" stopOpacity="1" />
          <stop offset="1" stopColor="oklch(0.62 0.22 260)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 100 Q 60 100 100 60 T 200 140 T 300 70 T 400 130 T 500 60 T 600 100 T 700 140 T 800 60 T 900 130 T 1000 80 T 1100 110 T 1200 100"
        fill="none"
        stroke="url(#wg)"
        strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 8px oklch(0.62 0.22 260 / 0.7))" }}
      />
      <path
        d="M0 100 Q 60 100 100 80 T 200 120 T 300 85 T 400 115 T 500 80 T 600 100 T 700 120 T 800 80 T 900 115 T 1000 90 T 1100 105 T 1200 100"
        fill="none"
        stroke="oklch(0.62 0.22 260 / 0.35)"
        strokeWidth="1"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
          <Sparkles className="h-3 w-3 text-primary" />
          Early research · neural interface for your phone
        </div>
        <h1
          className="animate-fade-up text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
          style={{ animationDelay: "0.1s" }}
        >
          A phone you'd control
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            with your mind.
          </span>
        </h1>
        <p
          className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          Viovox is an early-stage research project exploring instinctive,
          hands-free control of a phone — fusing EEG signals from a wearable
          sensor with glance and micro-expression cues from the phone's camera.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-[var(--glow-soft)] hover:shadow-[var(--glow-primary)] transition-all"
          >
            Follow the journey <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-base font-medium hover:bg-card/80 transition-colors"
          >
            What we're exploring
          </a>
        </div>

        <div
          className="animate-fade-up mt-20 relative h-40 md:h-56 rounded-3xl border border-border bg-card/30 backdrop-blur overflow-hidden"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 opacity-90">
            <EEGWave />
          </div>
          <img
            src={logoAsset.url}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 md:h-32 animate-float opacity-90"
            style={{ filter: "drop-shadow(0 0 30px oklch(0.62 0.22 260 / 0.6))" }}
          />
        </div>
      </div>
    </section>
  );
}

function Signals() {
  return (
    <section id="signals" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Signals & commands</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Natural signals in.
            <br />
            Phone commands out.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            We're exploring an input model that fuses two streams: brain
            signals from a wearable EEG sensor, and glance plus micro-expressions
            from the phone's front camera. Below is the rough vocabulary we're
            playing with — how each signal maps to a command is still open
            research, not a promise.
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 backdrop-blur px-3 py-1">
              <Brain className="h-3.5 w-3.5 text-primary" /> EEG sensor
            </span>
            <span className="text-muted-foreground/60">+</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 backdrop-blur px-3 py-1">
              <Camera className="h-3.5 w-3.5 text-primary" /> Phone camera
            </span>
            <span className="text-muted-foreground/60">=</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Instinctive control
            </span>
          </div>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Waves className="h-4 w-4 text-primary" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Signals from you
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {userSignals.map((s) => (
                <div
                  key={s.name}
                  className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-display font-semibold">{s.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <ArrowDown className="h-4 w-4 text-primary" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Commands to the phone
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {commands.map((c) => (
                <div
                  key={c.name}
                  className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-display font-semibold">{c.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Principles</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            What we believe <br />
            a neural interface should be.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Viovox is in early research. These are the principles guiding
            what we build — not features of a shipped product.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:bg-card/70 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-24 border-t border-border relative">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">What we're exploring</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            From signal to action — <br />
            the path we're prototyping.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6"
            >
              <div
                className="font-display text-5xl font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="cases" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Where we're aiming</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Built for moments <br />
            your hands can't help.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            These are the scenarios we're designing toward. Not features we
            ship today — directions our research is pointed at.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-display font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="relative rounded-3xl border border-border p-10 md:p-16 text-center overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Follow Viovox <br /> from day one.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              We're in early research. Leave your email and we'll share
              progress, prototypes and the moment there's something to try.
              No promises on dates.
            </p>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-[var(--glow-soft)] hover:shadow-[var(--glow-primary)] transition-all"
            >
              Follow the journey <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Viovox" className="h-7 w-7" />
            <span className="font-display font-semibold text-lg">Viovox</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            An early research project exploring a hands-free phone interface.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Contact</p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Follow</p>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M18.244 2H21l-6.51 7.44L22.5 22h-6.84l-4.79-6.27L5.2 22H2.44l6.96-7.96L1.5 2h6.99l4.33 5.74L18.244 2Zm-2.4 18.4h1.86L7.27 3.5H5.27l10.574 16.9Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Viovox. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <p>Made for hands-free humans.</p>
        </div>
      </div>
    </footer>
  );
}

type ThemeMode = "auto" | "light" | "dark";

function applyTheme(mode: ThemeMode) {
  if (typeof window === "undefined") return;
  const isLight =
    mode === "light" ||
    (mode === "auto" && window.matchMedia("(prefers-color-scheme: light)").matches);
  document.documentElement.classList.toggle("light", isLight);
}

function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("auto");

  useEffect(() => {
    const stored = (localStorage.getItem("viovox-theme") as ThemeMode | null) ?? "auto";
    setMode(stored);
    applyTheme(stored);
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      const current = (localStorage.getItem("viovox-theme") as ThemeMode | null) ?? "auto";
      if (current === "auto") applyTheme("auto");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const pick = (next: ThemeMode) => {
    setMode(next);
    localStorage.setItem("viovox-theme", next);
    applyTheme(next);
  };

  const options: { value: ThemeMode; label: string; Icon: typeof Sun }[] = [
    { value: "auto", label: "Auto", Icon: Monitor },
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-1 rounded-full border border-border bg-card/50 backdrop-blur p-1"
    >
      {options.map(({ value, label, Icon }) => {
        const active = mode === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => pick(value)}
            className={
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs transition-colors " +
              (active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
