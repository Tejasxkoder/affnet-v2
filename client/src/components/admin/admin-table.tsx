"use client"

import { motion } from "framer-motion"
import { Eye, Edit2, Trash2, MoreHorizontal } from "lucide-react"

interface Column {
  key: string
  label: string
  render?: (value: any) => React.ReactNode
}

interface Row {
  id: string
  [key: string]: any
}

interface Props {
  columns: Column[]
  data: Row[]
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export default function AdminTable({
  columns,
  data,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* HEADER */}
          <thead>
            <tr className="border-b border-white/5 bg-[#111111]/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#71717A]"
                >
                  {col.label}
                </th>
              ))}
              {(onView || onEdit || onDelete) && (
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-12 text-center text-sm text-[#71717A]"
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  className="border-b border-white/5 transition-colors hover:bg-white/5"
                >
                  {columns.map((col) => (
                    <td
                      key={`${row.id}-${col.key}`}
                      className="px-6 py-4 text-sm text-white"
                    >
                      {col.render
                        ? col.render(row[col.key])
                        : row[col.key]}
                    </td>
                  ))}

                  {(onView || onEdit || onDelete) && (
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {onView && (
                          <button
                            onClick={() => onView(row.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[#71717A] transition-colors hover:border-[#C9A14A] hover:text-[#C9A14A]"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        )}
                        {onEdit && (
                          <button
                            onClick={() => onEdit(row.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[#71717A] transition-colors hover:border-[#C9A14A] hover:text-[#C9A14A]"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(row.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[#71717A] transition-colors hover:border-red-500 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}