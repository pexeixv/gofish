import { motion } from "motion/react"
import { fadeUp, staggerMed } from "@/src/lib/animations"

const STATS = [
  { value: "20+", label: "Years Legacy" },
  { value: "100+", label: "Talents Managed" },
  { value: "500+", label: "Campaigns Executed" },
  { value: "250+", label: "Brand Partners" },
]

export default function StatsSection() {
  return (
    <section className="bg-[#E8293B] text-white py-24 px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/20"
        >
          {STATS.map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center px-4">
              <span className="font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-none tracking-tight mb-4">
                {stat.value}
              </span>
              <span className="font-body text-sm md:text-base font-bold uppercase tracking-widest text-white/90">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
