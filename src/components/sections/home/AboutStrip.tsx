import { motion } from "motion/react"
import { fadeUp } from "@/src/lib/animations"

export default function AboutStrip() {
  return (
    <section className="bg-zinc-50 py-[clamp(80px,10vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left Column */}
        <div className="md:w-[30%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col"
          >
            <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-900 mb-4">
              — WHO WE ARE —
            </span>
            <div className="hidden md:block font-display text-[10rem] text-white/5 leading-none mt-4 select-none">
              20+
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:w-[70%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-8"
          >
            <h2 className="text-[clamp(2.5rem,5vw,5rem)]  leading-[1.05]">
              We bridge the gap between <span className="text-zinc-900">stardom</span> and <span className="text-zinc-900">strategy</span>.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              <p className="font-body font-light text-lg text-zinc-900/70 leading-relaxed">
                Go Fish Entertainment is a 360° entertainment powerhouse. For over two decades, we've been the silent force behind some of India's most iconic celebrity-led campaigns and brand stories.
              </p>
              <p className="font-body font-light text-lg text-zinc-900/70 leading-relaxed">
                From managing A-list talent to conceptualizing high-impact brand collaborations, our legacy is built on trust, cultural relevance, and an obsession with excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
