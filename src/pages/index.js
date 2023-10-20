import React, { useState, useEffect } from 'react'
import Welcome from '../components/Welcome'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const aboutMeRef = React.createRef()
  const experienceRef = React.createRef()
  const projectsRef = React.createRef()
  const skillsRef = React.createRef()
  const contactRef = React.createRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section) => {
    switch(section) {
      case 'about-me':
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break
    }
  }

  return (
    <div>
      {loading && (
        <div className="loading-screen flex items-center justify-center h-screen" style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 9999 }}>
          <video autoPlay loop muted playsInline style={{ width: '100px', height: 'auto', transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }}>
            <source src="Loader.mp4" type="video/mp4" />
          </video>
        </div>      
      )}
      <div className={`container font-league-spartan transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header scrollToSection={scrollToSection} />
        <main className="pr-20">
          <Welcome />
          <div ref={aboutMeRef}><AboutMe /></div>
          <div ref={experienceRef}><Experience /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={skillsRef}><Skills /></div>
        </main>
        <div ref={contactRef}><Contact /></div>
      </div>
    </div>
  )
}

