"use client"

import { motion } from "framer-motion"

const leads = [
  {
    name: "Rahul Mehta",
    property: "Office Space, Mumbai",
    budget: "₹10 - 15 Cr",
    status: "New",
    date: "May 27",
  },

  {
    name: "Priya Kapoor",
    property: "Retail Space, Delhi",
    budget: "₹8 - 12 Cr",
    status: "Contacted",
    date: "May 26",
  },

  {
    name: "Aman Verma",
    property: "Warehouse, Pune",
    budget: "₹20 Cr",
    status: "Qualified",
    date: "May 24",
  },
]

export default function RecentLeads() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
        delay: 0.2,
      }}

      className="mt-8 rounded-3xl border border-white/10 bg-[#111111] p-8"
    >

      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-semibold text-white">
            Recent Leads
          </h2>

          <p className="mt-1 text-sm text-[#71717A]">
            Latest client inquiries
          </p>

        </div>

        <button className="text-sm font-medium text-[#C9A14A] transition-all duration-300 hover:text-[#d6ae57]">
          View All
        </button>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full border-separate border-spacing-y-2">

          {/* TABLE HEAD */}
          <thead>

            <tr className="text-left">

              <th className="pb-5 pl-4 text-sm font-medium text-[#71717A]">
                Name
              </th>

              <th className="pb-5 text-sm font-medium text-[#71717A]">
                Property
              </th>

              <th className="pb-5 text-sm font-medium text-[#71717A]">
                Budget
              </th>

              <th className="pb-5 text-sm font-medium text-[#71717A]">
                Status
              </th>

              <th className="pb-5 text-sm font-medium text-[#71717A]">
                Date
              </th>

            </tr>

          </thead>

          {/* TABLE BODY */}
          <tbody>

            {leads.map((lead, index) => (
              <motion.tr
                key={lead.name}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}

                whileHover={{
                  scale: 1.01,
                }}

                className="rounded-2xl transition-all duration-300 hover:bg-white/[0.03]"
              >

                {/* NAME */}
                <td className="rounded-l-2xl py-5 pl-4 font-medium text-white">
                  {lead.name}
                </td>

                {/* PROPERTY */}
                <td className="py-5 text-[#A1A1AA]">
                  {lead.property}
                </td>

                {/* BUDGET */}
                <td className="py-5 text-[#A1A1AA]">
                  {lead.budget}
                </td>

                {/* STATUS */}
                <td className="py-5">

                  <span className="rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-4 py-2 text-sm font-medium text-[#C9A14A]">
                    {lead.status}
                  </span>

                </td>

                {/* DATE */}
                <td className="rounded-r-2xl py-5 text-[#71717A]">
                  {lead.date}
                </td>

              </motion.tr>
            ))}

          </tbody>

        </table>

      </div>

    </motion.div>
  )
}