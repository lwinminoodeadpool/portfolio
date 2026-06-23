import { motion } from 'motion/react';

const experiences = [
  {
    company: "KBZPay Mini Apps/KBZ Bank",
    role: "Digital Products Manager",
    period: "Jul 2025 - Present",
    points: [
      "Authored and finalized BRD/FRD for all proprietary mini-app developments.",
      "Managed development execution as the Primary Point of Contact (PIC), ensuring clear communication between business and tech teams.",
      "Drove timely project completion by meticulously tracking and managing developer task deadlines.",
      "Facilitated project clarity by creating and presenting detailed new feature demonstrations.",
      "Developed internal departmental tools to enhance operational efficiency and workflows."
    ]
  },
  {
    company: "AYA Pay/AYA Bank",
    role: "Technical Operations Engineer",
    period: "Oct 2022 - Jun 2025",
    points: [
      "Spearheaded biller integration and development, ensuring seamless API integration with external clients.",
      "Collaborated with business teams to gather requirements and deliver tailored solutions for online merchant integration.",
      "Managed multilingual system deployment, enhancing user experience across diverse markets.",
      "Conducted biller testing and client consultations to ensure system functionality and alignment with business goals."
    ]
  },
  {
    company: "United Pharma Myanmar",
    role: "IT Supervisor",
    period: "May 2022 - Aug 2022",
    points: [
      "Supervised IT operations, ensuring system stability and security.",
      "Led system/application development projects, delivering solutions on time and within budget."
    ]
  },
  {
    company: "BLife - MICT Park",
    role: "System Analyst / Software Developer",
    period: "Jun 2020 - Jan 2022",
    points: [
      "Designed and developed web applications using React.js, Node.js, and PHP (Laravel framework).",
      "Enhanced POS systems and implemented data management solutions to streamline operations.",
      "Provided user support and training programs to ensure effective system adoption."
    ]
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Experience() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-12 tracking-tight">
          Work Experience
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div variants={itemVariants} key={index} className="relative pl-8 md:pl-0 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-sm text-gray-400 font-medium tracking-wide">
                  {exp.period}
                </div>
              </div>
              <ul className="list-none space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="mr-3 text-white/20 mt-1.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
