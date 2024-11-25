import React from "react";


const Projects = () => {
  const projectList = [
    { title: "Bosch E-Commerce Site", description: "An e-commerce platform that sells bosch products and also provide a easy way to figure out the dealers nearby.", link: "https://www.bosch-home.in/" },
    { title: "ISOLAR- B", description: "BSW Configuration Tool for AUTOSAR Classic is being developed for automobile developer to configure the basic software configuration values, requires proper licencing to use the tool.", link: "https://www.etas.com/en/downloadcenter/44661.php" },
    { title: "Associate Arena", description: " Associate arena app provides information on employee transport services, Vital contacts, Canteen Menu and Inter office shuttle services for RBEI associates ", link: "https://appcenter.bosch.com/applications/associate-arena" },
  ];
  const miniProjectList = [
    { title: "Employee Directory Management", description: "A fully functional e-commerce platform.", link: "#" },
    { title: "Blog Platform", description: "A customizable blogging application.", link: "https://kblog-wine.vercel.app/" },
    { title: "Job Portal", description: "An application  that post a job and hire an employee.", link: "#" },
  ];
  const mineProjectList = [    
    { title: "PortFolio", description: "A portfolio which showcase the projects done by Kaliswari", link: "#" },
    { title: "TaskList App", description: "A Task assignee app that assign a task to someone.", link: "#" },
    { title: "Calculator", description: "A Calculator app that performs easy calculation", link: "https://calculator-rouge-phi.vercel.app/" },    
  ];

  return (
    <section id="projects" className="projects"> 
      
      <h2>Projects</h2>
      <div className="project-grid">
      {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="cta-button">View Details</a>
          </div>
        ))}
        </div>
        <div className="project-grid">
        {miniProjectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="cta-button">View Details</a>
          </div>
        ))}
        </div>
        <div className="project-grid">
        {mineProjectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="cta-button">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
