export default function ContactFooter() {
  return (
    <footer className="bg-[#253445] border-t border-white/10 py-12 mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a href="mailto:mglwinminnoo@gmail.com" className="text-gray-300 hover:text-white transition-colors font-medium">
            mglwinminnoo@gmail.com
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="tel:+959756239247" className="text-gray-300 hover:text-white transition-colors font-medium">
            +95 9756239247
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="https://www.linkedin.com/in/lwinminoo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors font-medium">
            LinkedIn
          </a>
        </div>
        
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Lwin Min Oo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
