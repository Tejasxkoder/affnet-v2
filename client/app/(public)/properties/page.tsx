import PropertiesFilters from "@/sections/properties/property-filters"
import PropertiesGrid from "@/sections/properties/properties-grid"
import PropertiesHeader from "@/sections/properties/properties-header"
import Navbar from "@/components/common/navbar"

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar/>

      <PropertiesHeader />

      <section className="px-4 py-8">
        <div className="mx-auto flex max-w-[1700px] items-start gap-6">

          {/* SIDEBAR */}
          <div className="w-[280px] shrink-0 self-start sticky top-32 hidden lg:block">
            <PropertiesFilters />
          </div>

          {/* GRID */}
          <div className="flex-1">
            <PropertiesGrid />
          </div>

        </div>
      </section>

    </main>
  )
}