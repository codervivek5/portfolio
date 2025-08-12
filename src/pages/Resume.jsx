import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaTools, FaTrophy, FaUsers, FaProjectDiagram } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Resume = () => {
  const contactInfo = {
    email: 'prajapativivek998@gmail.com',
    phone: '+917393017587',
    location: 'Kanpur, India',
    linkedin: 'https://linkedin.com/in/codervivek',
    github: 'https://github.com/codervivek5'
  }

  const education = [
    {
      year: '2020 - 2023',
      degree: 'Bachelor of Technology',
      institution: 'Maharana Pratap Engineering College, Kanpur (AKTU)',
      description: 'Computer Science and Engineering | CGPA: 7.2'
    },
    {
      year: '2018 - 2020',
      degree: 'Diploma',
      institution: 'Government Polytechnic Kanpur',
      description: 'Textile Technology | Aggregate: 68%'
    },
    {
      year: '2015 - 2017',
      degree: 'Higher Secondary',
      institution: 'SVM Inter college Fatehpur',
      description: 'UP Board | Aggregate: 85%'
    }
  ]

  const experience = [
    
    {
      year: 'July 2025 - Present',
      position: 'Data Scientist',
      company: 'Unimrkt Response',
      description: [
        'Developing an AI-driven chatbot leveraging LLMs, RAG (Retrieval-Augmented Generation), and LangChain for context-aware, intelligent conversations with real-time communication capabilities',
        'Implementing AI agents and MCP server integration for automated task execution and enhanced system interoperability',
        'Deploying scalable AI solutions on cloud infrastructure for high availability and performance optimization',
        'Tech Stack: Python, FastAPI, PostgreSQL, Azure, Docker, LangChain, RAG, LLMs'
      ]      
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Streamlit']
    },
    {
      category: 'Backend & AI',
      items: [
        'Python', 'Core Java', 'FastAPI', 'Django',
        'MongoDB', 'MySQL', 'LangChain', 'RAG', 'LLMs',
        'MCP Server', 'AI Agents'
      ]
    },
    {
      category: 'DevOps & Deployment',
      items: ['Docker', 'Azure', 'Git', 'Firebase', 'CI/CD Pipelines', 'Cloud Deployment']
    }
  ]
  

  const projects = [
    {
      title: 'VigyBag – Eco-Friendly E-commerce Platform',
      description: 'A full-stack e-commerce platform for selling eco-friendly products worldwide, featuring AI chatbot integration for customer support and seamless shopping experience.',      
      demoLink: 'https://www.vigybag.com/',
      githubLink: 'https://github.com/codervivek5/vigyBag/',
      technologies: ['React', 'Django', 'Python', 'MySQL', 'Tailwind CSS']
    },
    {
      title: 'Hotel Booking E-commerce Platform',
      description: 'Full-stack hotel booking and e-commerce platform with secure payment integration, data analytics, and user-friendly UI.',     
      demoLink: '#',
      githubLink: '#',
      technologies: ['React', 'Django', 'Python', 'MySQL', 'Tailwind CSS']
    },
    {
      title: 'Vasundhara Biofibers – Sustainable Product Website',
      description: 'Corporate website showcasing biodegradable tableware products, promoting sustainable living and reducing plastic waste.',      
      demoLink: 'https://www.vasundharabiofibers.com/',
      githubLink: '#',
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'Vite', 'NPM']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive personal portfolio showcasing projects, skills, and achievements with smooth animations and a professional UI.',       
      demoLink: 'https://portfolio-wheat-seven-86.vercel.app/',
      githubLink: 'https://github.com/codervivek5/portfolio/',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'RAG-Based AI ChatBot',
      description: 'An intelligent Retrieval-Augmented Generation chatbot using LangChain, LLMs, and OpenAI APIs with real-time communication, capable of context-aware responses and knowledge retrieval.',      
      demoLink: '#',
      githubLink: '#',
      technologies: ['LangChain', 'OpenAI', 'LLMs', 'Streamlit', 'Python']
    }
  ]
  

  const achievements = [
    {
      title: 'Project Admin – Open Source Connect India',
      description: 'Led and managed the open-source project "VigyBag", guiding contributors in developing eco-friendly e-commerce features, reviewing PRs, and ensuring project scalability'
    },
    {
      title: 'Project Lead – Girl Script Summer of Code (2023 & 2024)',
      description: 'Directed a team of 50+ contributors, reviewed and merged 70+ PRs, organized contributor onboarding sessions, and implemented best practices for open-source collaboration'
    },
    {
      title: 'Project Admin – JWOC 2023',
      description: 'Supervised contributors, performed code reviews, merged 20+ PRs, and improved project architecture for maintainability'
    },
    {
      title: 'Hackathon Participation',
      description: 'Participated in College Hackathon and Internal Smart India Hackathon (SIH), developed innovative prototypes under time constraints'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to multiple open-source projects involving AI chatbots, LLM integration, and data-driven applications using Python, FastAPI, and LangChain'
    },
    {
      title: 'AI Chatbot Development',
      description: 'Designed and deployed an AI-powered chatbot with RAG, LLMs, LangChain, and real-time communication, integrating cloud deployment and MCP server agents'
    }
  ]
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[2000px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VIVEK KUMAR
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 mb-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-white transition-colors">
              <MdEmail className="mr-2" />
              {contactInfo.email}
            </a>
            <span className="flex items-center">
              <MdPhone className="mr-2" />
              {contactInfo.phone}
            </span>
            <span className="flex items-center">
              <MdLocationOn className="mr-2" />
              {contactInfo.location}
            </span>
          </div>
          <div className="flex justify-center gap-4">
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
                  <p className="text-primary text-sm mb-1">{edu.year}</p>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{exp.position}</h3>
                  <p className="text-primary text-sm mb-1">{exp.year}</p>
                  <p className="text-gray-300 mb-1">{exp.company}</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
        >
          <div className="flex items-center mb-6">
            <FaTools className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaProjectDiagram className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
            </div>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:text-white transition-colors">
                    View Project →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-dark-light/50 backdrop-blur-xl rounded-xl p-6 border border-white/5"
          >
            <div className="flex items-center mb-6">
              <FaTrophy className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-white">Achievements</h2>
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2"></div>
                  <h3 className="text-lg font-medium text-white">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume 