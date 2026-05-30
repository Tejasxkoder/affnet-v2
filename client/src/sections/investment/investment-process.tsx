"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Investment Consultation",
    description:
      "We start by understanding your financial goals, investment horizon, risk appetite, and budget to create a tailored investment strategy.",
  },
  {
    number: "02",
    title: "Market Research & Shortlisting",
    description:
      "Our team identifies the best investment opportunities through deep market research, micro-market analysis, and yield projections.",
  },
  {
    number: "03",
    title: "Due Diligence",
    description:
      "Every property undergoes thorough legal, financial, and structural due diligence before we present it as an investment opportunity.",
  },
  {
    number: "04",
    title: "Deal Structuring",
    description:
      "We structure the deal to maximize your returns — covering purchase price, financing options, tax implications, and exit strategy.",
  },
  {
    number: "05",
    title: "Transaction & Handover",
    description:
      "We manage all documentation, legal coordination, and registration — ensuring a seamless, stress-free transaction process.",
  },
  {
    number: "06",
    title: "Portfolio Management",
    description:
      "Post-investment, we provide ongoing portfolio management, rental management, and periodic performance reviews.",
  },
]

export default function InvestmentProcess() {
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
          How It Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Our Investment Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
        >
          A transparent, structured process designed to protect your capital
          and maximize your investment returns.
        </motion.p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-7 transition-colors duration-500 hover:border-[#C9A14A]/30"
          >
            <span className="text-5xl font-bold text-white/5 transition-colors group-hover:text-[#C9A14A]/10">
              {step.number}
            </span>
            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-white transition-colors group-hover:text-[#C9A14A]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#71717A]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}