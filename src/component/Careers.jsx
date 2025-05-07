import { Search, CheckCircle, Facebook, Instagram, Twitter } from "lucide-react"
import Logo from './../assets/Image/Group.png'
import Make from './../assets/Image/Mask Group.png'
import Group from './../assets/Image/Mask Group (1).png'
import Group2  from './../assets/Image/Mask Group (2).png'
import Young from './../assets/Image/young-couple-works-office.jpg'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <img src={Logo} alt="" width={40} height={40} className="w-10 h-10" />
                      </div>
            <span className="text-indigo-600 font-bold">WeFinance</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-sm">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-sm">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-sm">
              Our Services
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-sm">
              Our Team
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-sm">
              More
            </a>
          </nav>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Contact Us</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Career</h1>
          <p className="text-gray-500">
            Join our team and be part of something great. Discover how you can make a difference and grow your career
            with WeFinance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 gap-4">
              {Array(100)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-400"></div>
                ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 relative">
            {/* Left image */}
            <div className="relative h-68 md: rounded-3xl overflow-hidden bg-gray-200">
            <img src={Young} alt="" className=""/>
              {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400"></div> */}
            </div>

            {/* Right image with decorative elements */}
            <div className="relative h-64 md:h-80">
              {/* Purple decorative elements */}
              <div className="absolute left-0 top-1/4 w-6 h-16 bg-indigo-600 rounded-r-full"></div>
              <div className="absolute right-1/4 bottom-0 w-16 h-6 bg-indigo-100 rounded-t-full"></div>

              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Image Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-indigo-600 text-sm font-semibold mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Find Your Dream Job in WeFinance!</h3>
        </div>

        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
          We're always looking for new talent to join our incredible team. Discover your next career move with WeFinance
          and be part of our journey to transform the financial industry.
        </p>

        {/* Job Search Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="job-title" className="block text-xs text-gray-500 mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="job-title"
              placeholder="e.g. UX Designer"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="location" className="block text-xs text-gray-500 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="e.g. New York"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          <div className="flex items-end">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Search size={16} />
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md">Create Job Alert</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-4">
          <h2 className="text-indigo-600 text-sm font-semibold">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Discover The World of Finance</h3>
            <p className="text-gray-500 mb-8">
              At WeFinance, we're dedicated to transforming the world of finance through innovation and expertise. Our
              team of professionals works together to provide exceptional financial solutions and services to our
              clients.
            </p>

            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">18</span>
                </div>
                <span className="text-gray-700">Years Experience</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">240</span>
                </div>
                <span className="text-gray-700">Projects</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            Image Placeholder
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-indigo-600 text-sm font-semibold mb-2">Opportunities</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Career Opportunities</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Job Card 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Accounting Manager</h4>
              <p className="text-gray-500 text-sm mb-4">
                We're looking for an experienced Accounting Manager to join our finance team.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Sales Marketing</h4>
              <p className="text-gray-500 text-sm mb-4">
                Join our marketing team to help drive growth and expand our client base.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Tax Accounting</h4>
              <p className="text-gray-500 text-sm mb-4">
                We need a tax specialist to provide expert advice and services to our clients.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">UX/UI Designer</h4>
              <p className="text-gray-500 text-sm mb-4">
                Create beautiful, intuitive interfaces for our financial products and services.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
            </div>
          </div>

          {/* Job Card 5 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Developer</h4>
              <p className="text-gray-500 text-sm mb-4">
                Build robust, scalable applications that power our financial solutions.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
            </div>
          </div>

          {/* Job Card 6 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2">Product Designer</h4>
              <p className="text-gray-500 text-sm mb-4">
                Design innovative financial products that meet our clients' needs.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-indigo-600 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-sm font-semibold mb-2">Why WeFinance</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Great People Deserve Great Benefits.</h3>
              <p className="mb-8 text-white/80">
                We value our employees and offer comprehensive benefits to ensure their wellbeing and professional
                growth. Join our team and enjoy these advantages while building your career in finance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" size={18} />
                  <p className="text-white/80">Competitive salary and performance bonuses</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" size={18} />
                  <p className="text-white/80">Comprehensive health, dental, and vision insurance</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" size={18} />
                  <p className="text-white/80">Flexible work arrangements and generous paid time off</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-white mt-1 flex-shrink-0" size={18} />
                  <p className="text-white/80">Professional development opportunities and tuition assistance</p>
                </div>
              </div>

              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium">Learn More</button>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden bg-indigo-500 flex items-center justify-center text-white/50">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-indigo-600 text-sm font-semibold mb-2">Our Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Latest News</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* News Card 1 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400"><img src={Make} alt="" className="h-48"/></div>
            <div className="p-6">
              <span className="text-xs text-gray-500">January 15, 2025</span>
              <h4 className="font-bold text-xl my-2">How to Start a Successful Business in 2025</h4>
              <p className="text-gray-500 text-sm mb-4">
                Learn the essential steps to launching a successful business in today's competitive market.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Read More</button>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400"><img src={Group} alt="" className="h-48"/></div>
            <div className="p-6">
              <span className="text-xs text-gray-500">January 10, 2025</span>
              <h4 className="font-bold text-xl my-2">Grow Your Business with Email Marketing</h4>
              <p className="text-gray-500 text-sm mb-4">
                Discover how effective email marketing strategies can help expand your customer base.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Read More</button>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                <img src={Group2} alt="" className="h-48" /></div>
            <div className="p-6">
              <span className="text-xs text-gray-500">January 5, 2025</span>
              <h4 className="font-bold text-xl my-2">The 4 Pillars Every Online Business Needs</h4>
              <p className="text-gray-500 text-sm mb-4">
                Learn about the four essential components that every successful online business must have.
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-sm font-semibold mb-4">CONNECT WITH US</h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Interested?
            <br />
            Let's Start a Projects Together
          </h3>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600/20 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">W</span>
                </div>
                <span className="text-indigo-600 font-bold">WeFinance</span>
              </div>
              <p className="text-gray-500 max-w-xs">WeFinance is the highest rated expert team in the world</p>
              <p className="text-gray-400 text-sm">©2025 WeFinance</p>
            </div>

            {/* Navigation Links - First Column */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    How it Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Links - Second Column */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Links - Third Column and Social Media */}
            <div className="space-y-8">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-end mt-12 gap-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Help
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Term & Conditions
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
