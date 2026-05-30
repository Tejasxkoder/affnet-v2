import InsightsHero from "@/sections/insights/insights-hero"
import InsightsGrid from "@/sections/insights/insights-grid"

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <InsightsHero />
      <InsightsGrid />
    </main>
  )
}