"use client"

import { motion } from "framer-motion"

import {
  MapPin,
  Building2,
  Maximize,
  Calendar,
} from "lucide-react"

interface PropertyInfoProps {
  property: {
    title: string
    location: string
    description: string
    area: string
    price: string
    amenities: string[]
  }
}

export default function PropertyInfo({
  property,
}: PropertyInfoProps) {
  const specs = [
    {
      icon: Building2,
      title: "Property Type",
      value: "Commercial Office",
    },

    {
      icon: Maximize,
      title: "Area",
      value: property.area,
    },

    {
      icon: Calendar,
      title: "Possession",
      value: "Immediate",
    },
  ]

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8"
    >

      {/* HEADER */}
      <div className="border-b border-white/10 pb-8">

        <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">

          <MapPin className="h-4 w-4 text-[#C9A14A]" />

          <span>
            {property.location}
          </span>

        </div>

        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              {property.title}
            </h1>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#71717A]">
              {property.description}
            </p>

          </div>

          <div className="shrink-0">

            <p className="text-sm uppercase tracking-[0.2em] text-[#71717A]">
              Property Price
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#C9A14A]">
              {property.price}
            </h2>

          </div>

        </div>

      </div>

      {/* SPECS */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {specs.map((spec, index) => {
          const Icon = spec.icon

          return (
            <motion.div
              key={spec.title}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.1,
              }}

              whileHover={{
                y: -5,
              }}

              className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:border-[#C9A14A]/40"
            >

              <Icon className="h-6 w-6 text-[#C9A14A]" />

              <p className="mt-4 text-sm text-[#71717A]">
                {spec.title}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {spec.value}
              </h3>

            </motion.div>
          )
        })}

      </div>

      {/* DESCRIPTION */}
      <div className="mt-12 border-t border-white/10 pt-10">

        <h2 className="text-2xl font-semibold text-white">
          Property Overview
        </h2>

        <p className="mt-5 leading-8 text-[#A1A1AA]">
          This premium commercial property is strategically
          located in a prime business district, offering
          excellent connectivity, modern infrastructure,
          and world-class amenities. Designed for businesses
          seeking a prestigious address and high operational
          efficiency, the property combines luxury,
          accessibility, and long-term investment potential.
        </p>

      </div>

      {/* AMENITIES */}
      <div className="mt-12 border-t border-white/10 pt-10">

        <h2 className="text-2xl font-semibold text-white">
          Amenities
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

          {property.amenities.map(
            (amenity, index) => (
              <motion.div
                key={amenity}

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: index * 0.08,
                }}

                whileHover={{
                  x: 4,
                }}

                className="rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-[#A1A1AA] transition-all duration-300 hover:border-[#C9A14A]/40 hover:text-white"
              >
                ✓ {amenity}
              </motion.div>
            )
          )}

        </div>

      </div>

    </motion.div>
  )
}