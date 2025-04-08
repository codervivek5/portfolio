import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Service from './components/Service'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-20">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Designed & Built by{' '}
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              CoderVivek
            </a>
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}

export default App
