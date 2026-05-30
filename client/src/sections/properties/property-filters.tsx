export default function PropertiesFilters() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-4">

      {/* TITLE */}
      <h2 className="text-xl font-bold text-white">
        Filters
      </h2>

      {/* SEARCH */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="h-10 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A]"
        />
      </div>

      {/* PROPERTY TYPE */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
          Property Type
        </h3>
        <div className="mt-3 space-y-2">
          {["Office", "Retail", "Warehouse", "Coworking"].map((item) => (
            <label key={item} className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
              <input type="checkbox" className="h-3.5 w-3.5 accent-[#C9A14A]" />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
          Budget
        </h3>
        <div className="mt-3 space-y-2">
          <input
            type="text"
            placeholder="Min Price"
            className="h-9 w-full rounded-lg border border-white/10 bg-black px-3 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A]"
          />
          <input
            type="text"
            placeholder="Max Price"
            className="h-9 w-full rounded-lg border border-white/10 bg-black px-3 text-sm text-white outline-none placeholder:text-[#71717A] focus:border-[#C9A14A]"
          />
        </div>
      </div>

      {/* CITY */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
          City
        </h3>
        <div className="mt-3 space-y-2">
          {["Mumbai", "Delhi", "Bangalore", "Pune", "Moradabad"].map((city) => (
            <label key={city} className="flex items-center gap-2.5 text-sm text-[#A1A1AA]">
              <input type="checkbox" className="h-3.5 w-3.5 accent-[#C9A14A]" />
              {city}
            </label>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button className="mt-5 h-10 w-full rounded-xl bg-[#C9A14A] text-sm font-semibold text-black transition-all hover:bg-[#d6ae57]">
        Apply
      </button>

    </div>
  )
}