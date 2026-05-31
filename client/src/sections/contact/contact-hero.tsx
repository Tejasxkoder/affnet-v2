"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="bg-[#050505] pt-28 pb-16 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-4"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl"
        >
          Get in Touch With Our Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-[#71717A]"
        >
          Have a question or need assistance? Reach out and our expert team
          will be happy to help you find the perfect commercial real estate
          solution.
        </motion.p>

      </div>
    </section>
  )
}