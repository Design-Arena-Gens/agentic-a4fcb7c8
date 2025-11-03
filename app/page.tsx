'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pale-green to-white overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-nexify-green opacity-10 rounded-full blur-3xl animation-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-nexify-dark-green opacity-10 rounded-full blur-3xl animation-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">NEXIFY</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
            Simplify management. Empower your workforce.
          </p>

          <div className="mb-16">
            <button className="group bg-nexify-green hover:bg-nexify-dark-green text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* App Mockup Illustration */}
          <div className="relative max-w-5xl mx-auto mt-16 animation-fade-in">
            <div className="relative perspective-1000">
              {/* Desktop Mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 mb-8 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-pale-green to-white rounded-2xl p-8 border-2 border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-12 bg-white rounded-xl shadow-sm"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-nexify-green opacity-20 rounded-2xl"></div>
                      <div className="h-32 bg-nexify-green opacity-30 rounded-2xl"></div>
                      <div className="h-32 bg-nexify-green opacity-25 rounded-2xl"></div>
                    </div>
                    <div className="h-40 bg-white rounded-xl shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 -right-4 sm:right-8 w-32 sm:w-48 bg-white rounded-3xl shadow-2xl p-2 transform hover:scale-110 transition-transform duration-500">
                <div className="bg-gradient-to-br from-pale-green to-white rounded-2xl p-4 border-2 border-gray-100">
                  <div className="w-1/3 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-6 bg-nexify-green opacity-30 rounded-lg"></div>
                    <div className="h-16 bg-white rounded-lg shadow-sm"></div>
                    <div className="h-12 bg-nexify-green opacity-20 rounded-lg"></div>
                    <div className="h-12 bg-nexify-green opacity-25 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About NEXIFY Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animation-slide-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About NEXIFY
            </h2>
            <div className="w-24 h-1 bg-nexify-green mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animation-slide-up">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                NEXIFY was born from a simple vision: to create a platform that truly understands the challenges of modern workforce management.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Built to organize teams and streamline daily operations, NEXIFY transforms the way businesses connect their field workers with office operations.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Developed by <span className="font-semibold text-nexify-dark-green">IT SOUQ LLP</span>, NEXIFY bridges the gap between field and office, creating seamless communication and efficient workflows.
              </p>
            </div>

            <div className="relative animation-fade-in">
              <div className="bg-gradient-to-br from-pale-green to-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-nexify-green rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Workforce Organization</h3>
                      <p className="text-gray-600">Manage teams with clarity and precision</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-nexify-green rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Streamlined Operations</h3>
                      <p className="text-gray-600">Optimize workflows and boost productivity</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-nexify-green rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Connectivity</h3>
                      <p className="text-gray-600">Bridge field and office seamlessly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pale-green">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose NEXIFY?
            </h2>
            <div className="w-24 h-1 bg-nexify-green mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Intuitive Design',
                description: 'Clean, user-friendly interface that your team will love',
                icon: '✨'
              },
              {
                title: 'Mobile-First',
                description: 'Access from anywhere, on any device',
                icon: '📱'
              },
              {
                title: 'Smart Analytics',
                description: 'Data-driven insights for better decisions',
                icon: '📊'
              },
              {
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security for peace of mind',
                icon: '🔒'
              },
              {
                title: 'Easy Integration',
                description: 'Works seamlessly with your existing tools',
                icon: '🔗'
              },
              {
                title: 'Expert Support',
                description: 'Dedicated team ready to help you succeed',
                icon: '💬'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-nexify-green to-nexify-dark-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl sm:text-2xl text-white opacity-90 mb-10">
            Join businesses that trust NEXIFY to manage their teams
          </p>
          <button className="bg-white text-nexify-dark-green px-12 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">NEXIFY</h3>
              <p className="text-gray-400">
                Smart workforce and client management platform
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-nexify-green transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-nexify-green transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-nexify-green transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-nexify-green transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Developed By</h4>
              <p className="text-gray-400 mb-2">
                <span className="text-nexify-green font-semibold">IT SOUQ LLP</span>
              </p>
              <p className="text-gray-400 text-sm">
                Bridging the gap between field and office
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NEXIFY by IT SOUQ LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
