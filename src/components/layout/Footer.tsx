import { motion } from "motion/react"
import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"

export default function Footer() {
  const location = useLocation()
  const isContactPage = location.pathname === "/contact"

  return (
    <>
      {!isContactPage && (
        <section className="bg-zinc-900 border-b border-black text-white py-32 px-[clamp(20px,5vw,80px)] text-center flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,41,59,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10 w-full max-w-4xl mx-auto">
              <h2 className="font-display text-white text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tight uppercase mb-8 drop-shadow-sm">
                 Ready to create the <span className="text-[#E8293B]">next big</span> cultural moment?
              </h2>
              <Button size="lg" className="bg-[#E8293B] text-white hover:bg-[#E8293B]/90 h-16 px-10 text-lg font-bold uppercase tracking-widest gap-3 group transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E8293B]/20" asChild>
                  <Link to="/contact">
                     Start the Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </Button>
            </div>
        </section>
      )}

      <footer className="bg-white pt-24 pb-12 px-[clamp(20px,5vw,80px)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
            {/* Left: Branding & Contact */}
            <div className="lg:w-1/3">
              <Link to="/" className="flex flex-col mb-10">
                <img src="https://i.ibb.co/BV47kx08/gfe-black.png" alt="Go Fish Entertainment" className="h-14 object-contain origin-left object-left" />
              </Link>
              <p className="font-body text-zinc-900/70 text-lg leading-relaxed max-w-sm">
                Go Fish group is an integrated entertainment and brand solutions company with <strong className="font-bold text-[#E8293B]">over 20 years</strong> of experience in the business.
              </p>
            </div>

            {/* Right: Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-16 lg:w-2/3 lg:max-w-3xl">
            <div className="flex flex-col gap-6">
              <span className="font-body text-[0.6875rem] font-bold uppercase tracking-widest text-[#666260]">
                Navigation
              </span>
              <ul className="flex flex-col gap-4">
                {["Home", "Services", "Work", "Case Studies", "About"].map((item) => (
                  <li key={item}>
                    <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, '-')}`} className="font-body text-sm text-zinc-500 hover:text-[#E8293B] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-body text-[0.6875rem] font-bold uppercase tracking-widest text-[#666260]">
                Legal
              </span>
              <ul className="flex flex-col gap-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="font-body text-sm text-zinc-500 hover:text-[#E8293B] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-body text-[0.6875rem] font-bold uppercase tracking-widest text-[#666260]">
                Social
              </span>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:border-[#E8293B] hover:text-[#E8293B] hover:bg-zinc-50 transition-all text-zinc-500">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8 border-black/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-[#666260]">
            Copyrights © 2026. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#666260]">
            Designed with passion for the entertainment industry.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
