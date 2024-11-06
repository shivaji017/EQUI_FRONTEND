import React from 'react'

const DashboardData = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:h-dvh p-8 items-center md:items-start'>
              <div className='flex flex-col md:flex-row justify-between w-dvw'>
              <div className='flex-1 text-center shadow-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300 h-min rounded-xl m-4'>
                  <h4>Total Balance</h4>
                  <h4>₹ 0.00</h4>
                </div>
                <div className='flex-1 text-center shadow-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300 h-min rounded-xl m-4'>
                  <h4>Income</h4>
                  <h4>₹ 0.00</h4>
                </div>
                <div className='flex-1 text-center shadow-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300 h-min rounded-xl m-4'>
                  <h4>Previous Month Income</h4>
                  <h4>₹ 0.00</h4>
                </div>
                <div className='flex-1 text-center shadow-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300 h-min rounded-xl m-4'>
                  <h4>Expenses</h4>
                  <h4>₹ 0.00</h4>
                </div>
                <div className='flex-1 text-center shadow-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300 h-min rounded-xl m-4'>
                  <h4>Previous Month Expenses</h4>
                  <h4>₹ 0.00</h4>
                </div>
              </div>
            </div>
  )
}

export default DashboardData