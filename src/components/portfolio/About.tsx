const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Frontend Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Frontend Developer with 2 years of professional experience
                specializing in Angular, along with earlier hands-on experience
                in Vue.js and academic project exposure to React.js.
              </p>
              <p>
                I have a proven ability to build responsive, scalable, and
                high-performance web applications. My expertise spans Angular
                14, RxJS, NgRx, HTML5, CSS3, JavaScript, and WebSockets.
              </p>
              <p>
                I excel at building dynamic UIs, collaborating in Agile teams,
                and integrating real-time data to create seamless user
                experiences.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                Education
              </h4>
              <div className="space-y-3 text-slate-300">
                <div>
                  <p className="font-medium">Masters in Computer Science</p>
                  <p className="text-sm text-slate-400">
                    University of Bedfordshire, UK (2021-2023)
                  </p>
                </div>
                <div>
                  <p className="font-medium">
                    B.Tech in Electronics and Communication Engineering
                  </p>
                  <p className="text-sm text-slate-400">
                    TKR College of Engineering, Hyderabad (2015-2019)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-blue-500/20">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                Certifications
              </h4>
              <div className="space-y-2 text-slate-300">
                <p>• The Complete Web Development - Udemy</p>
                <p>• The Complete PostgreSQL BootCamp - Udemy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
