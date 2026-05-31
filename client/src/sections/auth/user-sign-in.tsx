"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react"
import GoogleButton from "@/components/common/google-button"

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
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }

  return errors
}

export default function UserSignIn() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on type
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError("")

    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      // API call yahan aayegi
      await new Promise((r) => setTimeout(r, 1200))
      // router.push("/dashboard") — baad mein
    } catch {
      setServerError("Invalid email or password. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Google OAuth yahan implement hoga
    console.log("Google login")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >

      {/* LOGO */}
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-[#C9A14A]" />
        <span className="text-xl font-bold text-white">
          AFFNET
          <span className="block text-xs font-normal tracking-widest text-[#71717A]">
            CONSULTANTS
          </span>
        </span>
      </Link>

      {/* HEADING */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Welcome back</h1>
        <p className="mt-2 text-sm text-[#71717A]">
          Sign in to your account to continue
        </p>
      </div>

      {/* GOOGLE BUTTON */}
      <GoogleButton onClick={handleGoogleLogin} />

      {/* DIVIDER */}
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-[#71717A]">or continue with email</span>
        <div className="h-px flex-1 bg-white/10" />
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
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={`h-12 w-full rounded-xl border bg-black pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#71717A] transition-colors ${
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
          <div className="mb-2 flex items-center justify-between">
            <label className="text-xs uppercase tracking-widest text-[#71717A]">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-[#C9A14A] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#71717A]" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`h-12 w-full rounded-xl border bg-black pl-11 pr-12 text-sm text-white outline-none placeholder:text-[#71717A] transition-colors ${
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

        {/* SUBMIT */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-colors hover:bg-[#d6ae57] disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </motion.button>

      </form>

      {/* REGISTER LINK */}
      <p className="mt-6 text-center text-sm text-[#71717A]">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-[#C9A14A] hover:underline"
        >
          Create one
        </Link>
      </p>

    </motion.div>
  )
}