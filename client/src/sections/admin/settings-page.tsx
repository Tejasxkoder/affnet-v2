"use client"

import { motion } from "framer-motion"
import { Save } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Affnet Consultants",
    email: "admin@affnetconsultants.com",
    phone: "+91 99990 09316",
    address: "Udyog Vihar Phase 4, Gurugram",
    maxPropertiesPerPage: "20",
    commissionRate: "5",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value })
  }

  return (
    <div className="max-w-2xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6"
      >
        <h3 className="text-lg font-bold text-white">General Settings</h3>

        <div className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#A1A1AA]">
              Site Name
            </label>
            <input
              type="text"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A1A1AA]">
              Admin Email
            </label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A1A1AA]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A1A1AA]">
              Office Address
            </label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6"
      >
        <h3 className="text-lg font-bold text-white">Business Settings</h3>

        <div className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#A1A1AA]">
              Max Properties Per Page
            </label>
            <input
              type="number"
              name="maxPropertiesPerPage"
              value={settings.maxPropertiesPerPage}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#A1A1AA]">
              Commission Rate (%)
            </label>
            <input
              type="number"
              name="commissionRate"
              value={settings.commissionRate}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
            />
          </div>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 rounded-xl bg-[#C9A14A] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#d6ae57]"
      >
        <Save className="h-4 w-4" />
        Save Settings
      </motion.button>
    </div>
  )
}