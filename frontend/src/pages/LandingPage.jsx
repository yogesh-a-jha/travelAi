import React from 'react'
import Content from '../components/Content'
import { Plane, Sparkles, MapPin, Calendar, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useAppContext } from '../context/AppContext';

const LandingPage = () => {
  const {navigate} = useAppContext();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <Navbar/>

        <main className="relative z-10">
          <section className="px-4 py-20 sm:py-32">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">AI-Powered Travel Planning</span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
                Your Personal
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> AI Travel Guide</span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up-delay">
                Plan your perfect trip in seconds with AI-powered itineraries. Get personalized recommendations, day-by-day plans, and discover amazing destinations tailored just for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
                <button
                  onClick={()=>navigate('/home')}
                  className="px-8 py-4 bg-blue-600 text-white cursor-pointer rounded-xl hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Planning Now
                </button>
                <button
                  onClick={()=>navigate('/recommendations')}
                  className="px-8 py-4 bg-white text-blue-600 cursor-pointer rounded-xl hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg border-2 border-blue-600"
                >
                  Explore Destinations
                </button>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
                Why Choose Travel.ai?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Sparkles className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Planning</h3>
                  <p className="text-gray-600">
                    Our advanced AI analyzes your preferences and creates personalized itineraries in seconds, saving you hours of research.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                    <MapPin className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Recommendations</h3>
                  <p className="text-gray-600">
                    Discover hidden gems and popular attractions tailored to your interests, budget, and travel style.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Calendar className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Day-by-Day Itineraries</h3>
                  <p className="text-gray-600">
                    Get detailed daily plans with activities, timing suggestions, and tips to make the most of your trip.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Join thousands of travelers who trust Travel.ai to plan their perfect trips
              </p>
              <button
                onClick={()=>navigate('/home')}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 cursor-pointer to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Free
              </button>
            </div>
          </section>
        </main>

        <footer className="relative z-10 bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Plane className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Travel.ai</span>
            </div>
            <p className="text-gray-400">Your AI-powered personal travel guide</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage
