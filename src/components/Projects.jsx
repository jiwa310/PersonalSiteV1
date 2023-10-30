export default function Projects() {
  return (
    <section id="projects" className="min-h-screen text-left pt-20 pl-5 md:pl-20 pr-5 md:pr-20 flex flex-col">
      <h2 className="text-4xl font-bold mb-4 text-yellow-400">3. Projects</h2>

      <div className="flex flex-col gap-8">
        {/* Project 1 */}
        <a href="https://github.com/hongytan/SentimentSub" target="_blank" rel="noopener noreferrer" className="border border-gray-300 p-4 rounded hover:border-yellow-400 transition duration-200 flex items-start transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-yellow">
          {/* Replace "project1-image.jpg" with the path to the project's image */}
          <img src="/SentimentSub.png" alt="Project 1 Image" className="w-1/5 h-auto mb-4 pr-10" />
          <div className = "w-3/4">
            <h3 className="text-3xl font-semibold mb-2 text-gray-200">SentimentSub</h3>
            <p className="mb-4 text-xl">Uses ensemble of speech emotion recognition and text sentiment analysis to generate color coded subtitles for user given MP4 files. Model implemented using Scikit-learn. Wesbite created with Django and hosted on Google Cloud.</p>
            <p className="mb-4 text-xl text-gray-300">Skills: Python, Django, Google Cloud, Git, Jupyter Notebook</p>
            <p>Nov. 2022 – April 2023</p>
          </div>
        </a>

        {/* Project 2 */}
        <a href="https://devpost.com/software/chatcheck" target="_blank" rel="noopener noreferrer" className="border border-gray-300 p-4 rounded hover:border-yellow-400 transition duration-200 flex items-start transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-yellow">
          {/* Replace "project2-image.jpg" with the path to the project's image */}
          <img src="/ChatCheck.png" alt="Project 2 Image" className="w-1/5 h-auto mb-4 pr-10" />
          <div className="w-3/4">
            <h3 className="text-3xl font-semibold mb-2 text-gray-200">ChatCheck</h3>
            <p className="mb-4 text-xl">Chrome Extension that evaluates the quality of user's text messages. Calls the OpenAI API to give a numerical rating from 1-10 and provide feedback to the user on how to write a better text message. Chrome extension written in HTML, CSS, and Javascript and hosted on Railway.</p>
            <p className="mb-4 text-xl text-gray-300">Skills: OpenAI API, HTML, CSS, Javascript, NodeJS, Git</p>
            <p>May 2023</p>
          </div>
        </a>

        {/* Add more projects as needed */}
      </div>
    </section>
  )
}
