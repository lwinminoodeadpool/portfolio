import { motion } from 'framer-motion';
import { Car, Video, Music, Utensils, Brain } from 'lucide-react';

const defaultInterests = [
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

export default function Interests() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">The Other Side</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Beyond the screen and the code, here are some of the things that keep me inspired and energized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultInterests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{interest.title}</h3>
                <p className="text-gray-500 leading-relaxed">
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
