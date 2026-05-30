import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { projects } from "@/data/mock"

const featuredProjects = projects.filter((p) => p.featured)

export default function FeaturedWorks() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 400
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section id="works" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              02 / 作品
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text-primary">
              精选作品
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 lg:px-8 pb-4 snap-x snap-mandatory mask-fade-right"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex-shrink-0 w-4" />
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-[340px] md:w-[420px] snap-start"
          >
            <div className="group relative rounded-2xl overflow-hidden border border-border bg-bg-card/50 hover:border-accent/30 transition-all duration-500 glow-border-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-accent/10 text-accent">
                    {project.category === "ai"
                      ? "AI"
                      : project.category === "editing"
                        ? "剪辑"
                        : "设计"}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-text-secondary font-body line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono text-text-muted bg-bg-primary/50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex-shrink-0 w-4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-body text-accent hover:text-accent-light transition-colors duration-200 group"
        >
          查看全部作品
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  )
}
