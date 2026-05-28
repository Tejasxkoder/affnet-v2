import Container from "@/components/common/container"
import {
  Building2,
  BriefcaseBusiness,
  Warehouse,
  LineChart,
  Sofa,
  Store,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Commercial Spaces",
    description:
      "Strategically located office and retail spaces designed for visibility, accessibility, and long-term business growth.",
  },

  {
    icon: Warehouse,
    title: "Industrial Spaces",
    description:
      "Modern industrial facilities optimized for logistics, warehousing, manufacturing, and operational efficiency.",
  },

  {
    icon: LineChart,
    title: "Investment Opportunities",
    description:
      "Carefully selected commercial and industrial properties with strong growth potential and stable returns.",
  },

  {
    icon: Sofa,
    title: "Interior Services",
    description:
      "Premium interior solutions for offices, retail spaces, and residential environments tailored to your vision.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Managed Offices",
    description:
      "Fully serviced workspaces with modern infrastructure, professional support, and flexible business solutions.",
  },

  {
    icon: Store,
    title: "Retail & SCO",
    description:
      "High-visibility retail and SCO developments in premium commercial districts for maximum customer engagement.",
  },
]

export default function Services() {
  return (
    <section className="bg-[#080808] py-24">
      <Container>

        {/* TOP */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A14A]">
            Our Services
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Comprehensive Real Estate Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#71717A]">
            Top-tier commercial and industrial real estate services
            tailored to modern business requirements.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-black/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/40 hover:bg-black/60"
              >

                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A14A]/10 text-[#C9A14A] transition-all duration-500 group-hover:bg-[#C9A14A] group-hover:text-black">
                  <Icon className="h-7 w-7" />
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 leading-8 text-[#71717A]">
                  {service.description}
                </p>

                {/* LINE */}
                <div className="mt-8 h-[1px] w-full bg-white/5" />

                {/* LINK */}
                <button className="mt-6 text-sm font-medium uppercase tracking-wide text-[#C9A14A] transition-all hover:tracking-[0.2em]">
                  Explore Service →
                </button>

              </div>
            )
          })}

        </div>

      </Container>
    </section>
  )
}