import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Led development of enterprise applications using React, Node.js, and AWS. Improved system performance by 40%.",
    skills: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2020 - 2022",
    description: "Developed and maintained multiple web applications. Implemented CI/CD pipelines and automated testing.",
    skills: ["React", "Express.js", "PostgreSQL", "Docker", "Jest"]
  },
  {
    title: "Frontend Developer",
    company: "Web Innovators",
    period: "2018 - 2020",
    description: "Created responsive web interfaces and improved user experience. Reduced load time by 60%.",
    skills: ["JavaScript", "React", "CSS", "Webpack", "Redux"]
  }
]

const Experience = () => {
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark/80 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
          >
            Experience
          </motion.h2>
          <p className="text-gray-400">My professional journey</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 md:mb-16 last:mb-0"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-dark border-4 border-primary transform -translate-x-1/2 z-10" />
                
                {/* Date - Mobile */}
                <div className="md:hidden text-primary font-medium mb-4">
                  {exp.period}
                </div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-dark-light/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 h-full">
                    {/* Date - Desktop */}
                    <div className={`hidden md:block text-primary font-medium mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-gray-400 mb-4">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 