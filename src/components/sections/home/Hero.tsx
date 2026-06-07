import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/src/components/ui/button"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 1.1])
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0])

  return (
    <section ref={containerRef} className="relative w-full h-svh overflow-hidden bg-white">
      {/* Background Video */}
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/I8zxNbUDGCA?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=I8zxNbUDGCA&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
          title="Background Video"
          allow="autoplay; encrypted-media"
        ></iframe>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.2)] via-[rgba(10,10,10,0.5)] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,rgba(255,92,0,0.08)_0%,transparent_70%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] flex items-center">
        <div className="max-w-4xl">
          {/* Label Row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-5 h-px bg-[#E8293B]" />
            <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-900">
              India's Premier Entertainment Company
            </span>
          </motion.div>

          {/* H1 Heading */}
          <h1 className="flex flex-col gap-2 mb-8">
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              className="font-display text-[clamp(3rem,5vw,6rem)] leading-[0.92] text-zinc-900"
            >
              20+ YEARS OF
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.62 }}
              className="font-display text-[clamp(3rem,5vw,6rem)] leading-[0.92] text-zinc-900"
            >
              ENTERTAINMENT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.74 }}
              className="font-display text-[clamp(3rem,5vw,6rem)] leading-[0.92] text-zinc-900"
            >
              EXCELLENCE
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body font-light text-lg text-zinc-900/70 max-w-[480px] mb-10"
          >
            Celebrity management, brand collaborations, and iconic campaigns — for the brands and names that define Indian culture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2">
              See Our Work <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              What We Do
            </Button>
          </motion.div>
        </div>

        {/* Floating Stat Chips (Desktop) */}
        <div className="hidden lg:flex flex-col gap-6 absolute right-[clamp(20px,5vw,80px)] top-1/2 -translate-y-1/2">
          {[
            { num: "20+", label: "Years in Business" },
            { num: "500+", label: "Campaigns Delivered" },
            { num: "100+", label: "Celebrities Managed" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 60 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { delay: 1.2 + i * 0.15 },
                x: { delay: 1.2 + i * 0.15, type: "spring" },
                y: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5
                }
              }}
              className="bg-white/5 border border-black/10 p-6 min-w-[200px] backdrop-blur-sm"
            >
              <div className="font-display text-5xl text-zinc-900 mb-1">{stat.num}</div>
              <div className="font-body text-xs text-zinc-900/60 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-zinc-900">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-zinc-900" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
