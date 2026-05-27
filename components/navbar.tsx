"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { name: "Home", href: "#home" },
  { name: "Properties", href: "#properties" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
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
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center text-black font-serif font-bold text-lg">
            A
          </div>
          <span className="font-serif text-xl tracking-wide">
            Apex <span className="gold-text font-semibold">Estate</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px gold-gradient group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/admin"
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:gold-text transition-colors"
          >
            Admin
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs tracking-[0.2em] uppercase gold-border hover:bg-[hsl(var(--gold))] hover:text-black transition-all duration-300"
          >
            Book Viewing
          </a>
        </div>

        <button
          aria-label="Menu"
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
                    className="block py-3 border-b border-border/40 text-sm tracking-wide hover:gold-text"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
