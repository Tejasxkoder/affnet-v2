"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const info = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99990 09316",
    href: "tel:+919999009316",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@affnetconsultants.com",
    href: "mailto:contact@affnetconsultants.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Beyond Just Work, Udyog Vihar Phase 4, Gurugram",
    href: "https://maps.google.com/?q=Udyog+Vihar+Phase+4+Gurugram",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 10:00 AM – 7:00 PM",
    href: null,
  },
]

function InfoCard({
  item,
  index,
}: {
  item: (typeof info)[0]
  index: number
}) {
  const Icon = item.icon

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 transition-colors duration-300 hover:border-[#C9A14A]/30"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10">
        <Icon className="h-5 w-5 text-[#C9A14A]" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-[#71717A]">
          {item.label}
        </p>
        <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#C9A14A]">
          {item.value}
        </p>
      </div>
    </motion.div>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="block"
      >
        {card}
      </a>
    )
  }

  return <div>{card}</div>
}

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >

      {/* HEADING */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Contact Information
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#71717A]">
          Our team is available Monday to Saturday. Reach out via any of
          the channels below.
        </p>
      </div>

      {/* INFO CARDS */}
      {info.map((item, i) => (
        <InfoCard key={item.label} item={item} index={i} />
      ))}

      {/* MAP EMBED */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 overflow-hidden rounded-2xl border border-white/10"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.0617!3d28.4866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzExLjkiTiA3N8KwMDMnNDIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="220"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Affnet Consultants Location"
        />
      </motion.div>

    </motion.div>
  )
}