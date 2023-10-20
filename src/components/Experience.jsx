export default function Experience() {
  return (
    <section id="experience" className="min-h-screen text-left pt-20 pl-20 pr-20 flex flex-col">
      <h2 className="text-4xl font-bold mb-4 text-yellow-400">2. Experience</h2>

      <div className="flex mb-8">
        {/* Replace "nsf-logo.png" with the path to the NSF logo */}
        <img src="biopacific.jpg" alt="NSF Logo" className="w-[3.5rem] h-[3.5rem] mr-4" />

        <div className="w-3/4">
          <h3 className="text-2xl font-semibold mb-2">Software Engineer Intern at <a href="https://biopacificmip.org/" className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline">NSF BioPacific MIP</a></h3>
          <p className="mb-4">June 2023 – Present</p>

          <ul className="list-disc pl-8">
            <li>Developed a full-stack web application focused on database management and experiment design for users automating their synthesis on the Chemspeed robotic chemistry platform</li>
            <li>Used ReactJS, Javascript, HTML5, and CSS for the frontend, and NodeJS for the backend</li>
            <li>Set up a database to store user profiles, experiment details, and associated data, ensuring proper organization and retrieval using PostgreSQL</li>
            <li>Used Django for user portal and authentication, and configured nginx as a reverse proxy for Django and Node</li>
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
