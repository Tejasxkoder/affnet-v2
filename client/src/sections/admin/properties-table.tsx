"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminTable from "@/components/admin/admin-table"
import { Search, Plus, Filter } from "lucide-react"

const mockProperties = [
  {
    id: "1",
    name: "Premium Office Space",
    location: "Mumbai, BKC",
    price: "₹12 Cr",
    area: "15,000 sq.ft",
    type: "Office",
    status: "Active",
    date: "2024-06-01",
  },
  {
    id: "2",
    name: "Corporate Tech Park",
    location: "Bangalore, Whitefield",
    price: "₹18 Cr",
    area: "25,000 sq.ft",
    type: "Office",
    status: "Active",
    date: "2024-05-28",
  },
  {
    id: "3",
    name: "Retail Commercial Space",
    location: "Delhi, CP",
    price: "₹9 Cr",
    area: "8,000 sq.ft",
    type: "Retail",
    status: "Pending",
    date: "2024-05-20",
  },
  {
    id: "4",
    name: "Industrial Warehouse",
    location: "Mumbai, Andheri",
    price: "₹10 Cr",
    area: "30,000 sq.ft",
    type: "Warehouse",
    status: "Active",
    date: "2024-05-15",
  },
]

export default function PropertiesTable() {
  const [search, setSearch] = useState("")

  const columns = [
    { key: "name", label: "Property Name" },
    { key: "location", label: "Location" },
    { key: "type", label: "Type" },
    { key: "area", label: "Area" },
    { key: "price", label: "Price" },
    {
      key: "status",
      label: "Status",
      render: (status: string) => (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            status === "Active"
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {status}
        </span>
      ),
    },
  ]

  const filteredProperties = mockProperties.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111111] px-4 h-11 flex-1 sm:flex-initial sm:w-64">
          <Search className="h-4 w-4 text-[#71717A]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search properties..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#71717A]"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-[#A1A1AA] transition-colors hover:text-white">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex h-11 items-center gap-2 rounded-xl bg-[#C9A14A] px-4 text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57]">
            <Plus className="h-4 w-4" />
            Add Property
          </button>
        </div>
      </motion.div>

      {/* TABLE */}
      <AdminTable
        columns={columns}
        data={filteredProperties}
        onView={(id) => console.log("View", id)}
        onEdit={(id) => console.log("Edit", id)}
        onDelete={(id) => console.log("Delete", id)}
      />

      {/* PAGINATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center justify-between"
      >
        <p className="text-sm text-[#71717A]">
          Showing 1-4 of{" "}
          <span className="text-white font-medium">{filteredProperties.length}</span>{" "}
          properties
        </p>
        <div className="flex items-center gap-2">
          {["←", "1", "2", "→"].map((item, i) => (
            <button
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                item === "1"
                  ? "bg-[#C9A14A] text-black"
                  : "border border-white/10 bg-[#111111] text-[#A1A1AA] hover:border-[#C9A14A] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}