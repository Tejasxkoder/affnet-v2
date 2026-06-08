/**
 * @file sign-in/page.tsx
 * @description User authentication page with premium design
 * @tags page, auth, authentication
 */

import { COLORS } from "@/constants/colors"
import UserSignIn from "@/sections/auth/user-sign-in"

// @tag: Page Component
export default function SignInPage() {
  return (
    <main className={`flex min-h-screen ${COLORS.bg.primary}`}>
      {/* @tag: Form Section - Left Column */}
      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <UserSignIn />
      </div>

      {/* @tag: Visual Section - Right Column (Desktop Only) */}
      <div className={`hidden lg:flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center relative overflow-hidden ${COLORS.bg.secondary} ${COLORS.border.secondary}`}>

        {/* @tag: Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

        {/* @tag: Content Container */}
        <div className="relative z-10 max-w-sm px-8 text-center">
          
          {/* @tag: Accent Logo Badge */}
          <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${COLORS.accentBg.light} border ${COLORS.border.accentLight}`}>
            <div style={{ backgroundColor: COLORS.accent.primary }} className="h-8 w-8 rounded-lg" />
          </div>

          {/* @tag: Heading */}
          <h2 className={`text-3xl font-bold ${COLORS.text.primary}`}>
            Premium Commercial Real Estate
          </h2>

          {/* @tag: Description */}
          <p className={`mt-4 text-sm leading-7 ${COLORS.text.tertiary}`}>
            Access your dashboard to manage property inquiries, track
            listings, and stay updated on market opportunities.
          </p>

          {/* @tag: Statistics Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "500+", label: "Properties" },
              { value: "98%", label: "Satisfaction" },
              { value: "15+ Yrs", label: "Experience" },
              { value: "₹5000 Cr+", label: "Value Managed" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl ${COLORS.border.primary} ${COLORS.backdrop.dark} p-4 backdrop-blur-sm`}
              >
                <p className="text-lg font-bold" style={{ color: COLORS.accent.primary }}>
                  {stat.value}
                </p>
                <p className={`mt-0.5 text-xs ${COLORS.text.tertiary}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </main>
  )
}