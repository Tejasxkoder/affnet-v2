"use client"

import { motion } from "framer-motion"
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
    description: "Modern IT infrastructure with scalable office layouts and premium business facilities.",
    area: "20,000 sq.ft",
    price: "₹15 Cr",
    tag: "For Sale",
  },
  {
    id: "5",
    image: "/images/property-5.jpg",
    title: "Industrial Warehouse",
    location: "Mumbai, Andheri",
    description: "Large-scale warehouse facility ideal for logistics, storage, and industrial operations.",
    area: "30,000 sq.ft",
    price: "₹10 Cr",
    tag: "For Lease",
  },
  {
    id: "6",
    image: "/images/property-6.jpg",
    title: "Commercial Complex",
    location: "Bangalore, Koramangala",
    description: "Premium mixed-use commercial property located in a high-growth business district.",
    area: "12,000 sq.ft",
    price: "₹14 Cr",
    tag: "For Sale",
  },
]

export default function PropertiesGrid() {
  return (
    <div>

      {/* RESULTS COUNT */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex items-center justify-between"
      >
        <p className="text-sm text-[#71717A]">
          Showing{" "}
          <span className="text-white font-medium">{properties.length}</span>{" "}
          properties
        </p>

        {/* SORT */}
        <select className="h-9 rounded-xl border border-white/10 bg-[#0A0A0A] px-3 text-xs text-[#A1A1AA] outline-none focus:border-[#C9A14A] transition-colors">
          <option className="bg-black">Latest</option>
          <option className="bg-black">Price: Low to High</option>
          <option className="bg-black">Price: High to Low</option>
          <option className="bg-black">Area: Large First</option>
        </select>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {properties.map((property, i) => (
          <PropertyCard
            key={property.id}
            index={i}
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

      {/* PAGINATION */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {["←", "1", "2", "3", "→"].map((item, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
              item === "1"
                ? "bg-[#C9A14A] text-black"
                : "border border-white/10 bg-[#111111] text-[#A1A1AA] hover:border-[#C9A14A] hover:text-white"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

    </div>
  )
}