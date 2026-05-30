import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { blogPosts } from "@/data/mock"

const categoryFilters: { key: string; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "tech", label: "技术" },
  { key: "design", label: "设计" },
  { key: "essay", label: "随笔" },
]

const categoryLabels: Record<string, string> = {
  tech: "技术",
  design: "设计",
  essay: "随笔",
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

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
            博客
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-text-primary">
            思考与记录
          </h1>
          <p className="mt-4 text-text-secondary font-body max-w-xl">
            关于AI、设计与创作的思考碎片。写下来，是为了想得更清楚。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 mb-10"
        >
          {categoryFilters.map((cat) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group flex flex-col h-full rounded-2xl border border-border bg-bg-card/50 overflow-hidden hover:border-accent/30 transition-all duration-500 glow-border-hover"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-accent/10 text-accent">
                      {categoryLabels[post.category]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                      <Clock size={12} />
                      {post.readTime} 分钟
                    </span>
                    <span className="text-xs text-text-muted font-mono">
                      {post.date}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-sm text-text-secondary font-body line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono text-text-muted bg-bg-primary/50 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm text-accent font-body group-hover:gap-2 transition-all duration-300">
                    阅读全文
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
