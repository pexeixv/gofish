import { useParams, Link, useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react"
import { workData } from "@/src/lib/data"
import { fadeUp, staggerMed, pageTransition } from "@/src/lib/animations"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"
import { useEffect } from "react"

export default function WorkDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = workData.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="font-display uppercase tracking-tight  text-4xl mb-6">Project Not Found</h1>
        <Button asChild>
          <Link to="/work">Back to Work</Link>
        </Button>
      </div>
    )
  }

  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="px-[clamp(20px,5vw,80px)] mb-20">
        <div className="max-w-[1280px] mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-[#666260] hover:text-zinc-900 transition-colors mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to all work
          </Link>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-[clamp(3rem,8vw,7rem)]  leading-[1] mb-12">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="aspect-[16/9] overflow-hidden bg-zinc-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[#666260] text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    <User size={14} /> Client
                  </span>
                  <span className="text-xl">{project.client}</span>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <span className="text-[#666260] text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    <Tag size={14} /> Category
                  </span>
                  <span className="text-xl">{project.category}</span>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                  <span className="text-[#666260] text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    <Calendar size={14} /> Year
                  </span>
                  <span className="text-xl">{project.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[clamp(20px,5vw,80px)] py-20 bg-zinc-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerMed}
          className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-12">
            <div>
              <h2 className="font-display uppercase tracking-tight  text-4xl mb-6">The Story</h2>
              <p className="font-body font-light text-xl text-zinc-900/70 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="font-display uppercase tracking-tight  text-4xl mb-6">The Challenge</h2>
              <p className="font-body font-light text-xl text-zinc-900/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col gap-12">
            <div>
              <h2 className="font-display uppercase tracking-tight  text-4xl mb-6">The Solution</h2>
              <p className="font-body font-light text-xl text-zinc-900/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div>
              <h2 className="font-display uppercase tracking-tight  text-4xl mb-6">Impact</h2>
              <ul className="flex flex-col gap-4">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl">
                    <div className="w-2 h-2 bg-[#E8293B]" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="px-[clamp(20px,5vw,80px)] py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerMed}
          className="max-w-[1280px] mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-display uppercase tracking-tight  text-4xl mb-12">Gallery</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <motion.div variants={fadeUp} key={i} className="aspect-video overflow-hidden bg-zinc-50">
                <img
                  src={img}
                  alt={`${project.title} gallery ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Next Project CTA */}
      <section className="px-[clamp(20px,5vw,80px)] py-24 border-t border-black/5">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-900 mb-6 block">
            — NEXT PROJECT —
          </span>
          <Link to="/work" className="group">
            <h2 className="text-[clamp(2.5rem,5vw,5rem)]  leading-tight mb-8 group-hover:text-zinc-900 transition-colors">
              Explore More Work <ArrowRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" />
            </h2>
          </Link>
        </div>
      </section>
    </motion.main>
  )
}
