import Container from "@/components/common/container"
import PropertyCard from "@/components/cards/property-cards"

const properties = [
  {
    image: "/images/properties/property-1.jpg",
    title: "Premium Office Space",
    location: "Mumbai, BKC",
    description:
      "Grade A commercial building with modern amenities and premium connectivity.",
    area: "15,000 sq.ft",
    price: "₹12 Cr",
    tag: "For Lease",
  },

  {
    image: "/images/properties/property-2.jpg",
    title: "Corporate Tech Park",
    location: "Bangalore, Whitefield",
    description:
      "State-of-the-art IT park with excellent infrastructure and accessibility.",
    area: "25,000 sq.ft",
    price: "₹18 Cr",
    tag: "For Sale",
  },

  {
    image: "/images/properties/property-3.jpg",
    title: "Retail Commercial Space",
    location: "Delhi, Connaught Place",
    description:
      "High-footfall retail property located in a premium commercial district.",
    area: "8,000 sq.ft",
    price: "₹9 Cr",
    tag: "For Lease",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="bg-black py-24">
      <Container>

        {/* TOP */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A14A]">
              Featured Properties
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Explore Premium Commercial Spaces
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#71717A]">
              Discover carefully curated office spaces, retail hubs,
              and investment-grade commercial properties across prime locations.
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#C9A14A] transition-all hover:gap-4">
            View All →
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {properties.map((property) => (
            <PropertyCard
              key={property.title}
              image={property.image}
              title={property.title}
              location={property.location}
              description={property.description}
              area={property.area}
              price={property.price}
              tag={property.tag}
            />
          ))}

        </div>

      </Container>
    </section>
  )
}