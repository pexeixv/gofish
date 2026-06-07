import { motion } from "motion/react"

export default function Recognition() {
  return (
    <section className="relative w-full pt-28 pb-12  bg-[#0a0a0a] text-white overflow-hidden border-b border-black/5">
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
  )
}
