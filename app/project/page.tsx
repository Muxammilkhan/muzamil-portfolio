
export default function Projects() {
    const projects = [
      {
        title: "Tempo Website",
        description: "A  Tempo Websitebuilt with NextJs and Tailwind CSS.",
        link: "https://muzamil-html.vercel.app/",
        image: "/joke.png.png",
      },
      {
        title: "Digital Clock",
        description: "My personal digital clock website built with Nextjs and Tailwind CSS.",
        link: "https://clock-beta-fawn.vercel.app/",
        image: "/clock.png" ,
      },
      {
        title: "Resume Generator",
        description: "Resume Generator  website built with Nextjs.",
        link: "https://muzamil-shareable-resuma.vercel.app/",
        image: "/Capture (2).png",
      },{

      title: "Html-Css-js",
      description: "My personal portfolio html css js",
      link: "https://html-css-js-five.vercel.app/",
      image: "/website.png.png",
    },
     

    ];
  
    return (
      <section id="projects" className="py-12  bg-gradient-to-r from-pink-500 to-gray-800 pt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  className="w-full h-30 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
