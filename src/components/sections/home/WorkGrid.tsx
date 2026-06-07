import { motion } from "motion/react"
import { fadeUp, staggerMed } from "@/src/lib/animations"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/src/lib/utils"

const work = [
  {
    id: "pepsi-salman",
    title: "Pepsi x Salman Khan",
    category: "Brand Campaign",
    image: "https://picsum.photos/seed/pepsi/800/600",
    size: "large"
  },
  {
    id: "myntra-fashion",
    title: "Myntra Fashion Week",
    category: "Event Management",
    image: "https://picsum.photos/seed/fashion/800/600",
    size: "small"
  },
  {
    id: "amazon-prime",
    title: "Amazon Prime Video",
    category: "Talent Collaboration",
    image: "https://picsum.photos/seed/amazon/800/600",
    size: "small"
  },
  {
    id: "rolex-heritage",
    title: "Rolex Heritage",
    category: "Luxury Campaign",
    image: "https://picsum.photos/seed/watch/800/600",
    size: "medium"
  }
]

export default function WorkGrid() {
  return (
    <section className="bg-white py-[clamp(80px,10vw,140px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-900 mb-4 block">
              — SELECTED WORK —
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)]  leading-[1.05]">
              Defining <span className="text-zinc-900">Culture</span>.
            </h2>
          </div>
          <Link to="/work">
            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-zinc-900 font-body text-sm font-semibold uppercase tracking-widest"
            >
              View All Projects <ArrowUpRight size={18} />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerMed}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {work.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className={cn(
                "group relative overflow-hidden bg-zinc-50 aspect-[4/5]",
                item.size === "large" && "lg:col-span-2 lg:aspect-[16/9]"
              )}
            >
              <Link to={`/work/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-widest text-zinc-900 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="font-display uppercase tracking-tight  text-2xl sm:text-3xl text-zinc-900">
                    {item.title}
                  </h3>
                </div>
                
                <div className="absolute top-8 right-8 w-12 h-12 bg-[#E8293B] text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight size={24} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
