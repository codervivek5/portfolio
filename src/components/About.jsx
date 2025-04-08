import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaUser } from 'react-icons/fa'
import Education from './Education'
import Experience from './Experience'

const About = () => {
  return (
    <section className="pt-20">
      {/* Personal Info Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
            >
              About Me
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              Passionate Full Stack Developer and Data Scientist with expertise in building modern web applications 
              and implementing machine learning solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-light/20 backdrop-blur-xl rounded-xl p-6 sm:p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-primary">
                  <FaUser className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
                  <p className="text-gray-400">
                    I'm a dedicated developer with a passion for creating innovative solutions. 
                    My journey in tech has equipped me with a diverse skill set spanning web development, 
                    mobile app creation, and data science.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Name:</span> Vivek Kumar
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Email:</span> prajapativivek998@gmail.com
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Location:</span> Kanpur, India
                  </p>
                  <p className="text-gray-400">
                    <span className="text-white font-medium">Availability:</span> Full-time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />
    </section>
  )
}

export default About 