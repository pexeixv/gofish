import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white text-zinc-900 overflow-hidden border-t border-black/5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8293B] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E8293B] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Large Typography & Crimson Accent */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-[#E8293B] mb-4 block">
              — WHO WE ARE —
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-zinc-950 uppercase tracking-tight leading-[1.1] mb-6">
              REDEFINING <span className="text-[#E8293B]">BRAND</span> SYNERGIES SINCE 2004.
            </h2>
            <div className="w-20 h-[3px] bg-[#E8293B]" />
          </div>

          {/* Right Column - Descriptive Text and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-2">
            <h3 className="font-display text-2xl uppercase text-zinc-950 tracking-tight mb-6">
              Empowering brands through celebrity partnerships, cinematic content, and strategic media alignment.
            </h3>
            <p className="font-body text-base md:text-lg text-zinc-900/70 leading-relaxed font-light mb-6">
              For over two decades, Go Fish Entertainment has pioneered the integration of brands and mainstream entertainment. We are a boutique entertainment marketing consultancy that serves as an extension of your marketing division. Rather than managing talent directly, we work with a single-minded focus: to represent and secure your brand's commercial and strategic interests.
            </p>
            <p className="font-body text-base md:text-lg text-zinc-900/70 leading-relaxed font-light mb-8">
              Consistently recognized for leadership by national outlets like The Economic Times, our extensive on-ground network ensures that every campaign we conceptualize triggers tangible resonance and delivers exceptional ROI, turning standard advertising into cultural landmarks.
            </p>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-[#E8293B] hover:bg-[#c61f30] text-white px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-md shadow-red-500/10"
              >
                Our Legacy <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
