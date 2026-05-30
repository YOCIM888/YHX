import { Github, Twitter, Mail } from "lucide-react"
import { profile } from "@/data/mock"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-gradient">
              YHX
            </span>
            <span className="text-text-muted text-xs font-mono">
              © {new Date().getFullYear()}
            </span>
          </div>

          <p className="text-text-muted text-sm text-center font-body">
            代码 · 镜头 · 像素 — 三位一体的创作空间
          </p>

          <div className="flex items-center gap-4">
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <Github size={18} />
              </a>
            )}
            {profile.socialLinks.twitter && (
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
            )}
            {profile.socialLinks.email && (
              <a
                href={profile.socialLinks.email}
                className="text-text-muted hover:text-accent transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
