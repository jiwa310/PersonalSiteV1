export default function Welcome() {
  return (
    <section className="min-h-screen text-left pt-10 pl-20 pr-20">
      <p className="text-yellow-400 text-2xl font-bold pb-5">Hi! My name is</p>
      <h1 className="text-gray-300 text-7xl font-bold mb-4">Jim Wang.</h1>
      <h2 className="text-gray-400 text-6xl font-bold mb-4">I'm a Computer Engineering Student.</h2>
      <p className="mb-4 text-xl pr-60">
        I'm am undergraduate student at UCSB fascinated by computer vision, machine learning, and full-stack web development. I'm currently working as a Software Engineering Intern at <a href="https://biopacificmip.org/" className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">NSF BioPacific MIP</a>, where I'm focused on creating a user-centric digital experience for researchers. 
      </p>
      <button 
        onClick={() => window.open("/Resume_JimW.pdf", "_blank")}
        className="border-2 border-yellow-400 text-yellow-400 py-2 px-4 font-bold hover:bg-yellow-400 hover:text-black transition duration-200"
      >
        View My Resume
      </button>
    </section>
  )
}
