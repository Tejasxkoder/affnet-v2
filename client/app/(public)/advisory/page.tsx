import AdvisoryHero from "@/sections/advisory/advisory-hero"
import AdvisoryServices from "@/sections/advisory/advisory-services"
import AdvisoryProcess from "@/sections/advisory/advisory-process"
import AdvisoryCta from "@/sections/advisory/advisory-cta"
import Navbar from "@/components/common/navbar"

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <Navbar/>
      <AdvisoryHero />
      <AdvisoryServices />
      <AdvisoryProcess />
      <AdvisoryCta />
    </main>
  )
}