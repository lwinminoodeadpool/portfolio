import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Front-End Development",
    skills: ["React.js", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Back-End Development",
    skills: ["Node.js", "Express", "PHP (Laravel)", "C#", ".NET"]
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB", "Firebase"]
  },
  {
    title: "Low-Code Platforms",
    skills: ["Power Apps", "Backendless"]
  },
  {
    title: "Tools & Other",
    skills: ["Microsoft Office", "Adobe Photoshop", "Content Writing", "Chatbot Development"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
