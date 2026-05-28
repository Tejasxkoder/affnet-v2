import Container from "@/components/common/container"
import {
  BadgeCheck,
  BriefcaseBusiness,
  ShieldCheck,
  Check,
} from "lucide-react"

const features = [
  {
    icon: BriefcaseBusiness,

    title: "Expert Consultation",

    description:
      "Personalized advice tailored to your unique business requirements and growth objectives.",

    points: [
      "Comprehensive market analysis",
      "Custom property recommendations",
      "Strategic location planning",
    ],
  },

  {
    icon: BadgeCheck,

    title: "End-to-End Management",

    description:
      "From property selection to final handover - a seamless experience with optimal results.",

    points: [
      "Simplified documentation",
      "Transparent pricing",
      "Dedicated relationship manager",
    ],
  },

  {
    icon: ShieldCheck,

    title: "Long-Term Support",

    description:
      "Ongoing support and maintenance to ensure your property continues to perform optimally.",

    points: [
      "Regular property assessments",
      "Value enhancement strategies",
      "Expansion and scaling advice",
    ],
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24">
      <Container>

        {/* TOP */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A14A]">
            Why Choose Us
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Trusted Commercial Real Estate Expertise
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#71717A]">
            Strategic advisory, seamless execution, and long-term
            support designed to help your business grow with confidence.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-[#080808] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/40"
              >

                {/* ICON */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A14A]/10 text-[#C9A14A] transition-all duration-500 group-hover:bg-[#C9A14A] group-hover:text-black">

                  <Icon className="h-8 w-8" />

                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 leading-8 text-[#71717A]">
                  {feature.description}
                </p>

                {/* POINTS */}
                <div className="mt-8 space-y-4">

                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A14A]/10 text-[#C9A14A]">

                        <Check className="h-3 w-3" />

                      </div>

                      <p className="text-[#D4D4D8]">
                        {point}
                      </p>

                    </div>
                  ))}

                </div>

              </div>
            )
          })}

        </div>

      </Container>
    </section>
  )
}