import { useParams, Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowLeft, Star, Handshake, Video, ArrowRight, CheckCircle2 } from "lucide-react"
import { servicesData } from "@/src/lib/data"
import { fadeUp, staggerMed, pageTransition } from "@/src/lib/animations"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"
import { useEffect } from "react"

const iconMap = {
  Star: Star,
  Handshake: Handshake,
  Video: Video,
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = servicesData.find((s) => s.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="font-display uppercase tracking-tight  text-4xl mb-6">Service Not Found</h1>
        <Button asChild>
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    )
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap]

  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pb-24" // removed top padding since hero takes it
    >
      {/* Hero Visual */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-zinc-50 overflow-hidden mb-16 md:mb-24 mt-20">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover grayscale opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
           <div className="max-w-[1280px] w-full mx-auto px-[clamp(20px,5vw,80px)] pb-16">
              <Link to="/services" className="inline-flex items-center gap-2 text-zinc-900/60 hover:text-zinc-900 transition-colors mb-6 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to all services
              </Link>
              <h1 className="text-[clamp(3.5rem,8vw,6rem)]  leading-[0.95] text-zinc-900">
                {service.title}
              </h1>
           </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-6 mb-10">
               <div className="w-16 h-16 bg-[#E8293B] text-[#0A0A0A] flex items-center justify-center">
                 <Icon size={32} />
               </div>
               <h2 className="font-display uppercase tracking-tight  text-3xl">Overview</h2>
            </div>
            
            <p className="font-body font-light text-2xl text-zinc-900/90 leading-relaxed mb-12">
              {service.fullDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-4 p-6 bg-zinc-50 border border-black/5">
                  <CheckCircle2 size={20} className="text-zinc-900 shrink-0" />
                  <span className="font-body text-lg text-zinc-900">{feature}</span>
                </div>
              ))}
            </div>

            <Separator className="mb-16" />

            <div>
              <h2 className="font-display uppercase tracking-tight  text-4xl mb-12">Our Process</h2>
              <div className="flex flex-col gap-12">
                {service.process.map((step) => (
                  <div key={step.step} className="flex gap-8 group">
                    <div className="font-display text-5xl text-white/10 group-hover:text-zinc-900/20 transition-colors shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-body text-xl font-bold mb-2 text-zinc-900">{step.title}</h3>
                      <p className="font-body font-light text-zinc-900/60 leading-relaxed max-w-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Sticky CTA) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 bg-zinc-50 p-12 border border-black/5">
              <h3 className="font-display uppercase tracking-tight  text-3xl mb-6">Ready to get started?</h3>
              <p className="font-body font-light text-zinc-900/60 mb-10 leading-relaxed">
                Our team is ready to help you navigate the entertainment landscape and achieve your goals.
              </p>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#666260]">Full Name</label>
                  <input className="bg-zinc-100 border border-black/10 p-4 text-zinc-900 focus:outline-none focus:border-[#E8293B] transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#666260]">Email</label>
                  <input className="bg-zinc-100 border border-black/10 p-4 text-zinc-900 focus:outline-none focus:border-[#E8293B] transition-colors" placeholder="john@example.com" />
                </div>
                <Button size="lg" className="w-full gap-3 group mt-4">
                  Send Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
