import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaPhone } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl text-primary font-medium">Hello, I'm</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Vivek Kumar
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                Full Stack Developer & Android Developer
              </h2>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-gray-400">
              <a href="mailto:prajapativivek998@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaEnvelope className="text-primary" />
                prajapativivek998@gmail.com
              </a>
              <a href="tel:+917393017587" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhone className="text-primary" />
                +91 7393017587
              </a>
            </div>

            {/* Brief Introduction */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Passionate Full Stack Developer with expertise in web and Android development. 
              Experienced in building modern web applications and mobile solutions. 
              Open-source contributor and project lead with a track record of managing successful projects.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML", "CSS", "JavaScript", "React",
                  "Core Java", "MongoDB", "MySQL",
                  "Git", "Android", "Kotlin",
                  "Firebase", "Django"
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-300 border border-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                Get in Touch
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-dark-light/50 text-white font-medium border border-white/10 hover:bg-dark-light/70 transition-colors flex items-center gap-2"
              >
                <FaDownload className="text-primary" />
                Download CV
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:sticky lg:top-20"
          >
            <div className="aspect-square rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 absolute inset-0 blur-3xl" />
            <div className="relative">
              {/* You can add your profile image or a related illustration here */}
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 p-8">
                <div className="w-full h-full rounded-xl bg-dark-light/50 backdrop-blur-xl flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 