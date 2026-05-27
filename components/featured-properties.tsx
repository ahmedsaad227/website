"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin } from "lucide-react"

const properties = [
  {
    title: "Azure Cliff Villa",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    image: "/villa-1.jpg",
    beds: 6,
    baths: 7,
    area: "12,400",
    tag: "For Sale",
  },
  {
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$8,900,000",
    image: "/penthouse-1.jpg",
    beds: 4,
    baths: 5,
    area: "6,200",
    tag: "Featured",
  },
  {
    title: "Palm Beach Estate",
    location: "Palm Jumeirah, Dubai",
    price: "$24,000,000",
    image: "/villa-2.jpg",
    beds: 8,
    baths: 10,
    area: "18,500",
    tag: "Exclusive",
  },
  {
    title: "Hillcrest Mansion",
    location: "Bel Air, CA",
    price: "$32,000,000",
    image: "/mansion-1.jpg",
    beds: 10,
    baths: 12,
    area: "22,000",
    tag: "Premium",
  },
  {
    title: "Meridian Tower",
    location: "Downtown London, UK",
    price: "$45,000,000",
    image: "/commercial-1.jpg",
    beds: 0,
    baths: 0,
    area: "85,000",
    tag: "Commercial",
  },
  {
    title: "Cassia Residences",
    location: "Marina Bay, Singapore",
    price: "$3,750,000",
    image: "/apartment-1.jpg",
    beds: 3,
    baths: 4,
    area: "3,200",
    tag: "New",
  },
]

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <span className="text-xs tracking-[0.4em] uppercase gold-text">Curated Selection</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-balance max-w-2xl">
              Featured <span className="italic gold-text">Properties</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A handpicked collection of the world&apos;s most distinguished residences, each
            embodying timeless elegance and architectural mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((p, i) => (
            <PropertyCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PropertyCard({
  title,
  location,
  price,
  image,
  beds,
  baths,
  area,
  tag,
  index,
}: (typeof properties)[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative bg-card border border-border/60 rounded-sm overflow-hidden hover:luxury-shadow hover:gold-border transition-all duration-700"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1.5 glass text-[10px] tracking-[0.25em] uppercase gold-text">
          {tag}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="font-serif text-2xl gold-text">{price}</div>
          <button
            aria-label="View"
            className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:gold-gradient hover:text-black transition-all duration-500"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6 lg:p-7">
        <h3 className="font-serif text-2xl mb-2 group-hover:gold-text transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
          <MapPin className="w-3.5 h-3.5" /> {location}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-border/50 text-sm text-muted-foreground">
          {beds > 0 && (
            <span className="flex items-center gap-2">
              <Bed className="w-4 h-4 gold-text" /> {beds} Beds
            </span>
          )}
          {baths > 0 && (
            <span className="flex items-center gap-2">
              <Bath className="w-4 h-4 gold-text" /> {baths} Baths
            </span>
          )}
          <span className="flex items-center gap-2">
            <Maximize2 className="w-4 h-4 gold-text" /> {area} ft²
          </span>
        </div>

        <button className="mt-6 w-full py-3 text-xs tracking-[0.3em] uppercase border border-border hover:gold-border hover:gold-text transition-all">
          View Details
        </button>
      </div>
    </motion.article>
  )
}
