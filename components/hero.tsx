"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, Globe2, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* Animated gold accent */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gold))]/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 gold-gradient" />
            <span className="text-xs tracking-[0.4em] uppercase gold-text font-medium">
              Luxury Real Estate Worldwide
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.05] text-balance mb-8">
            Find Your <br />
            <span className="gold-text italic">Dream Property</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 text-pretty">
            Luxury villas, apartments &amp; commercial spaces worldwide — curated by experts for the
            most discerning clientele.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#properties"
              className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient text-black text-sm tracking-[0.2em] uppercase font-medium hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)] transition-all duration-500"
            >
              Explore Properties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 gold-border text-sm tracking-[0.2em] uppercase hover:bg-[hsl(var(--gold))]/10 transition-all duration-500"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Floating stats cards */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {[
            { icon: Building2, k: "2,400+", l: "Properties Listed" },
            { icon: Globe2, k: "45", l: "Countries Worldwide" },
            { icon: TrendingUp, k: "$8.2B", l: "Total Sales Volume" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.15 }}
              className="glass p-6 rounded-sm hover:luxury-shadow transition-all duration-500 group"
            >
              <s.icon className="w-6 h-6 gold-text mb-4 [&_*]:stroke-[hsl(var(--gold))]" />
              <div className="font-serif text-3xl lg:text-4xl mb-1 group-hover:gold-text transition-colors">
                {s.k}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-px h-12 gold-gradient"
        />
      </motion.div>
    </section>
  )
}
