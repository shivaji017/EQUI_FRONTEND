import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";

const UserDetails = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
        try {
          const decodedToken = jwtDecode(token).sub;
          setUsername(decodedToken);
        } catch (error) {
          console.log('Error decoding token:', error);
        }
      } else {
        console.log('No token found');
      }   
    }, []);
    return (
        <div className='flex flex-col items-center md:items-start'>
            <div className='flex items-center text-center py-5 px-8'>
              <h4>{username}</h4>
            </div>
        </div>
    )
}

export default UserDetails