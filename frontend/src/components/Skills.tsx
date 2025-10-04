import { motion } from 'framer-motion';
import { 
  SiReact, SiExpress, SiMongodb, SiTailwindcss,
  SiHtml5, SiCss3, SiBootstrap, SiGit, SiGithub, SiPostman,
  SiJavascript, SiTypescript, SiPython, SiJsonwebtokens, SiCloudinary
} from 'react-icons/si';
import { FaNodeJs, FaDatabase, FaJava, FaRobot, FaCode } from 'react-icons/fa';

const skills = [
  { name: 'React.js', icon: <SiReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
  { name: 'Git', icon: <SiGit className="text-orange-600" /> },
  { name: 'GitHub', icon: <SiGithub className="text-gray-900" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'C++', icon: <FaCode className="text-blue-500" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-purple-500" /> },
  { name: 'Cloudinary', icon: <SiCloudinary className="text-blue-400" /> },
  { name: 'Machine Learning', icon: <FaRobot className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <p className="text-slate-900 font-medium text-center text-sm">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
