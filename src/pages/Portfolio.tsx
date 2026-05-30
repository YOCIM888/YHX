import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import { projects } from "@/data/mock"
import type { IdentityCategory, Project } from "@/data/types"

const categories: { key: IdentityCategory | "all"; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "ai", label: "AI" },
  { key: "editing", label: "剪辑" },
  { key: "design", label: "设计" },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<IdentityCategory | "all">("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            作品集
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-text-primary">
            创作档案
          </h1>
          <p className="mt-4 text-text-secondary font-body max-w-xl">
            每一个项目都是一次探索——无论是用算法解析世界，用镜头捕捉瞬间，还是用设计传递理念。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-sm font-body rounded-full border transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-accent/15 text-accent border-accent/30"
                  : "text-text-secondary border-border hover:border-border-light hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-border bg-bg-card/50 overflow-hidden hover:border-accent/30 transition-all duration-500 glow-border-hover"
              >
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-bg-primary/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-bg-card"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg-primary/80 text-text-secondary hover:text-text-primary transition-colors"
              >
                <X size={18} />
              </button>

              <div className="aspect-video">
                <img
                  src={selectedProject.cover}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-accent/10 text-accent">
                    {selectedProject.category === "ai"
                      ? "AI"
                      : selectedProject.category === "editing"
                        ? "剪辑"
                        : "设计"}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {selectedProject.year}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-text-secondary font-body leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
                    技术栈
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-text-secondary bg-bg-primary/50 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-body text-bg-primary bg-accent rounded-full hover:bg-accent-light transition-all duration-300"
                  >
                    查看项目
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
