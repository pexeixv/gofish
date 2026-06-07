import { motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/src/lib/utils"
import { fadeUp } from "@/src/lib/animations"

const CLIENTS = {
  Brands: [
    "Trident", "Ciat", "U Mumba", "Hero Cycles", "Wave Group", "Colgate", "DWR", "Philips", 
    "WWE", "BMW", "Cycle Agarbatti", "Duracell", "Volvo", "Airtel", "Mountain Dew", 
    "Cadbury Dairy Milk", "Tupperware", "Fila", "Reebok", "Pepsodent", "SRM University", 
    "Air India", "S.L. Raheja Hospital", "Havmor", "Asus", "HCL", "Samsung Mobile", 
    "Himani Navratna Oil", "Himani Sona Chandi", "Emami", "LG Mobile", "Mahindra", 
    "Big Bazaar Fashion", "Berger Paints", "Asian Paints", "D'Damas", "Mitashi", "Radio City", 
    "Monginis", "Dalda", "Vikram Tea", "UCB", "Mitsubishi Motors", "Carlsberg", "Savile Row Co.", 
    "Fair and Handsome", "Himani Boro Plus", "Himani Fast Relief", "Tag Heuer"
  ],
  Producers: [
    "Raj Kumar Hirani Films", "Vidhu Vinod Chopra Films", "Red Chillies Entertainment", "Sony MSM", 
    "JA Entertainment", "Films Craft", "Eros International", "Disney UTV", "Sunshine Pictures", 
    "Reliance Entertainment", "T-Series", "Nadiadwala Grandson Entertainment", "RSF Films", 
    "Dharma Production", "Fox Star Studios", "Viacom18 Motion Pictures"
  ],
  TV: [
    "BBC Worldwide", "B Logo", "Colors Viacom", "SOL Production", "Sony TV Channel", 
    "Star Plus", "Ten Sports", "Zee TV"
  ]
}

type Tab = keyof typeof CLIENTS

export default function Clients() {
  const [activeTab, setActiveTab] = useState<Tab>("Brands")

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-[clamp(20px,5vw,80px)] bg-white text-zinc-900 min-h-screen"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16 text-center lg:text-left"
        >
          <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-6 block">
            — Trusted By —
          </span>
          <h1 className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] tracking-tight uppercase">
            Our <br className="hidden lg:block"/><span className="text-[#E8293B]">Partners</span>.
          </h1>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16 pb-12 border-b border-black/5">
          {(Object.keys(CLIENTS) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "font-body text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors rounded-full border",
                activeTab === tab 
                  ? "bg-[#E8293B] text-white border-[#E8293B]" 
                  : "bg-zinc-50 text-zinc-600 border-black/10 hover:border-[#E8293B] hover:text-[#E8293B]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {CLIENTS[activeTab].map((client, i) => (
            <motion.div 
              variants={fadeUp}
              key={`${activeTab}-${i}`}
              className="bg-white border text-zinc-900 border-black/5 rounded-2xl aspect-video flex items-center justify-center p-6 text-center hover:border-[#E8293B]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-display text-xl lg:text-2xl tracking-tight leading-tight uppercase">{client}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  )
}
