import Container from "@/components/common/container"

const stats = [
  {
    number: "500+",
    label: "Properties Managed",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "15+ Yrs",
    label: "Industry Experience",
  },
  {
    number: "₹5000+ Cr",
    label: "Value Managed",
  },
]

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-[#080808] py-12">
      <Container>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                relative flex flex-col items-center text-center
                ${index !== stats.length - 1 ? "md:border-r md:border-white/5" : ""}
              `}
            >

              {/* GOLD TOP LINE */}
              <div className="absolute top-[-18px] h-[2px] w-10 bg-[#C9A14A]" />

              {/* NUMBER */}
              <h3 className="text-4xl font-bold leading-none tracking-tight text-[#C9A14A] sm:text-5xl">
                {stat.number}
              </h3>

              {/* LABEL */}
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#71717A] sm:text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  )
}