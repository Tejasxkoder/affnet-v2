"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

const propertyTypes = [
  "Office Space",
  "Coworking Space",
  "Retail Shop",
  "Warehouse",
  "Investment Property",
  "Other",
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    // API call yahan aayegi baad mein
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-[#C9A14A]/30 bg-[#0A0A0A] p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/10">
          <Send className="h-7 w-7 text-[#C9A14A]" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-white">
          Message Sent!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-[#71717A]">
          Thank you for reaching out. Our team will get back to you within
          24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setSubmitted(false)}
          className="mt-8 h-11 rounded-xl border border-white/10 px-8 text-sm font-medium text-white transition-colors hover:border-[#C9A14A]"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm leading-7 text-[#71717A]">
        Fill out the form below and we'll get back to you shortly.
      </p>

      <div className="mt-8 space-y-5">

        {/* NAME + PHONE */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A] transition-colors"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A] transition-colors"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A] transition-colors"
          />
        </div>

        {/* PROPERTY TYPE + BUDGET */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none focus:border-[#C9A14A] transition-colors appearance-none"
            >
              <option value="" disabled>
                Select type...
              </option>
              {propertyTypes.map((t) => (
                <option key={t} value={t} className="bg-black">
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
              Budget (Optional)
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. ₹50 Lakh – ₹2 Cr"
              className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A] transition-colors"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows={5}
            className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A] transition-colors leading-7"
          />
        </div>

        {/* SUBMIT */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
          disabled={loading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57] disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </motion.button>

      </div>
    </motion.div>
  )
}