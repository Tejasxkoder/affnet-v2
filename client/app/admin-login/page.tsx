"use client"

import { motion } from "framer-motion"

import RecentLeads from "@/components/admin/recent-leads"
import StatsCards from "@/components/admin/stats-cards"

export default function AdminPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StatsCards />

      <div className="mt-8">
        <RecentLeads />
      </div>
    </motion.div>
  )
}