import React from 'react'
import { Link } from 'react-router-dom'
import Features from './Features.jsx'
const MainPage = () => {
  return (
    <div>
        <div className='flex flex-col justify-center h-dvh p-8'>
        <div className='flex justify-center'>
          <div className='flex flex-col text-center'>
            <h3 className='text-4xl font-medium py-2'>Take control of all your Finances</h3>
            <h3 className='text-gray-700 py-2'>Track your expenses and savings goals all in one place</h3>
            <div className='flex justify-center py-2'>
              <div>
                <Link to="/signup">
                  <button className="bg-black text-white px-8 py-6 rounded-lg hover:bg-gray-800">Sign Up</button>
                </Link>
              </div>
              <div className=''>
                <Link to="/login">
                  <button className="text-gray-600 hover:text-gray-900 px-8 py-6">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Features/>
    </div>
  )
}

export default MainPage