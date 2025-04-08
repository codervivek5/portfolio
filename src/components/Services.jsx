import { motion } from 'framer-motion'
import { 
  FaCode, FaMobile, FaDatabase, 
  FaChartLine, FaCloud, FaTools 
} from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies like React, Node.js, and Python. Creating responsive, scalable, and performant applications with clean code practices.',
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'REST APIs']
  },
  {
    icon: <FaMobile className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Native Android application development using Kotlin and Java. Building user-friendly, feature-rich mobile apps with modern UI/UX practices and optimal performance.',
    technologies: ['Android', 'Kotlin', 'Java', 'Firebase', 'RESTful APIs']
  },
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Database Architecture',
    description: 'Designing and implementing efficient database solutions. Creating scalable data models, optimizing queries, and ensuring data security and integrity.',
    technologies: ['MongoDB', 'MySQL', 'Firebase', 'Data Modeling', 'Query Optimization']
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Data Science Solutions',
    description: 'Implementing machine learning models and data analysis solutions. Transforming raw data into actionable insights using advanced analytics and visualization.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Analysis', 'ML Models']
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    title: 'Cloud Integration',
    description: 'Deploying and managing applications on cloud platforms. Setting up CI/CD pipelines, containerization, and ensuring scalable infrastructure.',
    technologies: ['AWS', 'Docker', 'CI/CD', 'Cloud Architecture', 'DevOps']
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Technical Consultation',
    description: 'Providing expert technical guidance for your projects. Offering solutions for architecture design, technology selection, and best practices implementation.',
    technologies: ['Architecture Design', 'Tech Stack Selection', 'Code Review', 'Performance Optimization']
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            My Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your technical needs, from web development to data science
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-light/20 backdrop-blur-xl rounded-xl p-6 border border-white/10 group hover:border-primary/50 transition-colors"
              >
                <div className="text-primary group-hover:text-secondary transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-dark-light text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 