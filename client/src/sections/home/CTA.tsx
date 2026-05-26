import Container from "@/components/common/container"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-[#080808] py-24">
      <Container>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111111] via-black to-[#0a0a0a] px-6 py-16 text-center shadow-[0_0_80px_rgba(201,161,74,0.08)] md:px-12">

          {/* TOP LABEL */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A14A]">
            Let’s Work Together
          </p>

          {/* HEADING */}
          <h2 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Ready to Find Your Ideal{" "}
            <span className="text-[#C9A14A]">
              Commercial Space?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#A1A1AA]">
            Connect with our expert consultants today and
            discover premium commercial and industrial
            opportunities tailored to your business goals.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="h-12 rounded-xl bg-[#C9A14A] px-8 text-black hover:bg-[#d6ae57]"
            >
              Schedule Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
            >
              Browse Properties
            </Button>

          </div>

        </div>

      </Container>
    </section>
  )
}