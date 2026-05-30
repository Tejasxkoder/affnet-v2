"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Building2,
  Car,
  Wifi,
  Calendar,
  Layers3,
} from "lucide-react"

interface PropertyOverviewProps {
  property: {
    title: string
    location: string
    price: string
    description: string
  }
}

export default function PropertyOverview({
  property,
}: PropertyOverviewProps) {
  return (
    <div className="space-y-8">

      {/* HERO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8"
      >

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <div className="mb-3 inline-flex rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/10 px-4 py-2 text-sm font-medium text-[#C9A14A]">
              Premium Commercial Property
            </div>

            <h1 className="text-5xl font-bold text-white">
              {property.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-lg text-[#A1A1AA]">

              <MapPin className="h-5 w-5 text-[#C9A14A]" />

              {property.location}

            </div>

          </div>

          <div className="text-left lg:text-right">

            <p className="text-sm uppercase tracking-widest text-[#71717A]">
              Price
            </p>

            <h2 className="mt-2 text-5xl font-bold text-[#C9A14A]">
              {property.price}
            </h2>

          </div>

        </div>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-[#A1A1AA]">
          {property.description}
        </p>

      </motion.div>

      {/* SPECS */}
      <motion.div
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
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >

        {[
          {
            icon: Building2,
            label: "Area",
            value: "20,000 sq.ft",
          },
          {
            icon: Layers3,
            label: "Floors",
            value: "12 Floors",
          },
          {
            icon: Car,
            label: "Parking",
            value: "250 Slots",
          },
          {
            icon: Wifi,
            label: "Internet",
            value: "High Speed",
          },
          {
            icon: Calendar,
            label: "Possession",
            value: "Immediate",
          },
          {
            icon: Building2,
            label: "Furnishing",
            value: "Semi Furnished",
          },
        ].map((item) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.label}
              whileHover={{
                y: -5,
              }}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#C9A14A]/40"
            >

              <Icon className="h-8 w-8 text-[#C9A14A]" />

              <p className="mt-4 text-sm text-[#71717A]">
                {item.label}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {item.value}
              </h3>

            </motion.div>
          )
        })}

      </motion.div>

    </div>
  )
}