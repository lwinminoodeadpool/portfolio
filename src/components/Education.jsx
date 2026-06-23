import { motion } from 'framer-motion';

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

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-4">{edu.institution}</p>
              <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-500 rounded-full">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
