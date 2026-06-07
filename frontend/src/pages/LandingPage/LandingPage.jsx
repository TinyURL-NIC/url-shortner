import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BarChart2, Globe, Zap, Shield, ArrowRight, Link2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant shortening",
    desc: "Generate short URLs in milliseconds with our blazing-fast global infrastructure.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: BarChart2,
    title: "Deep analytics",
    desc: "Real-time click tracking, geolocation, device type, and referrer breakdowns.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Globe,
    title: "Custom domains",
    desc: "Use your own branded domain for a polished, professional link experience.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Shield,
    title: "Link security",
    desc: "Password-protect links, set expiration dates, and block malicious redirects.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const stats = [
  { value: "2M+", label: "Links created" },
  { value: "180+", label: "Countries reached" },
  { value: "99.9%", label: "Uptime SLA" },
];

const faqs = [
  {
    q: "How does link shortening work?",
    a: "When you enter a long URL, our system generates a unique short alias. Anyone visiting the short link is instantly redirected to the original destination — no friction, no delay.",
  },
  {
    q: "Do I need an account?",
    a: "You can try shortening a link without signing up, but a free account unlocks analytics, custom slugs, and full link management.",
  },
  {
    q: "What analytics are available?",
    a: "Track total clicks, unique visitors, geographic data, device type (mobile vs desktop), and referring sources — all in a real-time dashboard.",
  },
  {
    q: "Are shortened links permanent?",
    a: "Yes — links never expire on the free plan unless you delete them. Pro users can set optional expiry dates for time-sensitive campaigns.",
  },
];

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate("/login");
  };

  return (
    
    <div className="relative min-h-screen">
      
      <div
        className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px]
                   rounded-full -translate-x-1/3 -translate-y-1/4 animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px]
                   rounded-full translate-x-1/3 animate-float-delay"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Header />

      <section className="px-4 pt-20 pb-16 flex flex-col items-center text-center">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-blue-300 glass-blue">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
          Trusted by 50,000+ creators worldwide
        </div>

        <h1 className="animate-fade-up-1 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.06] tracking-tight mb-5">
          The only URL shortener
          <br />
          <span className="gradient-text">you'll ever need 👇</span>
        </h1>

        <p className="animate-fade-up-2 max-w-xl text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
          Turn long, messy links into clean, trackable URLs in seconds. Get
          analytics, custom slugs, and QR codes — completely free.
        </p>

        {/* ── Form ── */}
        <div className="animate-fade-up-3 animate-glow w-full max-w-2xl rounded-2xl glass-blue p-1.5">
          <form
            onSubmit={handleShorten}
            className="flex flex-col sm:flex-row gap-1.5"
          >
            <div className="flex flex-1 min-w-0 items-center gap-2 bg-black/30 rounded-xl px-4">
              <Link2 size={16} className="text-slate-500 shrink-0" />
              {/* <Input
                type="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="flex-1 h-12 bg-transparent border-none text-white
                           placeholder:text-slate-600 focus-visible:ring-0
                           focus-visible:ring-offset-0 text-sm px-0"
              /> */}
              <Input
                type="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="
    flex-1
    border-0
    bg-transparent
    shadow-none
    text-white
    placeholder:text-slate-500
    focus-visible:ring-0
    focus-visible:ring-offset-0
  "
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-6 sm:px-8 bg-blue-600 hover:bg-blue-500 text-white
                         font-semibold rounded-xl border-0 hover:shadow-lg
                         hover:shadow-blue-700/40 hover:scale-[1.02]
                         transition-all duration-200 flex gap-2 items-center shrink-0"
            >
              Shorten <ArrowRight size={15} />
            </Button>
          </form>
        </div>

        <p className="animate-fade-up-4 text-slate-600 text-xs mt-3">
          No credit card required · Free plan available forever
        </p>

        <div className="animate-fade-up-4 mt-7 flex flex-wrap gap-2 justify-center">
          {[
            {
              long: "amazon.com/dp/B09XJ4TKBL/ref=nav_...",
              short: "shrtnr.io/amzn3k",
            },
            {
              long: "youtube.com/watch?v=dQw4w9WgXcQ",
              short: "shrtnr.io/rickroll",
            },
          ].map(({ long, short }) => (
            <div
              key={short}
              className="glass rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs"
            >
              <span className="text-slate-600 truncate max-w-[140px] sm:max-w-[190px]">
                {long}
              </span>
              <span className="text-slate-700">→</span>
              <span className="text-blue-400 font-medium whitespace-nowrap">
                {short}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-4 sm:p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                {value}
              </div>
              <div className="text-slate-500 text-xs sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Everything you need
            </h2>
            <p className="text-slate-400">
              Powerful tools built for creators, marketers, and developers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="glass rounded-2xl p-5 flex flex-col gap-3
                           hover:-translate-y-1.5 transition-transform duration-300 cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}
                >
                  <Icon size={20} className={color} />
                </div>
                <h3 className="text-white font-semibold text-sm">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Got questions?
            </h2>
            <p className="text-slate-400">
              Everything you need to know about Shrtnr.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="
    glass
    rounded-xl
    overflow-hidden
    border
    border-white/10
  "
              >
                <AccordionTrigger 
                
                className="
    px-5
    py-4
    text-red
    hover:no-underline
    data-[state=open]:text-blue-300
  "
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent 
                className="
    px-5
    pb-5
    text-slate-400
  "
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 65%)",
            }}
          />
          <h2 className="relative text-3xl sm:text-4xl font-black text-white mb-4">
            Start shortening for free
          </h2>
          <p className="relative text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
            Join thousands of creators, marketers, and developers who rely on
            Shrtnr every single day.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => navigate("/register")}
              className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold
                         rounded-xl border-0 hover:scale-105 transition-all duration-200
                         hover:shadow-lg hover:shadow-blue-700/40"
            >
              Create free account →
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="h-12 px-8 bg-transparent border-slate-700 text-slate-300
                         hover:bg-white/5 hover:text-white hover:border-slate-600
                         rounded-xl transition-all duration-200"
            >
              Sign in
            </Button>
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 text-center border-t border-white/5">
        <p className="text-slate-600 text-sm">
          © 2026 Shrtnr. Made with ♥ for the web.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
