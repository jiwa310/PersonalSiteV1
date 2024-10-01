export default function Welcome() {
  return (
    <section className="min-h-screen text-left pt-10 md:pt-5 pl-10 md:pl-20 pr-10 md:pr-20">
      <p className="text-yellow-400 text-xl md:text-2xl font-bold pb-5">Hi! My name is</p>
      <h1 className="text-gray-300 text-5xl md:text-7xl font-bold mb-4">Jim Wang.</h1>
      <h2 className="text-gray-400 text-4xl md:text-6xl font-bold mb-4">I'm a Computer Engineering Student.</h2>
      <p className="mb-4 text-lg md:text-xl pr-10 md:pr-60 pb-5 md:pb-0">
        I'm an undergraduate student at UCSB fascinated by full-stack software development, embedded systems, and deep learning. I'm currently working as a Software Engineering Intern at
        <a href="https://app.correkt.ai/" className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline"> Correkt </a>
        , a startup innovating in advanced search technology. My focus is on developing high-performance software using Next.js and FastAPI.
      </p>
      <button 
        onClick={() => window.open("/Resume_JimW.pdf", "_blank")}
        className="border-2 border-yellow-400 text-yellow-400 py-2 px-4 font-bold hover:bg-yellow-400 hover:text-black transition duration-200"
      >
        View My Resume
      </button>
      <div className="flex md:hidden mt-4 space-x-4">
        <a href="https://www.linkedin.com/in/jim-wang-290b60249/" target="_blank" rel="noreferrer">
          <img src="linkedin.svg" alt="LinkedIn" className="w-6 h-auto filter brightness-75" />
        </a>
        <a href="https://github.com/jiwa310" target="_blank" rel="noreferrer">
          <img src="github.svg" alt="Github" className="w-6 h-auto filter brightness-75" />
        </a>
        <a href="https://www.instagram.com/jim___wang/" target="_blank" rel="noreferrer">
          <img src="instagram.svg" alt="Instagram" className="w-6 h-auto filter brightness-75" />
        </a>
      </div>

    </section>
  )
}
