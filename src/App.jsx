import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import ContactFooter from './components/ContactFooter';

function App() {
  const [isOtherSide, setIsOtherSide] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      
      {/* Sticky Navigation / Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">LMO</div>
          
          <div className="bg-gray-100 p-1 rounded-full flex items-center shadow-inner">
            <button
              onClick={() => setIsOtherSide(false)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !isOtherSide ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <User className="w-4 h-4" />
              Professional
            </button>
            <button
              onClick={() => setIsOtherSide(true)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                isOtherSide ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Other Side
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        
        <AnimatePresence mode="wait">
          {!isOtherSide ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Experience />
              <Skills />
              <Education />
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Interests />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
