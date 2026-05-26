"use client"

import Image from "next/image"
import Container from "@/components/common/container"
import { Star } from "lucide-react"

const testimonials = [
  {
    logo: "/images/brands/apollo-tyres-logo.png",
    company: "Apollo Tyres",
    review:
      "The Affnet team delivered exactly what we needed in our commercial space. Their attention to detail was exceptional.",
  },

  {
    logo: "/images/brands/travel-triangle-logo.png",
    company: "Travel Triangle",
    review:
      "Affnet Consultants provided us with investment opportunities that exceeded our expectations.",
  },

  {
    logo: "/images/brands/bharatpe-logo.png",
    company: "BharatPe",
    review:
      "Working with Affnet Consultants was a game-changer. Their expertise helped us optimize our operations.",
  },

  {
    logo: "/images/brands/motionworks-logo.jpg",
    company: "Motionwork Robotics",
    review:
      "Affnet's approach to finding us a specialized space was impressive. They understood our technical requirements.",
  },

  {
    logo: "/images/brands/onelogin-logo.png",
    company: "OneLogin",
    review:
      "With Affnet, we always knew where we stood. Their transparent approach made our office relocation seamless.",
  },

  {
    logo: "/images/brands/songdew-logo.png",
    company: "Songdew",
    review:
      "Affnet made us feel like their only client. They found us a perfect space that enhances our creative work.",
  },
]

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-[#080808] py-24">
      <Container>

        {/* TOP */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A14A]">
            Testimonials
          </p>

          <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#71717A]">
            Trusted by growing startups, enterprise brands,
            and leading commercial businesses across India.
          </p>

        </div>

      </Container>

      {/* MARQUEE */}
      <div className="group relative mt-16 flex overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-[#080808] to-transparent" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#080808] to-transparent" />

        {/* TRACK */}
        <div className="flex min-w-full shrink-0 animate-marquee gap-8 px-4">

          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[360px] shrink-0 rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/40"
            >

              {/* LOGO */}
              <div className="flex h-20 items-center justify-center">

                <Image
                  src={item.logo}
                  alt={item.company}
                  width={220}
                  height={80}
                  className="h-16 w-auto object-contain"
                />

              </div>

              {/* COMPANY */}
              <h3 className="mt-6 text-center text-2xl font-semibold text-white">
                {item.company}
              </h3>

              {/* STARS */}
              <div className="mt-4 flex items-center justify-center gap-1">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-[#C9A14A] text-[#C9A14A]"
                  />
                ))}

              </div>

              {/* REVIEW */}
              <p className="mt-6 text-center text-lg italic leading-8 text-[#A1A1AA]">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}