import { motion } from 'motion/react';

const educations = [
  {
    institution: "UNIVERSITY OF GREENWICH",
    degree: "BSc. (Hons) Computing",
    period: "June 2019 – June 2020",
  },
  {
    institution: "NCC EDUCATION / MCC.I",
    degree: "Level 5 Diploma in Computing",
    period: "June 2018 – June 2019",
  },
  {
    institution: "NCC EDUCATION / MCC.I",
    degree: "Level 4 Diploma in Computing",
    period: "June 2017 – June 2018",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } }
};

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12 tracking-tight">
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              key={index} 
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-4">{edu.institution}</p>
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/10 text-xs font-medium text-gray-300 rounded-full">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
