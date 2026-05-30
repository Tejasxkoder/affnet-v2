"use client"

import { usePathname } from "next/navigation"
import { Bell, Search, UserCircle } from "lucide-react"

export default function AdminHeader() {
  const pathname = usePathname()

  const pageTitles: Record<string, string> = {
    "/admin/dashboard": "Dashboard",
    "/admin/properties": "Properties",
    "/admin/leads": "Leads",
    "/admin/transactions": "Transactions",
    "/admin/inquiries": "Inquiries",
    "/admin/settings": "Settings",
  }

  const title = pageTitles[pathname] || "Admin"

  return (
    <header className="flex h-28 items-center justify-between border-b border-white/10 px-10">

      <div>
        <h1 className="text-5xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-[#71717A]">
          Manage your platform efficiently
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-[300px] items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-4">

          <Search className="h-5 w-5 text-[#71717A]" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#71717A]"
          />

        </div>

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-white">
          <Bell className="h-5 w-5" />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#C9A14A]" />
        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-white">
          <UserCircle className="h-7 w-7" />
        </button>

      </div>

    </header>
  )
}