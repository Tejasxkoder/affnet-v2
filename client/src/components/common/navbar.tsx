"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  {
    name: "Properties",
    href: "/properties",
  },
  {
    name: "Insights",
    href: "/insights",
  },
  {
    name: "Advisory",
    href: "/advisory",
  },
  {
    name: "Investment",
    href: "/investment",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-[#262626] bg-[#0A0A0A]/90 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="h-4 w-4 bg-[#C9A14A]" />

            <div className="flex flex-col">
              <span className="font-[700] tracking-wide text-[#C9A14A] text-lg">
                AFFNET
              </span>

              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] md:block">
                Consultants
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#E5E2E1]
                  transition-colors
                  duration-300
                  hover:text-[#C9A14A]
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/login"
              className="
                text-sm
                font-medium
                text-[#E5E2E1]
                transition-colors
                duration-300
                hover:text-[#C9A14A]
              "
            >
              Sign In
            </Link>

            <Button
              className="
                h-11
                rounded-md
                bg-[#C9A14A]
                px-6
                text-sm
                font-semibold
                text-blackblur
                transition-all
                duration-300
                hover:bg-[#d6ae57]
              "
            >
              Contact Us
            </Button>
          </div>

          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Menu size={28} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
                  border-5
                  border-[#262626]
                  bg-[#111111]
                  text-white
                "
              ><SheetTitle className="sr-only">
                  Mobile Navigation
                </SheetTitle>
                <div className="mt-10 flex flex-col gap-8">

                  {/* MOBILE LOGO */}
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                  >
                    <div className="h-4 w-4 bg-[#C9A14A]" />

                    <span className="text-lg font-bold tracking-wide text-[#C9A14A]">
                      AFFNET
                    </span>
                  </Link>

                  {/* MOBILE LINKS */}
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="
                          border-b
                          border-[#262626]
                          pb-3
                          text-sm
                          uppercase
                          tracking-[0.12em]
                          text-[#E5E2E1]
                          transition-colors
                          duration-300
                          hover:text-[#C9A14A]
                        "
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* MOBILE ACTIONS */}
                  <div className="flex flex-col gap-4 pt-4">
                    <Link
                      href="/login"
                      className="
                        text-sm
                        font-medium
                        text-[#E5E2E1]
                        hover:text-[#C9A14A]
                      "
                    >
                      Sign In
                    </Link>

                    <Button
                      className="
                        h-11
                        rounded-md
                        bg-[#C9A14A]
                        text-sm
                        font-semibold
                        text-black
                        hover:bg-[#d6ae57]
                      "
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}