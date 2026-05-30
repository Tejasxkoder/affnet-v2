"use client"

import { motion } from "framer-motion"

import PropertyCard from "@/components/cards/property-cards"
import { properties } from "@/lib/properties-data"

interface SimilarPropertiesProps {
  currentId: string
}

export default function SimilarProperties({
  currentId,
}: SimilarPropertiesProps) {

  const similarProperties = properties
    .filter(
      (property) => property.id !== currentId
    )
    .slice(0, 3)

  return (
    <section>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.5,
        }}
      >

        <h2 className="text-3xl font-bold text-white">
          Similar Properties
        </h2>

        <p className="mt-2 text-[#71717A]">
          Explore more premium commercial properties.
        </p>

      </motion.div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {similarProperties.map(
          (property, index) => (
            <motion.div
              key={property.id}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <PropertyCard
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                description={
                  property.description
                }
                area={property.area}
                price={property.price}
                tag={property.tag}
              />

            </motion.div>
          )
        )}

      </div>

    </section>
  )
}