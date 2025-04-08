import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa'

const socialLinks = [
  { title: 'LinkedIn', path: 'https://linkedin.com/in/yourusername', icon: FaLinkedin },
  { title: 'GitHub', path: 'https://github.com/yourusername', icon: FaGithub },
  { title: 'Instagram', path: 'https://instagram.com/yourusername', icon: FaInstagram },
  { title: 'WhatsApp', path: 'https://wa.me/yournumber', icon: FaWhatsapp },
  { title: 'Telegram', path: 'https://t.me/yourusername', icon: FaTelegram }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DO YOU HAVE A PROJECT TO DISCUSS?
              </h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-semibold text-white"
              >
                GET IN TOUCH
              </motion.h3>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">CONTACT</h4>
                <a 
                  href="mailto:web.smith.xyz@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  web.smith.xyz@gmail.com
                </a>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">SOCIAL MEDIA</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.title}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-10 h-10 rounded-lg bg-dark-light/50 hover:bg-dark-light flex items-center justify-center group transition-colors"
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-light/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-medium text-white mb-6">CONTACT FORM</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-dark-light/50 border border-white/10 focus:border-primary text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-dark-light/50 border border-white/10 focus:border-primary text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-dark-light/50 border border-white/10 focus:border-primary text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 focus:ring-2 focus:ring-primary/50 transition-all"
              >
                SEND
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
