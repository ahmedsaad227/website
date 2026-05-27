"use client"

import { motion } from "framer-motion"
import { ArrowUpLeft, Bed, Bath, Maximize2, MapPin } from "lucide-react"

const properties = [
  {
    title: "فيلا الواجهة المائية",
    location: "نخلة جميرا، دبي",
    price: "45,000,000 د.إ",
    image: "/villa-1.jpg",
    beds: 6,
    baths: 7,
    area: "1,150",
    tag: "للبيع",
  },
  {
    title: "بنتهاوس الأفق",
    location: "وسط مدينة دبي",
    price: "32,500,000 د.إ",
    image: "/penthouse-1.jpg",
    beds: 4,
    baths: 5,
    area: "580",
    tag: "مميز",
  },
  {
    title: "قصر النخيل الذهبي",
    location: "جزيرة السعديات، أبوظبي",
    price: "88,000,000 د.إ",
    image: "/villa-2.jpg",
    beds: 8,
    baths: 10,
    area: "1,720",
    tag: "حصري",
  },
  {
    title: "قصر الرياض الملكي",
    location: "حي السفارات، الرياض",
    price: "120,000,000 ر.س",
    image: "/mansion-1.jpg",
    beds: 10,
    baths: 12,
    area: "2,050",
    tag: "بريميوم",
  },
  {
    title: "برج الميريديان",
    location: "الخليج التجاري، دبي",
    price: "165,000,000 د.إ",
    image: "/commercial-1.jpg",
    beds: 0,
    baths: 0,
    area: "7,900",
    tag: "تجاري",
  },
  {
    title: "ريزيدنس الكاسيا",
    location: "كورنيش جدة",
    price: "13,750,000 ر.س",
    image: "/apartment-1.jpg",
    beds: 3,
    baths: 4,
    area: "297",
    tag: "جديد",
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
              <span className="text-xs tracking-arabic gold-text font-semibold">مجموعة مختارة</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-6xl text-balance max-w-2xl font-black arabic-display">
              عقاراتنا <span className="gold-text">المميزة</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed text-lg">
            مجموعة منتقاة بعناية من أرقى العقارات حول العالم، تجسّد كل واحدة منها الأناقة الخالدة والروعة المعمارية.
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
        <div className="absolute top-4 right-4 px-3 py-1.5 glass text-[11px] tracking-arabic gold-text font-semibold">
          {tag}
        </div>
        <div className="absolute bottom-4 right-4 left-4 flex items-end justify-between">
          <div className="font-sans text-xl lg:text-2xl gold-text font-bold">{price}</div>
          <button
            aria-label="عرض"
            className="w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:gold-gradient hover:text-black transition-all duration-500"
          >
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6 lg:p-7">
        <h3 className="font-sans text-2xl mb-2 font-bold group-hover:gold-text transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
          <MapPin className="w-3.5 h-3.5" /> {location}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-border/50 text-sm text-muted-foreground">
          {beds > 0 && (
            <span className="flex items-center gap-2">
              <Bed className="w-4 h-4 gold-text" /> {beds} غرف
            </span>
          )}
          {baths > 0 && (
            <span className="flex items-center gap-2">
              <Bath className="w-4 h-4 gold-text" /> {baths} حمامات
            </span>
          )}
          <span className="flex items-center gap-2">
            <Maximize2 className="w-4 h-4 gold-text" /> {area} م²
          </span>
        </div>

        <button className="mt-6 w-full py-3 text-xs tracking-arabic font-bold border border-border hover:gold-border hover:gold-text transition-all">
          عرض التفاصيل
        </button>
      </div>
    </motion.article>
  )
}
