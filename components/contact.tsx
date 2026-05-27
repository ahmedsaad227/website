"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <span className="text-xs tracking-arabic gold-text font-semibold">تواصل معنا</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-6xl mb-6 text-balance font-black arabic-display leading-tight">
              لنجد معاً <span className="gold-text">عنوانك القادم</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg text-lg">
              سواء كنت تبحث عن الشراء، البيع، أو استكشاف فرص استثمارية جديدة، فإن مستشارينا الخاصين على استعداد تام لخدمتك بمنتهى السرية والاحترافية.
            </p>

            <div className="space-y-6 mb-10">
              <ContactItem icon={MapPin} label="المقر الرئيسي" value="برج الإمارات، الطابق ٤١، دبي" />
              <ContactItem icon={Phone} label="الهاتف" value="+971 4 555 0188" />
              <ContactItem icon={Mail} label="البريد الإلكتروني" value="info@apexestate.ae" />
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/97145550188"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-[#25D366] text-white text-sm tracking-arabic font-bold hover:opacity-90 transition-all rounded-sm"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل عبر واتساب
            </a>

            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="وسائل التواصل"
                  className="w-11 h-11 rounded-full gold-border flex items-center justify-center hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 rounded-sm overflow-hidden gold-border h-56">
              <iframe
                title="موقع المكتب"
                src="https://www.openstreetmap.org/export/embed.html?bbox=55.26%2C25.18%2C55.30%2C25.22&layer=mapnik"
                className="w-full h-full grayscale"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong p-8 lg:p-10 rounded-sm space-y-5 lg:sticky lg:top-28"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="الاسم الكامل" placeholder="محمد عبدالله" />
              <Input label="البريد الإلكتروني" type="email" placeholder="example@mail.com" />
            </div>
            <Input label="رقم الهاتف" placeholder="+971 50 000 0000" />
            <Input label="الموضوع" placeholder="استفسار عن عقار" />
            <label className="block">
              <span className="block text-[11px] tracking-arabic text-muted-foreground mb-2 font-semibold">
                رسالتك
              </span>
              <textarea
                rows={5}
                placeholder="أخبرنا عن عقار أحلامك..."
                className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm transition-colors resize-none font-sans"
                dir="rtl"
              />
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient text-black text-xs tracking-arabic font-bold hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)] transition-all"
            >
              إرسال الاستفسار
              <Send className="w-4 h-4 group-hover:-translate-x-1 transition-transform scale-x-[-1]" />
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
        <div className="text-[11px] tracking-arabic text-muted-foreground mb-1 font-semibold">
          {label}
        </div>
        <div className="font-sans text-lg font-bold" dir="ltr" style={{ direction: label === "البريد الإلكتروني" || label === "الهاتف" ? "ltr" : "rtl", textAlign: label === "البريد الإلكتروني" || label === "الهاتف" ? "left" : "right" }}>
          {value}
        </div>
      </div>
    </div>
  )
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-arabic text-muted-foreground mb-2 font-semibold">
        {label}
      </span>
      <input
        {...rest}
        className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm transition-colors font-sans"
        dir="rtl"
      />
    </label>
  )
}
