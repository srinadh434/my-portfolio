import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <p className="text-blue-400 text-lg mb-2 font-medium mt-10">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Emmareddy Srinadh Reddy
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-400 mb-8">
              Frontend Developer
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed">
              Passionate Frontend Developer with 2 years of professional
              experience in Angular, building responsive and scalable web
              applications with modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <a
                href="mailto:srinadhreddy194@gmail.com"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href="tel:+918886090525"
                className="flex items-center justify-center space-x-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <Phone size={20} />
                <span>+91 8886090525</span>
              </a>
            </div>

            {/* <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            </div> */}
          </div>

          {/* Right side - Developer Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src="../../../public/developer.jpg"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-500/20 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
