"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <span className="text-xs tracking-[0.4em] uppercase gold-text">Get In Touch</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6 text-balance">
              Let&apos;s find your <span className="italic gold-text">next address</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Whether you&apos;re acquiring, selling, or exploring opportunities, our private
              advisors are ready to assist you with absolute discretion.
            </p>

            <div className="space-y-6 mb-10">
              <ContactItem icon={MapPin} label="Headquarters" value="One Vanderbilt, 41st Fl, NY 10017" />
              <ContactItem icon={Phone} label="Phone" value="+1 (212) 555 — 0188" />
              <ContactItem icon={Mail} label="Email" value="private@apexestate.com" />
            </div>

            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-11 h-11 rounded-full gold-border flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong p-8 lg:p-10 rounded-sm space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email" type="email" placeholder="john@example.com" />
            </div>
            <Input label="Phone" placeholder="+1 (000) 000 0000" />
            <Input label="Subject" placeholder="Property inquiry" />
            <label className="block">
              <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Message
              </span>
              <textarea
                rows={5}
                placeholder="Tell us about your dream property…"
                className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm transition-colors resize-none"
              />
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient text-black text-xs tracking-[0.3em] uppercase font-medium hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)] transition-all"
            >
              Send Inquiry
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-sm gold-border flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 gold-text" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
          {label}
        </div>
        <div className="font-serif text-lg">{value}</div>
      </div>
    </div>
  )
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
        {label}
      </span>
      <input
        {...rest}
        className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm transition-colors"
      />
    </label>
  )
}
