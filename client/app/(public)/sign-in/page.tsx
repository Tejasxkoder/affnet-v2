import UserSignIn from "@/sections/auth/user-sign-in"

export default function SignInPage() {
  return (
    <main className="flex min-h-screen bg-black">

      {/* LEFT — FORM */}
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <UserSignIn />
      </div>

      {/* RIGHT — VISUAL (desktop only) */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center relative overflow-hidden bg-[#050505] border-l border-white/5">

        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-sm px-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A14A]/10 border border-[#C9A14A]/20">
            <div className="h-8 w-8 rounded-lg bg-[#C9A14A]" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            Premium Commercial Real Estate
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#71717A]">
            Access your dashboard to manage property inquiries, track
            listings, and stay updated on market opportunities.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "500+", label: "Properties" },
              { value: "98%", label: "Satisfaction" },
              { value: "15+ Yrs", label: "Experience" },
              { value: "₹5000 Cr+", label: "Value Managed" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-[#C9A14A]">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-[#71717A]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  )
}