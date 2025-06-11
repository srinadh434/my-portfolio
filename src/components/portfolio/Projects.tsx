
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Doctor Appointment Management System",
    subtitle: "Full Stack React Web Application",
    description: "A comprehensive web application for managing doctor appointments with modern UI and full backend integration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS3"],
    features: [
      "Built a modern UI using React.js, Bootstrap, and CSS3",
      "Implemented backend with Node.js + Express.js",
      "Used MongoDB to manage appointment data",
      "Integrated email notifications for appointments",
      "Appointment history tracking and management",
      "Medical report upload functionality",
      "RESTful APIs with modular structure",
      "End-to-end full-stack application"
    ],
    type: "Academic Project"
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Project</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-blue-400 text-sm font-medium">{project.type}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
              <p className="text-slate-400 text-lg">{project.subtitle}</p>
            </div>
            <div className="flex space-x-4">
              <button className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </button>
              <button className="text-slate-400 hover:text-blue-400 transition-colors">
                <ExternalLink size={24} />
              </button>
            </div>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-blue-400 font-medium mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-blue-400 font-medium mb-3">Key Features & Achievements:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-600/10 rounded-lg border border-blue-500/20">
            <p className="text-blue-300 text-sm">
              <strong>Impact:</strong> This project demonstrates my ability to build end-to-end full-stack applications, 
              showcasing skills in both frontend and backend development with modern technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
