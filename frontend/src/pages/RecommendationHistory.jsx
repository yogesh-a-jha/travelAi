import React from 'react'
import { MapPin, Calendar, DollarSign, Users, Star, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

function RecommendationHistory() {


  const tripSuggestions = [
  {
    id: 1,
    destination: 'Goa',
    country: 'India',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4-6 days',
    bestTime: 'November - February',
    budget: '₹20,000 - ₹50,000',
    highlights: ['Baga Beach', 'Fort Aguada', 'Water Sports', 'Nightlife'],
    description: 'Relax on sandy beaches, enjoy water adventures, and experience the vibrant nightlife of Goa.',
    rating: 4.8,
    activities: ['Beach', 'Adventure', 'Nightlife', 'Relaxation']
  },
  {
    id: 2,
    destination: 'Manali, Himachal Pradesh',
    country: 'India',
    image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5-7 days',
    bestTime: 'October - February, May - June',
    budget: '₹15,000 - ₹35,000',
    highlights: ['Solang Valley', 'Rohtang Pass', 'Old Manali', 'Hidimba Temple'],
    description: 'Enjoy snow-capped mountains, scenic valleys, and thrilling adventure sports in Manali.',
    rating: 4.7,
    activities: ['Adventure', 'Mountains', 'Nature', 'Relaxation']
  },
  {
    id: 3,
    destination: 'Jaipur, Rajasthan',
    country: 'India',
    image: 'https://images.pexels.com/photos/1796725/pexels-photo-1796725.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3-5 days',
    bestTime: 'October - March',
    budget: '₹20,000 - ₹40,000',
    highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jal Mahal'],
    description: 'Explore royal palaces, colorful bazaars, and the rich heritage of the Pink City.',
    rating: 4.8,
    activities: ['Culture', 'History', 'Architecture', 'Shopping']
  },
  {
    id: 4,
    destination: 'Kerala Backwaters',
    country: 'India',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4-6 days',
    bestTime: 'September - March',
    budget: '₹25,000 - ₹60,000',
    highlights: ['Houseboat Cruise', 'Alleppey', 'Kumarakom', 'Coconut Lagoons'],
    description: 'Drift through tranquil backwaters, lush greenery, and traditional villages in God’s Own Country.',
    rating: 4.9,
    activities: ['Relaxation', 'Nature', 'Culture', 'Photography']
  },
  {
    id: 5,
    destination: 'Leh-Ladakh',
    country: 'India',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7-10 days',
    bestTime: 'May - September',
    budget: '₹30,000 - ₹80,000',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La', 'Monasteries'],
    description: 'Ride through high mountain passes and experience the serene landscapes of Ladakh.',
    rating: 4.9,
    activities: ['Adventure', 'Mountains', 'Culture', 'Road Trip']
  },
  {
    id: 6,
    destination: 'Rishikesh & Haridwar, Uttarakhand',
    country: 'India',
    image: 'https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4-5 days',
    bestTime: 'October - April',
    budget: '₹15,000 - ₹35,000',
    highlights: ['Ganga Aarti', 'River Rafting', 'Laxman Jhula', 'Yoga Retreats'],
    description: 'Find spiritual peace along the Ganges or pump your adrenaline with river rafting in Rishikesh.',
    rating: 4.7,
    activities: ['Spiritual', 'Adventure', 'Culture', 'Nature']
  },
  {
    id: 7,
    destination: 'Andaman & Nicobar Islands',
    country: 'India',
    image: 'https://images.pexels.com/photos/1068981/pexels-photo-1068981.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5-7 days',
    bestTime: 'October - May',
    budget: '₹40,000 - ₹90,000',
    highlights: ['Radhanagar Beach', 'Havelock Island', 'Scuba Diving', 'Cellular Jail'],
    description: 'Crystal-clear waters, coral reefs, and tropical charm await you on these stunning islands.',
    rating: 4.9,
    activities: ['Beach', 'Adventure', 'Relaxation', 'Nature']
  },
  {
    id: 8,
    destination: 'Darjeeling, West Bengal',
    country: 'India',
    image: 'https://images.pexels.com/photos/1642157/pexels-photo-1642157.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4-5 days',
    bestTime: 'March - May, October - December',
    budget: '₹20,000 - ₹40,000',
    highlights: ['Tiger Hill', 'Toy Train', 'Tea Gardens', 'Batasia Loop'],
    description: 'Sip world-famous tea and admire the snow-covered Himalayas in this charming hill station.',
    rating: 4.6,
    activities: ['Nature', 'Culture', 'Relaxation', 'Photography']
  },
  {
    id: 9,
    destination: 'Agra, Uttar Pradesh',
    country: 'India',
    image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '2-3 days',
    bestTime: 'October - March',
    budget: '₹10,000 - ₹25,000',
    highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh', 'Fatehpur Sikri'],
    description: 'Visit the iconic symbol of love and explore Mughal architecture at its finest.',
    rating: 4.8,
    activities: ['History', 'Culture', 'Architecture', 'Photography']
  },
  {
    id: 10,
    destination: 'Coorg, Karnataka',
    country: 'India',
    image: 'https://images.pexels.com/photos/2080965/pexels-photo-2080965.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3-5 days',
    bestTime: 'October - March',
    budget: '₹20,000 - ₹40,000',
    highlights: ['Abbey Falls', 'Coffee Plantations', 'Dubare Elephant Camp', 'Nisargadhama'],
    description: 'Known as the Scotland of India, Coorg offers misty hills, coffee estates, and serene nature.',
    rating: 4.7,
    activities: ['Nature', 'Relaxation', 'Adventure', 'Photography']
  }
];

  return (
     <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 ">
      <span className='fixed top-0 left-0 w-screen bg-white shadow-md z-50'>
          <Navbar/>
      </span>
      <div className="max-w-7xl mx-auto px-4 mt-15 pt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Suggested Trips
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked destinations perfect for your next adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tripSuggestions.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{trip.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {trip.destination}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{trip.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="text-sm">{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="text-sm">Best time: {trip.bestTime}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="text-sm">{trip.budget}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {trip.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {trip.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {activity}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendationHistory



