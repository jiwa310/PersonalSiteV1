export default function Skills() {
  return (
    <section id="skills" className="min-h-screen text-left pt-20 pl-5 md:pl-20 pr-10 flex flex-col">
      <h2 className="text-4xl font-bold mb-4 text-yellow-400">4. Skills</h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
        {/* Languages */}
        <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">Languages</h3>
            <ul className="list-none pl-0 text-xl">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="inline-block w-6 h-6 mr-2" /> Java</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="inline-block w-6 h-6 mr-2" /> Python</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="inline-block w-6 h-6 mr-2" /> C/C++</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="inline-block w-6 h-6 mr-2" /> PostgreSQL</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="inline-block w-6 h-6 mr-2" /> JavaScript</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="inline-block w-6 h-6 mr-2" /> HTML</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="inline-block w-6 h-6 mr-2" /> TailwindCSS</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="inline-block w-6 h-6 mr-2" /> R</li>
            </ul>
          </div>

          {/* Web Frameworks */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">Web Frameworks</h3>
            <ul className="list-none pl-0 text-xl">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="inline-block w-6 h-6 mr-2" /> React</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="inline-block w-6 h-6 mr-2" /> Node.js</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="inline-block w-6 h-6 mr-2" /> Next.js</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="inline-block w-6 h-6 mr-2" /> Django</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="inline-block w-6 h-6 mr-2" /> React Native</li>
            </ul>
          </div>

        {/* Deep Learning Frameworks */}
        <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">Deep Learning Frameworks</h3>
            <ul className="list-none pl-0 text-xl">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className="inline-block w-6 h-6 mr-2" /> Pytorch</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="inline-block w-6 h-6 mr-2" /> Tensorflow</li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">Developer Tools</h3>
            <ul className="list-none pl-0 text-xl">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="inline-block w-6 h-6 mr-2" /> Git</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="inline-block w-6 h-6 mr-2" /> Docker</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="inline-block w-6 h-6 mr-2" /> Google Cloud</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" className="inline-block w-6 h-6 mr-2" /> Jupyter Notebook</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="inline-block w-6 h-6 mr-2" /> VS Code</li>
              <li>MatLab</li>
            </ul>
          </div>

          {/* Libraries */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">Libraries</h3>
            <ul className="list-none pl-0 text-xl">
              <li>Scikit-Learn</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="inline-block w-6 h-6 mr-2" /> Numpy</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="inline-block w-6 h-6 mr-2" /> Pandas</li>
              <li>Librosa</li>
              <li>Matplotlib</li>
            </ul>
          </div>

      </div>

    </section>

  )
}
