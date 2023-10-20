export default function AboutMe() {
  return (
    <section id="about-me" className="min-h-screen text-left flex pt-20 pl-20 pr-20">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">1. About Me</h2>
        <p className="mb-4 text-l">
          Hello! I'm Jim Wang, a Computer Engineering student at the University of California, Santa Barbara with a fascination for computer vision, machine learning, and full-stack web development.
        </p>
        <p className="mb-4 text-l">
          Currently, I'm a Software Engineering Intern at NSF BioPacific MIP, where I'm dedicated to creating a user-centric digital experience for researchers. My role involves developing full-stack web applications for chemistry automation, as well as designing and implementing a data management system for the organization.
        </p>
        <p className="mb-4 text-l">
          In addition to my internship, I've also conducted research on groundwater systems at UCSB SIMS, where I've developed skills in data cleaning, analysis, and visualization, and worked on projects involving deep learning neural networks and audio sentiment analysis.
        </p>
        <p className="mb-4 text-l">
          I'm eager to explore how machine learning and data analysis can be further applied in various industrial settings, particularly in enhancing the functionality and personalization of software solutions.
        </p>
        <p className="mb-4 text-l">
          I'm currently looking for a software engineering or machine learning internship for Summer 2024. 
        </p>
      </div>

      <div className="w-1/3 h-auto pl-20 pt-20">
        {/* Replace "me.jpg" with the path to your photo */}
        <img src="portrait.jpg" alt="Me" className="w-full h-auto" />
      </div>
    </section>
  )
}
