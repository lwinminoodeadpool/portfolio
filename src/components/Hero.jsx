import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/lmo.jpg"
          alt="Lwin Min Oo"
          className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto mb-8 border-4 border-white"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
          Lwin Min Oo
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide mb-6 uppercase">
          Digital Products Manager
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-10 text-lg">
          Results-driven Digital Product Manager with a strong foundation in software engineering and over 4 years of experience in the tech industry. Specializing in the FinTech sector, adept at translating complex business requirements into scalable, user-centric products.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-500">
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
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Lwin Min Oo resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-md"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/lwinminoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            <ExternalLink className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
}
