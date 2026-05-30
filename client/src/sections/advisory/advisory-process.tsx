"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a detailed discussion to understand your business requirements, budget, timeline, and long-term real estate goals.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description: "Our team conducts a thorough market study — analyzing available options, pricing benchmarks, and location suitability.",
  },
  {
    number: "03",
    title: "Shortlisting & Site Visits",
    description: "We curate a tailored shortlist of properties and coordinate site visits, saving you time and ensuring quality options.",
  },
  {
    number: "04",
    title: "Negotiation & Deal Structuring",
    description: "Our advisors negotiate the best terms on your behalf — covering pricing, lease tenure, fit-out contributions, and exit clauses.",
  },
  {
    number: "05",
    title: "Documentation & Closure",
    description: "We coordinate with legal teams to ensure smooth documentation, compliance, and a seamless transaction closure.",
  },
  {
    number: "06",
    title: "Post-Deal Support",
    description: "Our relationship doesn't end at closure. We provide ongoing support for property management, renewals, and portfolio expansion.",
  },
]

export default function AdvisoryProcess() {
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
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Our Advisory Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
          >
            A structured, transparent process designed to deliver the best
            outcomes at every stage of your real estate journey.
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
              whileHover={{ y: -4 }}
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

      </div>
    </section>
  )
}