"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb } from "lucide-react"

export default function AboutMission() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

      <div className="grid gap-8 md:grid-cols-2">

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
            <Target className="h-5 w-5 text-[#C9A14A]" />
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
            Our Mission
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-8 text-[#71717A]">
            We deliver client-centric real estate solutions with transparency,
            innovation, and excellence. Our goal is to empower clients with
            expert guidance and foster long-term success.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-8 text-[#71717A]">
            From initial consultation to final handover, every step is guided
            by our commitment to your goals.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
            <Lightbulb className="h-5 w-5 text-[#C9A14A]" />
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
            Our Vision
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-8 text-[#71717A]">
            To be India's most trusted commercial real estate partner — known
            for integrity, innovation, and the ability to consistently deliver
            outstanding outcomes for every client.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-8 text-[#71717A]">
            We envision a future where every business finds its perfect space
            and every investor maximizes their real estate potential.
          </p>
        </motion.div>

      </div>

    </section>
  )
}