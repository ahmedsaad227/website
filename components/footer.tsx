"use client"

import { Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center text-black font-serif font-bold text-lg">
                A
              </div>
              <span className="font-serif text-xl">
                Apex <span className="gold-text">Estate</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The world&apos;s most distinguished real estate advisory, curating exceptional
              properties since 2008.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase gold-text mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Home", "Properties", "About", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase gold-text mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Buying", "Selling", "Property Management", "Investment", "Luxury Rentals"].map((l) => (
                <li key={l}>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase gold-text mb-5">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for private listings &amp; market intelligence.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-l-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 gold-gradient text-black hover:opacity-90 rounded-r-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Apex Estate. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground tracking-wide">
            <a href="#" className="hover:gold-text">Privacy</a>
            <a href="#" className="hover:gold-text">Terms</a>
            <a href="#" className="hover:gold-text">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
