"use client"

import { Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center text-black font-serif font-bold text-xl">
                A
              </div>
              <span className="font-sans text-xl font-bold">
                أبيكس <span className="gold-text">العقارية</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              الاسم الأكثر تميزاً في عالم العقارات الفاخرة، نقدم عقارات استثنائية منذ عام ٢٠٠٨.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-arabic gold-text mb-5 font-bold">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { l: "الرئيسية", h: "#home" },
                { l: "العقارات", h: "#properties" },
                { l: "من نحن", h: "#about" },
                { l: "خدماتنا", h: "#services" },
                { l: "تواصل معنا", h: "#contact" },
              ].map((it) => (
                <li key={it.l}>
                  <a href={it.h} className="hover:text-foreground transition-colors">
                    {it.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-arabic gold-text mb-5 font-bold">خدماتنا</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["شراء عقارات", "بيع عقارات", "إدارة الأملاك", "استشارات استثمارية", "إيجارات فاخرة"].map((l) => (
                <li key={l}>
                  <a href="#services" className="hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-arabic gold-text mb-5 font-bold">النشرة البريدية</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              اشترك لتصلك أحدث العقارات الحصرية ونشرات السوق العقاري.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-r-sm font-sans"
                dir="rtl"
              />
              <button
                type="submit"
                aria-label="اشتراك"
                className="px-4 gold-gradient text-black hover:opacity-90 rounded-l-sm"
              >
                <Send className="w-4 h-4 scale-x-[-1]" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} أبيكس العقارية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground tracking-wide">
            <a href="#" className="hover:gold-text">سياسة الخصوصية</a>
            <a href="#" className="hover:gold-text">الشروط والأحكام</a>
            <a href="#" className="hover:gold-text">ملفات الارتباط</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
