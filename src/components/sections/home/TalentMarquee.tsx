import { motion } from "motion/react"

const talents = [
  { name: "Salman Khan", role: "Actor", image: "https://picsum.photos/seed/salman/400/500" },
  { name: "Deepika Padukone", role: "Actor", image: "https://picsum.photos/seed/deepika/400/500" },
  { name: "Virat Kohli", role: "Athlete", image: "https://picsum.photos/seed/virat/400/500" },
  { name: "Ranveer Singh", role: "Actor", image: "https://picsum.photos/seed/ranveer/400/500" },
  { name: "Alia Bhatt", role: "Actor", image: "https://picsum.photos/seed/alia/400/500" },
  { name: "Hardik Pandya", role: "Athlete", image: "https://picsum.photos/seed/hardik/400/500" },
]

export default function TalentMarquee() {
  return (
    <section className="bg-white py-[clamp(80px,10vw,140px)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] mb-16">
        <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-900 mb-4 block">
          — OUR TALENT —
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,5rem)]  leading-[1.05]">
          The Faces of <span className="text-zinc-900">Influence</span>.
        </h2>
      </div>

      <div className="marquee-track relative flex whitespace-nowrap">
        <div className="marquee-right flex gap-6 items-center pr-6" style={{ "--duration": "40s" } as any}>
          {talents.concat(talents).map((talent, i) => (
            <div
              key={`${talent.name}-${i}`}
              className="relative w-[300px] aspect-[3/4] overflow-hidden group"
            >
              <img
                src={talent.image}
                alt={talent.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-2xl text-zinc-900">{talent.name}</p>
                <p className="font-body text-xs text-zinc-900 uppercase tracking-widest">{talent.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
