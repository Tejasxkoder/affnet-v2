"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Building2,
  Wifi,
  ParkingCircle,
  Zap,
  Train,
} from "lucide-react"

const highlights = [
  {
    icon: Building2,
    title: "Grade A Building",
  },
  {
    icon: Train,
    title: "Metro Connectivity",
  },
  {
    icon: Wifi,
    title: "High Speed Internet",
  },
  {
    icon: ParkingCircle,
    title: "Ample Parking",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
  },
  {
    icon: Zap,
    title: "Power Backup",
  },
]

export default function PropertyHighlights() {
  return (
    <section className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Property Highlights
        </h2>

        <p className="mt-2 text-[#71717A]">
          Key advantages of this commercial property.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {highlights.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-[#C9A14A]/40"
            >

              <Icon className="h-8 w-8 text-[#C9A14A]" />

              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>

            </motion.div>
          )
        })}

      </div>

    </section>
  )
}