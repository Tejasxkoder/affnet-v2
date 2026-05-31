"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle } from "lucide-react"

export default function WhatsappButton() {
  const [isOpen, setIsOpen] = useState(false)

  const phone = "919999009316"
  const message =
    "Hi Affnet Consultants! I found your website and would like to know more about commercial properties."
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* POPUP CARD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Affnet Consultants
                </p>
                <p className="text-xs text-[#71717A]">
                  Typically replies in minutes
                </p>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-4 rounded-xl bg-[#111111] p-3">
              <p className="text-sm leading-6 text-[#A1A1AA]">
                👋 Hi there! Looking for commercial real estate? We&apos;re
                here to help. Chat with us on WhatsApp!
              </p>
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* PING */}
        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-50" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#25D366]" />
          </span>
        )}
      </motion.button>

    </div>
  )
}