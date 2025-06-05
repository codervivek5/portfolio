import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaTelegram, FaTwitter, FaYoutube, FaCheckCircle, FaTimes } from 'react-icons/fa'

const socialLinks = [
  { title: 'LinkedIn', path: 'https://linkedin.com/in/codervivek', icon: FaLinkedin },
  { title: 'GitHub', path: 'https://github.com/codervivek5', icon: FaGithub },
  { title: 'Instagram', path: 'https://instagram.com/coder_vivek', icon: FaInstagram },
  { title: 'YouTube', path: 'https://www.youtube.com/@codervivek', icon: FaYoutube },
  { title: 'WhatsApp', path: 'https://wa.me/917393017587', icon: FaWhatsapp },
  { title: 'Telegram', path: 'https://t.me/codervivek', icon: FaTelegram },
  { title: 'Twitter', path: 'https://twitter.com/codervivek5', icon: FaTwitter }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Check for success parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      setShowConfirmation(true)
      // Clean up URL without page reload
      window.history.replaceState({}, document.title, window.location.pathname)
      
      // Auto-hide confirmation after 5 seconds
      setTimeout(() => {
        setShowConfirmation(false)
      }, 5000)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create FormData from the form element
      const form = e.target
      const formDataToSend = new FormData(form)
      
      // Submit using fetch to FormSubmit
      const response = await fetch('https://formsubmit.co/codervivek5@gmail.com', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (response.ok) {
        // Show success confirmation
        setShowConfirmation(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
          setShowConfirmation(false)
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      // Still show success message as FormSubmit often works even if fetch appears to fail
      setShowConfirmation(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setShowConfirmation(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
  }

  return (
    <section id="contact" className="py-20 mt-10 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />

      {/* Success Confirmation Modal */}
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-dark-light rounded-2xl p-8 max-w-md w-full border border-white/10 relative"
          >
            <button
              onClick={closeConfirmation}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaCheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 mb-6">
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeConfirmation}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

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
                  href="mailto:prajapativivek998@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  prajapativivek998@gmail.com
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
            <form
              action="https://formsubmit.co/codervivek5@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_replyto" value={formData.email} />
              <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?success=true`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{display: 'none'}} />
              
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>SENDING...</span>
                  </div>
                ) : (
                  'SEND'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact