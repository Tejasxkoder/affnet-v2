import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PropertyCardProps {
  id: string
  image: string
  title: string
  location: string
  description: string
  area: string
  price: string
  tag: string
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  description,
  area,
  price,
  tag,
}: PropertyCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A14A]/30">

      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden rounded-t-2xl bg-black">
        <img
          src={image}
          alt={title}
          draggable={false}
          className="block h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* TAG */}
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur-md">
          {tag}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6">

        {/* LOCATION */}
        <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
          <MapPin className="h-4 w-4 text-[#C9A14A]" />
          <span>{location}</span>
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm leading-7 text-[#71717A]">
          {description}
        </p>

        {/* STATS */}
        <div className="mt-6 border-t border-white/5 pt-5">
          <div className="flex items-center justify-between">

            {/* AREA */}
            <div>
              <p className="text-xs uppercase tracking-wide text-[#71717A]">Area</p>
              <h4 className="mt-1 text-lg font-semibold text-white">{area}</h4>
            </div>

            {/* PRICE */}
            <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-[#71717A]">Price</p>
              <h4 className="mt-1 text-lg font-semibold text-[#C9A14A]">{price}</h4>
            </div>

          </div>

          {/* BUTTON */}
          <Link href={`/properties/${id}`}>
            <Button className="mt-6 h-12 w-full rounded-xl bg-[#C9A14A] text-base font-medium text-black transition-all duration-300 hover:bg-[#d6ae57]">
              View Details
            </Button>
          </Link>
        </div>

      </div>

    </div>
  )
}