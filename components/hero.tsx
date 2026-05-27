"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Building2, Globe2, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-transparent to-transparent" />

      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-[hsl(var(--gold))]/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 gold-gradient" />
            <span className="text-xs tracking-arabic gold-text font-semibold">
              عقارات فاخرة حول العالم
            </span>
          </div>

          <h1 className="font-sans text-5xl sm:text-6xl lg:text-8xl leading-[1.15] text-balance mb-8 font-black arabic-display">
            اكتشف مستقبلك <br />
            <span className="gold-text">العقاري الفاخر</span>
          </h1>

          <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty font-light">
            فلل، شقق، واستثمارات عقارية بمعايير عالمية. نحن نقدم تجربة عقارية استثنائية لعملائنا المميزين.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#properties"
              className="group inline-flex items-center gap-3 px-9 py-4 gold-gradient text-black text-sm tracking-arabic font-bold hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)] transition-all duration-500"
            >
              استكشف العقارات
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-9 py-4 gold-border text-sm tracking-arabic font-medium hover:bg-[hsl(var(--gold))]/10 transition-all duration-500"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {[
            { icon: Building2, k: "+2,400", l: "عقار مميز" },
            { icon: Globe2, k: "45", l: "دولة حول العالم" },
            { icon: TrendingUp, k: "8.2 مليار $", l: "إجمالي المبيعات" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.15 }}
              className="glass p-6 rounded-sm hover:luxury-shadow transition-all duration-500 group"
            >
              <s.icon className="w-6 h-6 mb-4" style={{ color: "#d4af37" }} />
              <div className="font-sans text-3xl lg:text-4xl mb-1 font-bold group-hover:gold-text transition-colors">
                {s.k}
              </div>
              <div className="text-xs tracking-arabic text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] tracking-arabic">مرّر للأسفل</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-px h-12 gold-gradient"
        />
      </motion.div>
    </section>
  )
}
