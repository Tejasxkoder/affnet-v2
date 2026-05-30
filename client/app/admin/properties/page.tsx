"use client"

import { motion } from "framer-motion"
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react"

const properties = [
  {
    id: "1",
    title: "Premium Office Space",
    location: "Mumbai",
    price: "₹12 Cr",
    status: "For Lease",
  },

  {
    id: "2",
    title: "Corporate Tech Park",
    location: "Bangalore",
    price: "₹18 Cr",
    status: "For Sale",
  },

  {
    id: "3",
    title: "Retail Commercial Space",
    location: "Delhi",
    price: "₹9 Cr",
    status: "For Lease",
  },

  {
    id: "4",
    title: "Industrial Warehouse",
    location: "Pune",
    price: "₹10 Cr",
    status: "For Sale",
  },
]

export default function AdminPropertiesPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.4,
        }}

        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >

        <div>

          <h1 className="text-4xl font-bold text-white">
            Properties
          </h1>

          <p className="mt-2 text-[#71717A]">
            Manage all listed properties
          </p>

        </div>

        <button className="flex h-12 items-center gap-2 rounded-xl bg-[#C9A14A] px-5 font-medium text-black transition-all hover:scale-[1.02]">

          <Plus className="h-5 w-5" />

          Add Property

        </button>

      </motion.div>

      {/* SEARCH */}
      <motion.div
        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 0.2,
        }}

        className="relative"
      >

        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />

        <input
          type="text"
          placeholder="Search properties..."
          className="h-12 w-full rounded-xl border border-white/10 bg-[#111111] pl-12 pr-4 text-white outline-none transition-all focus:border-[#C9A14A]"
        />

      </motion.div>

      {/* TABLE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          delay: 0.3,
        }}

        className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
      >

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10">

                <th className="px-6 py-5 text-left text-sm font-medium text-[#71717A]">
                  Property
                </th>

                <th className="px-6 py-5 text-left text-sm font-medium text-[#71717A]">
                  Location
                </th>

                <th className="px-6 py-5 text-left text-sm font-medium text-[#71717A]">
                  Price
                </th>

                <th className="px-6 py-5 text-left text-sm font-medium text-[#71717A]">
                  Status
                </th>

                <th className="px-6 py-5 text-right text-sm font-medium text-[#71717A]">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {properties.map((property, index) => (
                <motion.tr
                  key={property.id}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: index * 0.08,
                  }}

                  className="border-b border-white/5 transition-all hover:bg-white/[0.02]"
                >

                  <td className="px-6 py-5 font-medium text-white">
                    {property.title}
                  </td>

                  <td className="px-6 py-5 text-[#A1A1AA]">
                    {property.location}
                  </td>

                  <td className="px-6 py-5 text-[#C9A14A]">
                    {property.price}
                  </td>

                  <td className="px-6 py-5">

                    <span className="rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 text-xs font-medium text-[#C9A14A]">
                      {property.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-end gap-2">

                      <button className="rounded-lg border border-white/10 p-2 text-white transition-all hover:border-[#C9A14A]">
                        <Eye className="h-4 w-4" />
                      </button>

                      <button className="rounded-lg border border-white/10 p-2 text-white transition-all hover:border-[#C9A14A]">
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button className="rounded-lg border border-white/10 p-2 text-red-400 transition-all hover:border-red-400">
                        <Trash2 className="h-4 w-4" />
                      </button>

                    </div>

                  </td>

                </motion.tr>
              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </div>
  )
}