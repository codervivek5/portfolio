import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'VigyBag - Eco friendly Ecommerce Platform',
    description: 'Full-stack e-commerce platform with React, Node.js, and MongoDB',
    image: '/project/vigybag.png',
    demoLink: 'https://www.vigybag.com/',
    githubLink: 'https://github.com/codervivek5/vigyBag/',
    technologies: ['React', 'Django', 'Python', 'Mysql', 'Tailwind CSS']
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with React, Node.js, and MongoDB',
    image: '/project/joyehotels.png',
    demoLink: '#',
    githubLink: '#',
    technologies: ['React', 'Django', 'Python', 'Mysql', 'Tailwind CSS']
  },
  {
    title: 'Vasundhara Biofibers',
    description: 'Development of eco-friendly tableware products using biodegradable materials to replace traditional plastic items.',
    image: '/project/vasundharabiofibers.png',
    demoLink: 'https://www.vasundharabiofibers.com/',
    githubLink: '#',
    technologies: ['JavaScript', 'Tailwind', 'HTML', "CSS", "NPM", "Vite", "React"]
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with React and Framer Motion',
    image: '/project/vivek_portfolio.png',
    demoLink: 'https://portfolio-wheat-seven-86.vercel.app/',
    githubLink: 'https://github.com/codervivek5/portfolio/',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'RAG Based ChatBot',
    description: 'Retrieval-Augmented Generation chatbot using LangChain, OpenAI APIs, and LLMs for enhanced real-time responses.',
    image: '/project/DORA.png',
    demoLink: '#',
    githubLink: '#',
    technologies: ['LangChain', 'Gemini', 'LLM', "Streamlit","Fast API", "Docker","RAG"]
  },
]

const Projects = () => {
  return (
    <section id="works" className="py-20 relative">
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
            Featured Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Explore my recent projects showcasing web development, mobile apps, and data science solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-dark-light/20 backdrop-blur-xl border border-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-dark-light text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 