import { motion } from 'framer-motion';

const projects = [
  { name: 'Project 1', description: 'Product design for an e-commerce site' },
  { name: 'Project 2', description: 'UX redesign for a mobile app' },
  { name: 'Project 3', description: 'Web design for a startup' }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
