"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"

interface InsightsCardProps {
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  featured?: boolean
  index?: number
  image?: string
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]">
      <div className="bg-gradient-to-br from-[#C9A14A]/10 to-transparent absolute inset-0" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="h-14 w-14 rounded-2xl border border-[#C9A14A]/20 bg-[#C9A14A]/10 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-[#C9A14A]/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z"
            />
          </svg>
        </div>
        <p className="text-xs text-[#71717A]">No image available</p>
      </div>
    </div>
  )
}

export default function InsightsCard({
  category,
  title,
  excerpt,
  date,
  readTime,
  featured = false,
  index = 0,
  image,
}: InsightsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileTap={{ scale: 0.98 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-colors duration-500 hover:border-[#C9A14A]/30 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >

      {/* IMAGE */}
      <div
        className={`relative overflow-hidden bg-black ${
          featured ? "h-[220px] sm:h-[280px]" : "h-[180px] sm:h-[200px]"
        }`}
      >
        {image ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </>
        ) : (
          <ImagePlaceholder />
        )}

        {/* CATEGORY TAG */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#C9A14A] backdrop-blur-md">
          {category}
        </div>

      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <h3
          className={`font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#C9A14A] ${
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
        >
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#71717A] flex-1">
          {excerpt}
        </p>

        {/* FOOTER */}
        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">

          <div className="flex items-center gap-3 sm:gap-4 text-xs text-[#71717A]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>

          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs font-medium text-[#C9A14A]"
          >
            Read More
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.button>

        </div>

      </div>

    </motion.div>
  )
}