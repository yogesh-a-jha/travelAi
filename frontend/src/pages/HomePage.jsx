import React from 'react'
import SubNav from '../components/SubNav'
import Navbar from '../components/Navbar';
import bgImage from '../assets/mountainbg.jpg'


const HomePage = () => {
     const banners = [
    {
      title: 'Summer Special Offer',
      subtitle: 'Save up to 40% on beach destinations',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      color: 'from-orange-500 to-pink-500',
    },
    {
      title: 'Winter Wonderland',
      subtitle: 'Explore snowy mountain getaways',
      image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cultural Heritage Tours',
      subtitle: 'Discover ancient civilizations',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg',
      color: 'from-purple-500 to-indigo-500',
    },
  ];
  return (
    <div className='bg-gradient-to-b from-gray-50 to-gray-100 bg-cover bg-center h-screen w-full -z-999 ' style={{ backgroundImage: `url(${bgImage})`}} >
        <div className='h-screen w-screen absolute bg-gradient-to-b from-gray-100/900 to-gray-900/100 z-0'></div>
    <Navbar className='z-40'/>
      <span className='flex justify-center'><SubNav /></span>
        
 
      <section className="max-w-7xl mx-auto px-4 py-16 ">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Featured Promotions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 m-6">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${banner.color} opacity-80`}></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                <p className="text-white/90 mb-4">{banner.subtitle}</p>
                <button className="flex items-center space-x-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore Offers</span>
               </button>
              </div>
            </div>
          ))}
        </div>
     </section>
    </div>
  )
}

export default HomePage
