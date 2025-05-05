import { ChevronDown } from "lucide-react"
import Logo from './../assets/Image/Group.png'
import Financial from './../assets/Image/pexels.png'
import Make from './../assets/Image/Mask group4 (2).png'
import Group  from './../assets/Image/Mask Group.png'
import Group1  from './../assets/Image/Mask Group (1).png'
import Group2  from './../assets/Image/Mask Group (2).png'
import { Wallet, Briefcase, BarChart3,Facebook, Instagram, Twitter } from 'lucide-react'; // icons from lucide-react

const features = [
  {
    icon: <Wallet className="w-12 h-12 text-indigo-600 " />,
    title: 'Financial Report',
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    number: '#1',
    bg: 'bg-white text-gray-800 shadow-lg shadow-indigo-500/40',
    iconColor: 'text-indigo-600',
  },
  {
    icon: <Briefcase className="w-12 h-12 text-white" />,
    title: 'Manage Investments',
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    number: '#2',
    bg: 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40',
    iconColor: 'text-white',
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-white" />,
    title: 'Financial Report',
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    number: '#3',
    bg: 'bg-indigo-900 text-white shadow-lg shadow-indigo-500/40',
    iconColor: 'text-white',
  },
];

const stats = [
  {
    number: '18',
    label: 'Years Experience',
    rounded: 'rounded-tl-[80px] rounded-br-[0px] rounded-tr-[0px] rounded-bl-[0px]',
  },
  {
    number: '240+',
    label: 'Completed Projects',
    rounded: 'rounded-tr-[80px] rounded-bl-[0px] rounded-tl-[0px] rounded-br-[0px]',
  },
  {
    number: '9.5/10',
    label: 'Average rating',
    rounded: 'rounded-bl-[80px] rounded-tr-[0px] rounded-tl-[0px] rounded-br-[0px]',
  },
  {
    number: '150+',
    label: 'Served',
    rounded: 'rounded-br-[80px] rounded-tl-[0px] rounded-tr-[0px] rounded-bl-[0px]',
  },
];

const Dashboard = () => {
  return (
    <div>
       <div className="min-h-screen bg-[#3431de]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <img src={Logo} alt="" width={40} height={40} className="w-10 h-10" />
          </div>
          <span className="text-white text-xl font-bold">WeFinance</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white font-medium border-b-2 border-white">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            How it Works
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Our Services
          </a>
          <button className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
            More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <button className="px-6 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-[#3431de] transition-colors">
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-5 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight">
              Financial
              <br />
              Solutions.
            </h1>
            <p className="text-white/80 text-lg max-w-md">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
            </p>
            <button className="px-8 py-3 bg-[#14144B] text-white rounded-md hover:bg-[#1E1E6B] transition-colors">
              Let's Talk
            </button>
          </div>

          <div className="relative">
            {/* Placeholder for the main image */}
            <div className="w-full h-[500px] relative">
              {/* This would be replaced with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className="w-64 h-64 bg-[#14144B]/30 rounded-full"></div> */}
                <img src={Financial} alt="" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 right-1/4 animate-bounce">
                <div className="w-8 h-8 bg-yellow-400 rotate-45"></div>
              </div>

              {/* Coin elements */}
              <div className="absolute top-1/3 left-1/4 animate-pulse">
                <div className="w-16 h-16 bg-white/20 rounded-full"></div>
              </div>

              <div className="absolute bottom-1/4 right-1/3 animate-pulse delay-300">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>

              {/* Additional decorative circles */}
              <div className="absolute top-1/2 right-1/6 animate-pulse delay-500">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background vertical lines */}
        <div className="absolute inset-0 z-0 flex justify-between pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-px h-full bg-white/5"></div>
          ))}
        </div>
      </main>
      </div>
      {/* Our Firm Section */}
      <section className="container mx-auto px-5 py-24">
        <div className="mb-8">
          <h2 className="text-[#3431de] text-xl font-semibold">Our Firm</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-[#0F172A] text-4xl md:text-5xl font-bold leading-tight">
              We are Agile. Constantly Focused on Growth and Being Better
            </h3>

            <div className="space-y-6 text-gray-500">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>

              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>
            </div>

            <button className="px-8 py-3 bg-[#3431de] text-white rounded-md hover:bg-[#2825b3] transition-colors">
              Read About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto ">
          {/* mt-12 */}
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-indigo-100 p-6 ${stat.rounded} flex flex-col justify-center items-center`}
        >
          <div className="text-3xl font-bold text-indigo-700">{stat.number}</div>
          <div className="text-sm text-indigo-700 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#2f29d9] font-semibold text-lg">Our Services</span>
          <h2 className="text-[#0b1030] text-4xl md:text-5xl font-bold">What We Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`relative p-8 rounded-xl overflow-hidden ${feature.bg}`}
        >
          <div className="flex justify-center mb-4">
            {feature.icon}
          </div>
          <p className="text-sm font-medium text-center mb-2  ">{feature.number}</p>
          <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
          <p className="text-sm text-center opacity-80">{feature.desc}</p>

          {/* Decorative semi-transparent circle */}
          <div className="absolute bottom-0 left-0 w-64 h-32 bg-white opacity-10 rounded-full transform translate-x-1/4 translate-y-1/2 pointer-events-none" />
        </div>
      ))}
    </div>
      </section>

      <div className="min-h-screen bg-[#3431de]">
      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-24 relative ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <span className="text-[#B4B4FF] font-semibold text-lg">Key Features</span>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Manage Your Finances From one Place
            </h2>
            <div className="space-y-4">
              <p className="text-white/80 text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>
              <p className="text-white/80 text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>
            </div>
            <button className="px-8 py-3 bg-[#14144B] text-white rounded-md hover:bg-[#1E1E6B] transition-colors">
              Check All Futures
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_BLOB_URL}/mlmZj.png`}
                alt="Person reviewing financial documents"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              /> */}
              <img src={Make}   alt="Person reviewing financial documents" width={380} height={600} className="w-30 h-700 object-cover" />
            </div>
            {/* Decorative Dots Pattern */}
            {/* <div className="absolute -top-12 -right-12 grid grid-cols-6 gap-2">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              ))}
            </div> */}
          </div>
        </div>
      </section>
      </div>

      {/* Start Now Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature Cards */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl">
            {/* Innovative Solutions Card */}
            <div className="bg-white rounded-3xl p-20 shadow-lg text-center">
              <div className="mx-auto w-16 h-16 bg-[#4646FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#14144B]">Innovative Solutions</h3>
            </div>

            {/* Professional Team Card - Offset */}
            <div className="bg-white rounded-3xl p-20 shadow-lg text-center">
              <div className="mx-auto w-16 h-16 bg-[#4646FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 7.83c.85-.37 1.79.18 1.79 1.17v8c0 1-.94 1.54-1.79 1.17l-14-6a1 1 0 0 1 0-1.8l14-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#14144B]">Professional Team</h3>
            </div>

            {/* 24/7 Support Card */}
            <div className="bg-white rounded-3xl p-20 shadow-lg text-center col-span-2 max-w-xs ">
              <div className="mx-auto w-16 h-16 bg-[#4646FF] rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#14144B]">24/7 Support</h3>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <span className="text-[#3029D9] font-semibold text-lg">Start Now</span>
            <h2 className="text-[#0B1131] text-4xl md:text-5xl font-bold leading-tight">
              Start Now & Make <br /> Your Finances <br /> Clear & Organized
            </h2>
            <div className="space-y-4">
              <p className="text-[#c9cfd6]/80 text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>
              <p className="text-[#c9cfd6]/80 text-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#3029D9] font-semibold text-lg">Our Services</span>
          <h2 className="text-[#0B1131] text-4xl md:text-5xl font-bold">Latest News</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3] relative">
             
              <img src= {Group}  alt="Email marketing team" width={600} height={450} className="object-cover w-full h-full" />
            </div>
            <div className="p-8 space-y-4">
              <time className="text-[#3029D9] font-semibold">January 01, 2021</time>
              <h3 className="text-2xl font-bold text-[#0B1131]">How to Start a Successful in 2020</h3>
              <p className="text-gray-600 text-[#c9cfd6]">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
              </p>
              <button className="px-6 py-2 bg-[#4646FF] text-white rounded-md hover:bg-[#3837CC] transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3] relative">
              <img src= {Group1}  alt="Email marketing team" width={600} height={500} className="object-cover w-full h-full" />
            </div>
            <div className="p-8 space-y-4">
              <time className="text-[#3029D9] font-semibold">January 01, 2021</time>
              <h3 className="text-2xl font-bold text-[#0B1131]">Grow Your Business with Email Marketing</h3>
              <p className="text-gray-600 text-[#c9cfd6]">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
              </p>
              <button className="px-6 py-2 bg-[#4646FF] text-white rounded-md hover:bg-[#3837CC] transition-colors">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3] relative">
            
              <img src= {Group2}  alt="Email marketing team" width={600} height={450} className="object-cover w-full h-full" />
            </div>
            <div className="p-8 space-y-4">
              <time className="text-[#3029D9] font-semibold">January 01, 2021</time>
              <h3 className="text-2xl font-bold text-[#0B1131]">The 4 Pillars Every Online Business</h3>
              <p className="text-gray-600 text-[#c9cfd6]">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
              </p>
              <button className="px-6 py-2 bg-[#4646FF] text-white rounded-md hover:bg-[#3837CC] transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      
          <div className="min-h-screen">
      {/* Our Firm Section */}
      <section className="container mx-auto px-5 py-24">
        <div className="mb-8">
          <h2 className="text-[#3431de] text-xl font-semibold">Our Firm</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-[#0F172A] text-4xl md:text-5xl font-bold leading-tight">
              We are Agile. Constantly Focused on Growth and Being Better
            </h3>

            <div className="space-y-6 text-gray-500">
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>

              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
              </p>
            </div>

            <button className="px-8 py-3 bg-[#3431de] text-white rounded-md hover:bg-[#2825b3] transition-colors">
              Read About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#e6e6ff] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="text-[#3431de] text-5xl font-bold">18</h4>
              <p className="text-[#3431de] font-medium">Years Experience</p>
            </div>

            <div className="bg-[#e6e6ff] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="text-[#3431de] text-5xl font-bold">240+</h4>
              <p className="text-[#3431de] font-medium">Completed Projects</p>
            </div>

            <div className="bg-[#e6e6ff] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="text-[#3431de] text-5xl font-bold">9.5/10</h4>
              <p className="text-[#3431de] font-medium">Average rating</p>
            </div>

            <div className="bg-[#e6e6ff] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <h4 className="text-[#3431de] text-5xl font-bold">150+</h4>
              <p className="text-[#3431de] font-medium">Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto px-5 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-[#3431de] text-xl font-semibold mb-4">Our Services</h2>
          <h3 className="text-[#0F172A] text-4xl md:text-5xl font-bold">What We Offer</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
            <div className="p-12 flex flex-col items-center justify-center">
              <div className="mb-8">
                <Wallet className="w-16 h-16 text-[#3431de]" />
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-4">#1</p>
                <h4 className="text-2xl font-bold mb-6">Financial Report</h4>
                <p className="text-gray-500">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
              </div>
            </div>
            <div className="h-24 bg-[#e6e6ff] rounded-tl-[100px]"></div>
          </div>

          {/* Service Card 2 */}
          <div className="rounded-2xl overflow-hidden bg-[#3431de] shadow-lg text-white">
            <div className="p-12 flex flex-col items-center justify-center">
              <div className="mb-8">
                <Briefcase className="w-16 h-16 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white/70 mb-4">#2</p>
                <h4 className="text-2xl font-bold mb-6">Manage Investments</h4>
                <p className="text-white/80">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
              </div>
            </div>
            <div className="h-24 bg-[#2825b3] rounded-tl-[100px]"></div>
          </div>

          {/* Service Card 3 */}
          <div className="rounded-2xl overflow-hidden bg-[#0F172A] shadow-lg text-white">
            <div className="p-12 flex flex-col items-center justify-center">
              <div className="mb-8">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white/70 mb-4">#3</p>
                <h4 className="text-2xl font-bold mb-6">Financial Report</h4>
                <p className="text-white/80">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
              </div>
            </div>
            <div className="h-24 bg-[#1E293B] rounded-tl-[100px]"></div>
          </div>
        </div>
      </section>
      {/* Added Section */}
      <section className="bg-[#14144B] py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-6">
          <span className="text-[#4646FF] font-semibold text-lg">Contact With Us</span>
          <div className="space-y-4">
            <h2 className="text-white text-5xl md:text-6xl font-bold">Interested?</h2>
            <p className="text-white text-4xl md:text-5xl font-bold">Let's Start a Projects Together</p>
          </div>
          <div className="pt-8">
            <button className="px-8 py-3 bg-[#4646FF] text-white rounded-md hover:bg-[#3837CC] transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 42.3C840 37 960 33 1080 35.3C1200 37 1320 45 1380 49.3L1440 53.3V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#3837CC"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#3431de]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#3431de] font-bold">W</span>
                </div>
                <span className="text-[#3431de] text-xl font-bold">WeFinance</span>
              </div>
              <p className="text-gray-500 max-w-xs">WeFinance is the highest rated expert team in the world</p>
              <p className="text-gray-400 text-sm">©2021 WeFinance</p>
            </div>

            {/* Navigation Links - First Column */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    How it Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Links - Second Column */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Links - Third Column and Social Media */}
            <div className="space-y-8">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-[#3431de] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-[#3431de] hover:text-[#2825b3] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#3431de] hover:text-[#2825b3] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#3431de] hover:text-[#2825b3] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-end mt-12 gap-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#3431de] transition-colors">
              Help
            </a>
            <a href="#" className="text-gray-500 hover:text-[#3431de] transition-colors">
              Term & Conditions
            </a>
            <a href="#" className="text-gray-500 hover:text-[#3431de] transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>

    </div>
  )
}

export default Dashboard
