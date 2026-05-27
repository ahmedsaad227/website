"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { name: "الرئيسية", href: "#home" },
  { name: "العقارات", href: "#properties" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "آراء العملاء", href: "#testimonials" },
  { name: "تواصل معنا", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-3" : "py-6 bg-transparent",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center text-black font-serif font-bold text-xl">
            A
          </div>
          <span className="font-sans text-xl tracking-wide font-bold">
            أبيكس <span className="gold-text">العقارية</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
              >
                {l.name}
                <span className="absolute -bottom-1 right-0 w-0 h-px gold-gradient group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/admin"
            className="text-xs tracking-arabic text-muted-foreground hover:gold-text transition-colors"
          >
            لوحة التحكم
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-xs tracking-arabic gold-border hover:bg-[hsl(var(--gold))] hover:text-black transition-all duration-300 font-medium"
          >
            احجز معاينة
          </a>
        </div>

        <button
          aria-label="القائمة"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-border/40 text-sm hover:gold-text font-medium"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm hover:gold-text font-medium"
                >
                  لوحة التحكم
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
