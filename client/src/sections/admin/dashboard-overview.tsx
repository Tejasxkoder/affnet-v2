"use client"

import AdminStatsCard from "@/components/admin/admin-stats-cards"
import AdminChart from "@/components/admin/admin-chart"
import AdminTable from "@/components/admin/admin-table"
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  MessageSquare,
} from "lucide-react"

const chartData = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: 3200 },
  { month: "Mar", value: 2800 },
  { month: "Apr", value: 3900 },
  { month: "May", value: 4200 },
  { month: "Jun", value: 3800 },
]

const recentLeads = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    property: "Premium Office Space",
    status: "New",
    date: "2024-06-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    property: "Corporate Tech Park",
    status: "Contacted",
    date: "2024-05-31",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    property: "Retail Space Delhi",
    status: "Interested",
    date: "2024-05-30",
  },
]

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* STATS */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AdminStatsCard
          index={0}
          title="Total Properties"
          value="48"
          change={12}
          icon={<Building2 className="h-6 w-6" />}
          color="gold"
        />
        <AdminStatsCard
          index={1}
          title="Active Leads"
          value="156"
          change={8}
          icon={<Users className="h-6 w-6" />}
          color="emerald"
        />
        <AdminStatsCard
          index={2}
          title="Monthly Revenue"
          value="₹2.4 Cr"
          change={15}
          icon={<DollarSign className="h-6 w-6" />}
          color="blue"
        />
        <AdminStatsCard
          index={3}
          title="Inquiries"
          value="24"
          change={-5}
          icon={<MessageSquare className="h-6 w-6" />}
          color="red"
        />
      </div>

      {/* CHARTS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminChart title="Property Views" data={chartData} />
        <AdminChart title="Lead Generation" data={chartData} />
      </div>

      {/* RECENT LEADS */}
      <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6">
        <h3 className="text-lg font-bold text-white">Recent Leads</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#71717A]">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#71717A]">
                  Property
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#71717A]">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-[#71717A]">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 text-white">{lead.name}</td>
                  <td className="px-4 py-3 text-[#71717A]">{lead.property}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      lead.status === "New"
                        ? "border border-blue-500/30 bg-blue-500/10 text-blue-400"
                        : lead.status === "Contacted"
                          ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                          : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#71717A]">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}