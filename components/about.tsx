"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Award, Users, Star, Building } from "lucide-react"

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const dur = 2000
    const start = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      setVal(Math.floor(p * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {val.toLocaleString("ar-EG")}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gold))]/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src="/gallery-1.jpg" alt="عن أبيكس العقارية" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--gold))]/30" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block glass-strong p-6 rounded-sm w-64">
              <div className="text-xs tracking-arabic text-muted-foreground mb-2">
                تأسست عام
              </div>
              <div className="font-sans text-5xl gold-text font-black">٢٠٠٨</div>
              <div className="text-sm text-muted-foreground mt-2">عقدان من التميز والريادة</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <span className="text-xs tracking-arabic gold-text font-semibold">من نحن</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-6xl mb-8 text-balance font-black arabic-display leading-tight">
              نصنع تجارب سكنية <span className="gold-text">استثنائية</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              منذ أكثر من خمسة عشر عاماً، تُعدّ أبيكس العقارية الاسم الموثوق لكبار ملاك العقارات والمستثمرين حول العالم. نمزج بين الذكاء العميق للسوق والالتزام الراسخ بالسرية، لضمان إدارة كل صفقة بدقة ورقي.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              من فلل الواجهة البحرية إلى العقارات التجارية المعلمية، تمثل محفظتنا قمة العقارات الفاخرة في الخليج والعالم.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Building, to: 2400, suffix: "+", l: "عقار تم بيعه" },
                { icon: Users, to: 1850, suffix: "+", l: "عميل سعيد" },
                { icon: Award, to: 47, suffix: "", l: "جائزة عالمية" },
                { icon: Star, to: 99, suffix: "%", l: "رضا العملاء" },
              ].map((s) => (
                <div key={s.l} className="border-r border-[hsl(var(--gold))]/30 pr-5">
                  <s.icon className="w-5 h-5 gold-text mb-3" />
                  <div className="font-sans text-4xl mb-1 gold-text font-black">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="text-xs tracking-arabic text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
