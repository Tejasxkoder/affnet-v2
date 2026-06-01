"use client"

import { usePathname } from "next/navigation"
import { Bell, Search, UserCircle, LogOut } from "lucide-react"
import { clearAdminSession } from "@/lib/admin-auth"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [showLogout, setShowLogout] = useState(false)

  const pageTitles: Record<string, { title: string; subtitle: string }> = {
    "/admin/dashboard": {
      title: "Dashboard",
      subtitle: "Welcome back to your admin panel",
    },
    "/admin/properties": {
      title: "Properties",
      subtitle: "Manage all listed properties",
    },
    "/admin/leads": { title: "Leads", subtitle: "Track and manage leads" },
    "/admin/transactions": {
      title: "Transactions",
      subtitle: "View all transactions",
    },
    "/admin/inquiries": {
      title: "Inquiries",
      subtitle: "Manage customer inquiries",
    },
    "/admin/settings": { title: "Settings", subtitle: "Manage your account" },
  }

  const page = pageTitles[pathname] || {
    title: "Admin",
    subtitle: "Manage your platform",
  }

  const handleLogout = () => {
    clearAdminSession()
    router.push("/admin/login")
  }

  return (
    <header className="border-b border-white/10 bg-[#050505] px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">{page.title}</h1>
          <p className="mt-1 text-sm text-[#71717A]">{page.subtitle}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex h-11 w-64 items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-4">
            <Search className="h-4 w-4 text-[#71717A]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#71717A]"
            />
          </div>

          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-[#71717A] transition-colors hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#C9A14A]" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowLogout(!showLogout)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-white transition-colors hover:border-[#C9A14A]"
            >
              <UserCircle className="h-5 w-5" />
            </button>

            {showLogout && (
              <div className="absolute right-0 top-14 w-48 rounded-xl border border-white/10 bg-[#111111] shadow-lg">
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-400 transition-colors hover:bg-red-500/10"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}