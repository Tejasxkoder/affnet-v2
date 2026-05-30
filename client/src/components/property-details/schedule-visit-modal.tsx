"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Clock,
  X,
} from "lucide-react"

export default function ScheduleVisitModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="h-14 rounded-2xl bg-[#C9A14A] px-8 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
      >
        Schedule Visit
      </button>

      <AnimatePresence>

        {open && (

          <>
            {/* OVERLAY */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.3,
              }}
              className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#0A0A0A] p-8"
            >

              {/* HEADER */}
              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-white">
                    Schedule Property Visit
                  </h2>

                  <p className="mt-2 text-[#71717A]">
                    Choose your preferred date and time.
                  </p>

                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 p-2 text-white"
                >
                  <X className="h-5 w-5" />
                </button>

              </div>

              {/* FORM */}
              <div className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none focus:border-[#C9A14A]"
                />

                <div className="grid gap-4 md:grid-cols-2">

                  <div className="relative">

                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />

                    <input
                      type="date"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#111111] pl-12 pr-4 text-white outline-none focus:border-[#C9A14A]"
                    />

                  </div>

                  <div className="relative">

                    <Clock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />

                    <input
                      type="time"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#111111] pl-12 pr-4 text-white outline-none focus:border-[#C9A14A]"
                    />

                  </div>

                </div>

                <textarea
                  rows={4}
                  placeholder="Additional Notes"
                  className="w-full rounded-xl border border-white/10 bg-[#111111] p-4 text-white outline-none focus:border-[#C9A14A]"
                />

              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex gap-4">

                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border border-white/10 py-3 text-white transition-all hover:border-white/20"
                >
                  Cancel
                </button>

                <button
                  className="flex-1 rounded-xl bg-[#C9A14A] py-3 font-semibold text-black transition-all hover:bg-[#d6ae57]"
                >
                  Confirm Visit
                </button>

              </div>

            </motion.div>

          </>
        )}

      </AnimatePresence>
    </>
  )
}