import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowUpRight, Star, Video } from "lucide-react"
import { workData } from "@/src/lib/data"
import { fadeUp, staggerMed, pageTransition } from "@/src/lib/animations"
import { cn } from "@/src/lib/utils"

const categories = [
  "All",
  "Entertainment Marketing",
  "Celebrity Engagement",
  "Media Sales",
  "Sports Marketing",
  "Content Creation and Production"
]

const CELEBRITY_ASSOCIATIONS = [
  { celeb: "Deepika & Ranveer", brands: "Lloyd AC, Lloyd Refrigerator, Lloyd Washing Machine" },
  { celeb: "Saif Ali Khan", brands: "Royal Ranthambore" },
  { celeb: "Amitabh Bachchan", brands: "Lloyd" },
  { celeb: "Alia Bhatt", brands: "Philips, Standard Electricals" },
  { celeb: "John Abraham", brands: "Goa Aces, Philips Trimmers, Home Centre, Delhi Waveriders, India Speed Week" },
  { celeb: "Sourav Ganguly", brands: "Lloyd AC, Lloyd Refrigerator, Lloyd Washing Machine, Kolkata Royal Tigers" },
  { celeb: "Kriti Sanon", brands: "Magic Moments, Trident India" },
  { celeb: "Vicky Kaushal", brands: "Havells Male Grooming Range" },
  { celeb: "Kartik Aaryan", brands: "Magic Moments" },
  { celeb: "Shah Rukh Khan", brands: "Magic Moments" },
  { celeb: "Mohanlal", brands: "8PM Premium Black" },
  { celeb: "Shraddha Kapoor", brands: "Havells Female Grooming Range" },
  { celeb: "Jacqueline", brands: "Philips Shavers" },
  { celeb: "Mahesh Babu", brands: "Female Grooming Range" },
  { celeb: "Tiger Shroff", brands: "Lloyd AC, Lloyd Refrigerator, Lloyd Washing Machine" },
  { celeb: "Kareena Kapoor", brands: "Lloyd AC, Lloyd Refrigerator, Lloyd Washing Machine" },
  { celeb: "Varun Dhawan", brands: "Asus" }
];

const CONTENT_PRODUCTION = [
  { celeb: "Varun Dhawan", project: "Philips Shavers – DIY Video" },
  { celeb: "Saif Ali Khan", project: "Royal Ranthambore – Ad Film" },
  { celeb: "Jacqueline & Kartik Aaryan", project: "Magic Moments – Behind the Scenes" },
  { celeb: "Mohanlal", project: "Lloyd Air Conditioner – Ad Film" },
  { celeb: "Soorma Hockey Team", project: "8pm – Digital Video" },
  { celeb: "Sourav Ganguly", project: "Lloyd Air Conditioner, BCPL, Indian Racing Festival – Ad Films" },
  { celeb: "Shah Rukh Khan", project: "Tag Heuer – Behind The Scenes" },
  { celeb: "Arjun Kapoor", project: "8pm Drinking Water – Digital Video" },
  { celeb: "Sunny Singh", project: "Magic Moments – Digital Video" },
  { celeb: "Deepika & Ranveer", project: "Lloyd ULED TV – Behind The Scenes" },
  { celeb: "John Abraham", project: "Indian Racing Festival – Ad Film" },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredWork, setFilteredWork] = useState(workData)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredWork(workData)
    } else {
      setFilteredWork(workData.filter(item => item.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-24 px-[clamp(20px,5vw,80px)] min-h-screen"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerMed}
          className="mb-20 text-center lg:text-left"
        >
          <motion.span variants={fadeUp} className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-6 block">
            — OUR PORTFOLIO —
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] tracking-tight uppercase mb-8">
            Selected <br className="hidden lg:block"/><span className="text-[#E8293B]">Work</span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body font-light text-xl lg:text-2xl text-zinc-900/70 max-w-2xl mx-auto lg:mx-0">
            A showcase of our most impactful campaigns, celebrity collaborations, and brand stories from the last two decades.
          </motion.p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-body text-sm font-bold uppercase tracking-widest transition-colors rounded-full border ${
                activeCategory === category
                  ? "bg-[#E8293B] text-white border-[#E8293B]"
                  : "bg-zinc-50 text-zinc-900 border-black/10 hover:border-[#E8293B] hover:text-[#E8293B]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredWork.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                className="group relative flex flex-col"
              >
                <Link to={`/work/${item.id}`} className="block relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white text-[#E8293B] rounded-full flex items-center justify-center -translate-y-4 translate-x-4 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </Link>
                
                <div className="mt-8 flex justify-between items-start px-2">
                  <div>
                    <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-widest text-[#E8293B] mb-3 block">
                      {item.category}
                    </span>
                    <Link to={`/work/${item.id}`}>
                      <h2 className="font-display uppercase tracking-tight text-3xl lg:text-4xl text-zinc-900 hover:text-[#E8293B] transition-colors leading-none">
                        {item.title}
                      </h2>
                    </Link>
                  </div>
                  <span className="font-display text-4xl text-zinc-200">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Celebrity Associations Section */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerMed}
           className="mt-40 mb-32 bg-zinc-50 rounded-[3rem] p-10 lg:p-20"
        >
          <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#E8293B] rounded-2xl text-white flex items-center justify-center shadow-lg shadow-red-500/20">
                <Star size={32} />
              </div>
              <div>
                <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-2 block">
                  — CELEBRITY ENGAGEMENT —
                </span>
                <h2 className="font-display uppercase tracking-tight text-4xl lg:text-6xl">
                  Key Associations
                </h2>
              </div>
            </div>
            <p className="font-body text-xl font-light text-zinc-500 max-w-sm">Strategic partnerships connecting brands with cultural icons.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CELEBRITY_ASSOCIATIONS.map((item, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm hover:shadow-xl hover:border-[#E8293B]/30 hover:-translate-y-1 transition-all duration-500 group">
                <h3 className="font-display text-2xl lg:text-3xl text-zinc-900 uppercase tracking-tight mb-3 group-hover:text-[#E8293B] transition-colors">{item.celeb}</h3>
                <p className="font-body text-sm font-light text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors">{item.brands}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Production Section */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerMed}
           className="mt-10 mb-20 bg-zinc-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(232,41,59,0.2)_0%,transparent_70%)] pointer-events-none" />
          <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl text-white flex items-center justify-center border border-white/10">
                <Video size={32} />
              </div>
              <div>
                <span className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-2 block">
                  — PRODUCTION —
                </span>
                <h2 className="font-display uppercase tracking-tight text-4xl lg:text-6xl text-white">
                  Content Highlights
                </h2>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {CONTENT_PRODUCTION.map((item, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#E8293B]/50 hover:-translate-y-1 transition-all duration-500 group">
                <h3 className="font-display text-2xl lg:text-3xl text-white uppercase tracking-tight mb-3">{item.celeb}</h3>
                <p className="font-body text-sm font-bold tracking-widest text-[#E8293B] uppercase">{item.project}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.main>
  )
}
