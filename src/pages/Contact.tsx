import { motion } from "motion/react"
import { fadeUp, staggerMed, pageTransition } from "@/src/lib/animations"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-24 px-[clamp(20px,5vw,80px)]"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerMed}
          className="mb-24 text-center lg:text-left"
        >
          <motion.span variants={fadeUp} className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-6 block">
            — GET IN TOUCH —
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(4rem,10vw,10rem)] leading-[0.85] tracking-tight uppercase mb-8">
            Start a <br className="hidden lg:block"/><span className="text-[#E8293B]">Conversation</span>.
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerMed}
            className="flex flex-col gap-16"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              <h2 className="font-display uppercase tracking-tight text-4xl lg:text-5xl">Ready to <span className="text-[#E8293B]">Collaborate?</span></h2>
              <p className="font-body font-light text-xl lg:text-2xl text-zinc-900/70 leading-relaxed max-w-lg">
                Whether you're a brand looking to collaborate or a talent seeking representation, we're here to help.
              </p>
            </motion.div>

            <div className="flex flex-col gap-10">
              <motion.div variants={fadeUp} className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-[#E8293B] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="pt-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-2">Email Us</p>
                  <a href="mailto:info@gofish.co.in" className="text-2xl lg:text-3xl font-display uppercase tracking-tight hover:text-[#E8293B] transition-colors">info@gofish.co.in</a>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-[#E8293B] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="pt-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-2">Call Us</p>
                  <a href="tel:+919082395576" className="text-2xl lg:text-3xl font-display uppercase tracking-tight hover:text-[#E8293B] transition-colors">+91 90823 95576</a>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div className="pt-2">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-2">Visit Us</p>
                  <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-sm">505, Savoy Chambers, Dattatray Rd, Santacruz West, Mumbai 400054</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white p-10 lg:p-14 border border-black/5 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(232,41,59,0.1)_0%,transparent_70%)] pointer-events-none" />
            <form className="flex flex-col gap-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                  <Input placeholder="John Doe" className="h-14 bg-zinc-50 border-black/5 focus-visible:ring-[#E8293B]" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                  <Input placeholder="john@example.com" type="email" className="h-14 bg-zinc-50 border-black/5 focus-visible:ring-[#E8293B]" />
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Subject</label>
                <Input placeholder="Inquiry about..." className="h-14 bg-zinc-50 border-black/5 focus-visible:ring-[#E8293B]" />
              </div>
              
              <div className="flex flex-col gap-3">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                <Textarea placeholder="Tell us more about your project..." className="min-h-[160px] bg-zinc-50 border-black/5 focus-visible:ring-[#E8293B] resize-none" />
              </div>
              
              <Button size="lg" className="w-full h-16 bg-[#E8293B] text-white hover:bg-[#E8293B]/90 font-bold uppercase tracking-widest gap-3 group mt-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/20 transition-all">
                Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
