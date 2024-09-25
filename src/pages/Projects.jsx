import "./card.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React.",
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A full-stack e-commerce store using Node.js and MongoDB.",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A simple weather app that fetches data from a public API.",
    },
  ];

  return (
    <div id="projects" className="flex items-center justify-center">
      <section>
        <h2 className="text-2xl font-bold ">My Projects</h2>
        <p className="w-[1000px]">
          Welcome to My Projects Showcase! Over the years, I have worked on a
          wide range of web development projects, each helping me sharpen my
          skills and explore new technologies. Below, you widell find a collection
          of my work that spans various areas, from front-end design to
          full-stack development. Whether it is personal portfolio sites, dynamic
          web applications, or full-stack platforms, each project reflects my
          passion for coding and continuous learning.
        </p>
        <div className="grid lg:grid-cols-3 gap-40 pt-[50px]">
          {projectData.map((project) => (
            <div key={project.id} className="card">
              <div className="content">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
