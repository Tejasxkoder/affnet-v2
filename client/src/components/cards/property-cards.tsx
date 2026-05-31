"use client"

import { motion } from "framer-motion"
import { MapPin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface PropertyCardProps {
  id: string
  image: string
  title: string
  location: string
  description: string
  area: string
  price: string
  tag: string
  index?: number
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  description,
  area,
  price,
  tag,
  index = 0,
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-colors duration-500 hover:border-[#C9A14A]/30"
    >

      {/* IMAGE */}
      <div className="relative h-[200px] sm:h-[220px] overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* TAG */}
        <div className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-md ${
          tag === "For Lease"
            ? "border border-emerald-500/30 bg-emerald-500/20 text-emerald-400"
            : "border border-[#C9A14A]/30 bg-[#C9A14A]/20 text-[#C9A14A]"
        }`}>
          {tag}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* LOCATION */}
        <div className="flex items-center gap-1.5 text-xs text-[#71717A]">
          <MapPin className="h-3.5 w-3.5 text-[#C9A14A]" />
          <span>{location}</span>
        </div>

        {/* TITLE */}
        <h3 className="mt-2 text-base sm:text-lg font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-xs sm:text-sm leading-6 text-[#71717A] line-clamp-2">
          {description}
        </p>

        {/* STATS + BUTTON */}
        <div className="mt-4 border-t border-white/5 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#71717A]">Area</p>
              <p className="mt-0.5 text-sm font-semibold text-white">{area}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wide text-[#71717A]">Price</p>
              <p className="mt-0.5 text-sm font-semibold text-[#C9A14A]">{price}</p>
            </div>
          </div>

          <Link href={`/properties/${id}`}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
            >
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </Link>
        </div>

      </div>

    </motion.div>
  )
}