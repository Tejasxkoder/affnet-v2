"use client"

import { motion } from "framer-motion"

const tags = ["All", "Market Trends", "Investment", "Office Spaces", "Retail", "Warehousing", "Policy"]

export default function InsightsHero() {
  return (
    <section className="bg-[#050505] pt-28 pb-16 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-4"
        >
          Insights
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight"
        >
          Market Intelligence & Real Estate Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-[#71717A]"
        >
          Stay ahead with expert analysis, market trends, investment reports,
          and commercial real estate insights curated for modern enterprises.
        </motion.p>

        {/* TAGS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-2 sm:gap-3"
        >
          {tags.map((tag, i) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
                tag === "All"
                  ? "bg-[#C9A14A] text-black border-[#C9A14A]"
                  : "bg-transparent text-[#A1A1AA] border-white/10 hover:border-[#C9A14A] hover:text-white"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  )
}