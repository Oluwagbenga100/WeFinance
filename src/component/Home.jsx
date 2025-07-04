import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code, Database, Wrench, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    frontend: ['React', 'Vite', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    tools: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman']
  };

  const projects = [
    {
      title: 'DevLink – Portfolio Builder App',
      description: 'A fully responsive web app that allows developers to create and share stunning portfolios.',
      stack: ['React', 'Tailwind CSS', 'Firebase'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'TaskFlow – Productivity App',
      description: 'A Kanban-style productivity app to manage projects and tasks.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'CleanCommerce – E-commerce Platform',
      description: 'A fast and clean e-commerce frontend for showcasing products.',
      stack: ['React', 'Redux', 'Stripe API'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              David
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section 
                      ? 'text-purple-400 border-b-2 border-purple-400' 
                      : 'text-white/80'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-purple-400 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
  
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="text-6xl sm:text-8xl mb-4">🏠</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                David
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              A Web Developer crafting modern, high-performance websites & web apps
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              I specialize in building responsive, scalable, and user-friendly solutions using modern tools like React, Node.js, and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
             <Link to="/view"> <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  🔗 View My Work
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button></Link>
             <Link to="/contact"> <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center gap-2">
                  📬 Contact Me
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </span>
              </button></Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">💼</div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              I'm a passionate Web Developer with <span className="text-purple-400 font-semibold">[6+]</span> years of experience building digital products that solve real-world problems. From idea to deployment, I enjoy turning complex problems into elegant, intuitive designs and robust code.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Code size={40} className="text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Frontend</h3>
                <p className="text-white/60 text-sm">Modern, responsive interfaces</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Database size={40} className="text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Backend</h3>
                <p className="text-white/60 text-sm">Scalable server solutions</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Wrench size={40} className="text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Tools</h3>
                <p className="text-white/60 text-sm">Modern development workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🧩</div>
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <div className={`w-full h-40 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {project.title.split(' ')[0]}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/80 hover:text-pink-400 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🧠</div>
            <h2 className="text-4xl font-bold text-white mb-6">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-4 capitalize flex items-center gap-2">
                  {category === 'frontend' && <Code size={20} className="text-purple-400" />}
                  {category === 'backend' && <Database size={20} className="text-pink-400" />}
                  {category === 'tools' && <Wrench size={20} className="text-blue-400" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-white/10 text-white/80 rounded-lg text-sm hover:bg-white/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">📫</div>
            <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <p className="text-xl text-white/80 mb-8">
              Let's build something amazing together!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:yourname@example.com" className="group flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Mail size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-white/60 text-sm">alabigbenga467@gmail.com</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/yourprofile" className="group flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Linkedin size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-white/60 text-sm">Connect with me</div>
                </div>
              </a>
              
              <a href="https://github.com/yourusername" className="group flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                <Github size={24} className="text-pink-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-semibold">GitHub</div>
                  <div className="text-white/60 text-sm">View my code</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Gbenga. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}