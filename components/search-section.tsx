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
          <SelectField icon={MapPin} label="المدينة" options={["دبي", "أبوظبي", "الرياض", "جدة", "الدوحة", "الكويت"]} />
          <SelectField icon={Home} label="نوع العقار" options={["فيلا", "شقة", "بنتهاوس", "تجاري", "أرض"]} />
          <SelectField icon={DollarSign} label="نطاق السعر" options={["أقل من مليون", "1 - 5 مليون", "5 - 10 مليون", "10 - 25 مليون", "+25 مليون"]} />
          <SelectField icon={BedDouble} label="عدد الغرف" options={["1+", "2+", "3+", "4+", "5+", "+6"]} />
          <button className="group flex items-center justify-center gap-2 gold-gradient text-black text-sm tracking-arabic font-bold px-6 py-4 hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.5)] transition-all">
            <Search className="w-4 h-4" />
            بحث متقدم
          </button>
        </div>
      </motion.div>
    </section>
  )
}

function SelectField({
  icon: Icon,
  label,
  options,
}: { icon: any; label: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-2 px-4 py-2 border border-border/50 hover:gold-border transition-colors rounded-sm bg-background/30">
      <span className="flex items-center gap-2 text-[11px] tracking-arabic text-muted-foreground">
        <Icon className="w-3 h-3" /> {label}
      </span>
      <select className="bg-transparent outline-none text-sm cursor-pointer font-medium" dir="rtl">
        <option className="bg-background">الكل</option>
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
