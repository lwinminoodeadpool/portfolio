import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    <div className="min-h-screen bg-[#2F4156] font-sans text-white selection:bg-white/20">
      
      {/* Sticky Navigation / Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2F4156]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">LMO</div>
          
          <div className="bg-black/20 backdrop-blur-xl border border-white/5 p-1 rounded-full flex items-center shadow-inner relative">
            <button
              onClick={() => setIsOtherSide(false)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isOtherSide 
                  ? 'bg-white/15 border border-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md' 
                  : 'text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <User className="w-4 h-4" />
              Professional
            </button>
            <button
              onClick={() => setIsOtherSide(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isOtherSide 
                  ? 'bg-white/15 border border-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md' 
                  : 'text-gray-400 hover:text-white border border-transparent'
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
