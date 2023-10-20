import Welcome from '../components/Welcome'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  const aboutMeRef = React.createRef()
  const experienceRef = React.createRef()
  const projectsRef = React.createRef()
  const skillsRef = React.createRef()
  const contactRef = React.createRef()

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
    <div className="container font-league-spartan">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Welcome />
        <div ref={aboutMeRef}><AboutMe /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
    </div>
  )
}
