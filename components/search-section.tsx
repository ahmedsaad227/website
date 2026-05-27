"use client"

import { motion } from "framer-motion"
import { Search, MapPin, DollarSign, Home, BedDouble } from "lucide-react"

export function SearchSection() {
  return (
    <section className="relative -mt-20 z-20 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-strong rounded-sm p-6 lg:p-8 luxury-shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Field icon={MapPin} label="Location" placeholder="Dubai, UAE" />
          <Field icon={DollarSign} label="Price Range" placeholder="$1M – $10M" />
          <SelectField icon={Home} label="Property Type" options={["Villa", "Penthouse", "Apartment", "Commercial"]} />
          <SelectField icon={BedDouble} label="Bedrooms" options={["1+", "2+", "3+", "4+", "5+"]} />
          <button className="group flex items-center justify-center gap-2 gold-gradient text-black text-sm tracking-[0.2em] uppercase font-medium px-6 py-4 hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] transition-all">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </motion.div>
    </section>
  )
}

function Field({
  icon: Icon,
  label,
  placeholder,
}: { icon: any; label: string; placeholder: string }) {
  return (
    <label className="flex flex-col gap-2 px-4 py-2 border border-border/50 hover:gold-border transition-colors rounded-sm bg-background/30">
      <span className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
        <Icon className="w-3 h-3" /> {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
      />
    </label>
  )
}

function SelectField({
  icon: Icon,
  label,
  options,
}: { icon: any; label: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-2 px-4 py-2 border border-border/50 hover:gold-border transition-colors rounded-sm bg-background/30">
      <span className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
        <Icon className="w-3 h-3" /> {label}
      </span>
      <select className="bg-transparent outline-none text-sm cursor-pointer">
        <option className="bg-background">Any</option>
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
