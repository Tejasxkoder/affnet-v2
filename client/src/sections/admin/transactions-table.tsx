"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminTable from "@/components/admin/admin-table"
import { Search, Download, Filter } from "lucide-react"

const mockTransactions = [
  {
    id: "1",
    txnId: "TXN-001",
    amount: "₹50,000",
    type: "Commission",
    property: "Premium Office Space",
    date: "2024-06-01",
    status: "Completed",
  },
  {
    id: "2",
    txnId: "TXN-002",
    amount: "₹2,50,000",
    type: "Payment",
    property: "Corporate Tech Park",
    date: "2024-05-31",
    status: "Completed",
  },
  {
    id: "3",
    txnId: "TXN-003",
    amount: "₹1,50,000",
    type: "Refund",
    property: "Retail Space Delhi",
    date: "2024-05-30",
    status: "Pending",
  },
]

export default function TransactionsTable() {
  const [search, setSearch] = useState("")

  const columns = [
    { key: "txnId", label: "Transaction ID" },
    { key: "property", label: "Property" },
    { key: "type", label: "Type" },
    { key: "amount", label: "Amount" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (status: string) => (
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            status === "Completed"
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {status}
        </span>
      ),
    },
  ]

  const filteredTransactions = mockTransactions.filter(
    (t) =>
      t.txnId.toLowerCase().includes(search.toLowerCase()) ||
      t.property.toLowerCase().includes(search.toLowerCase())
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
            placeholder="Search transactions..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#71717A]"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-[#A1A1AA] transition-colors hover:text-white">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#111111] px-4 text-sm text-[#A1A1AA] transition-colors hover:text-white">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </motion.div>

      <AdminTable columns={columns} data={filteredTransactions} onView={(id) => console.log("View", id)} />
    </div>
  )
}