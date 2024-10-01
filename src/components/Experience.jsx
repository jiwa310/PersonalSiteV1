export default function Experience() {
  return (
    <section id="experience" className="min-h-screen text-left pt-20 pl-5 md:pl-20 pr-10 flex flex-col">
      <h2 className="text-4xl font-bold mb-4 text-yellow-400">2. Experience</h2>

      <div className="flex mb-8">
        {/* Replace "nsf-logo.png" with the path to the NSF logo */}
        <img src="correkt_logo.jpg" alt="NSF Logo" className="w-[3.5rem] h-[3.5rem] mr-4" />

        <div className="w-3/4">
          <h3 className="text-2xl font-semibold mb-2">Software Engineer Intern at <a href="https://app.correkt.ai/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">Correkt</a></h3>
          <p className="mb-4">Sept 2024 – Present</p>

          <ul className="list-disc pl-8">
            <li>Spearheaded the design and implementation of the search results UI using Next.js, enhancing user experience for thousands of active users.</li>
            <li>Collaborated with the backend team to seamlessly integrate the frontend with a FastAPI backend, ensuring efficient data flow and optimal performance</li>
            <li>Utilized React hooks and custom components to create a responsive and interactive search interface, improving user engagement metrics by 30%</li>
            <li>Optimized application performance through code splitting and lazy loading, reducing initial load time by 1.5 seconds.</li>
          </ul>
        </div>
      </div>

      <div className="flex mb-8">
        {/* Replace "nsf-logo.png" with the path to the NSF logo */}
        <img src="biopacific.jpg" alt="NSF Logo" className="w-[3.5rem] h-[3.5rem] mr-4" />

        <div className="w-3/4">
          <h3 className="text-2xl font-semibold mb-2">Full-Stack Software Developer Intern at<a href="https://biopacificmip.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">NSF BioPacific MIP</a></h3>
          <p className="mb-4">June 2023 – June 2024</p>

          <ul className="list-disc pl-8">
            <li>Led the development of a full-stack web application that helps researchers design experiments and control Chemspeed robotic chemistry equipment, used by 30+ researchers.</li>
            <li>Established a robust PostgreSQL database to store and manage user profiles, experiment details, and research data.</li>
            <li>Used Next.js to make the web application robust and scalable. Implemented server-side rendering for improved performance and SEO.</li>
            <li>Set up automated testing with Jest and React Testing Library, reaching 90% code coverage and halving bugs</li>
            <li>Integrated the application with the official Biopacific MIP user portal using Django for seamless user authentication.</li>
          </ul>
        </div>
      </div>

      <div className="flex mb-8">
        {/* Replace "ucsb-logo.png" with the path to the UCSB logo */}
        <img src="ucsb.jpg" alt="UCSB Logo" className="w-[3.5rem] h-[3.5rem] mr-4" />

        <div className="w-3/4">
          <h3 className="text-2xl font-semibold mb-2">Data Science Research Intern at UCSB SIMS</h3>
          <p className="mb-4">Aug. 2022 – Sept. 2022</p>

          <ul className="list-disc pl-8">
            <li>Conducted research on groundwater systems with other SIMS interns and presented our findings in an academic setting</li>
            <li>Plotted and analyzed groundwater temperature data using R</li>
            <li>Developed knowledge in research procedures, data cleaning, and programming</li>
          </ul>
        </div>
      </div>

    </section>
  )
}
