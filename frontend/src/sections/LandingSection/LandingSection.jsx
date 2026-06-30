import { useState } from "react";

import { useNavigate} from "react-router-dom";
import {
  ArrowRight,
  Link2,
  BarChart3,
  QrCode,
  Shield,
  ArrowLeft,
  Globe,
  Users,
} from "lucide-react";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingSection = () => {
  const [longUrl, setLongUrl] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [chartLoaded, setChartLoaded] = useState(false);
  const chartData = [38, 52, 61, 44, 78, 63, 91];
  const chartDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartMax = Math.max(...chartData);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setChartLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const changeTestimonial = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTestimonial((prev) =>
        direction === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsAnimating(false);
    }, 260);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial("next");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      value: "2M+",
      label: "Links shortened",
    },
    {
      value: "180+",
      label: "Countries reached",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
    },
    {
      value: "50K+",
      label: "Monthly users",
    },
  ];

  const features = [
    {
      icon: Link2,
      title: "Custom Short Links",
      description:
        "Create clean, memorable URLs that are easier to share and recognize.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description:
        "Track clicks, devices, locations, and performance from one dashboard.",
    },
    {
      icon: QrCode,
      title: "Instant QR Codes",
      description:
        "Generate QR codes for every short link and share them anywhere.",
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description:
        "Built on reliable infrastructure to keep your links available.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Share links worldwide with fast redirects and dependable uptime.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Manage and organize links with your team from a single workspace.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We switched because we wanted something simple. The analytics are clear and the link management experience is excellent.",
      author: "Priya Sharma",
      role: "Marketing Executive",
    },
    {
      quote:
        "Creating campaign links takes seconds. It has become part of our daily workflow.",
      author: "Rahul Das",
      role: "Content Creator",
    },
    {
      quote:
        "The custom short URLs make our links look more professional and trustworthy.",
      author: "Ananya Roy",
      role: "Small Business Owner",
    },
  ];

  const faqs = [
    {
      question: "What is a URL shortener?",
      answer:
        "A URL shortener converts long URLs into shorter, easier-to-share links.",
    },
    {
      question: "Can I customize my short links?",
      answer:
        "Yes. You can create custom aliases to make links more recognizable.",
    },
    {
      question: "Do short URLs expire?",
      answer: "No. Your links remain active unless removed or modified by you.",
    },
    {
      question: "Can I track link clicks?",
      answer:
        "Yes. Analytics help you understand how your audience interacts with links.",
    },
    {
      question: "Is Shrtnr free to use?",
      answer: "Yes. A free plan is available for everyone.",
    },
    {
      question: "Are QR codes included?",
      answer: "Yes. QR codes can be generated for all shortened links.",
    },
    {
      question: "Can I edit a destination URL later?",
      answer:
        "Yes. You can update destinations without changing the short URL.",
    },
    {
      question: "How secure are my links?",
      answer:
        "We use modern security practices and reliable infrastructure to keep your links safe.",
    },
  ];

  return (
    <main className="space-y-28">
      {/* HERO */}
      <section
        className="
    bg-[#F97316]
    px-8 py-20
    lg:px-16 lg:py-24
    grid gap-14
    mt-[-7.2vh] ml-[-9.9vw] mr-[-9.9vw]
    lg:grid-cols-2 lg:items-center
    relative overflow-hidden
  "
      >
        {/* depth circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#e86810] opacity-40 pointer-events-none" />
        <div className="absolute -bottom-16 left-[42%] w-56 h-56 rounded-full bg-[#e86810] opacity-30 pointer-events-none" />

        {/* LEFT */}
        <div className="relative z-10">
          <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            URL Shortener,
            <br />
            Branded Links
            <br />
            &amp; Analytics
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-white/85">
            Create shorter links, track engagement, and share them confidently
            with powerful analytics and QR code generation.
          </p>

          {/* URL FORM — solid white, no blur */}
          <div className="mt-9 flex gap-1.5 bg-white rounded-2xl p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.14)]">
            <Input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="
          flex-1 border-0 shadow-none bg-transparent
          focus-visible:ring-0 focus-visible:ring-offset-0
          placeholder:text-gray-400 text-gray-900
          text-[0.9rem] px-3
        "
            />
            <Button
              type="submit"
              className="
          h-11 px-6 rounded-xl
          bg-[#08244D] hover:bg-[#0b2f63]
          text-white font-semibold text-[0.88rem]
          flex items-center gap-2
          transition-colors duration-200
          shrink-0
        "
            >
              Shorten
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-2.5 text-[0.78rem] text-white/60">
            No credit card required · Free plan available forever
          </p>

          {/* Example pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { long: "amazon.com/dp/B09XJ4TKBL", short: "shrtnr.io/amzn3k" },
              {
                long: "youtube.com/watch?v=dQw4w9W…",
                short: "shrtnr.io/video",
              },
            ].map((item) => (
              <div
                key={item.short}
                className="
            flex items-center gap-2
            rounded-[10px] px-3 py-1.5 text-[0.77rem]
            bg-white/15 border border-white/20
          "
              >
                <span className="text-white/55">{item.long}</span>
                <span className="text-white/30">→</span>
                <span className="font-semibold text-white">{item.short}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ANALYTICS CARD — solid white */}
        <div className="relative z-10 bg-white rounded-[28px] p-7 shadow-[0_8px_36px_rgba(0,0,0,0.14)]">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-gray-400">
                Short URL
              </p>
              <p className="mt-1 text-[1.05rem] font-bold text-[#08244D]">
                shrtnr.io/summer-sale
              </p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-[0.72rem] font-semibold text-green-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Active
            </span>
          </div>

          {/* Mini chart */}
          <div className="flex items-center justify-between mt-5 mb-2">
            <p className="text-[0.74rem] text-gray-400">Clicks this week</p>
            <p className="text-[0.74rem] font-bold text-green-600">↑ 23%</p>
          </div>
          <div className="flex items-end gap-1 h-14">
            {chartData.map((val, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[3px]"
                style={{
                  background: "#F97316",
                  opacity: i === chartData.length - 1 ? 1 : 0.15 + i * 0.1,
                  height: chartLoaded
                    ? `${Math.round((val / chartMax) * 100)}%`
                    : "0%",
                  transition: `height 0.55s cubic-bezier(0.34, 1.3, 0.64, 1) ${i * 55}ms`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {chartDays.map((d) => (
              <span key={d} className="text-[0.62rem] text-gray-300">
                {d}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-[1fr_1px_1fr_1px_1fr] bg-[#F8F5F0] rounded-[14px] overflow-hidden">
            {[
              { num: "1,248", lbl: "Clicks" },
              { num: "87", lbl: "Countries" },
              { num: "3", lbl: "Days old" },
            ].map((s, i) => (
              <>
                <div key={s.lbl} className="py-3 px-2 text-center">
                  <p className="text-[1.4rem] font-black text-[#08244D]">
                    {s.num}
                  </p>
                  <p className="text-[0.67rem] text-gray-400 mt-0.5">{s.lbl}</p>
                </div>
                {i < 2 && <div key={`div-${i}`} className="bg-[#E8E4DF]" />}
              </>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-[0.72rem] text-gray-300">
              Last click 2 minutes ago
            </p>
            <button className="text-[0.72rem] font-semibold text-[#08244D] bg-[#F8F5F0] rounded-[7px] px-3 py-1.5 border-0">
              View report →
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <h2
          className="
    text-center
    text-5xl
    font-bold
    text-[#08244D]
    max-w-4xl
    mx-auto
    mb-14
  "
        >
          Adopted and loved by users worldwide
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
          bg-[#F1EDE7]
          rounded-[30px]
          p-8
        "
            >
              <p
                className="
          text-6xl
          font-black
          text-[#08244D]
        "
              >
                {item.value}
              </p>

              <p
                className="
          mt-4
          text-xl
          text-[#08244D]
        "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Everything you need to manage links
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Create, track, organize, and share links with tools designed to make
            link management simple.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="
                rounded-2xl
                bg-white/70
                backdrop-blur-xl
                border
                border-white/40
                shadow-lg
                p-6
                transition-all
                hover:-translate-y-1
              "
            >
              <feature.icon
                className="
                  h-10
                  w-10
                  text-amber-600
                "
              />

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-gray-900
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-3
                  text-gray-600
                  leading-relaxed
                "
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F97316] py-24 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#e86810] opacity-45 pointer-events-none" />
        <div className="absolute -bottom-16 -left-12 w-56 h-56 rounded-full bg-[#e86810] opacity-45 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-[#08244D] mb-14">
            What our users are saying
          </h2>

          <div className="bg-[#F8F5F0] rounded-[40px] px-10 pt-10 pb-9 md:px-14 md:pt-12">
            {/* Decorative open-quote — serif, very light */}
            <div
              className="text-[#F97316] opacity-20 select-none mb-2 leading-none"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "7rem",
                letterSpacing: "-2px",
              }}
              aria-hidden="true"
            >
              &#8220;
            </div>

            <div className="min-h-[9.5rem]">
              <p
                className={`text-2xl md:text-[1.65rem] font-semibold leading-[1.55] text-[#08244D]
            transition-all duration-260 ease-in-out
            ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
              >
                {testimonials[activeTestimonial].quote}
              </p>
            </div>

            {/* Author + controls row */}
            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <div
                className={`flex items-center gap-3.5 transition-all duration-260
            ${isAnimating ? "opacity-0" : "opacity-100"}`}
              >
                {/* Initials avatar */}
                <div
                  className="w-11 h-11 rounded-full bg-[#F97316] flex items-center justify-center
            text-white font-bold text-sm flex-shrink-0 shadow-md shadow-orange-500/30"
                >
                  {testimonials[activeTestimonial].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-bold text-[#08244D] leading-tight">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2.5">
                <span className="text-[#08244D]/40 text-[0.78rem] font-mono tracking-wider tabular-nums mr-1">
                  {String(activeTestimonial + 1).padStart(2, "0")}
                  &thinsp;/&thinsp;
                  {String(testimonials.length).padStart(2, "0")}
                </span>

                <button
                  onClick={() => changeTestimonial("prev")}
                  className="h-11 w-11 rounded-full border-2 border-[#08244D]/20 text-[#08244D]
              hover:border-[#08244D]/50 hover:bg-[#08244D]/5
              transition-all duration-200 flex items-center justify-center group"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={2.5}
                    className="group-hover:-translate-x-0.5 transition-transform duration-200"
                  />
                </button>

                <button
                  onClick={() => changeTestimonial("next")}
                  className="h-11 w-11 rounded-full bg-[#08244D] text-white
              hover:bg-[#0a3060]
              transition-all duration-200 flex items-center justify-center group"
                  aria-label="Next testimonial"
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Progress pills */}
          <div className="flex justify-center gap-[7px] mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === activeTestimonial || isAnimating) return;
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTestimonial(i);
                    setIsAnimating(false);
                  }, 260);
                }}
                className={`h-[5px] rounded-full transition-all duration-300 border-none
            ${
              i === activeTestimonial
                ? "w-[26px] bg-[#08244D]"
                : "w-[5px] bg-[#08244D]/25 hover:bg-[#08244D]/45"
            }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#08244D]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Everything you need to know about Shrtnr.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-300"
              >
                <AccordionTrigger
                  className="
                    py-7
    text-left
    text-xl
    font-semibold
    text-[#08244D]
    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-6
    pr-10
    text-lg
    leading-relaxed
    text-gray-600
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div
          className="
    relative overflow-hidden
    rounded-[28px]
    bg-[#08244D]
    px-10 py-16
    sm:px-16
    text-center
  "
        >
          {/* depth circles */}
          <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-[#0a2d60] pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-[#0a2d60] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Start shortening for free
            </h2>

            <p className="mt-4 max-w-lg mx-auto text-white/60 leading-relaxed">
              Start shortening links, tracking clicks, and sharing smarter
              today.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => navigate("/register")}
                className="
            h-12 px-8 rounded-xl
            bg-[#F97316] hover:bg-[#ea6a0f]
            text-white font-semibold
            transition-colors duration-200
            cursor-pointer 
            border-0
          "
              >
                Create Free Account
              </Button>

              <Button
              onClick={() => navigate("/login")}
                className="
            h-12 px-8 rounded-xl
            bg-transparent
            text-white font-medium
            border border-white/25
            hover:border-white/50 hover:bg-white/5
            transition-all duration-200
            cursor-pointer
          "
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingSection;
