import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/pages/Home"
import Portfolio from "@/pages/Portfolio"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary font-body">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
