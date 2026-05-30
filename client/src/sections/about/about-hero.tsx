"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="bg-[#050505] pt-28 pb-20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-4"
            >
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Who We Are
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg leading-8 text-[#71717A]"
            >
              Affnet Consultants is a premier real estate firm committed to
              delivering exceptional services tailored to meet the unique needs
              of our clients. We specialize in property management, real estate
              investment, and consulting services.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
            >
              Our mission is to provide unparalleled value through personalized
              solutions and long-term relationships built on trust, transparency,
              and results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="h-12 rounded-xl bg-[#C9A14A] px-8 text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="h-12 rounded-xl border border-white/10 px-8 text-sm font-semibold text-white transition-colors hover:border-[#C9A14A]"
              >
                Explore Properties
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-3xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://www.affnetconsultants.com/assets/images/aboutus.jpg)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* FLOATING STAT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-md"
            >
              <p className="text-2xl font-bold text-[#C9A14A]">15+ Yrs</p>
              <p className="mt-0.5 text-xs text-[#A1A1AA]">Industry Experience</p>
            </motion.div>

          </motion.div>

        </div>

        {/* STATS ROW */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "500+", label: "Properties Managed" },
            { value: "₹5000 Cr+", label: "Value Managed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+ Yrs", label: "Industry Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
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