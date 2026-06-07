import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Clients", href: "/clients" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-colors duration-300 px-[clamp(20px,5vw,80px)] py-4",
        isScrolled || location.pathname !== "/home"
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 text-white" 
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col group">
          <img src="https://i.ibb.co/spXdpJ29/gfe-white.png" alt="Go Fish Entertainment" className="h-[40px] object-contain drop-shadow-md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
            >
              <Link
                to={link.href}
                className={cn(
                  "nav-link text-white before:bg-white",
                  location.pathname === link.href && "active"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden sm:block"
          >
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "gap-2 transition-colors",
                isScrolled || location.pathname !== "/home"
                  ? "border-white text-zinc-900 bg-white hover:bg-white/90"
                  : "border-white text-zinc-900 bg-white hover:bg-white/90"
              )} 
              asChild
            >
              <Link to="/contact">
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white z-[90] flex flex-col justify-center px-[clamp(20px,5vw,80px)]"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center justify-between group"
                  >
                    <span className="font-display uppercase tracking-tight text-4xl sm:text-5xl text-zinc-900 group-hover:opacity-75 transition-colors">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-8 h-8 text-zinc-900 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <Button className="w-full h-16 text-lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
