"use client"

import { motion } from "framer-motion"

interface DataPoint {
  month: string
  value: number
}

interface Props {
  title: string
  data: DataPoint[]
  height?: number
}

export default function AdminChart({ title, data, height = 300 }: Props) {
  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6"
    >
      <h3 className="text-lg font-bold text-white">{title}</h3>

      <div className="mt-6" style={{ height }}>
        <div className="flex items-end justify-between gap-2">
          {data.map((point, i) => {
            const heightPercent = ((point.value - minValue) / range) * 100
            return (
              <motion.div
                key={point.month}
                initial={{ height: 0 }}
                animate={{ height: `${heightPercent}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex flex-1 rounded-t-lg bg-gradient-to-t from-[#C9A14A] to-[#E6C755] transition-opacity hover:opacity-80"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-[#111] px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {point.value}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* LABELS */}
      <div className="mt-6 flex justify-between text-xs text-[#71717A]">
        {data.map((point) => (
          <span key={point.month}>{point.month}</span>
        ))}
      </div>
    </motion.div>
  )
}