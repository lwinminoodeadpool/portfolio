import { motion } from 'motion/react';
import { Car, Video, Music, Utensils, Brain } from 'lucide-react';

const myInterests = [
  {
    title: "Cars",
    description: "Passionate about automotive engineering, design, and the thrill of driving.",
    icon: Car
  },
  {
    title: "Vlogs",
    description: "Creating and sharing video content to document experiences and tell stories.",
    icon: Video
  },
  {
    title: "Music & Guitars",
    description: "Playing the guitar and exploring rhythm, melodies, and musical expression.",
    icon: Music
  },
  {
    title: "Foods",
    description: "Exploring culinary delights, tasting new dishes, and appreciating gastronomy.",
    icon: Utensils
  },
  {
    title: "Artificial Intelligence",
    description: "Fascinated by AI advancements, machine learning, and the future of tech.",
    icon: Brain
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Interests() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">The Other Side</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Beyond the screen and the code, here are some of the things that keep me inspired and energized.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myInterests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-sm hover:border-white/30 transition-colors cursor-default"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{interest.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
