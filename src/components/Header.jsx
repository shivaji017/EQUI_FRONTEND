// src/components/Header.js (rename from Header.jsx)
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = sessionStorage.getItem('token');
      if (token) {
        const decodedToken = jwt.decode(token);
        setLoggedIn(true);
      } else {
        console.log('No token found');
        setLoggedIn(false);
      }
    };

    // Run the checkToken function every 5 seconds (5000 ms)
    const intervalId = setInterval(() => {
      checkToken();
    }, 1000);
  }, []); 

  return (
    <div className='sticky top-0 shadow-md z-10 bg-white'>
      <nav className="p-4 flex items-center justify-between ">
        <div className='flex items-center'>
        <h1 className="text-2xl font-bold p-4">EQUI</h1>
        {!loggedIn ? (
            <>
            <a href="/" className="hidden md:block text-gray-600 hover:text-gray-900 px-4 py-2">Home</a>
             <a href="#features" className="hidden md:block text-gray-600 hover:text-gray-900 px-4 py-2">Features</a>
              <a href="#support" className="hidden md:block text-gray-600 hover:text-gray-900 px-4 py-2">Support</a>
              <a href="#contact" className="hidden md:block text-gray-600 hover:text-gray-900 px-4 py-2">Contact</a>
            </>
          ) : (
            <>
            
            </>
          )}
          </div>
          <div className="flex gap-4">
        {!loggedIn ? (
            <>
              <Link to="/login">
                <button className="text-gray-600 hover:text-gray-900 px-4 py-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">User</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );  
};

export default Header;