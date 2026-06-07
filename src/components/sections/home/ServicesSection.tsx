import { motion } from "motion/react"
import { fadeUp } from "@/src/lib/animations"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/src/components/ui/tabs"
import { servicesData } from "@/src/lib/data"

export default function ServicesSection() {
  return (
    <section className="bg-white py-[clamp(80px,10vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-900 mb-4 block">
            — OUR EXPERTISE —
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)]  leading-[1.05]">
            Powering the <span className="text-zinc-900">Entertainment</span> Ecosystem.
          </h2>
        </motion.div>

        <Tabs defaultValue={servicesData[0].id} className="w-full">
          <TabsList className="w-full h-auto justify-start border-b border-black/5 mb-12 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {servicesData.map((service) => (
              <TabsTrigger 
                key={service.id} 
                value={service.id}
                className="text-lg py-4 px-8 whitespace-nowrap"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {servicesData.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="font-display uppercase tracking-tight  text-4xl mb-6">{service.title}</h3>
                  <p className="font-body font-light text-xl text-zinc-900/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#E8293B]" />
                        <span className="font-body text-sm text-zinc-900/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="aspect-video bg-zinc-50 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
