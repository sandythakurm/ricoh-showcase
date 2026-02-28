import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ricohLogo from "@/assets/ricoh-logo.png";

const slides = [
  {
    type: "image" as const,
    bg: heroBg,
    badge: "Official Authorized Distributor",
    title: <>Powering Business<br /><span className="text-primary">with Ricoh</span></>,
    subtitle: "Your trusted technology partner in MEA & Africa",
    description: "Bytes Distribution delivers a full suite of Ricoh products — printers, MFPs, projectors, interactive whiteboards, and smart meeting solutions across the region.",
    cta: { label: "Explore Ricoh Products", href: "/products?brand=ricoh" },
    showRicohLogo: true,
  },
  {
    type: "video" as const,
    videoUrl: "https://www.youtube.com/embed/w7hW8LROhHk",
    bg: heroBg,
    badge: "Innovation in Action",
    title: <>Smart Solutions<br /><span className="text-primary">for Modern Work</span></>,
    subtitle: "See how Ricoh transforms workspaces",
    description: "From intelligent meeting rooms to high-speed production printing, discover how our solutions drive productivity and collaboration.",
    cta: { label: "View All Solutions", href: "/products" },
    showRicohLogo: false,
  },
  {
    type: "image" as const,
    bg: heroBg,
    badge: "Trusted by Businesses Across the Region",
    title: <>Enterprise-Grade<br /><span className="text-primary">IT Distribution</span></>,
    subtitle: "Ricoh • Lenovo • HP • Logitech • ChromaLuxe",
    description: "We distribute world-class technology brands with full warranty support, fast delivery, and expert technical assistance across MEA and Africa.",
    cta: { label: "Discover Our Brands", href: "/brands" },
    showRicohLogo: false,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img src={slides[current].bg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ricoh-dark/95 via-ricoh-dark/80 to-ricoh-dark/40" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">{slides[current].badge}</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-4">
                {slides[current].title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                {slides[current].showRicohLogo && (
                  <>
                    <img src={ricohLogo} alt="Ricoh" className="h-12" />
                    <div className="h-8 w-px bg-primary-foreground/30" />
                  </>
                )}
                <p className="text-primary-foreground/80 text-lg">
                  {slides[current].subtitle}
                </p>
              </div>

              <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
                {slides[current].description}
              </p>

              <Link
                to={slides[current].cta.href}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold text-base hover:bg-primary/90 transition-all hover:gap-3"
              >
                {slides[current].cta.label}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-10 bg-primary" : "w-2.5 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
