"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"

interface Props {
  title: string
  value: string | number
  change?: number
  icon?: React.ReactNode
  color?: "gold" | "emerald" | "blue" | "red"
  index?: number
}

const colorClasses = {
  gold: "border-[#C9A14A]/20 bg-[#C9A14A]/10 text-[#C9A14A]",
  emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  red: "border-red-500/20 bg-red-500/10 text-red-400",
}

export default function AdminStatsCard({
  title,
  value,
  change,
  icon,
  color = "gold",
  index = 0,
}: Props) {
  const isPositive = (change ?? 0) >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#71717A]">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>

          {change !== undefined && (
            <div className="mt-3 flex items-center gap-1.5">
              {isPositive ? (
                <ArrowUpRight className="h-4 w-4 text-emerald-400" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-400" />
              )}
              <span
                className={`text-sm font-medium ${
                  isPositive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {Math.abs(change)}% from last month
              </span>
            </div>
          )}
        </div>

        {icon && (
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colorClasses[color]}`}
          >
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  )
}