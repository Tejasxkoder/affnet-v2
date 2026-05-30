"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Download,
  FileSpreadsheet,
  LayoutPanelLeft,
} from "lucide-react"

const documents = [
  {
    title: "Property Brochure",
    icon: FileText,
    size: "2.4 MB PDF",
  },
  {
    title: "Floor Plan",
    icon: LayoutPanelLeft,
    size: "1.8 MB PDF",
  },
  {
    title: "Property Layout",
    icon: FileSpreadsheet,
    size: "3.1 MB PDF",
  },
]

export default function PropertyDocuments() {
  return (
    <section className="space-y-8">

      {/* HEADING */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <h2 className="text-3xl font-bold text-white">
          Property Documents
        </h2>

        <p className="mt-2 text-[#71717A]">
          Download brochures, layouts and floor plans.
        </p>
      </motion.div>

      {/* DOCUMENTS */}
      <div className="space-y-4">

        {documents.map((document, index) => {
          const Icon = document.icon

          return (
            <motion.div
              key={document.title}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                x: 5,
              }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-[#C9A14A]/40"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111111]">
                  <Icon className="h-6 w-6 text-[#C9A14A]" />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {document.title}
                  </h3>

                  <p className="text-sm text-[#71717A]">
                    {document.size}
                  </p>

                </div>

              </div>

              <button className="flex items-center gap-2 rounded-xl border border-[#C9A14A]/30 px-4 py-2 text-sm font-medium text-[#C9A14A] transition-all hover:bg-[#C9A14A] hover:text-black">

                <Download className="h-4 w-4" />

                Download

              </button>

            </motion.div>
          )
        })}

      </div>

    </section>
  )
}