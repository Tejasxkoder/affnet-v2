"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminTable from "@/components/admin/admin-table"
import { Search, Plus, Filter } from "lucide-react"

const mockInquiries = [
  {
    id: "1",
    name: "Alex Brown",
    email: "alex@example.com",
    subject: "Office Space Inquiry",
    message: "Looking for office space in Gurugram",
    date: "2024-06-01",
    status: "Open",
  },
  {
    id: "2",
    name: "Emma Davis",
    email: "emma@example.com",
    subject: "Warehouse Requirements",
    message: "Need large warehouse for logistics",
    date: "2024-05-30",
    status: "In Progress",
  },
  {
    id: "3",
    name: "David Lee",
    email: "david@example.com",
    subject: "Retail Space Query",
    message: "Interested in retail shops",
    date: "2024-05-28",
    status: "Resolved",
  },
]

export default function InquiriesTable() {
  const [search, setSearch] = useState("")

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "subject", label: "Subject" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (status: string) => (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            status === "Open"
              ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
              : status === "In Progress"
                ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {status}
        </span>
      ),
    },
  ]

  const filteredInquiries = mockInquiries.filter(
    (inq) =>
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.subject.toLowerCase().includes(search.toLowerCase())
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
            placeholder="Search inquiries..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#71717A]"
          />
        </div>

        <button className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-[#A1A1AA] transition-colors hover:text-white">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </motion.div>

      <AdminTable
        columns={columns}
        data={filteredInquiries}
        onView={(id) => console.log("View", id)}
      />
    </div>
  )
}