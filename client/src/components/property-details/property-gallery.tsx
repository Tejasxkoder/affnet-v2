"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PropertyGalleryProps {
  image: string
}

export default function PropertyGallery({
  image,
}: PropertyGalleryProps) {
  const images = [
    image,
    image,
    image,
    image,
  ]

  const [selectedImage, setSelectedImage] =
    useState(image)

  return (
    <div className="space-y-5">

      {/* MAIN IMAGE */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">

        <AnimatePresence mode="wait">

          <motion.img
            key={selectedImage}
            src={selectedImage}
            alt="Property"

            initial={{
              opacity: 0,
              scale: 1.05,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.4,
            }}

            className="h-[600px] w-full object-cover"
          />

        </AnimatePresence>

      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-4 gap-4">

        {images.map((img, index) => (
          <motion.button
            key={index}

            whileHover={{
              y: -4,
            }}

            whileTap={{
              scale: 0.98,
            }}

            onClick={() =>
              setSelectedImage(img)
            }

            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              selectedImage === img
                ? "border-[#C9A14A]"
                : "border-white/10"
            }`}
          >

            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="h-28 w-full object-cover transition-transform duration-500 hover:scale-105"
            />

          </motion.button>
        ))}

      </div>

    </div>
  )
}