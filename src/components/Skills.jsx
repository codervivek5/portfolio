import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaApple,
  FaGitAlt, FaDocker, FaAndroid, FaJava, FaChartBar,
  FaFigma, FaPalette, FaTrello, FaJira, FaSlack, FaBook, FaCogs, FaVideo,
  FaDatabase, FaBrain,FaMicrosoft
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiDjango,
  SiKotlin,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiXcode,
  SiHuggingface,
  SiOpenai,
  SiLangchain,
  SiFastapi, 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, proficiency: 85 },
      { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, proficiency: 90 },
      { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, proficiency: 65 },
      { name: 'React', icon: <FaReact className="w-8 h-8" />, proficiency: 73 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, proficiency: 85 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Django', icon: <SiDjango className="w-8 h-8" />, proficiency: 70 },
      { name: 'Node.js', icon: <FaNode className="w-8 h-8" />, proficiency: 62 },
      { name: 'Python', icon: <FaPython className="w-8 h-8" />, proficiency: 75 },
      { name: 'Django Rest API', icon: <SiDjango className="w-8 h-8" />, proficiency: 55 },
      { name: 'FastAPI', icon: <SiFastapi className="w-8 h-8" />, proficiency: 65 },
      
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, proficiency: 38 },
      { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, proficiency: 75 },
      { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" />, proficiency: 55 },
      { name: 'Azure', icon: <FaMicrosoft className="w-8 h-8" />, proficiency: 38 }
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Android', icon: <FaAndroid className="w-8 h-8" />, proficiency: 39 },
      { name: 'iOS', icon: <FaApple className="w-8 h-8" />, proficiency: 43 },
      { name: 'Xcode', icon: <SiXcode className="w-8 h-8" />, proficiency: 68 },
      { name: 'Kotlin', icon: <SiKotlin className="w-8 h-8" />, proficiency: 35 }
    ]
  },
  {
    title: 'Data Science & GenAI',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="w-8 h-8" />, proficiency: 65 },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="w-8 h-8" />, proficiency: 52 },
      { name: 'Pandas', icon: <SiPandas className="w-8 h-8" />, proficiency: 50 },
      { name: 'NumPy', icon: <SiNumpy className="w-8 h-8" />, proficiency: 42 },
      { name: 'Matplotlib', icon: <FaChartBar className="w-8 h-8" />, proficiency: 75 },
      { name: 'LangChain', icon: <SiLangchain className="w-8 h-8" />, proficiency: 45 },
      { name: 'Transformers', icon: <SiHuggingface className="w-8 h-8" />, proficiency: 50 },
      { name: 'LLMs', icon: <SiOpenai className="w-8 h-8" />, proficiency: 55 },
      { name: 'Pinecone', icon: <FaBrain className="w-8 h-8" />, proficiency: 35 },
      { name: 'Vector DB', icon: <FaDatabase className="w-8 h-8" />, proficiency: 40 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', icon: <FaGitAlt className="w-8 h-8" />, proficiency: 92 },
      { name: 'Docker', icon: <FaDocker className="w-8 h-8" />, proficiency: 36 },
      { name: 'Figma', icon: <FaFigma className="w-8 h-8" />, proficiency: 78 },
      { name: 'Canva', icon: <FaPalette className="w-8 h-8" />, proficiency: 85 },
      { name: 'Jira', icon: <FaJira className="w-8 h-8" />, proficiency: 67 },
      { name: 'Notion', icon: <FaBook className="w-8 h-8" />, proficiency: 78 },
      { name: 'Postman', icon: <FaCogs className="w-8 h-8" />, proficiency: 75 }
    ]
  }
]

const Skills = () => {
  return (
    <section id="technologies" className="py-20 relative">
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
            Technical Skills
          </motion.h2>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-dark-light/20 backdrop-blur-xl rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }} 
                      className="group"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="text-primary group-hover:text-secondary transition-colors">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="h-2 bg-dark-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </motion.div>
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

export default Skills