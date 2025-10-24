import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext' 
import { Plane, Sparkles, MapPin, Calendar, Users } from 'lucide-react';

const Navbar = () => {
  const {navigate} = useAppContext();
  const [user, setUser] = useState(false)

  return (


      <div className="relative z-10 px-4 pt-6 pb-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div onClick={()=>{navigate('/'),setUser(false)}} className="flex items-center space-x-2 cursor-pointer">
              <Plane className="h-10 w-10 text-blue-600" />
              <span className="text-3xl font-bold text-blue-600">Travel.ai</span>
            </div>
            <span className='flex justify-center text-center'>
              <ul className='flex gap-5  '>
                <li className=' p-2 rounded-full'>Help</li>
                <li className='p-2 rounded-full'>About</li>
              </ul>
              {user === false ? (
                <>
                <button onClick={()=>{setUser(true),navigate('/home')}}
                  className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                  Sign In
                </button>
                </>

              ):(
                <>
                <button
                  className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-all font-medium">
                  User
                </button>
                </>
              )}
              
            </span>
          </div>
        </div>
    
  )
}

export default Navbar
