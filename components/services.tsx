"use client"

import { motion } from "framer-motion"
import { Key, TrendingUp, Briefcase, Home, Tag, ShieldCheck } from "lucide-react"

const services = [
  { icon: Tag, title: "شراء عقارات", desc: "نقدم لك خدمة شخصية لاقتناء العقارات مع مفاوضات سرية وتقييم خبير لكل صفقة." },
  { icon: Key, title: "بيع عقارات", desc: "حملات تسويقية استراتيجية تضع عقارك في موقع متميز لتحقيق أعلى قيمة سوقية." },
  { icon: Home, title: "إدارة الأملاك", desc: "خدمة شاملة لإدارة العقارات للملاك المغتربين ومحافظ الاستثمار العالمية." },
  { icon: TrendingUp, title: "استشارات استثمارية", desc: "رؤى مبنية على بيانات السوق لاستثمارات عالية العائد في الأسواق الواعدة." },
  { icon: Briefcase, title: "إيجارات فاخرة", desc: "إقامات مختارة بعناية قصيرة وطويلة المدى للتنفيذيين والمسافرين العالميين." },
  { icon: ShieldCheck, title: "خدمات كونسيرج خاصة", desc: "خدمات حصرية تشمل الاستشارات القانونية والتصميم وإدارة نمط الحياة الفاخر." },
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
            <span className="text-xs tracking-arabic gold-text font-semibold">ما نقدمه</span>
            <div className="h-px w-10 gold-gradient" />
          </div>
          <h2 className="font-sans text-4xl lg:text-6xl text-balance font-black arabic-display leading-tight">
            باقة متكاملة من <span className="gold-text">الخدمات الفاخرة</span>.
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
              <div className="absolute top-0 right-0 w-full h-px gold-gradient scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-700" />
              <s.icon className="w-9 h-9 gold-text mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-sans text-2xl mb-3 font-bold group-hover:gold-text transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-xs tracking-arabic text-muted-foreground group-hover:gold-text transition-colors font-semibold">
                اعرف المزيد ←
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
