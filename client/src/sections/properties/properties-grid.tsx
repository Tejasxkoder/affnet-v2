import PropertyCard from "@/components/cards/property-cards"

const properties = [
  {
    id: "1",
    image: "/images/properties/property-1.jpg",
    title: "Premium Office Space",
    location: "Mumbai, BKC",
    description: "Grade A office building with premium connectivity.",
    area: "15,000 sq.ft",
    price: "₹12 Cr",
    tag: "For Lease",
  },
  {
    id: "2",
    image: "/images/properties/property-2.jpg",
    title: "Corporate Tech Park",
    location: "Bangalore, Whitefield",
    description: "State-of-the-art IT infrastructure and accessibility.",
    area: "25,000 sq.ft",
    price: "₹18 Cr",
    tag: "For Sale",
  },
  {
    id: "3",
    image: "/images/properties/property-3.jpg",
    title: "Retail Commercial Space",
    location: "Delhi, Connaught Place",
    description: "High-footfall retail property in prime district.",
    area: "8,000 sq.ft",
    price: "₹9 Cr",
    tag: "For Lease",
  },
  {
    id: "4",
    image: "/images/property-4.jpg",
    title: "IT Park Building",
    location: "Pune, Hinjewadi",
    description:
      "Modern IT infrastructure with scalable office layouts and premium business facilities.",
    area: "20,000 sq.ft",
    price: "₹15 Cr",
    tag: "For Sale",
  },
  {
    id: "5",
    image: "/images/property-5.jpg",
    title: "Industrial Warehouse",
    location: "Mumbai, Andheri",
    description:
      "Large-scale warehouse facility ideal for logistics, storage, and industrial operations.",
    area: "30,000 sq.ft",
    price: "₹10 Cr",
    tag: "For Lease",
  },
  {
    id: "6",
    image: "/images/property-6.jpg",
    title: "Commercial Complex",
    location: "Bangalore, Koramangala",
    description:
      "Premium mixed-use commercial property located in a high-growth business district.",
    area: "12,000 sq.ft",
    price: "₹14 Cr",
    tag: "For Sale",
  },
]

export default function PropertiesGrid() {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
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
    </div>
  )
}