"use client"

import { motion } from "framer-motion"
import {
  Wifi,
  Car,
  ShieldCheck,
  Coffee,
  Building2,
  Zap,
  Camera,
  Users,
} from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "High Speed Internet",
  },
  {
    icon: Car,
    title: "Visitor Parking",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
  },
  {
    icon: Coffee,
    title: "Cafeteria",
  },
  {
    icon: Building2,
    title: "Conference Rooms",
  },
  {
    icon: Zap,
    title: "Power Backup",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
  },
  {
    icon: Users,
    title: "Business Lounge",
  },
]

export default function PropertyAmenitiesGrid() {
  return (
    <section className="space-y-8">

      {/* HEADING */}
      <motion.div
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
      >
        <h2 className="text-3xl font-bold text-white">
          Amenities & Facilities
        </h2>

        <p className="mt-2 text-[#71717A]">
          Premium facilities designed for modern businesses.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {amenities.map((item, index) => {
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
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#C9A14A]/40"
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