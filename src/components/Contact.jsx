export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="text-left flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold mb-4 text-gray-300">Get in Touch</h2>

        <p className="text-xl mb-8 w-3/4 md:w-1/2">
          I'm currently looking for Software Engineering internships for Summer 2025. Feel free to reach out if you have any questions or just want to chat!
        </p>

        <button onClick={() => window.location.href = "mailto:jimwang@ucsb.edu"} className="w-1/2 md:w-1/4 border-2 border-yellow-400 text-yellow-400 py-2 px-4 font-bold hover:bg-yellow-400 hover:text-black transition duration-200">
          Contact Me
        </button>
      </div>
    </section>
  )
}
