"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  User,
} from "lucide-react"

export default function PropertyContact() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6"
    >
      {/* AGENT */}
      <motion.div
        whileTap={{
          scale: 0.98,
        }}
        className="border-b border-white/10 pb-5"
      >
        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111]">
            <User className="h-5 w-5 text-[#C9A14A]" />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Rahul Sharma
            </h3>

            <p className="text-xs text-[#71717A]">
              Senior Property Consultant
            </p>
          </div>

        </div>
      </motion.div>

      {/* TITLE */}
      <div className="mt-5">

        <h2 className="text-xl font-semibold text-white">
          Schedule a Visit
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#71717A]">
          Interested in this property? Leave your details
          and our team will contact you shortly.
        </p>

      </div>

      {/* FORM */}
      <div className="mt-5 space-y-3">

        <input
          type="text"
          placeholder="Full Name"
          className="h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#71717A] focus:scale-[1.01] focus:border-[#C9A14A]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#71717A] focus:scale-[1.01] focus:border-[#C9A14A]"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="h-11 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#71717A] focus:scale-[1.01] focus:border-[#C9A14A]"
        />

        <textarea
          rows={3}
          placeholder="Message"
          className="w-full rounded-xl border border-white/10 bg-[#111111] p-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#71717A] focus:scale-[1.01] focus:border-[#C9A14A]"
        />

      </div>

      {/* SUBMIT */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="mt-5 h-11 w-full rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d6ae57]"
      >
        Submit Inquiry
      </motion.button>

      {/* CONTACT INFO */}
      <div className="mt-6 border-t border-white/10 pt-5">

        <div className="space-y-3">

          <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">

            <Phone className="h-4 w-4 text-[#C9A14A]" />

            <span>+91 98765 43210</span>

          </div>

          <div className="flex items-center gap-3 text-sm text-[#A1A1AA]">

            <Mail className="h-4 w-4 text-[#C9A14A]" />

            <span>sales@affnet.com</span>

          </div>

        </div>

      </div>

    </motion.div>
  )
}