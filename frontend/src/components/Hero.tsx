import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-slate-600" />
            <p className="text-slate-600 text-sm">Umbergaon, Gujarat, India</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
            Nikhil Yagik
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack MERN Developer | MCA Student | Building Scalable Web Apps
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/Nikk118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nikhilyagik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nikhilyagik2004@gmail.com"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-lg border-2 border-slate-200"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
