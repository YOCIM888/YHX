import { motion } from "framer-motion"
import { Github, Twitter, Mail, ExternalLink } from "lucide-react"
import { profile } from "@/data/mock"

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            04 / 关于
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text-primary">
            关于我
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-bg-card border border-accent/30 rounded-xl">
                <span className="font-display text-sm font-bold text-gradient">
                  {profile.name}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              {profile.socialLinks.github && (
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-300"
                >
                  <Github size={18} />
                </a>
              )}
              {profile.socialLinks.twitter && (
                <a
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
              )}
              {profile.socialLinks.email && (
                <a
                  href={profile.socialLinks.email}
                  className="p-3 rounded-xl border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-text-primary font-body leading-relaxed mb-8">
              {profile.bio}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-mono text-accent tracking-wider uppercase mb-4">
                技能栈
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="px-3 py-1.5 text-xs font-mono text-text-secondary bg-bg-card border border-border rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-bg-card/30">
              <div className="flex items-center gap-2 mb-3">
                <ExternalLink size={14} className="text-accent" />
                <span className="text-sm font-mono text-accent">
                  合作咨询
                </span>
              </div>
              <p className="text-sm text-text-secondary font-body">
                如果你有项目合作、技术交流或任何有趣的想法，欢迎随时联系我。
              </p>
              <a
                href="mailto:yocim666@outlook.com"
                className="inline-block mt-4 px-5 py-2.5 text-sm font-body text-bg-primary bg-accent rounded-full hover:bg-accent-light transition-all duration-300"
              >
                发送邮件
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
