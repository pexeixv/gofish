import type { Variants } from "motion/react"

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } 
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
}

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
}

export const staggerMed: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } }
}

export const revealFromLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } 
  }
}

export const revealFromBottom: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { 
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } 
  }
}

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" } 
  }
}

