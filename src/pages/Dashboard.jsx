import React from 'react'
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import DashboardData from '../components/DashboardData.jsx';
import UserDetails from '../components/UserDetails.jsx';

const Dashboard = () => {

  var loggedIn = true;

  const token = sessionStorage.getItem('token');
  if (token) {
    const decodedToken = jwt.decode(token);

    loggedIn = true;
  } else {
    console.log('No token found');
  }


  return (
    <div>
      {
        !loggedIn ? (
          <h1>You have no access to this page! Please <Link to="/login">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2">Login here</button>
          </Link></h1>
        ) : (
          <div className='flex-col md: flex md:flex-row'>
            <Navbar />
            <DashboardData />
            <UserDetails />
          </div>
        )
      }
    </div>
  )
}

export default Dashboard