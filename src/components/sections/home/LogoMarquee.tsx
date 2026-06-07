import { cn } from "@/src/lib/utils"

const brands = [
  "Myntra", "Pepsi", "Amazon", "Titan", "Samsung", "HDFC", "Tata", "Reliance", "Vivo", "Boat", "Swiggy", "BookMyShow"
]

export default function LogoMarquee() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] mb-6">
        <p className="font-body  text-[#666260] text-sm">
          When brands let us work
        </p>
      </div>

      <div className="marquee-track relative flex whitespace-nowrap">
        <div className="marquee-left flex gap-12 sm:gap-24 items-center pr-12 sm:pr-24" style={{ "--duration": "30s" } as any}>
          {/* First set */}
          {brands.map((brand) => (
            <div
              key={brand}
              className="font-display text-3xl sm:text-5xl text-zinc-900/55 hover:text-zinc-900 transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0"
            >
              {brand}
            </div>
          ))}
          {/* Second set for seamless loop */}
          {brands.map((brand) => (
            <div
              key={`${brand}-loop`}
              className="font-display text-3xl sm:text-5xl text-zinc-900/55 hover:text-zinc-900 transition-all duration-300 cursor-default select-none grayscale hover:grayscale-0"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
