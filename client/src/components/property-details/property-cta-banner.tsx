"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"

import ScheduleVisitModal from "./schedule-visit-modal"

export default function PropertyCtaBanner() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="overflow-hidden rounded-3xl border border-[#C9A14A]/20 bg-gradient-to-r from-[#111111] via-[#0A0A0A] to-[#111111] p-10"
    >

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* CONTENT */}
        <div>

          <span className="rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/10 px-4 py-2 text-sm font-medium text-[#C9A14A]">
            Premium Investment Opportunity
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Ready To Explore This Property?
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#A1A1AA]">
            Connect with our commercial real estate experts
            and schedule a personalized property visit.
            Get investment insights, pricing details,
            and location analysis.
          </p>

        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4 sm:flex-row">

          <a
            href="tel:+919876543210"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 px-8 text-white transition-all duration-300 hover:border-[#C9A14A]"
          >

            <Phone className="h-5 w-5" />

            Call Now

          </a>

          <div className="flex items-center gap-3">

            <ScheduleVisitModal />

            <motion.div
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >

              <ArrowRight className="h-6 w-6 text-[#C9A14A]" />

            </motion.div>

          </div>

        </div>

      </div>

    </motion.section>
  )
}