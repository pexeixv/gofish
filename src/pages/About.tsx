import { motion } from "motion/react"
import { fadeUp, pageTransition, staggerMed } from "@/src/lib/animations"
import StatsSection from "@/src/components/sections/StatsSection"

export default function About() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-zinc-50 text-zinc-900"
    >
      <div className="pt-40 pb-24 px-[clamp(20px,5vw,80px)] border-b border-black/5 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerMed}
            className="mb-20 text-center lg:text-left"
          >
            <motion.span variants={fadeUp} className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-6 block">
              — OUR STORY —
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] tracking-tight uppercase mb-8">
              Two Decades of <br className="hidden lg:block" /><span className="text-[#E8293B]">Legacy</span>.
            </motion.h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerMed}
              className="flex flex-col gap-10"
            >
              <motion.h2 variants={fadeUp} className="font-display uppercase tracking-tight text-4xl lg:text-5xl leading-tight">
                Go Fish Entertainment was founded with a single vision: to redefine the relationship between brands and the entertainment world.
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-[#E8293B]" />
              <motion.p variants={fadeUp} className="font-body font-light text-xl lg:text-2xl text-zinc-900/70 leading-relaxed">
                Since our inception in 2004, we have grown from a boutique agency into a full-scale entertainment powerhouse. We've navigated the shift from traditional media to the digital revolution, always staying ahead of the curve.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body font-light text-xl lg:text-2xl text-zinc-900/70 leading-relaxed">
                Our strength lies in our relationships. We don't just manage talent; we build careers. We don't just execute campaigns; we create cultural moments.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="aspect-[4/5] bg-zinc-900 overflow-hidden rounded-[2rem] shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-[#E8293B] mix-blend-multiply opacity-20" />
              <img
                src="https://picsum.photos/seed/office/800/1000"
                alt="Go Fish Office"
                className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <section className="relative w-full py-32 bg-[#0a0a0a] text-white overflow-hidden border-y border-black/5">
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

      <div className="bg-zinc-900 py-32 px-[clamp(20px,5vw,80px)] border-y border-black/5 text-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerMed}
            className="mb-24 text-center"
          >
            <motion.span variants={fadeUp} className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-4 block">
              — LEADERSHIP —
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tight uppercase text-white">
              Management <span className="text-[#E8293B]">Team</span>.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
             {[
               { name: "Mr. Sajjad Khan", role: "Chairman", desc: "Experience spanning continents over 50 years before co-founding Go Fish. Known for identifying business opportunities and pursuing them. Investor in real estate across India." },
               { name: "Mr. Sajay Moolankodan", role: "Managing Director", desc: "Co-founded Go Fish Entertainment at age 24. Built Go Fish into one of the leading agencies in entertainment marketing. Instrumental in forging brand & celebrity partnerships." },
               { name: "Mrs. Andaleeb Khan", role: "Director", desc: "Only child of late Bollywood actress Kum Kum. Co-founded Go Fish Entertainment at a young age. Drives high-impact celebrity collaborations and brand partnerships." },
               { name: "Mr. Mustafa Rangwala", role: "Head of Business Development & Strategy", desc: "16+ years of expertise in business development & sales. Drives strategic growth, high-value client partnerships, and entertainment marketing initiatives." }
             ].map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm p-10 lg:p-14 rounded-[2rem] border border-white/10 hover:border-[#E8293B]/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#E8293B] text-white flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                    <span className="font-display text-2xl">{member.name.charAt(4)}</span>
                  </div>
                  <h3 className="font-display text-4xl text-white uppercase tracking-tight mb-2">{member.name}</h3>
                  <p className="font-body text-sm font-bold tracking-widest text-[#E8293B] uppercase mb-8">{member.role}</p>
                  <p className="font-body text-white/60 text-lg leading-relaxed font-light">
                    {member.desc}
                  </p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-[clamp(20px,5vw,80px)] py-32 border-b border-black/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerMed}
          className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {[
            { title: "Integrity", desc: "Honest representation and transparent business practices are at our core." },
            { title: "Innovation", desc: "Constantly pushing the boundaries of what's possible in entertainment marketing." },
            { title: "Impact", desc: "We measure our success by the cultural and commercial impact we create." },
          ].map((value, i) => (
            <motion.div variants={fadeUp} key={value.title} className="text-center group">
              <div className="text-[12rem] font-display text-black/5 leading-none absolute -z-10 group-hover:text-[#E8293B]/5 transition-colors -translate-y-12 -translate-x-4 select-none">
                0{i + 1}
              </div>
              <h3 className="font-display text-5xl text-zinc-900 mb-6 uppercase">{value.title}</h3>
              <p className="font-body text-xl font-light text-zinc-900/60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  )
}
