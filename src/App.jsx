import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Resume from './pages/Resume'
import Projects from './components/Projects'
import Service from './components/Service'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
