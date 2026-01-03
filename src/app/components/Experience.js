export default function Experience(){
    const cards = [
        {
            id: 1,
            title: "Bhramann",
            company: "Full Stack Developer",
            year: "FEB – AUG 2025",
            description:
              "An IIT Madras alumni - founded startup where I joined as an early team member and helped build core features of the Bhramann travel booking platform. Worked across the full stack - developing responsive frontend interfaces with React and Tailwind CSS, building RESTful APIs using Node.js and Express, and managing application data with MongoDB.",
            alt: "bhramann",
            tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "SEO", "Responsive Design"]
        },
        {
            id: 2,
            title: "TryStamp",
            company: "Frontend Developer",
            year: "OCT – DEC 2025",
            description:
              "A Toronto based startup where I worked on an Accounts Payable automation Chrome extension that runs directly inside Gmail. Migrated the entire codebase from vanilla JavaScript to React.js and implemented a clean, user-friendly UI/UX, improving maintainability and overall user experience.",
            alt: "trystamp",
            tags: ["React.js", "CSS", "Chrome Extension", "UX/UI", "Accounts Payable Automation"]
        },
        {
            id: 3,
            title: "Open to Opportunities",
            company: "Available for Work",
            year: "CURRENT",
            description:
              "Currently open to exciting opportunities where I can contribute as a Frontend or Full Stack Developer. Interested in working on impactful products, fast-moving startups, and challenging problems that help me grow as an engineer.",
            alt: "card-three",
            tags: ["Open to Work", "Frontend Developer", "Full Stack Developer", "React.js", "Next.js"]
        }
    ];

    return (
       <>
        <main className="max-w-6xl mx-auto px-4">
        <h2 className="sticky top-24 md:top-0 z-0 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 text-center font-bold py-2 md:py-4 bg-[#e9e8e8] dark:bg-[#252525] transition-transform duration-300 ease-out">
            Experience
        </h2>
        <ul id="cards" className="list-none grid grid-cols-1 gap-2 md:gap-[var(--card-margin)] pb-[calc(var(--numcards)*var(--card-top-offset))] mb-[var(--card-margin)]" style={{gridTemplateRows: 'repeat(var(--numcards), var(--card-height))'}}>
        {cards.map((card) => (
            <li 
                key={card.id} 
                className="card sticky" 
                id={`card-${card.id}`} 
                style={{
                    paddingTop: 'calc(var(--index) * var(--card-top-offset))', 
                    '--index': card.id, 
                    top: 'var(--card-sticky-top, 5rem)',
                    zIndex: card.id * 10
                }}
            >
                <div
        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 shadow-2xl shadow-black/20 backdrop-blur-xl relative overflow-hidden group hover:border-[#ec4e39]/40 transition-colors duration-500"
        >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec4e39]/5 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:bg-[#ec4e39]/10 transition-colors duration-700" />

        <div className="relative z-10">
          <div className="relative flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4 md:gap-6">
            <div className="space-y-2 md:space-y-4 pr-16 md:pr-0">
              <div>
                <span className="text-[#ec4e39] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase">
                  {card.year}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold font-heading leading-tight tracking-tighter text-white">
                {card.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light italic">
                {card.company}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 md:relative md:top-auto md:right-auto text-6xl sm:text-5xl md:text-8xl font-black font-heading text-[#ec4e39]/20 group-hover:text-[#ec4e39]/50 transition-colors duration-500">
              0{card.id}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-zinc-400 text-sm sm:text-base md:text-xl leading-relaxed font-light max-w-2xl">
                {card.description}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end">
              {card.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-zinc-800/50 rounded-full text-[8px] md:text-[9px] uppercase font-bold tracking-[0.15em] md:tracking-[0.2em] text-zinc-500 border border-zinc-700 group-hover:border-[#ec4e39]/30 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
            </li>
        ))}
        </ul>
        </main>
       </>
    )
}