import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { workData } from "@/src/lib/data"
import { fadeUp, staggerMed, pageTransition } from "@/src/lib/animations"

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < workData.length - visibleCount) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    } else {
      setCurrentIndex(Math.max(0, workData.length - visibleCount))
    }
  }

  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-24 px-[clamp(20px,4vw,60px)] min-h-screen bg-white text-zinc-900"
    >
      <div className="max-w-[1600px] mx-auto">
        
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerMed}
          className="mb-16 text-center lg:text-left px-4"
        >
          <motion.span variants={fadeUp} className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-6 block">
            — OUR PORTFOLIO —
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(4.5rem,11vw,11rem)] leading-[0.85] tracking-tight uppercase mb-8">
            Selected <br className="hidden lg:block"/><span className="text-[#E8293B]">Work</span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body font-light text-xl lg:text-2xl text-zinc-900/70 max-w-2xl mx-auto lg:mx-0">
            A showcase of our most impactful campaigns, celebrity collaborations, and brand stories from the last two decades.
          </motion.p>
        </motion.div>

        {/* Carousel Slider */}
        <div className="relative w-full overflow-hidden mb-16 px-4">
          <div className="relative">
            {/* Outer Slider Wrapper */}
            <div className="overflow-hidden w-full pb-6">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {workData.map((item) => (
                  <div 
                    key={item.id} 
                    className="px-4 shrink-0 flex flex-col"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-white border border-black/5 rounded-[2.5rem] p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group relative">
                      <div>
                        {/* Video preview or Image fallback */}
                        <div className="block relative aspect-[4/3] rounded-[1.8rem] overflow-hidden bg-zinc-100 mb-6 group-hover:shadow-md transition-shadow duration-300">
                          {item.video ? (
                            <iframe
                              src={`https://drive.google.com/file/d/${item.video}/preview?usp=sharing&autoplay=1&mute=1`}
                              className="absolute inset-0 w-full h-full border-none pointer-events-auto"
                              title={item.title}
                              allow="autoplay; encrypted-media"
                            />
                          ) : (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          {/* Clickable overlay to navigate to details */}
                          <Link to={`/work/${item.id}`} className="absolute inset-0 z-10 block cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-40 group-hover:opacity-65 transition-opacity duration-500" />
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white text-[#E8293B] rounded-full flex items-center justify-center translate-y-2 translate-x-2 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                              <ArrowUpRight size={18} />
                            </div>
                          </Link>
                        </div>

                        {/* Info */}
                        <div className="px-1">
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-widest text-[#E8293B]">
                              {item.category}
                            </span>
                            <span className="font-display text-xl text-zinc-400 font-medium">{item.year}</span>
                          </div>
                          <Link to={`/work/${item.id}`}>
                            <h3 className="font-display uppercase tracking-tight text-2xl lg:text-3xl text-zinc-900 leading-tight mb-4 hover:text-[#E8293B] transition-colors line-clamp-1">
                              {item.title}
                            </h3>
                          </Link>
                          <p className="font-body text-base text-zinc-900/60 leading-relaxed mb-6 font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Button */}
                      <div className="px-1 pt-2">
                        <Link
                          to={`/work/${item.id}`}
                          className="inline-flex items-center gap-2 bg-[#E8293B] hover:bg-[#c61f30] text-white w-full justify-center py-4 px-6 rounded-2xl font-body font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-red-500/5"
                        >
                          View details <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            {workData.length > visibleCount && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-zinc-900 border border-black/10 hover:border-[#E8293B] hover:text-[#E8293B] flex items-center justify-center shadow-lg transition-all z-20 hover:scale-105"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-zinc-900 border border-black/10 hover:border-[#E8293B] hover:text-[#E8293B] flex items-center justify-center shadow-lg transition-all z-20 hover:scale-105"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Indicator dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: Math.max(0, workData.length - visibleCount + 1) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 transition-all rounded-full ${
                        currentIndex === i ? "w-8 bg-[#E8293B]" : "w-2 bg-zinc-200 hover:bg-zinc-300"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
      </div>
    </motion.main>
  )
}
