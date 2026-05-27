"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Apex Estate delivered beyond every expectation. Their discretion and expertise made acquiring our Beverly Hills estate effortless and remarkably enjoyable.",
    name: "Alexander Chen",
    role: "CEO, Vanguard Capital",
    avatar: "AC",
  },
  {
    quote:
      "The most professional team I've worked with. They understand luxury, they understand markets, and most importantly, they understand their clients.",
    name: "Isabella Romano",
    role: "Private Investor",
    avatar: "IR",
  },
  {
    quote:
      "From Dubai to Manhattan, Apex has handled three properties for us. Every transaction has been seamless, transparent, and profitable.",
    name: "James Whitmore",
    role: "Founder, Whitmore Holdings",
    avatar: "JW",
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const next = () => setI((p) => (p + 1) % testimonials.length)
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="h-px w-10 gold-gradient" />
            <span className="text-xs tracking-[0.4em] uppercase gold-text">Client Stories</span>
            <div className="h-px w-10 gold-gradient" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-balance">
            What our <span className="italic gold-text">clients say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-20 h-20 gold-text opacity-20 absolute -top-6 -left-2" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-strong p-10 lg:p-14 rounded-sm relative"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                ))}
              </div>
              <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-balance mb-10">
                &ldquo;{testimonials[i].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-black font-serif text-lg font-bold">
                  {testimonials[i].avatar}
                </div>
                <div>
                  <div className="font-serif text-lg">{testimonials[i].name}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {testimonials[i].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Slide ${k + 1}`}
                  className={`h-px transition-all duration-500 ${
                    k === i ? "w-12 gold-gradient" : "w-6 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-12 h-12 rounded-full gold-border flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-12 h-12 rounded-full gold-border flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
