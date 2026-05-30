"use client"

import { motion } from "framer-motion"
import {
  Building2, TrendingUp, FileSearch,
  MapPin, Handshake, BarChart3,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Leasing Advisory",
    description: "Expert guidance on office, retail, and industrial leasing. We identify the right space, negotiate terms, and manage the entire leasing process.",
    points: ["Market benchmarking", "Lease negotiation", "Due diligence"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Data-driven investment strategies for commercial real estate. We help investors identify high-yield opportunities and build profitable portfolios.",
    points: ["Portfolio analysis", "Risk assessment", "ROI projections"],
  },
  {
    icon: FileSearch,
    title: "Transaction Services",
    description: "End-to-end transaction support for buying, selling, and leasing commercial properties with full legal and financial oversight.",
    points: ["Documentation support", "Legal coordination", "Closing management"],
  },
  {
    icon: MapPin,
    title: "Location Strategy",
    description: "Strategic location consulting to help businesses find the optimal commercial space aligned with their operational and growth objectives.",
    points: ["Catchment analysis", "Competitor mapping", "Footfall studies"],
  },
  {
    icon: Handshake,
    title: "Tenant Representation",
    description: "We represent tenants exclusively — ensuring you get the best space at the best terms without any conflict of interest.",
    points: ["Needs assessment", "Shortlisting & tours", "Negotiation support"],
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "In-depth commercial real estate market reports, micro-market analysis, and trend forecasting to support informed decision-making.",
    points: ["Quarterly reports", "Vacancy tracking", "Rental benchmarks"],
  },
]

export default function AdvisoryServices() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

      <div className="mb-12 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-3"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Our Advisory Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
        >
          Comprehensive real estate advisory solutions designed for
          enterprises, investors, and growing businesses.
        </motion.p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 transition-colors duration-500 hover:border-[#C9A14A]/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
                <Icon className="h-5 w-5 text-[#C9A14A]" />
              </div>

              <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white transition-colors group-hover:text-[#C9A14A]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#71717A]">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A14A]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}