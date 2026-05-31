"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, AlertCircle, ShieldCheck } from "lucide-react"

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.email) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address"
  }

  if (!data.password) {
    errors.password = "Password is required"
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters"
  }

  return errors
}

export default function AdminLogin() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState("")
  const [attempts, setAttempts] = useState(0)
  const MAX_ATTEMPTS = 5

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

 const DUMMY_ADMIN = {
  email: "admin@affnetconsultants.com",
  password: "Admin@1234",
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setServerError("")

  if (attempts >= MAX_ATTEMPTS) {
    setServerError("Too many failed attempts. Please try again after some time.")
    return
  }

  const validationErrors = validate(formData)
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  setLoading(true)

  await new Promise((r) => setTimeout(r, 800))

  // DUMMY CHECK — backend aane par replace karna
  if (
    formData.email === DUMMY_ADMIN.email &&
    formData.password === DUMMY_ADMIN.password
  ) {
    // Success — dashboard pe redirect
    window.location.href = "/admin/dashboard"
  } else {
    setAttempts((prev) => prev + 1)
    const remaining = MAX_ATTEMPTS - attempts - 1
    setServerError(
      remaining > 0
        ? `Invalid credentials. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.`
        : "Too many failed attempts. Please try again later."
    )
  }

  setLoading(false)
}

  const isLocked = attempts >= MAX_ATTEMPTS

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >

      {/* LOGO + BADGE */}
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#C9A14A]" />
          <span className="text-xl font-bold text-white">
            AFFNET
            <span className="block text-xs font-normal tracking-widest text-[#71717A]">
              CONSULTANTS
            </span>
          </span>
        </Link>

        {/* ADMIN BADGE */}
        <div className="flex items-center gap-1.5 rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1">
          <ShieldCheck className="h-3.5 w-3.5 text-[#C9A14A]" />
          <span className="text-xs font-medium text-[#C9A14A]">
            Admin Access
          </span>
        </div>
      </div>

      {/* HEADING */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-[#71717A]">
          Restricted access - authorized personnel only
        </p>
      </div>

      {/* SECURITY NOTICE */}
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-white/5 bg-[#0A0A0A] p-4">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A14A]" />
        <p className="text-xs leading-6 text-[#71717A]">
          This is a secure admin area. All login attempts are logged and
          monitored. Unauthorized access is strictly prohibited.
        </p>
      </div>

      {/* SERVER ERROR */}
      {serverError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <p className="text-sm text-red-400">{serverError}</p>
        </motion.div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
            Admin Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@affnetconsultants.com"
              disabled={isLocked}
              className={`h-12 w-full rounded-xl border bg-black pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#71717A] transition-colors disabled:opacity-50 ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-[#C9A14A]"
              }`}
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-[#71717A]">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••••••"
              disabled={isLocked}
              className={`h-12 w-full rounded-xl border bg-black pl-11 pr-12 text-sm text-white outline-none placeholder:text-[#71717A] transition-colors disabled:opacity-50 ${
                errors.password
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-[#C9A14A]"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-white transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
            >
              <AlertCircle className="h-3 w-3" />
              {errors.password}
            </motion.p>
          )}
        </div>

        {/* ATTEMPTS INDICATOR */}
        {attempts > 0 && attempts < MAX_ATTEMPTS && (
          <div className="flex gap-1.5">
            {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i < attempts ? "bg-red-500" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        {/* SUBMIT */}
        <motion.button
          whileHover={!isLocked ? { scale: 1.01 } : {}}
          whileTap={!isLocked ? { scale: 0.97 } : {}}
          type="submit"
          disabled={loading || isLocked}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
              Verifying...
            </>
          ) : isLocked ? (
            "Account Temporarily Locked"
          ) : (
            <>
              <ShieldCheck className="h-4 w-4" />
              Login to Admin Panel
            </>
          )}
        </motion.button>

      </form>

      {/* BACK LINK */}
      <p className="mt-6 text-center text-sm text-[#71717A]">
        Not an admin?{" "}
        <Link href="/sign-in" className="text-[#C9A14A] hover:underline">
          Go to user login
        </Link>
      </p>

    </motion.div>
  )
}