import { create } from "zustand"
import type { IdentityCategory } from "@/data/types"

interface AppState {
  activeIdentity: IdentityCategory | null
  setActiveIdentity: (identity: IdentityCategory | null) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  activeIdentity: null,
  setActiveIdentity: (identity) => set({ activeIdentity: identity }),
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}))
