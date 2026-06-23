import { motion } from 'framer-motion';
import { Camera, Gamepad2, Plane, Coffee, Music, BookOpen } from 'lucide-react';

const defaultInterests = [
  {
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling through my camera lens.",
    icon: Camera
  },
  {
    title: "Gaming",
    description: "Strategic problem solving and immersing in interactive digital worlds.",
    icon: Gamepad2
  },
  {
    title: "Traveling",
    description: "Exploring new cultures, architectures, and expanding my worldview.",
    icon: Plane
  },
  {
    title: "Coffee Culture",
    description: "Appreciating the craft of specialty coffee and cafe atmospheres.",
    icon: Coffee
  },
  {
    title: "Music Production",
    description: "Experimenting with sound design and creating digital music tracks.",
    icon: Music
  },
  {
    title: "Reading",
    description: "Continuously learning through technology blogs, sci-fi, and design books.",
    icon: BookOpen
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
            (Placeholders - to be customized later)
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
