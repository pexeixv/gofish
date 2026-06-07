import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { motion } from "motion/react"
import Markdown from "react-markdown"
import { ArrowLeft } from "lucide-react"

// Import markdown files as raw text
import privacyPolicy from "@/src/content/privacy-policy.md?raw"
import termsOfService from "@/src/content/terms-of-service.md?raw"
import cookiePolicy from "@/src/content/cookie-policy.md?raw"

const contentMap: Record<string, string> = {
  "privacy-policy": privacyPolicy,
  "terms-of-service": termsOfService,
  "cookie-policy": cookiePolicy,
}

export default function LegalPage() {
  const location = useLocation()
  const slug = location.pathname.slice(1)
  const [content, setContent] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
    if (slug && contentMap[slug]) {
      setContent(contentMap[slug])
    } else {
      setContent("# Page Not Found\n\nThe legal document you are looking for does not exist.")
    }
  }, [slug])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-[clamp(20px,5vw,80px)] min-h-screen bg-white"
    >
      <div className="max-w-[800px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#666260] hover:text-zinc-900 transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <div className="prose prose-invert prose-orange max-w-none font-body">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </motion.main>
  )
}
