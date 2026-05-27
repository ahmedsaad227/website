"use client"

import { motion } from "framer-motion"
import { Key, TrendingUp, Briefcase, Home, Tag, ShieldCheck } from "lucide-react"

const services = [
  { icon: Tag, title: "Buying", desc: "Personalized property acquisition with discreet negotiations and expert valuation." },
  { icon: Key, title: "Selling", desc: "Strategic marketing campaigns that position your property for maximum value." },
  { icon: Home, title: "Property Management", desc: "Full-service stewardship for absentee owners and global portfolios." },
  { icon: TrendingUp, title: "Investment Consulting", desc: "Data-driven insights for high-yield acquisitions and emerging markets." },
  { icon: Briefcase, title: "Luxury Rentals", desc: "Curated short and long-term residences for executives and global travelers." },
  { icon: ShieldCheck, title: "Private Concierge", desc: "Bespoke services including legal, design, and lifestyle management." },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="h-px w-10 gold-gradient" />
            <span className="text-xs tracking-[0.4em] uppercase gold-text">What We Offer</span>
            <div className="h-px w-10 gold-gradient" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-balance">
            A complete suite of <span className="italic gold-text">luxury services</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-background p-10 hover:bg-card transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              <s.icon className="w-9 h-9 gold-text mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-serif text-2xl mb-3 group-hover:gold-text transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground group-hover:gold-text transition-colors">
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
