import InsightsHero from "@/sections/insights/insights-hero"
import InsightsGrid from "@/sections/insights/insights-grid"
import Navbar from "@/components/common/navbar"

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <Navbar/>
      <InsightsHero />
      <InsightsGrid />
    </main>
  )
}