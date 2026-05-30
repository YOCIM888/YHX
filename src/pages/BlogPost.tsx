import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { blogPosts } from "@/data/mock"

const categoryLabels: Record<string, string> = {
  tech: "技术",
  design: "设计",
  essay: "随笔",
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = useMemo(() => blogPosts.find((p) => p.id === id), [id])

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
            文章未找到
          </h1>
          <p className="text-text-secondary font-body mb-8">
            你访问的文章不存在或已被移除。
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent font-body hover:text-accent-light transition-colors"
          >
            <ArrowLeft size={16} />
            返回博客
          </Link>
        </div>
      </main>
    )
  }

  const contentSections = post.content.split("\n\n")

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-secondary font-body hover:text-accent transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={16} />
            返回博客
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-accent/10 text-accent">
                {categoryLabels[post.category]}
              </span>
              <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                <Clock size={12} />
                {post.readTime} 分钟
              </span>
              <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                <Calendar size={12} />
                {post.date}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-12 border border-border">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose-custom"
        >
          {contentSections.map((section, i) => {
            const trimmed = section.trim()
            if (!trimmed) return null

            if (trimmed.startsWith("# ")) {
              return (
                <h1
                  key={i}
                  className="font-display text-3xl font-bold text-text-primary mt-12 mb-6"
                >
                  {trimmed.slice(2)}
                </h1>
              )
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl font-bold text-text-primary mt-10 mb-4"
                >
                  {trimmed.slice(3)}
                </h2>
              )
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="font-display text-xl font-bold text-text-primary mt-8 mb-3"
                >
                  {trimmed.slice(4)}
                </h3>
              )
            }
            if (trimmed.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-accent/50 pl-6 py-2 my-8 text-text-secondary font-body italic"
                >
                  {trimmed.slice(2)}
                </blockquote>
              )
            }
            if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").filter(Boolean)
              const isOrdered = trimmed.startsWith("1. ")
              const ListTag = isOrdered ? "ol" : "ul"
              return (
                <ListTag
                  key={i}
                  className={`my-4 space-y-2 font-body text-text-secondary ${
                    isOrdered ? "list-decimal pl-6" : "list-disc pl-6"
                  }`}
                >
                  {items.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item.replace(/^[\d]+\.\s|^-\s/, "")}
                    </li>
                  ))}
                </ListTag>
              )
            }

            return (
              <p
                key={i}
                className="text-text-secondary font-body leading-relaxed my-4"
              >
                {trimmed}
              </p>
            )
          })}
        </motion.article>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono text-text-muted bg-bg-card border border-border rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-body text-text-primary border border-border rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300"
          >
            <ArrowLeft size={16} />
            返回全部文章
          </Link>
        </div>
      </div>
    </main>
  )
}
