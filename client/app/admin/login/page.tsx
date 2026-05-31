import AdminLogin from "@/sections/auth/admin-login"

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-16">

      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A14A 1px, transparent 1px), linear-gradient(90deg, #C9A14A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A14A]/5 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <AdminLogin />
      </div>

    </main>
  )
}