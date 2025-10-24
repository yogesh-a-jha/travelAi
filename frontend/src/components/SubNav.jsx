import React, { use, useState } from 'react'
import flight from '../assets/flighth.png'
import hotel from '../assets/hotalh.png'
import train from '../assets/trainh.png'
import Ai from '../assets/Ai.png'
import { useAppContext } from '../context/AppContext' 
// import flight from '../assets/flighth.png'

const SubNav = () => {
    const [navigation, setNavigation] = useState('bus')
    const {navigate} = useAppContext();

  return (
    <div className='flex flex-col items-center'>

        <div className='bg-gray-100 rounded-3xl p-6 mx-10 w-fit z-20 border border-t-0 border-gray-400/10 border-l-0'>
        <div className='flex justify-center items-center gap-10'>
            <span>
                <ul className='flex gap-5 cursor-pointer'>
                    <li onClick={(e)=>setNavigation('hotel')} className='h-20 w-20 flex flex-col justify-center items-center  rounded-2xl '><img className='h-9 w-9' src={hotel} alt="" /><p>Hotel</p></li>
                    <li onClick={(e)=>setNavigation('flight')} className='h-20 w-20 flex flex-col justify-center items-center  rounded-2xl '><img className='h-9 w-9 ' src={flight} alt="" /><p>Flight</p></li>
                    <li onClick={(e)=>setNavigation('train')} className='h-20 w-20 flex flex-col justify-center items-center  rounded-2xl '><img className='h-9 w-9' src={train} alt="" /><p>Train</p></li>
                    <li onClick={(e)=>setNavigation('bus')} className='h-20 w-20 flex flex-col justify-center items-center  rounded-2xl '><img className='h-9 w-9' src={flight} alt="" /><p>Bus</p></li>
                    {/* <li className='h-20 w-20 flex flex-col justify-center items-center  rounded-2xl bg-blue-100'><p>More</p></li> */}
                    {/* <li>Flight</li>
                    <li>Train</li>
                    <li>Bus</li> */}
                </ul>
            </span>

            <span onClick={()=>navigate('/aiplanner')} className='flex flex-col justify-center bg-gradient-to-tr from-purple-300 to-indigo-100 p-5 rounded-2xl cursor-pointer'>
                <span className='flex'>
                    <img className='h-9 w-11' src={Ai} alt="" />
                    <p className='text-2xl font-bold'>Ai Travel Guide</p>

                </span>
                <p className='text-sm '>Describe you requires, Ai will help you the best!</p>

            </span>
        </div>
        </div>

        {navigation==='flight'&&
        <div className='w-full h-auto -translate-y-10 z-10  rounded-2xl backdrop-blur-sm border border-gray-400/34 p-8 pt-13 text-white'>
            <h1 className='text-2xl font-bold mb-4'>Flights</h1>

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="From" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="To" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <div className="flex gap-3">
            <input type="date" className="w-1/2 border border-gray-400/34 rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
            <input type="date" className="w-1/2 border border-gray-400/34 rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
          </div>
          <button className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Search Flights
          </button>
        </div>
        </div>}
        {navigation==='hotel'&&
       <div className='w-full h-auto -translate-y-10 z-10  rounded-2xl backdrop-blur-sm border border-gray-400/34 p-8 pt-13 text-white'>
            <h1 className='text-2xl font-bold mb-4'>Hotels</h1>

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="start" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="end" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          
          <button className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Search Hotels
          </button>
        </div>
        </div>}
        {navigation==='train'&&
        <div className='w-full h-auto -translate-y-10 z-10  rounded-2xl backdrop-blur-sm border border-gray-400/34 p-8 pt-13 text-white'>
            <h1 className='text-2xl font-bold mb-4'>Trains</h1>

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="From" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="To" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <div className="flex gap-3">
            <input type="date" className="w-1/2 border border-gray-400/34 rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
            <input type="date" className="w-1/2 border border-gray-400/34 rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
          </div>
          <button className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Search Trains
          </button>
        </div>
        </div>}
        {navigation==='bus'&&
        <div className='w-full h-auto -translate-y-10 z-10  rounded-2xl backdrop-blur-sm border border-gray-400/34 p-8 pt-13 text-white'>
            <h1 className='text-2xl font-bold mb-4'>Bus</h1>

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="From" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="To" className="border border-gray-400/34 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <div className="flex gap-3">
            <input type="date" className="w-1/2 border border-gray-400/34 rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
            <input type="date" className="w-1/2 border border-gray-400/34 rounded-lg p-2 focus:ring-2 focus:ring-blue-400" />
          </div>
          <button className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Search Buses
          </button>
        </div>
        </div>}
    </div>
  )
}

export default SubNav
