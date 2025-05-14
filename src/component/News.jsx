import { useState } from "react"
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from "lucide-react"

// News article data
const newsArticles = [
  {
    id: 1,
    title: "How to Start a Successful Business in 2025",
    description: "Learn the essential steps to launching a successful business in today's competitive market.",
    date: "January 15, 2025",
    category: "Business",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Grow Your Business with Email Marketing",
    description: "Discover how effective email marketing strategies can help expand your customer base.",
    date: "January 10, 2025",
    category: "Marketing",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Top 5 Pillars Every Successful Business",
    description: "Learn about the five essential components that every successful business must have.",
    date: "January 5, 2025",
    category: "Business",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Company Opens Green Design Data Center",
    description: "WeFinance launches its first eco-friendly data center to reduce environmental impact.",
    date: "December 28, 2024",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Uber Is Betting All Its Auto-Leasing Business",
    description: "Uber makes strategic investments in its auto-leasing division to drive growth.",
    date: "December 20, 2024",
    category: "Finance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Ease Your Way In To The Global Stock Market",
    description: "A beginner's guide to entering the global stock market with minimal risk.",
    date: "December 15, 2024",
    category: "Investment",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Company facts data
const companyFacts = [
  { name: "Quality Commitment", percentage: 95 },
  { name: "Professional Staff", percentage: 85 },
  { name: "Growth & Development", percentage: 90 },
  { name: "Honest & Dependable", percentage: 80 },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter articles based on active category
  const filteredArticles =
    activeCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="py-4 px-6 md:px-16 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-indigo-600 font-bold">WeFinance</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-indigo-600 text-sm">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-600 text-sm">
            About Us
          </Link>
          <Link href="/news" className="text-indigo-600 font-medium text-sm">
            News & Media
          </Link>
          <Link href="/career" className="text-gray-600 hover:text-indigo-600 text-sm">
            Our Services
          </Link>
          <Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm flex items-center">
            More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </nav>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Contact Us</button>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">News</h1>
          <p className="text-gray-500 max-w-2xl">
            Stay up-to-date with the latest news and insights from WeFinance. Discover our latest articles, press
            releases, and media coverage.
          </p>

          {/* Hero Images */}
          <div className="mt-12 relative">
            {/* Background pattern */}
            <div className="absolute -left-4 top-1/4 w-20 h-20 bg-gray-100 rounded-md opacity-50"></div>
            <div className="absolute right-1/4 bottom-0 w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>

            {/* Main images container */}
            <div className="relative z-10 grid md:grid-cols-2 gap-4 md:gap-8">
              {/* Left image */}
              <div className="relative rounded-3xl overflow-hidden h-64 md:h-80">
                <div className="absolute inset-0 bg-gray-200">
                  {/* <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Professional woman in meeting"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>

              {/* Right image with decorative elements */}
              <div className="relative">
                {/* Purple decorative elements */}
                <div className="absolute left-0 top-1/4 w-6 h-16 bg-indigo-600 rounded-r-full z-10"></div>

                {/* Main image */}
                <div className="absolute right-0 top-0 w-full h-64 md:h-80 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200">
                    {/* <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Business professional in office"
                      width={500}
                      height={400}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <span className="text-indigo-600 text-sm font-semibold">Our Updates</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest News</h2>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {["All", "Business", "Finance", "Marketing", "Technology", "Investment"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 overflow-hidden">
                  {/* <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  /> */}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{article.description}</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Finance Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-200 text-sm font-semibold">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Professional Finance for Your Business</h2>
              <p className="text-white/80 mb-4">
                Our team of certified financial advisors has years of experience working with businesses of all sizes.
                We understand the challenges you face and are here to help.
              </p>
              <p className="text-white/80 mb-4">
                We offer comprehensive financial planning, investment strategies, and risk management solutions tailored
                to your business needs.
              </p>
              <p className="text-white/80 mb-6">
                Our clients trust us because we deliver results. We're committed to helping your business grow and
                thrive financially.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium">Get Help</button>
            </div>

            <div className="relative">
              {/* Team member photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
                    {/* <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
                <div className="relative mt-12">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
                    {/* <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
                    {/* <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
                <div className="relative mt-20">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
                    {/* <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts About Our Company Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Who We Are */}
          <div className="bg-indigo-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              We're a team of passionate financial experts dedicated to helping individuals and businesses achieve their
              financial goals. With years of experience in the industry, we bring knowledge and expertise to every
              client relationship.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to provide accessible, transparent financial services that empower our clients to make
              informed decisions about their financial future.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">Read More</button>
          </div>

          {/* Our Professional Skills */}
          <div>
            <span className="text-indigo-600 text-sm font-semibold">Facts About</span>
            <h3 className="text-2xl font-bold mt-2 mb-6">A Few Facts About Our Company</h3>
            <p className="text-gray-500 mb-8">
              At WeFinance, we pride ourselves on our comprehensive financial expertise. Our team brings a diverse set
              of skills to help address all your financial needs with precision and care.
            </p>

            {/* Skill bars */}
            <div className="space-y-6">
              {companyFacts.map((fact, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{fact.name}</span>
                    <span>{fact.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full" style={{ width: `${fact.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Financial Planning
            <br />
            For Safe Investment
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left blue section */}
            <div className="md:col-span-2 bg-indigo-600 rounded-3xl p-8 text-white flex flex-col justify-between">
              <div className="flex justify-between items-center mb-12">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div>
                {/* <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Financial planning meeting"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                /> */}
              </div>
            </div>

            {/* Right image */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden h-80 md:h-auto">
              {/* <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Team financial planning"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-indigo-400 text-sm font-semibold">Contact With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Interested?
            <br />
            Let's Start a Projects Together
          </h2>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <span className="text-indigo-600 font-bold">WeFinance</span>
              </div>
              <p className="text-gray-500 text-sm">
                WeFinance provides the best financial solutions for your business and personal needs.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Home</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Our Team</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 WeFinance. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-indigo-600 hover:text-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
