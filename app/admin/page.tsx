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
  { id: 1, title: "Azure Cliff Villa", location: "Beverly Hills", price: "$12.5M", status: "Active", views: 2840, image: "/villa-1.jpg" },
  { id: 2, title: "Skyline Penthouse", location: "Manhattan", price: "$8.9M", status: "Active", views: 1920, image: "/penthouse-1.jpg" },
  { id: 3, title: "Palm Beach Estate", location: "Dubai", price: "$24M", status: "Pending", views: 4210, image: "/villa-2.jpg" },
  { id: 4, title: "Hillcrest Mansion", location: "Bel Air", price: "$32M", status: "Active", views: 3540, image: "/mansion-1.jpg" },
  { id: 5, title: "Meridian Tower", location: "London", price: "$45M", status: "Sold", views: 5610, image: "/commercial-1.jpg" },
  { id: 6, title: "Cassia Residences", location: "Singapore", price: "$3.75M", status: "Active", views: 1240, image: "/apartment-1.jpg" },
]

export default function AdminPage() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(initialProperties)

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border/50 bg-card/40 sticky top-0 h-screen">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center text-black font-serif font-bold text-lg">
              A
            </div>
            <span className="font-serif text-lg">
              Apex <span className="gold-text">Admin</span>
            </span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: LayoutDashboard, l: "Dashboard", active: true },
            { icon: Building2, l: "Properties" },
            { icon: Users, l: "Clients" },
            { icon: TrendingUp, l: "Analytics" },
            { icon: Settings, l: "Settings" },
          ].map((it) => (
            <button
              key={it.l}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-sm transition-colors ${
                it.active
                  ? "bg-[hsl(var(--gold))]/10 gold-text border-l-2 border-[hsl(var(--gold))]"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              <it.icon className="w-4 h-4" />
              {it.l}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border/50">
          <a href="/" className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:gold-text">
            ← Back to site
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 glass-strong border-b border-border/50 px-6 py-4 flex items-center gap-4">
          <div className="flex-1 max-w-md relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search properties, clients…"
              className="w-full pl-10 pr-4 py-2.5 bg-background/40 border border-border focus:gold-border outline-none rounded-sm text-sm"
            />
          </div>
          <button aria-label="Notifications" className="relative w-10 h-10 rounded-sm gold-border flex items-center justify-center">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full gold-gradient" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 gold-gradient text-black text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 rounded-sm"
          >
            <Plus className="w-4 h-4" /> Add Property
          </button>
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-serif font-bold">
            A
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8">
          {/* Heading */}
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl mb-2">
              Welcome back, <span className="gold-text italic">Alexander</span>
            </h1>
            <p className="text-muted-foreground">Here&apos;s your portfolio overview for today.</p>
          </div>

          {/* Analytics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: DollarSign, l: "Total Revenue", v: "$48.2M", d: "+12.4%", up: true },
              { icon: Home, l: "Listings Active", v: "184", d: "+8.1%", up: true },
              { icon: Eye, l: "Total Views", v: "92.4K", d: "+24.6%", up: true },
              { icon: Users, l: "New Clients", v: "47", d: "-3.2%", up: false },
            ].map((s) => (
              <div key={s.l} className="glass p-6 rounded-sm hover:luxury-shadow transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-sm gold-border flex items-center justify-center">
                    <s.icon className="w-4 h-4 gold-text" />
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs ${
                      s.up ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {s.d}
                  </span>
                </div>
                <div className="font-serif text-3xl mb-1 group-hover:gold-text transition-colors">
                  {s.v}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Chart-like card + Recent activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 glass p-6 rounded-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl">Sales Performance</h3>
                <select className="bg-background/40 border border-border px-3 py-1.5 rounded-sm text-xs tracking-wider outline-none">
                  <option>Last 12 months</option>
                  <option>This year</option>
                </select>
              </div>
              <div className="flex items-end gap-3 h-56">
                {[40, 55, 35, 70, 50, 85, 60, 95, 75, 80, 65, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full gold-gradient rounded-t-sm hover:opacity-80 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] tracking-wider text-muted-foreground">
                      {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-sm">
              <h3 className="font-serif text-xl mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { t: "New inquiry on Azure Cliff Villa", time: "2m ago" },
                  { t: "Skyline Penthouse viewing scheduled", time: "1h ago" },
                  { t: "Palm Beach Estate offer received", time: "3h ago" },
                  { t: "Meridian Tower deal closed", time: "1d ago" },
                  { t: "Hillcrest Mansion price updated", time: "2d ago" },
                ].map((a, i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b border-border/40 last:border-0">
                    <div className="w-2 h-2 rounded-full gold-gradient mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm">{a.t}</p>
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
              <h3 className="font-serif text-xl">Property Management</h3>
              <span className="text-xs text-muted-foreground tracking-wide">
                {items.length} total listings
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-border/40">
                    {["Property", "Location", "Price", "Status", "Views", ""].map((h) => (
                      <th
                        key={h}
                        className="px-6 py-4 text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium"
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
                          <span className="font-serif">{p.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{p.location}</td>
                      <td className="px-6 py-4 gold-text font-serif">{p.price}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase rounded-sm border ${
                            p.status === "Active"
                              ? "border-green-500/40 text-green-400"
                              : p.status === "Pending"
                              ? "gold-border gold-text"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{p.views.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                        <button aria-label="More" className="p-2 hover:gold-text">
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
                <h3 className="font-serif text-2xl">
                  Add New <span className="gold-text">Property</span>
                </h3>
                <button onClick={() => setOpen(false)} aria-label="Close" className="p-2 hover:gold-text">
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
                      status: "Active",
                      views: 0,
                      image: "/villa-1.jpg",
                    },
                    ...prev,
                  ])
                  setOpen(false)
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <Field name="title" label="Property Title" placeholder="Azure Cliff Villa" />
                <Field name="location" label="Location" placeholder="Beverly Hills, CA" />
                <Field name="price" label="Price" placeholder="$12,500,000" />
                <SelectF label="Type" options={["Villa", "Penthouse", "Apartment", "Commercial"]} />
                <Field name="beds" label="Bedrooms" placeholder="6" />
                <Field name="baths" label="Bathrooms" placeholder="7" />
                <div className="md:col-span-2">
                  <SelectF label="Status" options={["Active", "Pending", "Sold"]} />
                </div>
                <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                  <button type="button" onClick={() => setOpen(false)} className="px-6 py-3 text-xs tracking-[0.2em] uppercase border border-border hover:gold-border">
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-3 text-xs tracking-[0.2em] uppercase gold-gradient text-black font-medium">
                    Add Property
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
      <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</span>
      <input
        {...rest}
        className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm"
      />
    </label>
  )
}

function SelectF({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</span>
      <select className="w-full bg-background/40 border border-border focus:gold-border outline-none px-4 py-3 text-sm rounded-sm">
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
