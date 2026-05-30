"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "12%",
    label: "Rental Yield",
  },
  {
    value: "95%",
    label: "Occupancy",
  },
  {
    value: "₹450",
    label: "Rate / Sq.Ft",
  },
  {
    value: "8 Years",
    label: "ROI Horizon",
  },
]

export default function PropertyInvestmentStats() {
  return (
    <section className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Investment Insights
        </h2>

        <p className="mt-2 text-[#71717A]">
          Key metrics for investors and businesses.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 text-center hover:border-[#C9A14A]/40"
          >

            <h3 className="text-5xl font-bold text-[#C9A14A]">
              {stat.value}
            </h3>

            <p className="mt-3 text-[#A1A1AA]">
              {stat.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}