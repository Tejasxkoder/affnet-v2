import Container from "@/components/common/container"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-24">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        
        {/* IMAGE */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      <Container>
        <div className="max-w-6xl">

          {/* TOP LABEL */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#C9A14A]">
            Premium Commercial Real Estate
          </p>

          {/* HEADING */}
          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            Elevate Your{" "}
            <span className="text-[#C9A14A]">
              Commercial Property
            </span>{" "}
            Experience
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#A1A1AA]">
            Discover premium office spaces, retail properties,
            coworking solutions, and strategic real estate
            advisory services tailored for modern enterprises.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            <Button
              size="lg"
              className="h-12 rounded-lg bg-[#C9A14A] px-8 text-black hover:bg-[#d6ae57]"
            >
              Explore Properties
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-lg border-white/10 bg-black/40 px-8 text-white hover:bg-white/10"
            >
              Book Consultation
            </Button>
          </div>

          {/* SEARCH BAR */}
          <div className="mt-14 w-full rounded-2xl border border-white/10 bg-black/50 p-5 shadow-2xl backdrop-blur-xl">
            
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">

              {/* LOCATION */}
              <div className="flex flex-col">
                <label className="mb-2 text-xs font-medium uppercase tracking-wide text-[#A1A1AA]">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="City or Area"
                  className="h-14 rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none transition-all placeholder:text-[#71717A] focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20"
                />
              </div>

              {/* PROPERTY TYPE */}
              <div className="flex flex-col">
                <label className="mb-2 text-xs font-medium uppercase tracking-wide text-[#A1A1AA]">
                  Property Type
                </label>

                <select className="h-14 rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none transition-all focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20">
                  <option>Coworking</option>
                  <option>Office Space</option>
                  <option>Retail</option>
                  <option>Warehouse</option>
                </select>
              </div>

              {/* BUDGET */}
              <div className="flex flex-col">
                <label className="mb-2 text-xs font-medium uppercase tracking-wide text-[#A1A1AA]">
                  Budget Range
                </label>

                <input
                  type="text"
                  placeholder="Min - Max"
                  className="h-14 rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none transition-all placeholder:text-[#71717A] focus:border-[#C9A14A] focus:ring-2 focus:ring-[#C9A14A]/20"
                />
              </div>

              {/* SEARCH BUTTON */}
              <div className="flex items-end">
                <button className="h-14 w-full rounded-xl bg-[#C9A14A] font-semibold text-black transition-all hover:bg-[#d6ae57]">
                  Search
                </button>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}