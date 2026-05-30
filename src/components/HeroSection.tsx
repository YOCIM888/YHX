import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { identities } from "@/data/mock"

const titles = identities.map((i) => i.label)

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const nameLetters = "YHX".split("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono text-accent/80 border border-accent/20 rounded-full tracking-widest uppercase">
            Digital Studio
          </span>
        </motion.div>

        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.15,
                ease: "easeOut",
              }}
              className="font-display text-7xl md:text-9xl lg:text-[10rem] font-black text-gradient leading-none"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <motion.span
            key={currentTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg md:text-xl font-body text-text-secondary tracking-wider"
          >
            {titles[currentTitle]}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-lg mx-auto text-text-muted text-sm md:text-base font-body leading-relaxed mb-12"
        >
          游走于代码与像素之间，用AI构建智能，用镜头讲述故事，用设计传递美感
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#works"
            className="px-6 py-3 text-sm font-body text-bg-primary bg-accent rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            查看作品
          </a>
          <a
            href="#about"
            className="px-6 py-3 text-sm font-body text-text-primary border border-border rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300"
          >
            了解更多
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
