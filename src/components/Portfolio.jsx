import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Project 1',
    description: 'Website Coding HTML, CSS, JS',
    image: '/project1.jpg',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Website Coding HTML, CSS, JS',
    image: '/project2.jpg',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Website Coding HTML, CSS, JS',
    image: '/project3.jpg',
    link: '#'
  },
  {
    title: 'Project 4',
    description: 'Website Coding HTML, CSS, JS',
    image: '/project4.jpg',
    link: '#'
  },
  {
    title: 'Project 5',
    description: 'Website Coding HTML, CSS, JS',
    image: '/project5.jpg',
    link: '#'
  },
  {
    title: 'Project 6',
    description: 'Website Coding HTML, CSS, JS',
    image: '/project6.jpg',
    link: '#'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">PORTFOLIO</h2>
          <p className="text-gray-400">Check out some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-white transition-colors"
                  >
                    View Project <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio 