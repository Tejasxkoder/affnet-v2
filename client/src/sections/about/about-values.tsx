"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Star,
  Cpu,
  Users,
  Eye,
  Handshake,
} from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Every transaction is guided by our unwavering commitment to ethical practices and transparency.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We continuously raise the bar to exceed industry standards and client expectations.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative solutions to maximize property value.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do — creating tailored solutions for long-term satisfaction.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Complete transparency in all dealings, ensuring clients are informed at every stage.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Working with clients, partners, and communities to create solutions that benefit all stakeholders.",
  },
]

export default function AboutValues() {
  return (
    <section className="border-t border-white/5 bg-[#050505] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-3"
          >
            What We Stand For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
          >
            The principles that guide every decision, every relationship, and
            every transaction we undertake.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 transition-colors duration-500 hover:border-[#C9A14A]/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
                  <Icon className="h-5 w-5 text-[#C9A14A]" />
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white transition-colors group-hover:text-[#C9A14A]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#71717A]">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}