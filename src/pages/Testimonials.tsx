import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { fadeUp, pageTransition, staggerMed } from "@/src/lib/animations"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TESTIMONIALS = [
  {
      "name": "John Abraham",
      "role": "Actor",
      "type": "video",
      "thumbnail": "images/testimonial/video/john-abraham.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=Nq2UuNqiwtg"
    },
    {
      "name": "Hrithik Roshan",
      "role": "Actor",
      "type": "text",
      "quote": "We are pleased to be associated with Go Fish, they helped us bring great synergy with our core audience and also to get my fans to enjoy the special Krrish 3 range of ice creams by Havmor."
    },
    {
      "name": "Varun Dhawan",
      "role": "Actor",
      "type": "video",
      "thumbnail": "images/testimonial/video/Varun-Dhawan.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=041owOtGcws"
    },
    {
      "name": "Kriti Sanon",
      "role": "Actress",
      "type": "video",
      "thumbnail": "images/testimonial/video/kriti-sanon.jpeg",
      "videoUrl": "https://www.youtube.com/watch?v=n40tbUuHElY"
    },
    {
      "name": "Rajkumar Hirani",
      "role": "Film Director",
      "type": "text",
      "quote": "It was nice working with Go Fish on 3 Idiots and PK... They made sure that all in film placements were seamless and not in the face."
    },
    {
      "name": "Rakesh Roshan",
      "role": "Film Director and Producer",
      "type": "text",
      "quote": "It is a pleasure to be associated with Go Fish... everyone has derived value from this association."
    },
    {
      "name": "Dabboo Ratnani",
      "role": "Leading Fashion Photographer",
      "type": "video",
      "thumbnail": "images/testimonial/writing/dabboo_ratnani.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=Tef323OW2So"
    },
    {
      "name": "Puneet Sewra",
      "role": "Marketing Director",
      "company": "TAG Heuer",
      "type": "video",
      "thumbnail": "images/testimonial/video/tagheuer.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=pMeKYnCZVp8"
    },
    {
      "name": "Madhu Mantena",
      "role": "Producer",
      "type": "text",
      "quote": "I am glad we worked with Go Fish Entertainment... Kudos to them for the great work."
    },
    {
      "name": "Amit Tiwari",
      "role": "Director",
      "company": "Philips",
      "type": "video",
      "thumbnail": "images/testimonial/video/Philips.png",
      "videoUrl": "https://www.youtube.com/watch?v=Fgqa_2QwFzE"
    },
    {
      "name": "Rajneesh",
      "role": "CEO",
      "company": "Trident Group",
      "type": "video",
      "thumbnail": "images/testimonial/video/trident-group.gif",
      "videoUrl": "https://www.youtube.com/watch?v=79icpP_rpTI"
    },
    {
      "name": "Vivek Krishnani",
      "role": "MD",
      "company": "Sony Pictures",
      "type": "text",
      "quote": "It has been a fruitful association with Go Fish across various films..."
    },
    {
      "name": "Anik Banerjea",
      "role": "Chief Business Creator",
      "company": "Cycle Agarbathi",
      "type": "text",
      "quote": "Our association with Go Fish has been good... they have tried hard to safeguard the brand's interests."
    },
    {
      "name": "Ankit Chona",
      "role": "MD",
      "company": "Havmor Ice Creams",
      "type": "text",
      "quote": "Go Fish helped us in our first ever in-film branding with Krrish 3..."
    },
    {
      "name": "Abbas Tyrewala",
      "role": "Writer/Director",
      "type": "text",
      "quote": "We are delighted to be associated with Go Fish... Thank You."
    },
    {
      "name": "Amit Srivastav",
      "role": "Brand Manager",
      "company": "HCL Laptop",
      "type": "text",
      "quote": "It is indeed remarkable how well Go Fish understands requirement of a brand..."
    },
    {
      "name": "Piya Basu",
      "role": "Head - Brand & Communication",
      "type": "text",
      "quote": "It has been a great experience working with Go Fish... Kudos!"
    },
    {
      "name": "Sonya Jose",
      "role": "Fashion @ Big Bazaar",
      "type": "text",
      "quote": "The London Dreams film merchandise association through Go Fish was a good experience..."
    },
    {
      "name": "Mederic Payne",
      "role": "CEO",
      "company": "Home Centre Dubai",
      "type": "text",
      "quote": "We are extremely pleased with the turnout... one of the grandest store launches."
    },
  {
    name: "Akhilesh Reddy",
    role: "Chairman",
    company: "RPPL",
    type: "text",
    quote: "Go Fish Entertainment has been an instrumental part of our growth journey to build the Indian Racing League. There's truly nobody like them in the Media & Entertainment space."
  },
  {
    name: "Amar Sinha",
    role: "COO",
    company: "Radico Khaitan",
    type: "text",
    quote: "I can proudly say that they've truly been our partners in our growth story to build our various Radico Consumer Brands."
  },
  {
    name: "Rohit Kapoor",
    role: "EVP, Brand & Marcom",
    company: "Havells India",
    type: "text",
    quote: "Go Fish Entertainment exceeded my expectations with their Entertainment led solutions. Their professionalism...is something we sincerely appreciate."
  },
  {
    name: "Vidya Meshram",
    role: "JVP",
    company: "Havells India",
    type: "text",
    quote: "Their transparent approach & clear communication made the process as seamless as possible."
  },
  {
    name: "Richa Tandon",
    role: "Head",
    company: "Magic Moments",
    type: "text",
    quote: "With their industry expertise they've been able to help us by providing quick, process-oriented solutions."
  },
  {
    name: "Abhinav Rastogi",
    role: "Marketing Head",
    company: "8PM | Jaisalmer Gin",
    type: "text",
    quote: "We've worked on several projects with Go Fish in the Entertainment industry & are happy to have them as our partners."
  },
  {
    name: "Amit Tiwari",
    role: "Director, Country Head",
    company: "Philips India",
    type: "text",
    quote: "Go Fish as an organization believes in delivering more than you expect...Their servicing levels & problem-solving skills are way ahead amongst other competitors."
  },
  {
    name: "Rajneesh Bhatia",
    role: "CEO",
    company: "Trident Group",
    type: "text",
    quote: "The dealing has been very transparent, they have been very cooperative & they tried to ensure a good gel between a celebrity & what a brand needs."
  },
  {
    name: "Puneet Sewra",
    role: "Marketing Director",
    company: "Tag Heuer",
    type: "text",
    quote: "This is the first time I'm working with Go Fish & I must say that the experience has been very, very good."
  },
  {
    name: "Bhavesh Singh",
    role: "CBO, Sourav Ganguly",
    company: "",
    type: "text",
    quote: "I am proud to say as Mr. Sourav Ganguly's Chief Business Officer, Go Fish Entertainment are our partners."
  },
  {
    name: "Hrithik Roshan",
    role: "Actor",
    type: "text",
    quote: "We are pleased to be associated with Go Fish; they helped us bring great synergy with our core audience."
  },
  {
    name: "Rakesh Roshan",
    role: "Producer",
    company: "FilmKraft Productions",
    type: "text",
    quote: "They got on board brands that reflects the same philosophy of Krrish's character...everyone has derived value from this association."
  },
  {
    name: "Kriti Sanon",
    role: "Actor",
    type: "text",
    quote: "It was really awesome working with you guys, all the best - Team Go Fish."
  },
  {
    name: "Rajkumar Hirani",
    role: "Director/Producer",
    type: "text",
    quote: "They made sure that all in film placements were seamless & not in the face. I enjoyed working with them."
  },
  {
    name: "Minnakshi Das",
    role: "Producer & Manager to John Abraham",
    company: "JA Entertainment",
    type: "text",
    quote: "Sajay's truly one of the rare M&E Professionals...I truly recommend them for their expertise in the M&E space."
  },
  {
    name: "Shoojit Sircar",
    role: "Film & Ad Film Director",
    type: "text",
    quote: "Go Fish Entertainment provides a superb sense of work that is both reliable & productive."
  },
  {
    name: "Dabboo Ratnani",
    role: "Leading Fashion Photographer",
    type: "text",
    quote: "With Go Fish & me, we go a long way back...whichever campaigns we have worked together on has turned out beautifully."
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < TESTIMONIALS.length - visibleCount) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    } else {
      setCurrentIndex(Math.max(0, TESTIMONIALS.length - visibleCount))
    }
  }

  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-24 px-[clamp(20px,4vw,60px)] bg-white text-zinc-900 min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          variants={staggerMed}
          className="mb-16 text-center lg:text-left px-4"
        >
          <motion.span variants={fadeUp} className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#E8293B] mb-6 block">
            — INDUSTRY VOICES —
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(4.5rem,11vw,11rem)] leading-[0.85] tracking-tight uppercase">
            Word on the <br className="hidden lg:block"/><span className="text-[#E8293B]">Street</span>.
          </motion.h1>
        </motion.div>

        {/* Sliding Carousel Section */}
        <div className="relative w-full overflow-hidden">
          <div className="relative">
            {/* Outer Slider Tracks */}
            <div className="overflow-hidden w-full pb-8">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className="px-4 shrink-0 flex flex-col animate-none"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-zinc-50 border border-black/5 rounded-[2.5rem] p-8 hover:border-[#E8293B]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                      
                      {/* Top part (Video or Quote text) */}
                      {t.type === 'video' && t.videoUrl ? (
                        <div className="mb-8 flex-grow">
                          <div className="aspect-video w-full bg-zinc-200 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                            <iframe 
                              src={`https://www.youtube.com/embed/${t.videoUrl.split('v=')[1]?.split('&')[0]}`} 
                              title={`${t.name} Testimonial`} 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                              className="w-full h-full border-none"
                            ></iframe>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-8 flex-grow">
                          <span className="font-display text-6xl text-[#E8293B]/20 leading-none block mb-2 group-hover:text-[#E8293B] transition-colors">"</span>
                          <p className="font-body text-lg lg:text-xl font-light leading-relaxed text-zinc-900/80 italic">
                            {t.quote}
                          </p>
                        </div>
                      )}

                      {/* Author Details at Bottom */}
                      <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=e4e4e7&color=000&size=150`} 
                            alt={t.name} 
                            className="w-12 h-12 rounded-full border border-black/10 object-cover shrink-0" 
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-display text-xl uppercase tracking-tight text-zinc-900 group-hover:text-[#E8293B] transition-colors line-clamp-1">{t.name}</h4>
                            <p className="font-body text-[0.625rem] font-bold tracking-widest uppercase text-zinc-500 mt-1 line-clamp-1">
                              {t.role}
                            </p>
                          </div>
                        </div>
                        {t.company && (
                          <img 
                            src={`https://logo.clearbit.com/${t.company.toLowerCase().replace(/ /g, '')}.com`} 
                            className="h-6 max-w-[70px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 shrink-0" 
                            alt={t.company}
                            onError={(e) => e.currentTarget.style.display = 'none'}
                            referrerPolicy="no-referrer"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-zinc-900 border border-black/10 hover:border-[#E8293B] hover:text-[#E8293B] flex items-center justify-center shadow-lg transition-all z-20 hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-zinc-900 border border-black/10 hover:border-[#E8293B] hover:text-[#E8293B] flex items-center justify-center shadow-lg transition-all z-20 hover:scale-105"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicator dots navigation */}
            <div className="flex justify-center flex-wrap gap-2 mt-8 max-w-full overflow-x-auto py-1">
              {Array.from({ length: Math.max(0, TESTIMONIALS.length - visibleCount + 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 transition-all rounded-full ${
                    currentIndex === i ? "w-8 bg-[#E8293B]" : "w-2 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.main>
  )
}
