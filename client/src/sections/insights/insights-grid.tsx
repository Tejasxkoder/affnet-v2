"use client"

import { motion } from "framer-motion"
import InsightsCard from "./insights-card"

const insights = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Market Trends",
    title: "Mumbai Commercial Real Estate Market: Q1 2026 Outlook",
    excerpt: "A deep dive into Mumbai's BKC and Lower Parel micro-markets, analyzing vacancy rates, rental trends, and upcoming supply pipeline for Grade A office spaces.",
    date: "May 20, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
    category: "Investment",
    title: "Why Tier-2 Cities Are the Next Commercial Real Estate Hotspot",
    excerpt: "Pune, Hyderabad, and Ahmedabad are seeing unprecedented commercial demand. Here's what investors need to know.",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    category: "Office Spaces",
    title: "Flex vs Traditional Office: What Works for Enterprises in 2026",
    excerpt: "As hybrid work becomes permanent, enterprises are rethinking their office strategies. We break down the costs and benefits.",
    date: "May 10, 2026",
    readTime: "4 min read",
  },
  {
    category: "Policy",
    title: "RERA Updates & Their Impact on Commercial Property Transactions",
    excerpt: "Recent RERA amendments are reshaping how commercial deals are structured. Key changes every investor must understand.",
    date: "May 5, 2026",
    readTime: "7 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    category: "Warehousing",
    title: "India's Logistics Boom: Industrial Real Estate in Focus",
    excerpt: "E-commerce growth is driving massive demand for Grade A warehousing. Which cities offer the best ROI for industrial investors?",
    date: "Apr 28, 2026",
    readTime: "5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    category: "Retail",
    title: "High Street vs Mall: Where Retail Brands Are Investing in 2026",
    excerpt: "Retail real estate is evolving fast. Brand preferences are shifting — and location strategy has never been more critical.",
    date: "Apr 20, 2026",
    readTime: "4 min read",
  },
]

export default function InsightsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">

      {/* HEADER */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-2"
          >
            Latest
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Recent Insights
          </motion.h2>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="text-sm font-medium text-[#A1A1AA] border border-white/10 rounded-xl px-4 py-2 transition-colors hover:border-[#C9A14A] hover:text-white"
        >
          View All
        </motion.button>
      </div>

      {/* GRID */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {insights.map((insight, i) => (
          <InsightsCard
            key={insight.title}
            image={insight.image} 
            category={insight.category}
            title={insight.title}
            excerpt={insight.excerpt}
            date={insight.date}
            readTime={insight.readTime}
            featured={insight.featured}
            index={i}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-12 sm:mt-14 flex items-center justify-center gap-2 sm:gap-3">
        {["←", "1", "2", "3", "→"].map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl text-sm sm:text-lg font-semibold transition-colors ${
              item === "1"
                ? "bg-[#C9A14A] text-black"
                : "border border-white/10 bg-[#111111] text-[#A1A1AA] hover:border-[#C9A14A] hover:text-white"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

    </section>
  )
}