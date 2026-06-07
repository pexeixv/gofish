import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowRight, Star, Video, Handshake, Megaphone } from "lucide-react"
import { servicesData, ServiceItem } from "@/src/lib/data"
import { fadeUp, pageTransition, staggerMed } from "@/src/lib/animations"
import { cn } from "@/src/lib/utils"

function getIcon(id: string) {
  switch (id) {
    case "celebrity-engagement": return <Star size={24} />
    case "media-consulting": return <Video size={24} />
    case "entertainment-sports": return <Handshake size={24} />
    case "content-production": return <Video size={24} />
    case "pr-communications": return <Megaphone size={24} />
    default: return <Star size={24} />
  }
}

function FeaturesList({ features, isDark }: { features: string[], isDark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {features.map(f => (
        <span 
          key={f} 
          className={cn(
            "px-3 py-1.5 text-xs font-body font-bold uppercase tracking-wider rounded-full border",
            isDark 
              ? "bg-white/10 border-white/20 text-white" 
              : "bg-black/5 border-black/10 text-zinc-900"
          )}
        >
          {f}
        </span>
      ))}
    </div>
  )
}

function DiscoverBtn({ id, isDark }: { id: string, isDark?: boolean }) {
  return (
    <Link 
      to={`/services/${id}`}
      className={cn(
        "inline-flex items-center gap-4 font-body text-sm font-bold uppercase tracking-widest transition-colors w-fit group/btn mt-auto",
        isDark ? "text-white hover:text-white/80" : "text-zinc-900 hover:text-[#E8293B]"
      )}
    >
      <span className={cn("border-b pb-1", isDark ? "border-white/50" : "border-[#E8293B]")}>
        Discover Link
      </span>
      <div className={cn(
        "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
        isDark ? "border-white/20 group-hover/btn:border-white" : "border-black/20 group-hover/btn:border-[#E8293B]"
      )}>
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}

function Card1({ service }: { service: ServiceItem }) {
  return (
    <motion.div variants={fadeUp} className="md:col-span-12 group bg-zinc-50 rounded-[2rem] border border-black/5 overflow-hidden flex flex-col md:flex-row relative min-h-[500px]">
      <div className="flex-1 p-8 md:p-16 lg:p-20 z-10 flex flex-col justify-center">
        <div className="w-12 h-12 rounded-2xl bg-[#E8293B] text-white flex items-center justify-center mb-8 shadow-lg shadow-red-500/20">
          {getIcon(service.id)}
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">{service.title}</h2>
        <p className="font-body text-xl lg:text-2xl text-zinc-900/60 font-light leading-relaxed mb-8 max-w-xl">
          {service.description}
        </p>
        <FeaturesList features={service.features} />
        <DiscoverBtn id={service.id} />
      </div>
      <div className="flex-1 h-[400px] md:h-auto overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
        />
      </div>
    </motion.div>
  )
}

function Card2({ service }: { service: ServiceItem }) {
  return (
    <motion.div variants={fadeUp} className="md:col-span-7 group bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col relative min-h-[550px] shadow-2xl shadow-black/20">
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
      </div>
      <div className="relative z-10 p-8 md:p-16 flex flex-col h-full justify-end mt-auto">
        <div className="w-12 h-12 rounded-2xl bg-white/10 text-white backdrop-blur-md flex items-center justify-center mb-6">
          {getIcon(service.id)}
        </div>
        <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-4 text-white">{service.title}</h2>
        <p className="font-body text-lg text-white/70 font-light leading-relaxed mb-8 max-w-md">
          {service.description}
        </p>
        <FeaturesList features={service.features} isDark />
        <DiscoverBtn id={service.id} isDark />
      </div>
    </motion.div>
  )
}

function Card3({ service }: { service: ServiceItem }) {
  return (
    <motion.div variants={fadeUp} className="md:col-span-5 group bg-[#E8293B] rounded-[2rem] overflow-hidden flex flex-col relative min-h-[550px] shadow-xl shadow-red-900/10">
      <div className="absolute inset-0 mix-blend-multiply opacity-20 group-hover:opacity-30 transition-opacity duration-700">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover grayscale" 
        />
      </div>
      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-white/20 text-white backdrop-blur-md flex items-center justify-center mb-8">
          {getIcon(service.id)}
        </div>
        <h2 className="font-display text-4xl uppercase tracking-tight mb-4 text-white leading-tight">{service.title}</h2>
        <p className="font-body text-lg text-white/90 font-light leading-relaxed mb-8">
          {service.description}
        </p>
        <div className="mt-auto">
          <FeaturesList features={service.features} isDark />
          <DiscoverBtn id={service.id} isDark />
        </div>
      </div>
    </motion.div>
  )
}

function Card4({ service }: { service: ServiceItem }) {
  return (
    <motion.div variants={fadeUp} className="md:col-span-6 group bg-zinc-100 border border-black/5 rounded-[2rem] overflow-hidden flex flex-col relative min-h-[550px]">
      <div className="p-8 md:p-12 z-10 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6 shadow-md">
          {getIcon(service.id)}
        </div>
        <h2 className="font-display text-4xl uppercase tracking-tight mb-4">{service.title}</h2>
        <p className="font-body text-lg text-zinc-900/60 font-light leading-relaxed mb-6 max-w-sm">
          {service.description}
        </p>
        <FeaturesList features={service.features} />
        <DiscoverBtn id={service.id} />
      </div>
      <div className="w-[85%] mx-auto mt-auto h-[250px] overflow-hidden rounded-t-[2rem] shadow-2xl translate-y-8 group-hover:translate-y-4 transition-transform duration-700">
         <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover" 
        />
      </div>
    </motion.div>
  )
}

function Card5({ service }: { service: ServiceItem }) {
  return (
    <motion.div variants={fadeUp} className="md:col-span-6 group bg-white border border-black/10 shadow-xl rounded-[2rem] overflow-hidden flex flex-col relative min-h-[550px]">
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden mask-image-gradient-left">
         <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
        />
      </div>
      <div className="p-8 md:p-12 z-10 flex flex-col h-full relative lg:w-[70%]">
        <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-[#E8293B] border border-black/5 flex items-center justify-center mb-6">
          {getIcon(service.id)}
        </div>
        <h2 className="font-display text-4xl uppercase tracking-tight mb-4 leading-tight">{service.title}</h2>
        <p className="font-body text-lg text-zinc-900/60 font-light leading-relaxed mb-8">
          {service.description}
        </p>
        <div className="mt-auto">
          <FeaturesList features={service.features} />
          <DiscoverBtn id={service.id} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-white text-zinc-900 pt-32 pb-24"
    >
      <div className="px-[clamp(20px,5vw,80px)] mb-20 text-center">
        <div className="max-w-[1280px] mx-auto">
          <motion.span 
            variants={fadeUp}
            className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-4 block"
          >
            — CAPABILITIES —
          </motion.span>
          <motion.h1 
            variants={fadeUp}
            className="font-display text-[clamp(4rem,8vw,10rem)] leading-[0.85] tracking-tight uppercase"
          >
            Our <span className="text-[#E8293B]">Expertise</span>.
          </motion.h1>
        </div>
      </div>

      <div className="px-[clamp(20px,5vw,80px)]">
        <motion.div 
          variants={staggerMed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {servicesData.map((service, i) => {
            if (i === 0) return <Card1 key={service.id} service={service} />
            if (i === 1) return <Card2 key={service.id} service={service} />
            if (i === 2) return <Card3 key={service.id} service={service} />
            if (i === 3) return <Card4 key={service.id} service={service} />
            if (i === 4) return <Card5 key={service.id} service={service} />
            return null
          })}
        </motion.div>
      </div>
    </motion.main>
  )
}
