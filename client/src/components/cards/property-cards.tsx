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
      <div className="relative h-[280px] overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* TAG */}
        <div className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md ${
          tag === "For Lease"
            ? "border border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
            : "border border-[#C9A14A]/40 bg-[#C9A14A]/20 text-[#C9A14A]"
        }`}>
          {tag}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6">

        {/* LOCATION */}
        <div className="flex items-center gap-2 text-sm text-[#71717A]">
          <MapPin className="h-4 w-4 shrink-0 text-[#C9A14A]" />
          <span className="truncate">{location}</span>
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-2 text-sm leading-7 text-[#71717A] line-clamp-2">
          {description}
        </p>

        {/* STATS + BUTTON */}
        <div className="mt-6 border-t border-white/5 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#71717A]">
                Area
              </p>
              <p className="mt-1 text-base font-bold text-white">{area}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-widest text-[#71717A]">
                Price
              </p>
              <p className="mt-1 text-base font-bold text-[#C9A14A]">{price}</p>
            </div>
          </div>

          <Link href={`/properties/${id}`}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
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