import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Instagram, Globe, Coffee, Briefcase, Heart } from 'lucide-react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'website',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'website',
        budget: '',
        timeline: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@gbenga.dev',
      description: 'Send me an email',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      link: 'mailto:hello@gbenga.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 (0) 123 456 7890',
      description: 'Call me directly',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      link: 'tel:+2341234567890'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      description: 'Based in Lagos',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      link: 'https://maps.google.com/?q=Lagos,Nigeria'
    },
    {
      icon: Calendar,
      label: 'Schedule',
      value: 'Book a Meeting',
      description: 'Let\'s discuss your project',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      link: 'https://calendly.com/gbenga'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/gbenga', color: 'hover:text-purple-400' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/gbenga', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/gbenga', color: 'hover:text-sky-400' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/gbenga', color: 'hover:text-pink-400' }
  ];

  const projectTypes = [
    { value: 'website', label: 'Website Development' },
    { value: 'webapp', label: 'Web Application' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'api', label: 'API Development' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const budgetRanges = [
    { value: '1k-5k', label: '$1,000 - $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k+', label: '$25,000+' }
  ];

  const timelineOptions = [
    { value: '1-2weeks', label: '1-2 weeks' },
    { value: '1month', label: '1 month' },
    { value: '2-3months', label: '2-3 months' },
    { value: '3months+', label: '3+ months' }
  ];

  const lagosTime = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const isWorkingHours = () => {
    const hour = new Date().getHours();
    return hour >= 9 && hour <= 17; // 9 AM to 5 PM
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 center w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">📫</div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
            
            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className={`w-3 h-3 rounded-full ${isWorkingHours() ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
              <span className="text-white/80">
                {isWorkingHours() ? 'Available now' : 'Currently offline'} • Lagos Time: {lagosTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 ${method.bgColor} backdrop-blur-sm rounded-xl border ${method.borderColor} hover:scale-105 transition-all duration-300`}
                    >
                      <div className={`p-3 ${method.bgColor} rounded-lg ${method.color}`}>
                        <method.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                          {method.label}
                        </div>
                        <div className="text-white/80 text-sm">{method.value}</div>
                        <div className="text-white/60 text-xs">{method.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-lg text-white/80 ${social.color} hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Coffee className="text-yellow-400" size={16} />
                    <span className="text-white/80 text-sm">Usually responds within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-purple-400" size={16} />
                    <span className="text-white/80 text-sm">50+ projects completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="text-pink-400" size={16} />
                    <span className="text-white/80 text-sm">100% client satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Start Your Project</h2>
                
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="What's your project about?"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-slate-800">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                      >
                        <option value="" className="bg-slate-800">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value} className="bg-slate-800">
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                      >
                        <option value="" className="bg-slate-800">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-slate-800">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={20} />
                        <span>Message sent successfully!</span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertCircle size={20} />
                        <span>Failed to send message. Please try again.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="font-semibold text-white mb-2">How long does it take to complete a project?</h4>
                    <p className="text-white/70 text-sm">
                      Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex web applications can take 2-3 months. I'll provide a detailed timeline during our consultation.
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="font-semibold text-white mb-2">What's included in your web development service?</h4>
                    <p className="text-white/70 text-sm">
                      I provide end-to-end development including design consultation, frontend/backend development, testing, deployment, and 30 days of post-launch support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Do you work with international clients?</h4>
                    <p className="text-white/70 text-sm">
                      Absolutely! I work with clients globally and am comfortable with remote collaboration across different time zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}