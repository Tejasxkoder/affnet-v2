import Link from "next/link"
import Image from "next/image"
import Container from "@/components/common/container"

const services = [
  "Leasing Advisory",
  "Investment Advisory",
  "Property Management",
  "Transaction Services",
]

const companyLinks = [
  "About Us",
  "Our Team",
  "Careers",
  "Contact",
]

const socials = [
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Twitter",
    icon: "/icons/twitter.svg",
  },
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">

      <Container>

        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="h-5 w-5 bg-[#C9A14A]" />

              <div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  Affnet Consultants
                </h3>
              </div>

            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#A1A1AA]">
              Premium commercial real estate solutions
              for modern enterprises, startups, and
              growing businesses across India.
            </p>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Services
            </h3>

            <div className="flex flex-col gap-4">

              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-[#A1A1AA] transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {service}
                </Link>
              ))}

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Company
            </h3>

            <div className="flex flex-col gap-4">

              {companyLinks.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-sm text-[#A1A1AA] transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item}
                </Link>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Connect
            </h3>

            {/* SOCIALS */}
            <div className="mb-8 flex items-center gap-4">

              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/10"
                >

                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="object-contain brightness-0 invert opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />

                </a>
              ))}

            </div>

            {/* DETAILS */}
            <div className="space-y-4">

              <p className="text-sm text-[#A1A1AA]">
                Email:{" "}
                <span className="font-medium text-white">
                  info@affnet.com
                </span>
              </p>

              <p className="text-sm text-[#A1A1AA]">
                Phone:{" "}
                <span className="font-medium text-white">
                  +91 22 1234 5678
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 py-6">

          <p className="text-center text-sm text-[#71717A]">
            © 2026 Affnet Consultants. All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  )
}