
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-blue-500 text-white">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2 }}>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm a Product Designer</h1>
        <p className="text-lg mb-8">Creating intuitive and beautiful experiences</p>
        <a href="#projects" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg">
          See My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
