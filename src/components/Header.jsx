import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 sticky top-0 w-full font-league-spartan" style={{backgroundColor: 'var(--color-background)'}}>
      <div>
        {/* Replace "logo.svg" with the path to your logo */}
        <img src="logo.svg" alt="Logo" className="h-10 w-auto" />
      </div>

      <nav>
        <ul className="flex space-x-8">
          <li><a href="#about-me" className="text-yellow-400">About Me</a></li>
          <li><a href="#experience" className="text-yellow-400">Experience</a></li>
          <li><a href="#projects" className="text-yellow-400">Projects</a></li>
          <li><a href="#skills" className="text-yellow-400">Skills</a></li>
          <li><a href="#contact" className="text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

