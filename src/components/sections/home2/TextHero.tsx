import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { fadeUp, staggerMed } from "@/src/lib/animations"

export default function TextHero() {
  return (
    <section className="relative w-full bg-white text-zinc-900 pt-28 pb-8 flex flex-col justify-center border-b border-black/5">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)]">
        <motion.div variants={staggerMed} initial="hidden" animate="visible" className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-3xl text-left">
            <motion.h1 variants={fadeUp} className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] tracking-tight uppercase mb-6 text-zinc-900">
              Building <span className="text-[#E8293B]">Icons.</span> <br />
              Driving Impact.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed">
              Go Fish group is an integrated entertainment and brand solutions company with <strong className="font-bold text-[#E8293B]">over 20 years</strong> of experience in the business.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <Link 
              to="/contact"
              className="bg-[#E8293B] hover:bg-zinc-900 text-white px-8 py-4 font-body text-sm font-bold uppercase tracking-widest transition-colors inline-block"
            >
              Start The Conversation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
