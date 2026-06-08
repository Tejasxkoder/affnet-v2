import InvestmentHero from "@/sections/investment/investment-hero"
import InvestmentTypes from "@/sections/investment/investment-types"
import InvestmentWhy from "@/sections/investment/investment-why"
import InvestmentProcess from "@/sections/investment/investment-process"
import InvestmentCta from "@/sections/investment/investment-cta"
import Navbar from "@/components/common/navbar"

export default function InvestmentPage() {
  return (
    <main className="min-h-screen bg-black pb-24">
      <Navbar/>
      <InvestmentHero />
      <InvestmentTypes />
      <InvestmentWhy />
      <InvestmentProcess />
      <InvestmentCta />
    </main>
  )
}