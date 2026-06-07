import { motion } from "motion/react"
import { fadeUp } from "@/src/lib/animations"

const stats = [
  { value: "20+", label: "Years of Legacy" },
  { value: "500+", label: "Successful Campaigns" },
  { value: "100+", label: "Celebrity Partners" },
  { value: "50+", label: "Global Brands" },
]

export default function StatsBar() {
  return (
    <section className="bg-[#E8293B] py-16 px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-[#0A0A0A] text-center lg:text-left"
            >
              <div className="font-display text-7xl sm:text-8xl leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
