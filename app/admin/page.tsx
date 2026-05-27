"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Building2,
  Users,
  TrendingUp,
  Settings,
  Search,
  Bell,
  Plus,
  X,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Eye,
  Home,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const initialProperties = [
  { id: 1, title: "فيلا الواجهة المائية", location: "نخلة جميرا، دبي", price: "45 مليون د.إ", status: "نشط", views: 2840, image: "/villa-1.jpg" },
  { id: 2, title: "بنتهاوس الأفق", location: "وسط دبي", price: "32.5 مليون د.إ", status: "نشط", views: 1920, image: "/penthouse-1.jpg" },
  { id: 3, title: "قصر النخيل الذهبي", location: "أبوظبي", price: "88 مليون د.إ", status: "قيد التفاوض", views: 4210, image: "/villa-2.jpg" },
  { id: 4, title: "قصر الرياض الملكي", location: "الرياض", price: "120 مليون ر.س", status: "نشط", views: 3540, image: "/mansion-1.jpg" },
  { id: 5, title: "برج الميريديان", location: "دبي", price: "165 مليون د.إ", status: "تم البيع", views: 5610, image: "/commercial-1.jpg" },
  { id: 6, title: "ريزيدنس الكاسيا", location: "جدة", price: "13.75 مليون ر.س", status: "نشط", views: 1240, image: "/apartment-1.jpg" },
]

export default function AdminPage() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(initialProperties)

  return (
    <div dir="rtl" className="min-h-screen bg-background flex font-sans">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-l border-border/50 bg-card/40 sticky top-0 h-screen">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center text-black font-serif font-bold text-xl">
              A
            </div>
            <span className="font-sans text-lg font-bold">
              أبيكس <span className="gold-text">الإدارة</span>
            </span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: LayoutDashboard, l: "لوحة التحكم", active: true },
            { icon: Building2, l: "العقارات" },
            { icon: Users, l: "العملاء" },
            { icon: TrendingUp, l: "التحليلات" },
            { icon: Settings, l: "الإعدادات" },
          ].map((it) => (
            <button
              key={it.l}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-sm transition-colors font-medium ${
                it.active
                  ? "bg-[hsl(var(--gold))]/10 gold-text border-r-2 border-[hsl(var(--gold))]"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              <it.icon className="w-4 h-4" />
              {it.l}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border/50">
          <a href="/" className="text-xs tracking-arabic text-muted-foreground hover:gold-text font-semibold">
            → العودة للموقع
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 glass-strong border-b border-border/50 px-6 py-4 flex items-center gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="ابحث عن عقارات، عملاء..."
              className="w-full pr-10 pl-4 py-2.5 bg-background/40 border border-border focus:gold-border outline-none rounded-sm text-sm font-sans"
              dir="rtl"
            />
          </div>
          <button aria-label="الإشعارات" className="relative w-10 h-10 rounded-sm gold-border flex items-center justify-center">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 left-2 w-2 h-2 rounded-full gold-gradient" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-xs tracking-arabic font-bold hover:opacity-90 rounded-sm"
          >
            <Plus className="w-4 h-4" /> إضافة عقار
          </button>
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold">
            أ
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8">
          <div>
            <h1 className="font-sans text-4xl lg:text-5xl mb-2 font-black arabic-display">
              مرحباً بعودتك، <span className="gold-text">أحمد</span>
            </h1>
            <p className="text-muted-foreground text-lg">إليك نظرة عامة على محفظتك العقارية اليوم.</p>
          </div>

          {/* Analytics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: DollarSign, l: "إجمالي الإيرادات", v: "48.2 مليون د.إ", d: "+12.4%", up: true },
              { icon: Home, l: "العقارات النشطة", v: "184", d: "+8.1%", up: true },
              { icon: Eye, l: "إجمالي المشاهدات", v: "92.4 ألف", d: "+24.6%", up: true },
              { icon: Users, l: "عملاء جدد", v: "47", d: "-3.2%", up: false },
            ].map((s) => (
              <div key={s.l} className="glass p-6 rounded-sm hover:luxury-shadow transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-sm gold-border flex items-center justify-center">
                    <s.icon className="w-4 h-4 gold-text" />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      s.up ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {s.d}
                  </span>
                </div>
                <div className="font-sans text-3xl mb-1 font-black group-hover:gold-text transition-colors">
                  {s.v}
                </div>
                <div className="text-xs tracking-arabic text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Chart + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 glass p-6 rounded-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xl font-bold">أداء المبيعات</h3>
                <select className="bg-background/40 border border-border px-3 py-1.5 rounded-sm text-xs outline-none font-sans" dir="rtl">
                  <option>آخر ١٢ شهر</option>
                  <option>هذا العام</option>
                </select>
              </div>
              <div className="flex items-end gap-3 h-56" dir="ltr">
                {[40, 55, 35, 70, 50, 85, 60, 95, 75, 80, 65, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full gold-gradient rounded-t-sm hover:opacity-80 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-muted-foreground">
                      {["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-sm">
              <h3 className="font-sans text-xl mb-6 font-bold">النشاط الأخير</h3>
              <div className="space-y-4">
                {[
                  { t: "استفسار جديد على فيلا الواجهة المائية", time: "قبل ٢ دقيقة" },
                  { t: "موعد معاينة لبنتهاوس الأفق", time: "قبل ساعة" },
                  { t: "عرض شراء على قصر النخيل الذهبي", time: "قبل ٣ ساعات" },
                  { t: "إغلاق صفقة برج الميريديان", time: "قبل يوم" },
                  { t: "تحديث سعر قصر الرياض الملكي", time: "قبل يومين" },
                ].map((a, i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b border-border/40 last:border-0">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{a.t}</p>
                      <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Properties table */}
          <div className="glass rounded-sm overflow-hidden">
            <div className="p-6 flex items-center justify-between border-b border-border/40">
              <h3 className="font-sans text-xl font-bold">إدارة العقارات</h3>
              <span className="text-xs text-muted-foreground tracking-wide">
                {items.length} عقار إجمالاً
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-right border-b border-border/40">
                    {["العقار", "الموقع", "السعر", "الحالة", "المشاهدات", ""].map((h) => (
                      <th
                        key={h}
                        className="px-6 py-4 text-[11px] tracking-arabic text-muted-foreground font-bold"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((p) => (
                    <tr key={p.id} className="border-b border-border/30 hover:bg-card/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={p.image || "/placeholder.svg"} alt="" className="w-12 h-12 object-cover rounded-sm" />
                          <span className="font-sans font-bold">{p.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{p.location}</td>
                      <td className="px-6 py-4 gold-text font-sans font-bold">{p.price}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-[11px] tracking-arabic rounded-sm border font-semibold ${
                            p.status === "نشط"
                              ? "border-green-500/40 text-green-400"
                              : p.status === "قيد التفاوض"
                              ? "gold-border gold-text"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{p.views.toLocaleString("ar-EG")}</td>
                      <td className="px-6 py-4 text-left">
                        <button aria-label="المزيد" className="p-2 hover:gold-text">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Add property modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl glass-strong rounded-sm p-8 luxury-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-2xl font-black">
                  إضافة عقار <span className="gold-text">جديد</span>
                </h3>
                <button onClick={() => setOpen(false)} aria-label="إغلاق" className="p-2 hover:gold-text">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget)
                  setItems((prev) => [
                    {
                      id: Date.now(),
                      title: String(fd.get("title")),
                      location: String(fd.get("location")),
                      price: String(fd.get("price")),
                      status: "نشط",
                      views: 0,
                      image: "/villa-1.jpg",
                    },
                    ...prev,
                  ])
                  setOpen(false)
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <Field name="title" label="اسم العقار" placeholder="فيلا الواجهة المائية" />
                <Field name="location" label="الموقع" placeholder="نخلة جميرا، دبي" />
                <Field name="price" label="السعر" placeholder="45,000,000 د.إ" />
                <SelectF label="نوع العقار" options={["فيلا", "بنتهاوس", "شقة", "تجاري", "أرض"]} />
                <Field name="beds" label="عدد الغرف" placeholder="6" />
                <Field name="baths" label="عدد الحمامات" placeholder="7" />
                <div className="md:col-span-2">
                  <SelectF label="الحالة" options={["نشط", "قيد التفاوض", "تم البيع"]} />
                </div>
                <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                  <button type="button" onClick={() => setOpen(false)} className="px-6 py-3 text-xs tracking-arabic font-bold border border-border hover:gold-border">
                    إلغاء
                  </button>
                  <button type="submit" className="px-6 py-3 text-xs tracking-arabic gold-gradient text-black font-bold">
                    إضافة العقار
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-arabic text-muted-foreground mb-2 font-semibold">{label}</span>
      <input
        {...rest}
        className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm font-sans"
        dir="rtl"
      />
    </label>
  )
}

function SelectF({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-arabic text-muted-foreground mb-2 font-semibold">{label}</span>
      <select className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm font-sans" dir="rtl">
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
