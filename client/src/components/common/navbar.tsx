"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, ShieldCheck } from "lucide-react"
import { usePathname } from "next/navigation"

import Container from "@/components/common/container"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import PropertySearchModal from "@/components/common/property-search-modal"

const navLinks = [
  { name: "Properties", href: "/properties" },
  { name: "Insights", href: "/insights" },
  { name: "Advisory", href: "/advisory" },
  { name: "Investment", href: "/investment" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#262626] bg-[#0A0A0A]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-4 w-4 bg-[#C9A14A]" />
              <div className="flex flex-col">
                <span className="text-lg font-[700] tracking-wide text-[#C9A14A]">
                  AFFNET
                </span>
                <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] md:block">
                  Consultants
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) =>
                link.name === "Properties" ? (
                  <button
                    key={link.name}
                    onClick={() => setSearchModalOpen(true)}
                    className={`text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-[#C9A14A]"
                        : "text-[#E5E2E1] hover:text-[#C9A14A]"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-[#C9A14A]"
                        : "text-[#E5E2E1] hover:text-[#C9A14A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* DESKTOP RIGHT */}
            <div className="hidden items-center gap-4 lg:flex">

              <Link
                href="/admin/login"
                className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-[#71717A] transition-all hover:border-[#C9A14A]/30 hover:text-[#C9A14A]"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Admin
              </Link>

              <Link
                href="/sign-in"
                className="text-sm font-medium text-[#E5E2E1] transition-colors duration-300 hover:text-[#C9A14A]"
              >
                Sign In
              </Link>

              <Link href="/contact">
                <Button className="h-11 rounded-md bg-[#C9A14A] px-6 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d6ae57]">
                  Contact Us
                </Button>
              </Link>

            </div>

            {/* MOBILE MENU */}
            <div className="lg:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button className="flex items-center justify-center text-white">
                    <Menu size={28} />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="border-[#262626] bg-[#111111] text-white"
                >
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

                  <div className="mt-10 flex flex-col gap-8">

                    {/* MOBILE LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                      <div className="h-4 w-4 bg-[#C9A14A]" />
                      <span className="text-lg font-bold tracking-wide text-[#C9A14A]">
                        AFFNET
                      </span>
                    </Link>

                    {/* MOBILE LINKS */}
                    <div className="flex flex-col gap-6">
                      {navLinks.map((link) =>
                        link.name === "Properties" ? (
                          <button
                            key={link.name}
                            onClick={() => {
                              setMobileOpen(false)
                              setTimeout(() => setSearchModalOpen(true), 300)
                            }}
                            className={`border-b border-[#262626] pb-3 text-left text-sm uppercase tracking-[0.12em] transition-colors duration-300 ${
                              pathname === link.href
                                ? "text-[#C9A14A]"
                                : "text-[#E5E2E1] hover:text-[#C9A14A]"
                            }`}
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`border-b border-[#262626] pb-3 text-sm uppercase tracking-[0.12em] transition-colors duration-300 ${
                              pathname === link.href
                                ? "text-[#C9A14A]"
                                : "text-[#E5E2E1] hover:text-[#C9A14A]"
                            }`}
                          >
                            {link.name}
                          </Link>
                        )
                      )}
                    </div>

                    {/* MOBILE ACTIONS */}
                    <div className="flex flex-col gap-4 pt-4">

                      <Link
                        href="/sign-in"
                        className="text-sm font-medium text-[#E5E2E1] transition-colors hover:text-[#C9A14A]"
                      >
                        Sign In
                      </Link>

                      <Link href="/contact">
                        <Button className="h-11 w-full rounded-md bg-[#C9A14A] text-sm font-semibold text-black hover:bg-[#d6ae57]">
                          Contact Us
                        </Button>
                      </Link>

                      <Link
                        href="/admin/login"
                        className="flex items-center gap-1.5 text-xs text-[#71717A] transition-colors hover:text-[#C9A14A]"
                      >
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Admin Panel
                      </Link>

                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </Container>
      </header>

      {/* PROPERTY SEARCH MODAL */}
      <PropertySearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  )
}