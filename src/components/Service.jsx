import { motion } from 'framer-motion'
import {
  FaCode, FaMobile, FaDatabase,
  FaChartLine, FaCloud, FaTools
} from 'react-icons/fa'

const services = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Generative AI & Data Intelligence',
    description: 'Building advanced AI solutions with LLMs, RAG pipelines, and real-time analytics. Leveraging LangChain, MCP servers, and AI agents to deliver context-aware, human-like responses and intelligent automation.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'Vector DBs','LLMs', 'RAG', 'Streamlit', 'FastAPI', 'MCP Server', 'AI Agents']
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: 'Full Stack Development',
    description: 'Designing and delivering end-to-end web applications with modern stacks, integrating AI features, real-time communication, and scalable backend services. Experienced in building responsive, high-performance, and maintainable solutions with clean code practices.',
    technologies: [
      'React', 'Node.js', 'Python', 'REST APIs', 'Django', 'Django REST Framework',
      'FastAPI', 'Tailwind CSS', 'Docker', 'Cloud Deployment'
    ]
  },
    
  // {
  //   icon: <FaMobile className="w-8 h-8" />,
  //   title: 'Mobile App Development',
  //   description: 'Native Android application development using Kotlin and Java. Building user-friendly, feature-rich mobile apps with modern UI/UX practices and optimal performance.',
  //   technologies: ['Android', 'Kotlin', 'Java', 'Firebase', 'RESTful APIs']
  // },
  {
  icon: <FaDatabase className="w-8 h-8" />,
  title: 'Database Architecture & Engineering',
  description: 'Designing robust, secure, and high-performance database systems. Specializing in scalable data models, optimized queries, and maintaining data integrity for large-scale applications.',
  technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Data Modeling', 'Query Optimization', 'Database Security']
},
  
{
  icon: <FaCloud className="w-8 h-8" />,
  title: 'Cloud Deployment, DevOps & AI Infrastructure',
  description: 'Deploying and managing real-time AI applications on cloud platforms with CI/CD automation, containerization, and scalable architectures. Experienced in integrating MCP servers, AI agents, and ensuring high availability for production-grade AI systems.',
  technologies: ['AWS', 'GCP', 'Azure Portal','Azure DevOps', 'Docker', 'CI/CD', 'Cloud Architecture']
},
{
  icon: <FaTools className="w-8 h-8" />,
  title: 'Technical & Open-Source Consulting',
  description: 'Advising on system architecture, tech stack choices, and best practices. Mentoring open-source contributors and optimizing performance for production-ready solutions.',
  technologies: ['Architecture Design', 'Tech Stack Selection', 'Code Review', 'Performance Optimization', 'Open-Source Mentorship', 'Career Development', 'Technical Interview Preparation']
}

]

const Service = () => {
  return (
    <section id="service" className="py-20 relative">
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
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
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

export default Service 