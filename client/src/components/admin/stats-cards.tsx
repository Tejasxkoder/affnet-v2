"use client"

import { motion } from "framer-motion"

const stats = [
  {
    title: "Total Properties",
    value: "156",
    change: "+12 this month",
  },

  {
    title: "Active Leads",
    value: "48",
    change: "+8 this week",
  },

  {
    title: "Transactions",
    value: "24",
    change: "₹180 Cr value",
  },

  {
    title: "Revenue",
    value: "₹5.4 Cr",
    change: "+18% from last month",
  },
]

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}

          whileHover={{
            y: -6,
          }}

          className="rounded-3xl border border-white/10 bg-[#111111] p-7 transition-all duration-300 hover:border-[#C9A14A]/40 hover:shadow-[0_0_40px_rgba(201,161,74,0.08)]"
        >

          <p className="text-sm text-[#71717A]">
            {stat.title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {stat.value}
          </h2>

          <p className="mt-3 text-sm font-medium text-[#C9A14A]">
            {stat.change}
          </p>

        </motion.div>
      ))}

    </div>
  )
}