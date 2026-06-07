import { motion } from "motion/react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import StatsSection from "@/src/components/sections/StatsSection"
import { pageTransition, fadeUp, staggerMed } from "@/src/lib/animations"

const ABOUT_TEXT = "Go Fish Group is an Integrated Entertainment & Brand Solutions company specializing in Celebrity Engagement, Media Consulting, Entertainment & Sports Partnerships, Content & Ad Film Production, PR & Communications."

const HIGHLIGHTS = [
  { title: "Radico Khaitan & CaSa", desc: "Official Entertainment Marketing Agency on Record.", colSpan: "md:col-span-6", bg: "bg-zinc-100" },
  { title: "Havells India", desc: "Driving all celebrity engagement initiatives across its entire brand ecosystem.", colSpan: "md:col-span-6", bg: "bg-zinc-50" },
  { title: "Indian Racing Festival", desc: "Managed team ownerships & media. 20,000+ On-ground Attendees, 14B+ Impressions.", colSpan: "md:col-span-8", bg: "bg-white" },
  { title: "Z-POP Dream", desc: "First India media campaign resulting in a 30% increase in app downloads.", colSpan: "md:col-span-4", bg: "bg-zinc-100" },
  { title: "ME Biz (PR)", desc: "Official PR agency on record for Formula E and Kabuni in India.", colSpan: "md:col-span-4", bg: "bg-zinc-50" },
  { title: "Magic Moments", desc: "360° campaign leading to +50% Q3 Profit Growth and +20% share price.", colSpan: "md:col-span-8", bg: "bg-white" },
  { title: "Lloyd", desc: "Landmark brand collaboration with superstars Deepika Padukone and Ranveer Singh.", colSpan: "md:col-span-12", bg: "bg-zinc-100" }
]

const TESTIMONIALS = [
  { quote: "Go Fish Entertainment has been an instrumental part of our growth journey to build the Indian Racing League.", author: "Akhilesh Reddy", title: "Chairman", company: "RPPL" },
  { quote: "I can proudly say that they've truly been our partners in our growth story to build our various Radico Consumer Brands.", author: "Amar Sinha", title: "COO", company: "Radico Khaitan" },
  { quote: "Go Fish Entertainment exceeded my expectations with their Entertainment led solutions.", author: "Rohit Kapoor", title: "EVP, Brand & Marcom", company: "Havells India" },
]

export default function Home() {
  const [testiRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-white text-zinc-900"
    >
      {/* FULLSCREEN VERTICAL PRESENTATION */}
      <div className="flex flex-col">
        
        {/* SLIDE 1: HERO */}
        <section className="relative w-full h-[100svh] min-h-[600px] flex items-end pb-32 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          >
            <iframe
              src="https://www.youtube.com/embed/I8zxNbUDGCA?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=I8zxNbUDGCA&playsinline=1"
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
              title="Background Video"
              allow="autoplay; encrypted-media"
            ></iframe>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent" />
          </motion.div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerMed}
              className="max-w-4xl"
            >
              <motion.h1 variants={fadeUp} className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] tracking-tight uppercase mb-6 text-white drop-shadow-lg">
                Building <span className="text-[#E8293B]">Icons.</span> <br />
                Driving Impact.
              </motion.h1>
              <motion.p variants={fadeUp} className="font-body text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
                Go Fish group is an integrated entertainment and brand solutions company with <strong className="font-bold text-[#E8293B]">over 20 years</strong> of experience in the business.
              </motion.p>
              <motion.button 
                variants={fadeUp}
                onClick={() => document.getElementById('slide-about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white hover:text-[#E8293B] transition-colors drop-shadow-md"
              >
                Discover More <ChevronDown className="animate-bounce" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 2: ABOUT */}
        <section id="slide-about" className="relative w-full h-[100svh] min-h-[600px] flex items-center bg-white border-b border-black/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,41,59,0.05)_0%,transparent_50%)]" />
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerMed}
            >
              <motion.span variants={fadeUp} className="font-body text-[#E8293B] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">About Go Fish</motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-zinc-900 tracking-tight uppercase mb-8">
                An Integrated <br />Entertainment <br />Powerhouse.
              </motion.h2>
            </motion.div>
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerMed}
               className="flex flex-col gap-8"
            >
              <motion.p variants={fadeUp} className="font-body text-[clamp(1.2rem,2vw,2rem)] text-zinc-900/90 leading-tight">
                {ABOUT_TEXT}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 2.5: RECOGNITION */}
        <section className="relative w-full py-32 bg-[#0a0a0a] text-white overflow-hidden border-b border-black/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,41,59,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8293B] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E8293B] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
          
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] z-10 relative flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center w-full max-w-6xl mx-auto bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-10 md:p-20 rounded-[3rem] shadow-2xl relative"
            >
              <div className="absolute -top-10 flex gap-3 items-center text-[#E8293B] bg-zinc-900 px-8 py-4 rounded-full border border-white/10 shadow-[0_0_30px_rgba(232,41,59,0.2)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_10px_rgba(232,41,59,0.5)]">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] uppercase tracking-tight mx-auto mb-16 text-zinc-100 mt-8">
                Recognised for <span className="text-[#E8293B]">Leadership</span> in Celebrity Engagement and Entertainment marketing for <span className="border-b-4 border-[#E8293B]">two consecutive years</span>.
              </h2>
              
              <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-zinc-400">Recognised By</span>
                <div className="bg-white px-10 py-6 rounded-2xl w-full flex items-center justify-center transform transition-transform hover:-translate-y-2 hover:shadow-xl hover:shadow-white/10 duration-500">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Economic_Times_logo.svg/1024px-The_Economic_Times_logo.svg.png" 
                    alt="The Economic Times" 
                    className="h-10 md:h-12 object-contain" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden font-display text-4xl text-zinc-900 tracking-tight whitespace-nowrap">THE ECONOMIC TIMES</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <StatsSection />

        {/* SLIDE 3: HIGHLIGHTS BENTO GRID */}
        <section className="relative w-full py-32 bg-white flex flex-col justify-center overflow-hidden border-b border-black/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerMed}
            className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] mb-16 text-center"
          >
             <motion.span variants={fadeUp} className="font-body text-[#E8293B] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Impact</motion.span>
             <motion.h2 variants={fadeUp} className="font-display text-[clamp(3rem,5vw,5rem)] leading-[0.9] text-zinc-900 tracking-tight uppercase">Campaign Highlights</motion.h2>
          </motion.div>
          
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerMed}
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  className={`${item.colSpan} relative p-10 md:p-14 ${item.bg} text-zinc-900 flex flex-col justify-center min-h-[300px] border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8293B] to-transparent opacity-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                  <h3 className="font-display text-4xl sm:text-5xl mb-4 lowercase tracking-normal group-hover:text-[#E8293B] transition-colors">{item.title}</h3>
                  <p className="font-body text-lg text-zinc-900/70 leading-relaxed max-w-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Link 
                to="/work"
                className="inline-flex items-center gap-4 text-zinc-900 hover:text-[#E8293B] font-body text-sm font-bold uppercase tracking-widest transition-colors group/btn"
              >
                <span className="border-b border-[#E8293B] pb-1">View All Work</span>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:border-[#E8293B] transition-colors">
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 4: TESTIMONIALS */}
        <section className="relative w-full h-[80svh] min-h-[600px] flex items-center bg-zinc-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,41,59,0.05)_0%,transparent_50%)]" />
          <div className="w-full max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)] z-10">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-body text-[#E8293B] text-xs font-bold tracking-[0.2em] uppercase mb-12 block text-center"
            >
              Industry Voices
            </motion.span>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="overflow-hidden" ref={testiRef}
            >
              <div className="flex cursor-grab active:cursor-grabbing">
                {TESTIMONIALS.map((testi, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 text-center px-4">
                    <p className="font-display text-[clamp(2rem,4vw,4rem)] leading-tight text-zinc-900 uppercase tracking-tight mb-8">
                      "{testi.quote}"
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testi.author)}&background=e4e4e7&color=000&size=150`} 
                          alt={testi.author} 
                          className="w-12 h-12 rounded-full border border-black/10 object-cover mx-auto" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left">
                          <span className="font-body font-bold text-lg text-[#E8293B] block">{testi.author}</span>
                          <span className="font-body text-sm text-zinc-900/60 block">{testi.title} &bull; {testi.company}</span>
                        </div>
                      </div>
                      <img 
                        src={`https://logo.clearbit.com/${testi.company.toLowerCase().replace(/ /g, '')}.com`} 
                        className="h-8 max-w-[100px] object-contain grayscale opacity-60 block mt-2" 
                        alt={testi.company}
                        onError={(e) => e.currentTarget.style.display = 'none'}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 text-center"
            >
              <Link 
                to="/testimonials"
                className="inline-flex items-center gap-4 text-zinc-900 hover:text-[#E8293B] font-body text-sm font-bold uppercase tracking-widest transition-colors group/btn"
              >
                <span className="border-b border-[#E8293B] pb-1">View All Testimonials</span>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:border-[#E8293B] transition-colors">
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </motion.main>
  )
}

