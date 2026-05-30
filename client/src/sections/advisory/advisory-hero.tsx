"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Properties Advised" },
  { value: "₹5000 Cr+", label: "Deal Value Managed" },
  { value: "15+ Yrs", label: "Industry Experience" },
  { value: "98%", label: "Client Retention" },
]

export default function AdvisoryHero() {
  return (
    <section className="bg-[#050505] pt-28 pb-20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-4"
          >
            Advisory
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Strategic Real Estate Advisory{" "}
            <br className="hidden sm:block" />
            <span className="text-[#C9A14A]">Built for Enterprises</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-[#71717A]"
          >
            From location strategy to lease negotiation, our advisory team
            delivers end-to-end commercial real estate solutions tailored to
            your business objectives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="h-12 rounded-xl bg-[#C9A14A] px-8 text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
            >
              Book a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="h-12 rounded-xl border border-white/10 px-8 text-sm font-semibold text-white transition-colors hover:border-[#C9A14A]"
            >
              View Our Services
            </motion.button>
          </motion.div>

        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 sm:p-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#C9A14A]">
                {stat.value}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#71717A]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}