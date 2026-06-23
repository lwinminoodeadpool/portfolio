import { motion } from 'motion/react';
import { Download, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } }
};

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        <motion.img
          variants={itemVariants}
          src="/lmo.jpg"
          alt="Lwin Min Oo"
          className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto mb-8 border-4 border-[#2F4156]"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Lwin Min Oo
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-blue-200 font-medium tracking-wide mb-6 uppercase">
          Digital Products Manager
        </motion.h2>
        
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-10 text-lg">
          Results-driven Digital Product Manager with a strong foundation in software engineering and over 4 years of experience in the tech industry. Specializing in the FinTech sector, adept at translating complex business requirements into scalable, user-centric products.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Yangon, Myanmar</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+95 9756239247</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>mglwinminnoo@gmail.com</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/Lwin Min Oo resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#2F4156] rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lwinminoo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors shadow-sm"
          >
            <ExternalLink className="w-5 h-5" />
            LinkedIn Profile
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
