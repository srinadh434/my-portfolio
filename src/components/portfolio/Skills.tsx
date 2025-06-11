
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: ["Angular (v14)", "RxJS", "NgRx", "Vue 2", "Vuex", "Vuetify", "React.js"],
      color: "blue"
    },
    {
      title: "Languages & Scripting",
      skills: ["JavaScript (ES6+)", "TypeScript"],
      color: "green"
    },
    {
      title: "UI/UX Technologies",
      skills: ["HTML5", "CSS3", "Bootstrap", "Sass", "Responsive Design"],
      color: "purple"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "REST APIs", "WebSockets"],
      color: "orange"
    },
    {
      title: "Testing & Architecture",
      skills: ["Manual UI Testing", "Jasmine and Karma", "SPA", "MVVM", "Component-based Architecture"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      green: "bg-green-600/20 text-green-300 border-green-500/30",
      purple: "bg-purple-600/20 text-purple-300 border-purple-500/30",
      orange: "bg-orange-600/20 text-orange-300 border-orange-500/30",
      red: "bg-red-600/20 text-red-300 border-red-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm border ${getColorClasses(category.color)} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-700/50 rounded-lg p-6 border border-blue-500/20 inline-block">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Professional Expertise</h3>
            <p className="text-slate-300">
              2 years of professional experience • Agile/Scrum methodologies • 
              Code reviews • Performance optimization • Cross-browser compatibility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
