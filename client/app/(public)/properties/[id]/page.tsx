import { notFound } from "next/navigation"

import { properties } from "@/lib/properties-data"

import PropertyGallery from "@/components/property-details/property-gallery"
import PropertyOverview from "@/components/property-details/property-overview"
import PropertyInfo from "@/components/property-details/property-info"
import PropertyHighlights from "@/components/property-details/property-highlights"
import PropertyAmenitiesGrid from "@/components/property-details/property-amenities-grid"
import PropertyLocation from "@/components/property-details/property-location"
import PropertyDocuments from "@/components/property-details/property-documents"
import PropertyInvestmentStats from "@/components/property-details/property-investment-stats"
import PropertyContact from "@/components/property-details/property-contact"
import PropertyCtaBanner from "@/components/property-details/property-cta-banner"
import SimilarProperties from "@/components/property-details/similar-properties"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PropertyDetailsPage({
  params,
}: PageProps) {
  const { id } = await params

  const property = properties.find(
    (item) => item.id === id
  )

  if (!property) {
    notFound()
  }

  return (
    <section className="min-h-screen bg-black px-4 py-10">

      <div className="mx-auto max-w-[1600px]">

        {/* MAIN SECTION */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* LEFT CONTENT */}
          <div className="space-y-8 min-w-0">

            <PropertyGallery
              image={property.image}
            />

            <PropertyOverview
              property={property}
            />

            <PropertyInfo
              property={property}
            />

            <PropertyHighlights />

            <PropertyAmenitiesGrid />

            <PropertyLocation />

            <PropertyDocuments />

            <PropertyInvestmentStats />

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="relative hidden lg:block">

            <div className="sticky top-24">

              <PropertyContact />

            </div>

          </aside>

        </div>

        {/* MOBILE CONTACT */}
        <div className="mt-8 lg:hidden">

          <PropertyContact />

        </div>

        {/* CTA BANNER */}
        <div className="mt-20">

          <PropertyCtaBanner />

        </div>

        {/* SIMILAR PROPERTIES */}
        <div className="mt-24">

          <SimilarProperties
            currentId={property.id}
          />

        </div>

      </div>

    </section>
  )
}