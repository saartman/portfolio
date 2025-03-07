import { motion } from 'framer-motion';

const skills = [
  'UX Design', 'UI Design', 'Wireframing', 'Prototyping', 'User Testing'
];

const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-blue-500 text-white p-6 rounded-full"
          >
            <p>{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
