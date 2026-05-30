import { motion } from "framer-motion"
import { Brain, Film, Palette } from "lucide-react"
import { identities } from "@/data/mock"
import { useStore } from "@/store/useStore"
import type { IdentityCategory } from "@/data/types"

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={28} />,
  film: <Film size={28} />,
  palette: <Palette size={28} />,
}

export default function IdentityCards() {
  const { activeIdentity, setActiveIdentity } = useStore()

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            01 / 身份
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text-primary">
            三重身份，一个灵魂
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {identities.map((identity, i) => {
            const isActive = activeIdentity === identity.key
            return (
              <motion.div
                key={identity.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onMouseEnter={() => setActiveIdentity(identity.key)}
                onMouseLeave={() => setActiveIdentity(null)}
                className={`relative group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isActive
                    ? "border-accent/40 glow-border bg-bg-card"
                    : "border-border bg-bg-card/50 hover:border-border-light"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${identity.color}08 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="p-3 rounded-xl transition-colors duration-300"
                      style={{
                        backgroundColor: `${identity.color}15`,
                        color: isActive ? identity.color : undefined,
                      }}
                    >
                      {iconMap[identity.icon]}
                    </div>
                    <span className="text-xs font-mono text-text-muted tracking-wider">
                      {identity.labelEn}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-display font-bold mb-3 transition-colors duration-300"
                    style={{ color: isActive ? identity.color : undefined }}
                  >
                    {identity.label}
                  </h3>

                  <motion.p
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-text-secondary font-body leading-relaxed overflow-hidden"
                  >
                    {identity.description}
                  </motion.p>

                  <div
                    className="mt-4 h-px transition-all duration-500"
                    style={{
                      background: isActive
                        ? `linear-gradient(to right, ${identity.color}60, transparent)`
                        : "linear-gradient(to right, #2a2a3e, transparent)",
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
