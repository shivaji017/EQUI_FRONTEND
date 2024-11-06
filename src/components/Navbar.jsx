import React from 'react'
import { Home, Receipt, BarChart2, PiggyBank, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <>
     <div className='flex flex-col items-center md:items-start'>
       <div className='flex items-center text-center py-5 px-8'>
           <Home className="h-5 w-5 mr-3" />
           <h3>Home</h3>
       </div>
       <div className='flex items-center py-5 px-8'>
           <Receipt className="h-5 w-5 mr-3" />
           <h3>Transactions</h3>
       </div>
       <div className='flex items-center py-5 px-8'> 
           <BarChart2 className="h-5 w-5 mr-3" />
           <h3>Analytics</h3>
       </div>
       <div className='flex items-center py-5 px-8'>
           <PiggyBank className="h-5 w-5 mr-3" />
           <h3>Budget</h3>
       </div>
       <div className='flex items-center py-5 px-8'>
           <Settings className="h-5 w-5 mr-3" />
           <h3>Settings</h3>
       </div>
   </div>
    </>
  )
}

export default Navbar 