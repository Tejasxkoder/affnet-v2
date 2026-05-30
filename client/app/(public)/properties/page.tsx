import PropertiesFilters from "@/sections/properties/property-filters"
import PropertiesGrid from "@/sections/properties/properties-grid"



export default function PropertiesPage() {
  return (
    <section className="bg-black px-4 py-8">
      <div className="mx-auto flex max-w-[1700px] items-start gap-6">

        {/* SIDEBAR */}

        <div className="w-[320px] shrink-0 self-start sticky top-32">
          <PropertiesFilters />
        </div>

        {/* GRID */}
        <div className="flex-1">
          <PropertiesGrid />
        </div>

      </div>
    </section>
  )
}