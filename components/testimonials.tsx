"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronRight, ChevronLeft, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "تجاوزت أبيكس العقارية كل توقعاتي. حرفيتهم وسريتهم جعلت اقتناء فيلتي في نخلة جميرا تجربة سلسة وممتعة بشكل استثنائي.",
    name: "الشيخ أحمد المنصوري",
    role: "الرئيس التنفيذي، مجموعة المنصوري للاستثمار",
    avatar: "أ.م",
  },
  {
    quote:
      "أكثر فريق احترافي تعاملت معه. يفهمون الفخامة، يفهمون الأسواق، والأهم من ذلك، يفهمون عملاءهم تماماً.",
    name: "الدكتورة سارة الغامدي",
    role: "مستثمرة عقارية خاصة",
    avatar: "س.غ",
  },
  {
    quote:
      "من دبي إلى الرياض، تعاملت أبيكس مع ثلاثة عقارات لي. كل صفقة كانت سلسة وشفافة ومربحة دون استثناء.",
    name: "الأستاذ خالد الفهد",
    role: "مؤسس، شركة الفهد القابضة",
    avatar: "خ.ف",
  },
  {
    quote:
      "خدمة استثنائية وفهم عميق للسوق العقاري الخليجي. ساعدوني في العثور على بنتهاوس أحلامي بكل أناقة وسرعة.",
    name: "ليلى الحربي",
    role: "رائدة أعمال",
    avatar: "ل.ح",
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
            <span className="text-xs tracking-arabic gold-text font-semibold">آراء العملاء</span>
            <div className="h-px w-10 gold-gradient" />
          </div>
          <h2 className="font-sans text-4xl lg:text-6xl text-balance font-black arabic-display leading-tight">
            ماذا يقول <span className="gold-text">عملاؤنا</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-20 h-20 gold-text opacity-20 absolute -top-6 -right-2 scale-x-[-1]" />
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
              <p className="font-sans text-2xl lg:text-3xl leading-[1.7] text-balance mb-10 font-light">
                &ldquo;{testimonials[i].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-black font-sans text-base font-black">
                  {testimonials[i].avatar}
                </div>
                <div>
                  <div className="font-sans text-lg font-bold">{testimonials[i].name}</div>
                  <div className="text-xs tracking-arabic text-muted-foreground mt-1">
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
                  aria-label={`الشريحة ${k + 1}`}
                  className={`h-px transition-all duration-500 ${
                    k === i ? "w-12 gold-gradient" : "w-6 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={next}
                aria-label="التالي"
                className="w-12 h-12 rounded-full gold-border flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={prev}
                aria-label="السابق"
                className="w-12 h-12 rounded-full gold-border flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
