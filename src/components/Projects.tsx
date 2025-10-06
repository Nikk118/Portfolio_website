import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'TalkNest',
    subtitle: 'Chat App',
    year: '2024',
    description: 'Real-time chat application with instant messaging capabilities. Built with Socket.IO for real-time communication, featuring user authentication, message history, and responsive design.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    liveDemo: 'https://chatapp-xn9n.onrender.com',
    github: 'https://github.com/Nikk118/chatApp',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Time Capsule',
    subtitle: 'Web App',
    year: '2024',
    description: 'Future email delivery application that allows users to schedule emails to be sent at a later date. Integrated Nodemailer for automated email delivery with user-friendly scheduling interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Nodemailer'],
    liveDemo: 'https://timecapsule-upg3.onrender.com',
    github: 'https://github.com/Nikk118/TimeCapsule',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Servielliance',
    subtitle: 'UrbanClap Clone',
    year: '2025',
    description: 'Full-stack service marketplace platform connecting service providers with customers. Features include booking management, JWT authentication, image uploads via Cloudinary, email notifications, and cancellation system.',
    tech: ['React', 'Vite', 'Tailwind', 'Zustand', 'JWT', 'Cloudinary', 'Multer', 'Nodemailer'],
    liveDemo: 'https://servielliance.onrender.com',
    github: 'https://github.com/Nikk118/Servilanc',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-3xl font-bold text-slate-900">
                          {project.title}
                        </h3>
                        <span className="text-slate-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-slate-600 font-medium mb-4">{project.subtitle}</p>
                      <p className="text-slate-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveDemo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors border-2 border-slate-200"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
