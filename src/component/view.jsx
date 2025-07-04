import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Globe, Calendar, Star, Filter, X, ChevronLeft, ChevronRight, Play, Award, Users, Zap } from 'lucide-react';

export default function ViewMyWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'DevLink – Portfolio Builder App',
      category: 'Web App',
      description: 'A comprehensive platform that allows developers to create stunning portfolios with drag-and-drop functionality, custom themes, and real-time collaboration features.',
      longDescription: 'DevLink revolutionizes how developers showcase their work. Built with React and Firebase, it offers intuitive portfolio creation tools, analytics dashboard, and seamless deployment. Features include custom domain support, SEO optimization, and social sharing capabilities.',
      stack: ['React', 'Tailwind CSS', 'Firebase', 'Node.js', 'Stripe'],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
      ],
      gradient: 'from-purple-500 to-pink-500',
      status: 'Live',
      date: '2024',
      features: ['Drag & Drop Builder', 'Custom Themes', 'Analytics Dashboard', 'SEO Optimization'],
      metrics: { users: '2.5K+', rating: '4.8/5', uptime: '99.9%' },
      testimonial: 'DevLink helped me land my dream job! The portfolio builder is incredibly intuitive.',
      demoUrl: 'https://devlink-demo.com',
      githubUrl: 'https://github.com/gbenga/devlink'
    },
    {
      id: 2,
      title: 'TaskFlow – Productivity App',
      category: 'Web App',
      description: 'A powerful Kanban-style productivity application with real-time collaboration, advanced filtering, and AI-powered task suggestions.',
      longDescription: 'TaskFlow combines the simplicity of Kanban boards with advanced project management features. Built with the MERN stack, it supports team collaboration, time tracking, and automated workflows. The AI assistant helps prioritize tasks and suggests optimal work schedules.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'OpenAI'],
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      status: 'Live',
      date: '2024',
      features: ['Real-time Collaboration', 'AI Task Suggestions', 'Time Tracking', 'Custom Workflows'],
      metrics: { users: '1.8K+', rating: '4.7/5', uptime: '99.8%' },
      testimonial: 'TaskFlow transformed our team productivity. The AI suggestions are spot on!',
      demoUrl: 'https://taskflow-demo.com',
      githubUrl: 'https://github.com/gbenga/taskflow'
    },
    {
      id: 3,
      title: 'CleanCommerce – E-commerce Platform',
      category: 'E-commerce',
      description: 'A modern, fast e-commerce platform with advanced filtering, AR product preview, and intelligent recommendation engine.',
      longDescription: 'CleanCommerce redefines online shopping with cutting-edge technology. Features include AR product visualization, AI-powered recommendations, voice search, and seamless payment integration. Built for speed and scalability with advanced caching and CDN optimization.',
      stack: ['React', 'Redux', 'Stripe', 'Three.js', 'AWS', 'TensorFlow'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
      ],
      gradient: 'from-green-500 to-teal-500',
      status: 'Live',
      date: '2024',
      features: ['AR Product Preview', 'AI Recommendations', 'Voice Search', 'Multi-currency Support'],
      metrics: { users: '5K+', rating: '4.9/5', uptime: '99.9%' },
      testimonial: 'The AR feature is game-changing! Our conversion rate increased by 40%.',
      demoUrl: 'https://cleancommerce-demo.com',
      githubUrl: 'https://github.com/gbenga/cleancommerce'
    },
    {
      id: 4,
      title: 'CodeShare – Developer Hub',
      category: 'Developer Tools',
      description: 'A collaborative platform for developers to share code snippets, tutorials, and engage with the community.',
      longDescription: 'CodeShare is a comprehensive developer community platform featuring real-time code collaboration, syntax highlighting for 100+ languages, and integrated learning paths. Built with modern web technologies to support the growing developer ecosystem.',
      stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Monaco Editor', 'Docker'],
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop'
      ],
      gradient: 'from-orange-500 to-red-500',
      status: 'Beta',
      date: '2024',
      features: ['Code Collaboration', 'Syntax Highlighting', 'Learning Paths', 'Community Features'],
      metrics: { users: '800+', rating: '4.6/5', uptime: '99.7%' },
      testimonial: 'CodeShare is my go-to platform for sharing knowledge with fellow developers.',
      demoUrl: 'https://codeshare-demo.com',
      githubUrl: 'https://github.com/gbenga/codeshare'
    },
    {
      id: 5,
      title: 'WeatherWise – Climate App',
      category: 'Mobile App',
      description: 'An intelligent weather application with hyper-local forecasts, climate insights, and personalized recommendations.',
      longDescription: 'WeatherWise combines meteorological data with AI to provide the most accurate weather predictions. Features include location-based alerts, climate trend analysis, and personalized activity suggestions based on weather conditions.',
      stack: ['React Native', 'TypeScript', 'GraphQL', 'Apollo', 'OpenWeather API'],
      images: [
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop'
      ],
      gradient: 'from-sky-500 to-blue-600',
      status: 'Live',
      date: '2023',
      features: ['Hyper-local Forecasts', 'Climate Insights', 'Activity Suggestions', 'Weather Alerts'],
      metrics: { users: '3.2K+', rating: '4.8/5', uptime: '99.9%' },
      testimonial: 'Most accurate weather app I\'ve ever used. The activity suggestions are brilliant!',
      demoUrl: 'https://weatherwise-demo.com',
      githubUrl: 'https://github.com/gbenga/weatherwise'
    },
    {
      id: 6,
      title: 'CryptoTracker – Investment Dashboard',
      category: 'FinTech',
      description: 'A comprehensive cryptocurrency portfolio tracker with advanced analytics, market insights, and automated trading signals.',
      longDescription: 'CryptoTracker provides professional-grade cryptocurrency portfolio management with real-time market data, technical analysis, and risk assessment tools. Features include automated alerts, portfolio optimization suggestions, and comprehensive market research.',
      stack: ['Vue.js', 'Node.js', 'MongoDB', 'WebSocket', 'Chart.js', 'CoinGecko API'],
      images: [
        'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1642543348746-3d8e4b7d4bb0?w=800&h=600&fit=crop'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      status: 'Live',
      date: '2023',
      features: ['Real-time Data', 'Technical Analysis', 'Portfolio Optimization', 'Automated Alerts'],
      metrics: { users: '1.5K+', rating: '4.7/5', uptime: '99.8%' },
      testimonial: 'CryptoTracker helped me optimize my portfolio and increase returns by 25%.',
      demoUrl: 'https://cryptotracker-demo.com',
      githubUrl: 'https://github.com/gbenga/cryptotracker'
    }
  ];

  const categories = ['all', 'Web App', 'E-commerce', 'Developer Tools', 'Mobile App', 'FinTech'];

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Discover my latest projects showcasing modern web development, innovative solutions, and cutting-edge technologies.
            </p>
            
            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filterCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity`}></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-yellow-500/90 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-400 text-sm font-medium">{project.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{project.metrics.users}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} />
                      <span>{project.metrics.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap size={12} />
                      <span>{project.metrics.uptime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={closeProject}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-20`}></div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === index 
                            ? 'border-purple-400' 
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img src={image} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedProject.status === 'Live' 
                          ? 'bg-green-500/90 text-white' 
                          : 'bg-yellow-500/90 text-white'
                      }`}>
                        {selectedProject.status}
                      </span>
                      <span className="text-purple-400 font-medium">{selectedProject.category}</span>
                      <span className="text-white/60">{selectedProject.date}</span>
                    </div>
                    
                    <p className="text-white/80 leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/80">
                          <Award size={16} className="text-purple-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Project Metrics</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white/5 rounded-xl">
                        <div className="text-2xl font-bold text-purple-400">{selectedProject.metrics.users}</div>
                        <div className="text-white/60 text-sm">Users</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl">
                        <div className="text-2xl font-bold text-pink-400">{selectedProject.metrics.rating}</div>
                        <div className="text-white/60 text-sm">Rating</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl">
                        <div className="text-2xl font-bold text-blue-400">{selectedProject.metrics.uptime}</div>
                        <div className="text-white/60 text-sm">Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-white/80 italic mb-2">"{selectedProject.testimonial}"</div>
                    <div className="text-white/60 text-sm">— User Testimonial</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}