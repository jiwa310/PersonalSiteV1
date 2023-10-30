import React, { useState, useEffect } from 'react'

export default function Header({ scrollToSection }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (window.innerWidth >= 768) { // Only hide header on larger screens
        if (st > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex justify-between items-center pt-5 md:pt-3 pb-5 md:pb-3 px-6 sticky top-0 w-full font-league-spartan transition-transform duration-200 ${isVisible ? 'translate-y-0' : '-translate-y-full'} md:shadow-none shadow-md`} style={{backgroundColor: 'var(--color-background)', zIndex: 999}}>
      <div className="hidden md:block">
        <img src="Logo.svg" alt="Logo" className="h-15 w-auto" />
      </div>

      <nav>
        <ul className="flex space-x-5 md:space-x-10">
          <li><button onClick={() => scrollToSection('about-me')} className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">About</button></li>
          <li><button onClick={() => scrollToSection('experience')} className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">Projects</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">Skills</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}

