import { motion } from 'motion/react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12 tracking-tight">
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div variants={itemVariants} key={index}>
              <h3 className="text-lg font-medium text-white mb-4 pb-2 border-b border-white/10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/5 text-gray-200 text-sm rounded-lg border border-white/10 hover:bg-white/10 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
