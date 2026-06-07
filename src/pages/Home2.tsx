import { motion } from "motion/react"
import { pageTransition } from "@/src/lib/animations"
import TextHero from "@/src/components/sections/home2/TextHero"
import Carousel from "@/src/components/sections/home2/Carousel"
import Recognition from "@/src/components/sections/home2/Recognition"
import StatsSection from "@/src/components/sections/StatsSection"

export default function Home2() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-zinc-50 text-zinc-900"
    >
      <TextHero />
      <Carousel />
      <Recognition />
      <StatsSection />
    </motion.main>
  )
}
