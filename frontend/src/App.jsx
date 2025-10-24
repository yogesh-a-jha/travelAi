import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AiPlanner from './pages/AiPlanner'
import RecommendationHistory from './pages/RecommendationHistory'
import Navbar from './components/Navbar'
import Login from './pages/LoginPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
       {/* <Navbar/> */}
       <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/aiplanner' element={<AiPlanner/>}/>
          <Route path='/recommendations' element={<RecommendationHistory/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<HomePage/>}/>

        </Routes>
    </div>
  )
}

export default App
