"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { X, MapPin } from "lucide-react"

// ── ICON COMPONENTS ──────────────────────────────────────────

function BuildingIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="#C9A14A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

function GurgaonIcon() {
  return (
    <BuildingIcon>
      <rect x="8" y="18" width="16" height="38" />
      <rect x="26" y="10" width="12" height="46" />
      <rect x="40" y="22" width="16" height="34" />
      <line x1="6" y1="56" x2="58" y2="56" />
      <rect x="11" y="24" width="4" height="4" /><rect x="11" y="32" width="4" height="4" /><rect x="11" y="40" width="4" height="4" />
      <rect x="29" y="16" width="3" height="4" /><rect x="29" y="24" width="3" height="4" /><rect x="29" y="32" width="3" height="4" />
      <rect x="43" y="28" width="4" height="4" /><rect x="43" y="36" width="4" height="4" />
    </BuildingIcon>
  )
}

function DelhiIcon() {
  return (
    <BuildingIcon>
      <path d="M10 52 L10 28 Q10 16 24 16 Q32 10 40 16 Q54 16 54 28 L54 52" />
      <path d="M20 52 L20 32 Q20 24 32 24 Q44 24 44 32 L44 52" />
      <line x1="8" y1="52" x2="56" y2="52" />
      <rect x="28" y="38" width="8" height="14" />
    </BuildingIcon>
  )
}

function NoidaIcon() {
  return (
    <BuildingIcon>
      <rect x="8" y="24" width="48" height="32" />
      <rect x="16" y="14" width="12" height="10" />
      <rect x="36" y="14" width="12" height="10" />
      <line x1="6" y1="56" x2="58" y2="56" />
      <rect x="14" y="30" width="6" height="6" /><rect x="24" y="30" width="6" height="6" />
      <rect x="34" y="30" width="6" height="6" /><rect x="44" y="30" width="6" height="6" />
      <rect x="14" y="42" width="6" height="6" /><rect x="24" y="42" width="6" height="6" />
      <rect x="34" y="42" width="6" height="6" /><rect x="44" y="42" width="6" height="6" />
    </BuildingIcon>
  )
}

function MumbaiIcon() {
  return (
    <BuildingIcon>
      <rect x="14" y="28" width="36" height="28" />
      <path d="M14 28 L32 10 L50 28" />
      <circle cx="32" cy="20" r="4" />
      <rect x="22" y="36" width="6" height="8" /><rect x="36" y="36" width="6" height="8" />
      <rect x="28" y="42" width="8" height="14" />
      <line x1="10" y1="56" x2="54" y2="56" />
    </BuildingIcon>
  )
}

function BangaloreIcon() {
  return (
    <BuildingIcon>
      <rect x="6" y="30" width="20" height="26" />
      <rect x="22" y="16" width="20" height="40" />
      <rect x="38" y="26" width="20" height="30" />
      <line x1="4" y1="56" x2="60" y2="56" />
      <rect x="9" y="36" width="4" height="4" /><rect x="9" y="44" width="4" height="4" />
      <rect x="25" y="22" width="4" height="4" /><rect x="25" y="30" width="4" height="4" /><rect x="25" y="38" width="4" height="4" />
      <rect x="33" y="22" width="4" height="4" /><rect x="33" y="30" width="4" height="4" />
      <rect x="41" y="32" width="4" height="4" /><rect x="41" y="40" width="4" height="4" />
    </BuildingIcon>
  )
}

function HyderabadIcon() {
  return (
    <BuildingIcon>
      <rect x="24" y="28" width="16" height="28" />
      <rect x="10" y="36" width="12" height="20" />
      <rect x="42" y="36" width="12" height="20" />
      <path d="M24 28 Q32 18 40 28" />
      <path d="M10 36 Q16 28 22 36" />
      <path d="M42 36 Q48 28 54 36" />
      <line x1="6" y1="56" x2="58" y2="56" />
      <rect x="29" y="38" width="6" height="8" />
      <line x1="32" y1="18" x2="32" y2="12" />
    </BuildingIcon>
  )
}

function PuneIcon() {
  return (
    <BuildingIcon>
      <rect x="8" y="32" width="14" height="24" />
      <rect x="20" y="20" width="10" height="36" />
      <rect x="28" y="26" width="14" height="30" />
      <rect x="40" y="16" width="16" height="40" />
      <line x1="6" y1="56" x2="58" y2="56" />
      <rect x="11" y="38" width="3" height="3" /><rect x="11" y="44" width="3" height="3" />
      <rect x="22" y="26" width="3" height="3" /><rect x="22" y="34" width="3" height="3" />
      <rect x="43" y="22" width="4" height="4" /><rect x="43" y="30" width="4" height="4" /><rect x="43" y="38" width="4" height="4" />
      <line x1="48" y1="16" x2="48" y2="10" />
    </BuildingIcon>
  )
}

function ChennaiIcon() {
  return (
    <BuildingIcon>
      <rect x="18" y="30" width="28" height="26" />
      <path d="M18 30 L22 20 L32 14 L42 20 L46 30" />
      <path d="M22 20 L26 16 L32 12 L38 16 L42 20" />
      <line x1="32" y1="12" x2="32" y2="8" />
      <line x1="10" y1="56" x2="54" y2="56" />
      <rect x="26" y="40" width="12" height="16" />
      <rect x="20" y="36" width="6" height="6" /><rect x="38" y="36" width="6" height="6" />
    </BuildingIcon>
  )
}

function MoradabadIcon() {
  return (
    <BuildingIcon>
      <rect x="8" y="34" width="16" height="22" />
      <rect x="22" y="26" width="20" height="30" />
      <rect x="40" y="30" width="16" height="26" />
      <path d="M8 34 L16 26 L24 34" />
      <path d="M40 30 L48 22 L56 30" />
      <line x1="6" y1="56" x2="58" y2="56" />
      <rect x="26" y="32" width="4" height="4" /><rect x="34" y="32" width="4" height="4" />
      <rect x="26" y="40" width="4" height="4" /><rect x="34" y="40" width="4" height="4" />
      <rect x="29" y="46" width="6" height="10" />
    </BuildingIcon>
  )
}

// ── DATA ──────────────────────────────────────────────────────

const cities = [
  { name: "Gurugram", icon: <GurgaonIcon /> },
  { name: "Delhi", icon: <DelhiIcon /> },
  { name: "Noida", icon: <NoidaIcon /> },
  { name: "Mumbai", icon: <MumbaiIcon /> },
  { name: "Bangalore", icon: <BangaloreIcon /> },
  { name: "Hyderabad", icon: <HyderabadIcon /> },
  { name: "Pune", icon: <PuneIcon /> },
  { name: "Chennai", icon: <ChennaiIcon /> },
  { name: "Moradabad", icon: <MoradabadIcon /> },
]

const spaceTypes = [
  { name: "Office Space" },
  { name: "Retail Space" },
  { name: "Warehouse" },
  { name: "Coworking" },
  { name: "For Sale" },
  { name: "Investment" },
]

// ── COMPONENT ─────────────────────────────────────────────────

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
            className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl"
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
                        className="group flex flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-[#111111] p-3 sm:p-4 transition-colors hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/5"
                      >
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-white/10 bg-black transition-colors group-hover:border-[#C9A14A]/30">
                          {city.icon}
                        </div>
                        <span className="text-xs font-medium text-[#A1A1AA] transition-colors group-hover:text-[#C9A14A] text-center leading-tight">
                          {city.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={() => { router.push("/properties"); handleClose() }}
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
                      Step 2 of 2 —{" "}
                      <span className="text-[#C9A14A]">{selectedCity}</span>
                    </p>
                    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                      What type of space?
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