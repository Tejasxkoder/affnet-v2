"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import {
  LayoutDashboard,
  Building2,
  Users,
  Receipt,
  MessageSquare,
  Settings,
} from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Properties",
    href: "/admin/properties",
    icon: Building2,
  },
  {
    title: "Leads",
    href: "/admin/leads",
    icon: Users,
  },
  {
    title: "Transactions",
    href: "/admin/transactions",
    icon: Receipt,
  },
  {
    title: "Inquiries",
    href: "/admin/inquiries",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 flex h-screen w-[280px] flex-col border-r border-white/10 bg-[#0A0A0A]">

      {/* LOGO */}
      <div className="border-b border-white/10 p-6">

        <h1 className="text-2xl font-bold text-white">
          Affnet
        </h1>

        <p className="mt-1 text-sm text-[#71717A]">
          Admin Dashboard
        </p>

      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 p-4">

        <div className="space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon

            const active =
              pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
              >

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`flex h-12 items-center gap-3 rounded-xl px-4 transition-all duration-300
                  ${
                    active
                      ? "bg-[#C9A14A] text-black shadow-lg"
                      : "text-[#A1A1AA] hover:bg-[#111111] hover:text-white"
                  }`}
                >

                  <Icon className="h-5 w-5" />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </motion.div>

              </Link>
            )
          })}

        </div>

      </nav>

      {/* FOOTER */}
      <div className="border-t border-white/10 p-5">

        <div className="rounded-xl border border-white/10 bg-[#111111] p-4">

          <p className="text-sm text-[#71717A]">
            Logged in as
          </p>

          <h3 className="mt-1 font-semibold text-white">
            Admin User
          </h3>

        </div>

      </div>

    </aside>
  )
}