"use client"

import { motion } from "framer-motion"

const items = [
  { src: "/gallery-1.jpg", h: "row-span-2", alt: "Luxury living room" },
  { src: "/gallery-2.jpg", h: "", alt: "Master bathroom" },
  { src: "/gallery-3.jpg", h: "", alt: "Infinity pool" },
  { src: "/gallery-4.jpg", h: "row-span-2", alt: "Designer kitchen" },
  { src: "/gallery-5.jpg", h: "", alt: "Bedroom suite" },
  { src: "/gallery-6.jpg", h: "", alt: "Aerial beachfront" },
]

export function Gallery() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <span className="text-xs tracking-[0.4em] uppercase gold-text">Inside the Estates</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-balance">
              A <span className="italic gold-text">visual journey</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Step inside our portfolio of breathtaking interiors, oceanfront retreats, and
            architectural masterpieces.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-sm ${it.h}`}
            >
              <img
                src={it.src || "/placeholder.svg"}
                alt={it.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[hsl(var(--gold))]/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
