import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Ai from '../assets/Ai.png'
import { useAppContext } from '../context/AppContext' 
import { Calendar, MapPin, Sparkles, Loader2 } from 'lucide-react';
import { generateItinerary } from '../../api/generateItineraryApi.js';
import MarkdownDisplay from './markdownFormator.jsx';
// import Markdown from 'react-markdown'
// import Prism from'prismjs'



const AiPlanner = () => {

  const interestOptions = [
    'Adventure',
    'Culture',
    'Beach',
    'Mountains',
    'Food',
    'History',
    'Wildlife',
    'Shopping',
  ];

  const {navigate} = useAppContext();

  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    interests: []
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  const [interests, setInterests] = useState('');

   const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };


  

   const handleGenerate = async (e) => {
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      alert('Please fill in all required fields');
      return;
    }

    // setIsGenerating(true);

    e.preventDefault();
    setIsGenerating(true);
    try {
      const data = await generateItinerary(formData);
      console.log(data);
      setItinerary(data.itinerary); // backend returns { itinerary }
    } catch (error) {
      console.error("Failed to get itinerary:", error);
    } finally {
      setIsGenerating(false);
    }
  };



  return (
    <div className='min-h-screen'>
      <span className='fixed top-0 left-0 w-screen bg-white shadow-md z-50'>
          <Navbar/>
      </span>
       <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 mt-20 ">
      <div className="max-w-7xl mx-auto px-4 py-8 relative ">
        <div onClick={(e)=>navigate('/recommendations')} className=' flex absolute top-14 right-10 w-fit justify-end mr-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm p-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl cursor-pointer'>
            Suggested Trip
          </div>
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            {/* <Sparkles className="h-15 w-18 text-blue-600" /> */}
            <img src={Ai} className='h-12 w-14' alt="" />
            <h1 className="text-4xl font-bold text-gray-900">AI Travel Planner</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Tell us your preferences and let AI create your perfect itinerary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Where do you want to go?
                </label>
                <input
                  type="text"
                  placeholder="e.g., Bali, Paris, Tokyo"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What are your interests?
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.interests.includes(interest)
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={(e)=>handleGenerate(e)}
                disabled={isGenerating}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Generating Your Itinerary...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Itinerary</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Itinerary</h2>

            <div className="h-[600px] overflow-y-auto custom-scrollbar">
              {!itinerary ? (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-10 w-10 text-blue-600" />
                    </div>
                    <p className="text-gray-500 text-lg">
                      Fill in your travel details and click "Generate Itinerary"
                      <br />
                      to see your personalized travel plan
                    </p>
                  </div>
                </div>
              ) : (
                <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white rounded-3xl shadow-lg border border-gray-200 ">
                  <MarkdownDisplay content={itinerary}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AiPlanner
