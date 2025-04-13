import { motion } from 'framer-motion'
import Hero from './Hero'
import Skills from './Skills'
import Service from './Service'
import Works from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <Service />
      <Skills />
      <Works />
      <Contact />
    </main>
  )
}

export default Home 