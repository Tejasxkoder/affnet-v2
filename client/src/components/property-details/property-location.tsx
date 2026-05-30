"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Train,
  Plane,
  Building2,
  Hospital,
} from "lucide-react"

const nearbyPlaces = [
  {
    icon: Train,
    name: "Metro Station",
    distance: "500m",
  },
  {
    icon: Plane,
    name: "Airport",
    distance: "12km",
  },
  {
    icon: Hospital,
    name: "Hospital",
    distance: "1.2km",
  },
  {
    icon: Building2,
    name: "Business Hub",
    distance: "2km",
  },
]

export default function PropertyLocation() {
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
        transition={{
          duration: 0.5,
        }}
      >
        <h2 className="text-3xl font-bold text-white">
          Location & Connectivity
        </h2>

        <p className="mt-2 text-[#71717A]">
          Prime commercial location with excellent
          connectivity and nearby infrastructure.
        </p>
      </motion.div>

      {/* MAP */}
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
        className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]"
      >

        <div className="flex h-[400px] items-center justify-center bg-gradient-to-br from-[#111111] to-[#0A0A0A]">

          <div className="text-center">

            <MapPin className="mx-auto h-12 w-12 text-[#C9A14A]" />

            <h3 className="mt-4 text-xl font-semibold text-white">
              Interactive Map
            </h3>

            <p className="mt-2 text-[#71717A]">
              Google Maps integration will be connected
              during backend implementation.
            </p>

          </div>

        </div>

      </motion.div>

      {/* NEARBY PLACES */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {nearbyPlaces.map((place, index) => {
          const Icon = place.icon

          return (
            <motion.div
              key={place.name}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#C9A14A]/40"
            >

              <Icon className="h-8 w-8 text-[#C9A14A]" />

              <h3 className="mt-4 text-lg font-semibold text-white">
                {place.name}
              </h3>

              <p className="mt-2 text-[#71717A]">
                {place.distance}
              </p>

            </motion.div>
          )
        })}

      </div>

    </section>
  )
}