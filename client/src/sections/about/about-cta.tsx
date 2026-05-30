"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutCta() {
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
          Partner With Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight"
        >
          Experience Seamless Real Estate Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-xl mx-auto text-base sm:text-lg leading-8 text-[#71717A]"
        >
          Partner with Affnet Consultants and let us help you find the perfect
          property solution tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto h-12 rounded-xl bg-[#C9A14A] px-10 text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
            >
              Contact Us
            </motion.button>
          </Link>
          <Link href="/properties">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto h-12 rounded-xl border border-white/10 px-10 text-sm font-semibold text-white transition-colors hover:border-[#C9A14A]"
            >
              Explore Properties
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>

    </section>
  )
}