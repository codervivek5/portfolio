import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
        <span className="text-white font-bold text-lg">VK</span>
      </div>
      <span className="text-white font-bold text-xl">Vivek Kumar</span>
    </motion.div>
  )
}

export default Logo 