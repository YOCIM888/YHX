import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useStore } from "@/store/useStore"

const navLinks = [
  { path: "/", label: "首页" },
  { path: "/portfolio", label: "作品集" },
  { path: "/blog", label: "博客" },
]

export default function Navbar() {
  const location = useLocation()
  const { mobileMenuOpen, setMobileMenuOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, setMobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-bold text-gradient">
              YHX
            </span>
            <span className="hidden sm:inline text-text-muted text-xs font-mono tracking-wider group-hover:text-text-secondary transition-colors">
              .STUDIO
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-body tracking-wide transition-colors duration-200 group"
              >
                <span
                  className={
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }
                >
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:yocim666@outlook.com"
              className="px-4 py-2 text-sm font-body text-accent border border-accent/30 rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
            >
              联系我
            </a>
          </div>

          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-body ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:yocim666@outlook.com"
                className="inline-block px-4 py-2 text-sm font-body text-accent border border-accent/30 rounded-full"
              >
                联系我
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
