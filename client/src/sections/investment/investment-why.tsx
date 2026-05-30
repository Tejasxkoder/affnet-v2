"use client"

import { motion } from "framer-motion"
import { TrendingUp, ShieldCheck, Users, BarChart3 } from "lucide-react"

const reasons = [
  {
    icon: TrendingUp,
    title: "Strong & Consistent Returns",
    description:
      "Our carefully curated investment portfolio has delivered above-market returns consistently across economic cycles, with average yields of 8–18% per annum.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Managed Approach",
    description:
      "Every investment opportunity goes through rigorous due diligence — legal, financial, and market analysis — before we recommend it to our clients.",
  },
  {
    icon: Users,
    title: "Dedicated Investment Advisors",
    description:
      "You get a dedicated relationship manager who understands your portfolio, financial goals, and proactively identifies the best opportunities for you.",
  },
  {
    icon: BarChart3,
    title: "Diversified Portfolio Strategy",
    description:
      "We help you build a balanced portfolio across commercial, industrial, and retail assets — spreading risk while maximizing overall returns.",
  },
]

export default function InvestmentWhy() {
  return (
    <section className="border-t border-white/5 bg-[#050505] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="mb-12 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#C9A14A] mb-3"
          >
            Why Affnet
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Why Invest With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
          >
            15+ years of real estate investment expertise working for your
            financial growth.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
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
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#71717A]">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}