import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-slate-900" />
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    Master of Computer Applications (MCA)
                  </h4>
                  <p className="text-slate-600">Indus University</p>
                  <p className="text-slate-500 text-sm">Pursuing, Expected 2027</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-slate-600">VNSGU</p>
                  <p className="text-slate-500 text-sm">CGPA 7.7/10 | 2022–2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-slate-900" />
                <h3 className="text-2xl font-bold text-slate-900">Professional Summary</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Passionate Full-Stack Developer skilled in <strong>JavaScript, Python, Java, and C++</strong>.
                Experienced in building scalable web applications using the <strong>MERN stack</strong>,
                REST APIs, authentication systems, and deployment on platforms like Render and Vercel.
                Strong foundation in <strong>OOP, Data Structures & Algorithms</strong>, and Agile methodologies.
                Also exploring <strong>Machine Learning</strong> with NumPy, Pandas, Matplotlib, and scikit-learn.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
