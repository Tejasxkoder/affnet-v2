"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { X, MapPin, Building2 } from "lucide-react"

const cities = [
  { name: "Gurugram", icon: "🏢" },
  { name: "Delhi", icon: "🕌" },
  { name: "Noida", icon: "🏗️" },
  { name: "Mumbai", icon: "🌆" },
  { name: "Bangalore", icon: "🌇" },
  { name: "Hyderabad", icon: "🏰" },
  { name: "Pune", icon: "🏙️" },
  { name: "Chennai", icon: "🌃" },
  { name: "Moradabad", icon: "🏘️" },
]

const spaceTypes = [
  { name: "Office Space", icon: Building2 },
  { name: "Retail Space", icon: Building2 },
  { name: "Warehouse", icon: Building2 },
  { name: "Coworking", icon: Building2 },
  { name: "For Sale", icon: Building2 },
  { name: "Investment", icon: Building2 },
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function PropertySearchModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1)
  const [selectedCity, setSelectedCity] = useState("")
  const router = useRouter()

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setStep(2)
  }

  const handleSpaceSelect = (space: string) => {
    onClose()
    router.push(
      `/properties?city=${encodeURIComponent(selectedCity)}&type=${encodeURIComponent(space)}`
    )
    // Reset
    setTimeout(() => setStep(1), 300)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setStep(1), 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* MODAL */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl"
          >

            {/* CLOSE */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#111] text-[#71717A] transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <AnimatePresence mode="wait">

              {/* STEP 1 — CITY */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#71717A]">
                      Step 1 of 2
                    </p>
                    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                      Where are you looking?
                    </h2>
                    <p className="mt-1 text-sm text-[#71717A]">
                      Select a city to explore commercial properties
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                    {cities.map((city) => (
                      <motion.button
                        key={city.name}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCitySelect(city.name)}
                        className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#111111] p-3 sm:p-4 transition-colors hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/5"
                      >
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-xl sm:text-2xl transition-colors group-hover:border-[#C9A14A]/30">
                          {city.icon}
                        </div>
                        <span className="text-xs font-medium text-[#A1A1AA] transition-colors group-hover:text-[#C9A14A]">
                          {city.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* SKIP */}
                  <button
                    onClick={() => {
                      router.push("/properties")
                      handleClose()
                    }}
                    className="mt-5 w-full text-center text-xs text-[#71717A] hover:text-white transition-colors"
                  >
                    Browse all properties →
                  </button>
                </motion.div>
              )}

              {/* STEP 2 — SPACE TYPE */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-6">
                    <button
                      onClick={() => setStep(1)}
                      className="mb-3 flex items-center gap-1.5 text-xs text-[#71717A] hover:text-white transition-colors"
                    >
                      ← Back
                    </button>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#71717A]">
                      Step 2 of 2 — {selectedCity}
                    </p>
                    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                      What type of space do you need?
                    </h2>
                    <p className="mt-1 text-sm text-[#71717A]">
                      Select a space type to find the best options
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {spaceTypes.map((space) => (
                      <motion.button
                        key={space.name}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSpaceSelect(space.name)}
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] p-4 text-left transition-colors hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
                          <MapPin className="h-4 w-4 text-[#C9A14A]" />
                        </div>
                        <span className="text-sm font-medium text-[#A1A1AA] transition-colors group-hover:text-white">
                          {space.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* CITY INDICATOR */}
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/5 bg-[#111] px-4 py-3">
                    <MapPin className="h-3.5 w-3.5 text-[#C9A14A]" />
                    <span className="text-xs text-[#71717A]">
                      Showing results in{" "}
                      <span className="text-[#C9A14A]">{selectedCity}</span>
                    </span>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}