export interface Project {
  id: string
  title: string
  category: "ai" | "editing" | "design"
  cover: string
  description: string
  techStack: string[]
  link?: string
  year: number
  featured?: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  cover: string
  category: "tech" | "design" | "essay"
  tags: string[]
  date: string
  readTime: number
}

export interface Profile {
  name: string
  titles: string[]
  bio: string
  avatar: string
  skills: string[]
  socialLinks: {
    github?: string
    twitter?: string
    email?: string
    bilibili?: string
  }
}

export type IdentityCategory = "ai" | "editing" | "design"

export interface Identity {
  key: IdentityCategory
  label: string
  labelEn: string
  icon: string
  description: string
  color: string
}
