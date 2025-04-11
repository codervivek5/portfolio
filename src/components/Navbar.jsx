import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
// import profileImg from '../assets/profile.jpg' // You'll need to add your image to this location

const menuItems = [
  { title: 'HOME', path: '/' },
  { title: 'RESUME', path: '/about' },
  { title: 'WORKS', path: '/works' },
  { title: 'SERVICE', path: '/service' },
  { title: 'CONTACT', path: '/contact' }
]

const socialLinks = [
  { title: 'GitHub', path: 'https://github.com/yourusername', icon: 'github.svg' },
  { title: 'LinkedIn', path: 'https://linkedin.com/in/yourusername', icon: 'linkedin.svg' },
  { title: 'Twitter', path: 'https://twitter.com/yourusername', icon: 'twitter.svg' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-dark/75 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-primary/5'
            : 'bg-transparent'
          }`}
      >
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center"
            >
              <Link to="/" className="flex items-center">
                {/* Logo Text */}
                <Logo/>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {menuItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm tracking-wider transition-colors rounded-lg group overflow-hidden ${location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    <span className="relative z-10">{item.title}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative z-50 p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'linear-gradient(to right, rgba(255,27,107,0.1), rgba(69,202,255,0.1))',
              }}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  className="absolute w-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  animate={{
                    top: isOpen ? "50%" : "0%",
                    rotate: isOpen ? 45 : 0,
                    translateY: isOpen ? "-50%" : 0
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span
                  className="absolute top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    translateY: "-50%"
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span
                  className="absolute w-6 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  animate={{
                    bottom: isOpen ? "50%" : "0%",
                    rotate: isOpen ? -45 : 0,
                    translateY: isOpen ? "50%" : 0
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-[280px] sm:w-[300px] bg-dark-light/95 backdrop-blur-xl z-50 shadow-xl shadow-primary/5 border-l border-white/5"
            >
              <div className="flex flex-col p-6 sm:p-8 h-full">
                <div className="flex justify-end mb-6 sm:mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-white/5"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div key={item.title}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 text-base sm:text-lg font-medium rounded-lg transition-all ${location.pathname === item.path
                            ? 'text-white bg-white/5'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative overflow-hidden"
                        >
                          <span className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {item.title}
                          </span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-auto">
                  <div className="h-px bg-gradient-to-r from-primary/20 via-white/5 to-secondary/20 my-6"></div>
                  <div className="flex justify-center space-x-4 sm:space-x-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.title}
                        href={social.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                      >
                        {social.title}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar