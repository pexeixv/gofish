import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"
import { useEffect } from "react"
import Navbar from "@/src/components/layout/Navbar"
import Footer from "@/src/components/layout/Footer"
import Home from "@/src/pages/Home"
import Home2 from "@/src/pages/Home2"
import Work from "@/src/pages/Work"
import WorkDetail from "@/src/pages/WorkDetail"
import Services from "@/src/pages/Services"
import ServiceDetail from "@/src/pages/ServiceDetail"
import About from "@/src/pages/About"
import Contact from "@/src/pages/Contact"
import Clients from "@/src/pages/Clients"
import Testimonials from "@/src/pages/Testimonials"
import LegalPage from "@/src/pages/LegalPage"

function AnimatedRoutes() {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<LegalPage />} />
        <Route path="/terms-of-service" element={<LegalPage />} />
        <Route path="/cookie-policy" element={<LegalPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

