import HeroSection from "@/components/HeroSection"
import IdentityCards from "@/components/IdentityCards"
import FeaturedWorks from "@/components/FeaturedWorks"
import LatestPosts from "@/components/LatestPosts"
import AboutMe from "@/components/AboutMe"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IdentityCards />
      <FeaturedWorks />
      <LatestPosts />
      <AboutMe />
    </main>
  )
}
