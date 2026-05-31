"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SlidersHorizontal } from "lucide-react"

const propertyTypes = ["Office", "Retail", "Warehouse", "Coworking", "Investment"]
const cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Gurugram", "Moradabad"]
const budgetRanges = ["Under ₹5 Cr", "₹5–10 Cr", "₹10–20 Cr", "₹20–50 Cr", "Above ₹50 Cr"]

export default function PropertiesFilters() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState("")
  const [search, setSearch] = useState("")

  const toggleType = (item: string) => {
    setSelectedTypes((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const toggleCity = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    )
  }

  const handleReset = () => {
    setSelectedTypes([])
    setSelectedCities([])
    setSelectedBudget("")
    setSearch("")
  }

  const activeCount =
    selectedTypes.length + selectedCities.length + (selectedBudget ? 1 : 0)

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-4">

      {/* TITLE */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-[#C9A14A]" />
          <h2 className="text-base font-bold text-white">Filters</h2>
          {activeCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A14A] text-[10px] font-bold text-black">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={handleReset}
            className="text-xs text-[#71717A] hover:text-[#C9A14A] transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* SEARCH */}
      <div className="mt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search properties..."
          className="h-10 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A] transition-colors"
        />
      </div>

      {/* PROPERTY TYPE */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
          Property Type
        </h3>
        <div className="mt-3 space-y-2">
          {propertyTypes.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-[#A1A1AA] hover:text-white transition-colors"
            >
              <div
                onClick={() => toggleType(item)}
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  selectedTypes.includes(item)
                    ? "border-[#C9A14A] bg-[#C9A14A]"
                    : "border-white/20 bg-transparent"
                }`}
              >
                {selectedTypes.includes(item) && (
                  <svg className="h-2.5 w-2.5 text-black" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                )}
              </div>
              <span onClick={() => toggleType(item)}>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* BUDGET */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
          Budget Range
        </h3>
        <div className="mt-3 space-y-2">
          {budgetRanges.map((range) => (
            <label
              key={range}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-[#A1A1AA] hover:text-white transition-colors"
            >
              <div
                onClick={() => setSelectedBudget(selectedBudget === range ? "" : range)}
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  selectedBudget === range
                    ? "border-[#C9A14A] bg-[#C9A14A]"
                    : "border-white/20 bg-transparent"
                }`}
              >
                {selectedBudget === range && (
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                )}
              </div>
              <span onClick={() => setSelectedBudget(selectedBudget === range ? "" : range)}>
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* CITY */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
          City
        </h3>
        <div className="mt-3 space-y-2">
          {cities.map((city) => (
            <label
              key={city}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-[#A1A1AA] hover:text-white transition-colors"
            >
              <div
                onClick={() => toggleCity(city)}
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  selectedCities.includes(city)
                    ? "border-[#C9A14A] bg-[#C9A14A]"
                    : "border-white/20 bg-transparent"
                }`}
              >
                {selectedCities.includes(city) && (
                  <svg className="h-2.5 w-2.5 text-black" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                )}
              </div>
              <span onClick={() => toggleCity(city)}>{city}</span>
            </label>
          ))}
        </div>
      </div>

      {/* APPLY */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="mt-5 h-10 w-full rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]"
      >
        Apply Filters
      </motion.button>

    </div>
  )
}