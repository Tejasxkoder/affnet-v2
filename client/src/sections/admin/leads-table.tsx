"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminTable from "@/components/admin/admin-table"
import { Search, Plus, Filter } from "lucide-react"

const mockLeads = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    property: "Premium Office Space",
    status: "New",
    budget: "₹50 Lakh - ₹2 Cr",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+91 87654 32109",
    property: "Corporate Tech Park",
    status: "Contacted",
    budget: "₹1 - ₹5 Cr",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+91 76543 21098",
    property: "Retail Space Delhi",
    status: "Qualified",
    budget: "₹20 Lakh - ₹1 Cr",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+91 65432 10987",
    property: "Industrial Warehouse",
    status: "Proposal Sent",
    budget: "₹5 - ₹10 Cr",
  },
]

export default function LeadsTable() {
  const [search, setSearch] = useState("")

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "property", label: "Interested Property" },
    { key: "budget", label: "Budget" },
    {
      key: "status",
      label: "Status",
      render: (status: string) => (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            status === "New"
              ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
              : status === "Contacted"
                ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                : status === "Qualified"
                  ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border border-purple-500/30 bg-purple-500/10 text-purple-400"
          }`}
        >
          {status}
        </span>
      ),
    },
  ]

  const filteredLeads = mockLeads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
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
            placeholder="Search leads..."
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
            Add Lead
          </button>
        </div>
      </motion.div>

      <AdminTable
        columns={columns}
        data={filteredLeads}
        onView={(id) => console.log("View", id)}
        onEdit={(id) => console.log("Edit", id)}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  )
}