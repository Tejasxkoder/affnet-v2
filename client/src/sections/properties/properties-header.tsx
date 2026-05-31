"use client"

import { motion } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import PropertiesFilters from "./property-filters"

export default function PropertiesHeader() {
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  return (
    <>
      <section className="bg-[#050505] pt-28 pb-10 border-b border-white/5">
        <div className="mx-auto max-w-[1700px] px-4 sm:px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-3"
          >
            Properties
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Explore Commercial Properties
            </motion.h1>

            {/* MOBILE FILTER TOGGLE */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex lg:hidden items-center gap-2 self-start rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-2.5 text-sm text-[#A1A1AA] hover:border-[#C9A14A]/30 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </motion.button>
          </div>

        </div>
      </section>

      {/* MOBILE FILTERS DRAWER */}
      {showMobileFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-white/5 bg-black px-4 py-4 lg:hidden"
        >
          <PropertiesFilters />
        </motion.div>
      )}
    </>
  )
}