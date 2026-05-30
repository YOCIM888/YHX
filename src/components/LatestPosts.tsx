import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { blogPosts } from "@/data/mock"

const latestPosts = blogPosts.slice(0, 3)

const categoryLabels: Record<string, string> = {
  tech: "技术",
  design: "设计",
  essay: "随笔",
}

export default function LatestPosts() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              03 / 博客
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text-primary">
              最新文章
            </h2>
          </div>

          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-body text-accent hover:text-accent-light transition-colors duration-200 group"
          >
            全部文章
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group block h-full rounded-2xl border border-border bg-bg-card/50 overflow-hidden hover:border-accent/30 transition-all duration-500 glow-border-hover"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-accent/10 text-accent">
                      {categoryLabels[post.category]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                      <Clock size={12} />
                      {post.readTime} 分钟
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-text-secondary font-body line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs text-text-muted font-mono">
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-accent"
          >
            查看全部文章
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
