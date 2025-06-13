import { motion } from "framer-motion";

export default function StickyFooter({navItems, portfolioSections, activeSection, activeIndexVariants, scrollToSection}) {
    return (
    <div className="fixed bottom-0 left-0 right-0 p-2 sm:p-4 border-t border-neutral-200 bg-white z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <span className="text-xs text-neutral-500 hidden sm:block">©2025</span>
          <div className="flex items-center gap-2">
            <motion.span
              key={activeSection}
              className="text-xs text-neutral-500"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={activeIndexVariants}
            >
              {portfolioSections[activeSection].number}
            </motion.span>
            <span className="text-xs text-neutral-500">//</span>
            <span className="text-xs text-neutral-500">0{portfolioSections.length}</span>
          </div>
          <span className="text-xs text-neutral-500 hidden sm:block">hello@amitroy.tech</span>
        </div>

        {/* Navigation menu - active link centered with smooth scrolling */}
        <div className="flex justify-center mt-2 relative">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {navItems.map((item, i) => {
              // Find the index of the section that corresponds to this nav item
              const sectionIndex = portfolioSections.findIndex((section) => section.id.toUpperCase() === item)
              const isActive = activeSection === sectionIndex

              return (
                <button
                  key={i}
                  onClick={() => scrollToSection(sectionIndex)}
                  className={`text-xs sm:text-sm transition-all duration-300 relative ${
                    isActive ? "text-black font-medium scale-110" : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </div>
  );
}
