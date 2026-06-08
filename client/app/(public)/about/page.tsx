import AboutHero from "@/sections/about/about-hero"
import AboutMission from "@/sections/about/about-mission"
import AboutValues from "@/sections/about/about-values"
import AboutCta from "@/sections/about/about-cta"
import Navbar from "@/components/common/navbar"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <Navbar/>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutCta />
    </main>
  )
}