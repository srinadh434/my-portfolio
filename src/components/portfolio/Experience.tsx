import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Triniti Advanced Software Labs",
      period: "June 2023 - Present",
      location: "India",
      projects: [
        {
          name: "Mobil Project",
          description:
            "Developed a responsive IIoT web application to visualize machine data streamed from the cloud.",
          technologies: [
            "Angular 14",
            "RxJS",
            "NgRx",
            "HTML5",
            "CSS3",
            "JavaScript",
            "GitHub",
            "WebSockets",
          ],
          responsibilities: [
            "Developed reusable components using Angular 14 and TypeScript",
            "Implemented RxJS for handling asynchronous data streams",
            "Used NgRx for centralized state management and efficient data flow",
            "Integrated live machine data via WebSockets",
            "Consumed REST APIs using Angular's HttpClientModule",
            "Participated in code reviews, Agile sprint planning, and team stand-ups",
            "Ensured performance and UI consistency across browsers and devices",
          ],
        },
        {
          name: "ITC Project",
          description:
            "An extension of the Mobil Project focusing on real-time analytics, enhanced dashboards, and new user features.",
          technologies: [
            "Angular 14",
            "RxJS",
            "NgRx",
            "TypeScript",
            "HTML5",
            "CSS3",
            "GitHub",
          ],
          responsibilities: [
            "Developed new UI modules and dynamic forms from scratch",
            "Integrated real-time analytics using WebSockets and observables",
            "Optimized component performance and reduced memory leaks",
            "Wrote unit tests using Jasmine and Karma",
            "Worked on UI/UX improvements based on product feedback",
          ],
        },
        {
          name: "Shield Project",
          description:
            "Designed a data management platform with broker commission calculations and integrated multiple datasets for display on the frontend.",
          technologies: [
            "Vue 2",
            "Vuex",
            "Vuetify",
            "HTML5",
            "JavaScript",
            "Bootstrap",
          ],
          responsibilities: [
            "Built data-driven dashboards using Vue.js and Vuetify",
            "Created dynamic tables aggregating data from multiple sources",
            "Used Vuex for efficient state management and data flow",
            "Collaborated with backend developers for seamless API integration",
            "Wrote reusable helper functions to reduce code duplication",
            "Worked in Agile/Scrum environments and documented progress using Jira",
            "Maintained codebase with Git and handled deployments",
          ],
        },
      ],
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Previous Experience",
    //   period: "Earlier Experience",
    //   location: "",
    //   projects: [
    //     {
    //       name: "Shield Project",
    //       description: "Designed a data management platform with broker commission calculations and integrated multiple datasets for display on the frontend.",
    //       technologies: ["Vue 2", "Vuex", "Vuetify", "HTML5", "JavaScript", "Bootstrap"],
    //       responsibilities: [
    //         "Built data-driven dashboards using Vue.js and Vuetify",
    //         "Created dynamic tables aggregating data from multiple sources",
    //         "Used Vuex for efficient state management and data flow",
    //         "Collaborated with backend developers for seamless API integration",
    //         "Wrote reusable helper functions to reduce code duplication",
    //         "Worked in Agile/Scrum environments and documented progress using Jira",
    //         "Maintained codebase with Git and handled deployments"
    //       ]
    //     }
    //   ]
    // }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <div
              key={expIndex}
              className="bg-slate-800/50 rounded-lg p-8 border border-blue-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 text-lg font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0">
                  <div className="flex items-center text-slate-300 mb-1">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  {exp.location && (
                    <div className="flex items-center text-slate-300">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                {exp.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="border-l-4 border-blue-500 pl-6"
                  >
                    <div className="flex items-center mb-3">
                      <h4 className="text-xl font-semibold text-white mr-2">
                        {project.name}
                      </h4>
                      <ExternalLink size={16} className="text-blue-400" />
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="text-blue-400 font-medium mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-blue-400 font-medium mb-3">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-2">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start text-slate-300"
                          >
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
