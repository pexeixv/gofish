import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { cn } from "@/src/lib/utils"

const CAROUSEL_SLIDES = [
  { id: 11, title: "Showreel", video: "1xJ8Yvp_y5njUrIyOq4geR6UEIfZLAUfa", thumbnail: "https://picsum.photos/seed/showreel/400/225" },
  { id: 1, title: "Alia x Philip", video: "18yBRKGZWmy8iFKqWuIkS4A51XzTT8J7G", thumbnail: "https://picsum.photos/seed/philips/400/225" },
  { id: 2, title: "Amitabh x Lloyd", video: "1cPDej69ADpYZHNv3g66V3y1uwLvr7SjT", thumbnail: "https://picsum.photos/seed/lloyd/400/225" },
  { id: 3, title: "Janhavi x Havells", video: "17yzZsuhw-OgUvJ8orEsJebFi5UBhaqYD", thumbnail: "https://picsum.photos/seed/havells/400/225" },
  { id: 4, title: "Kriti x Trident", video: "1mXJXyOrwH0QazStJLsym2GXRS_zVKkoS", thumbnail: "https://picsum.photos/seed/trident/400/225" },
  { id: 5, title: "Gangully x IRF", video: "1zWD-PB_mZvryIv47W3JNKuwCFPXkRZku", thumbnail: "https://picsum.photos/seed/racing_g/400/225" },
  { id: 6, title: "John Abraham x IRF", video: "169ydxj8G-kMQfql_hLJGBd2Y2474N9Ri", thumbnail: "https://picsum.photos/seed/racing_j/400/225" },
  { id: 7, title: "Arjun Kapoor x IRF", video: "1LtgW1YZ4YXIsyetite68Gky5bpxYeAPl", thumbnail: "https://picsum.photos/seed/racing_a/400/225" },
  { id: 8, title: "Jaqueline x Magic Moments", video: "1XZLqTUSS3tbUH0erevFi1Lkp1_HijMqa", thumbnail: "https://picsum.photos/seed/magicm/400/225" },
  { id: 9, title: "Tiger x 8PM", video: "180L2FOmQfnaaV5qQKSPx-gy6srU_v09A", thumbnail: "https://picsum.photos/seed/eightpm/400/225" },
  { id: 10, title: "Saif x Royal Ranthambore", video: "1XgkIPZllCcIuLhMrbESYcSVQwqnBUEHG", thumbnail: "https://picsum.photos/seed/royalr/400/225" },
]

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Track the scroll position relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })

  // Smooth scroll transformations for the "contained to immersive" effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["48px", "0px"])
  const paddingX = useTransform(scrollYProgress, [0, 1], ["24px", "0px"])

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-white pt-2 pb-16 flex flex-col items-center overflow-hidden"
    >
      {/* Animated Video Box */}
      <motion.div 
        style={{ 
          scale, 
          borderRadius, 
          paddingLeft: paddingX,
          paddingRight: paddingX,
          width: "100%"
        }}
        className="relative h-[48vh] md:h-[65vh] lg:h-[80vh] min-h-[350px] md:min-h-[550px] overflow-hidden bg-black select-none shadow-xl border-y border-black/5"
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Slides Track */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {CAROUSEL_SLIDES.map((slide, i) => {
              return (
                <div key={slide.id} className="relative w-full h-full flex-shrink-0 bg-zinc-950">
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {Math.abs(activeIndex - i) <= 1 ? (
                      <iframe
                        src={`https://drive.google.com/file/d/${slide.video}/preview?usp=sharing&autoplay=1&mute=1`}
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100%] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-90 pointer-events-auto"
                        title={slide.title}
                        allow="autoplay; encrypted-media"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-900 absolute inset-0" />
                    )}
                  </div>
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Thumbnail Shelf (Below Videos) */}
      <div className="w-full mt-8 group relative bg-white z-20">
        <div className="flex gap-3 md:gap-5 overflow-x-auto hide-scrollbar px-[clamp(20px,5vw,80px)] py-4 snap-x">
          {CAROUSEL_SLIDES.map((slide, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "flex-shrink-0 relative w-36 md:w-48 aspect-video rounded-2xl overflow-hidden snap-start transition-all duration-300 transform border-2",
                  isActive 
                    ? "border-[#E8293B] scale-105 shadow-[0_8px_30px_rgba(232,41,59,0.25)]" 
                    : "border-black/5 opacity-50 hover:opacity-100 hover:scale-100 scale-95"
                )}
              >
                <img 
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-black/70 backdrop-blur-[2px] text-left">
                  <span className="font-display text-[11px] font-medium tracking-wide uppercase text-white truncate block">
                    {slide.title}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
