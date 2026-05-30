"use client"

import { motion } from "framer-motion"
import { Building2, Factory, LayoutGrid } from "lucide-react"

const types = [
  {
    icon: Building2,
    tag: "High Yield",
    title: "Commercial Investment",
    description:
      "High-yield office and retail properties in prime business districts. Benefit from strong rental income and long-term capital appreciation in India's top commercial markets.",
    image: "https://www.affnetconsultants.com/assets/images/investment-service.jpg",
    points: [
      "Grade A office spaces in BKC, Whitefield, Connaught Place",
      "Retail properties in high-footfall locations",
      "SCO plots with strong appreciation potential",
      "Avg. rental yield: 8–12% per annum",
    ],
  },
  {
    icon: Factory,
    tag: "Stable Returns",
    title: "Industrial Investment",
    description:
      "Long-term industrial assets with stable, predictable returns. Warehousing and logistics properties are seeing unprecedented demand driven by India's e-commerce boom.",
    image: "https://www.affnetconsultants.com/assets/images/industrial-service.jpg",
    points: [
      "Grade A warehousing near key logistics hubs",
      "Modern factory and manufacturing facilities",
      "Industrial parks in Pune, Chennai, Ahmedabad",
      "Avg. rental yield: 6–9% per annum",
    ],
  },
  {
    icon: LayoutGrid,
    tag: "Flexible",
    title: "Flexible Investment Plans",
    description:
      "Customized investment strategies aligned with your financial goals, risk appetite, and investment horizon. From single-asset purchases to diversified portfolios.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
    points: [
      "Portfolio diversification across asset classes",
      "Short-term and long-term investment options",
      "Joint venture and co-investment opportunities",
      "Dedicated investment advisory support",
    ],
  },
]

export default function InvestmentTypes() {
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
          Investment Options
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Where We Invest
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg leading-8 text-[#71717A]"
        >
          Three proven investment categories with strong track records and
          consistent returns across market cycles.
        </motion.p>
      </div>

      <div className="space-y-6">
        {types.map((type, i) => {
          const Icon = type.icon
          return (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileTap={{ scale: 0.99 }}
              className="group grid gap-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-colors duration-500 hover:border-[#C9A14A]/30 md:grid-cols-2"
            >

              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden bg-black md:h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${type.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />

                {/* TAG */}
                <div className="absolute left-4 top-4 rounded-full border border-[#C9A14A]/30 bg-black/80 px-3 py-1 text-xs font-medium text-[#C9A14A] backdrop-blur-md">
                  {type.tag}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7 sm:p-8">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
                  <Icon className="h-5 w-5 text-[#C9A14A]" />
                </div>

                <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white transition-colors group-hover:text-[#C9A14A]">
                  {type.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#71717A]">
                  {type.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {type.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A14A]" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          )
        })}
      </div>

    </section>
  )
}