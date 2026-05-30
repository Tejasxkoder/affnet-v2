"use client"

import { motion } from "framer-motion"

export default function AdvisoryCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-[#0A0A0A] px-6 sm:px-10 py-14 sm:py-16 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-4"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight"
        >
          Ready to Make Smarter Real Estate Decisions?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-xl mx-auto text-base sm:text-lg leading-8 text-[#71717A]"
        >
          Our advisory team is ready to help you navigate the commercial real
          estate market with confidence and clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto h-12 rounded-xl bg-[#C9A14A] px-10 text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
          >
            Book a Free Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto h-12 rounded-xl border border-white/10 px-10 text-sm font-semibold text-white transition-colors hover:border-[#C9A14A]"
          >
            View Our Properties
          </motion.button>
        </motion.div>

      </motion.div>

    </section>
  )
}