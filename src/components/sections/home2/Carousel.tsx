import { useState } from "react"
import { cn } from "@/src/lib/utils"

const CAROUSEL_SLIDES = [
  { id: 11, title: "Showreel", video: "1xJ8Yvp_y5njUrIyOq4geR6UEIfZLAUfa", thumbnail: "" },
  { id: 1, title: "Alia x Philip", video: "18yBRKGZWmy8iFKqWuIkS4A51XzTT8J7G", thumbnail: "" },
  { id: 2, title: "Amitabh x Lloyd", video: "1cPDej69ADpYZHNv3g66V3y1uwLvr7SjT", thumbnail: "" },
  { id: 3, title: "Janhavi x Havells", video: "17yzZsuhw-OgUvJ8orEsJebFi5UBhaqYD", thumbnail: "" },
  { id: 4, title: "Kriti x Trident", video: "1mXJXyOrwH0QazStJLsym2GXRS_zVKkoS", thumbnail: "" },
  { id: 5, title: "Gangully x IRF", video: "1zWD-PB_mZvryIv47W3JNKuwCFPXkRZku", thumbnail: "" },
  { id: 6, title: "John Abraham x IRF", video: "169ydxj8G-kMQfql_hLJGBd2Y2474N9Ri", thumbnail: "" },
  { id: 7, title: "Arjun Kapoor x IRF", video: "1LtgW1YZ4YXIsyetite68Gky5bpxYeAPl", thumbnail: "" },
  { id: 8, title: "Jaqueline x Magic Moments", video: "1XZLqTUSS3tbUH0erevFi1Lkp1_HijMqa", thumbnail: "" },
  { id: 9, title: "Tiger x 8PM", video: "180L2FOmQfnaaV5qQKSPx-gy6srU_v09A", thumbnail: "" },
  { id: 10, title: "Saif x Royal Ranthambore", video: "1XgkIPZllCcIuLhMrbESYcSVQwqnBUEHG", thumbnail: "" },
]

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative w-full bg-white pt-0 pb-4 flex flex-col items-center overflow-hidden">
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[75vh] min-h-[300px] md:min-h-[500px] overflow-hidden bg-black select-none">
          
          {/* Slides Track */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {CAROUSEL_SLIDES.map((slide, i) => {
              return (
                <div key={slide.id} className="relative w-full h-full flex-shrink-0">
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
                </div>
              )
            })}
          </div>
        </div>

      {/* Thumbnail Shelf (Below Videos) */}
      <div className="w-full w-full mt-4 md:mt-8 group relative bg-white">
        <div className="flex gap-2 md:gap-4 overflow-x-auto hide-scrollbar px-[clamp(10px,4vw,40px)] pb-4 snap-x">
            {CAROUSEL_SLIDES.map((slide, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "flex-shrink-0 relative w-32 md:w-40 aspect-video rounded-xl overflow-hidden snap-start transition-all duration-300 transform",
                    isActive ? "border-2 border-[#E8293B] scale-105 shadow-[0_4px_20px_rgba(232,41,59,0.2)]" : "border-2 border-transparent opacity-60 hover:opacity-100 hover:scale-100 scale-95"
                  )}
                >
                  <img 
                    src={slide.thumbnail || `https://placehold.co/600x400/222222/FFFFFF/png?text=Preview`}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-1 bg-black/60 backdrop-blur-sm text-left">
                    <span className="font-display text-[10px] uppercase text-white truncate block">{slide.title}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
    </section>
  )
}
