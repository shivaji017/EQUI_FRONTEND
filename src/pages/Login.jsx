import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const jsonResponse = await response.json(); // Get the response body
            const token = jsonResponse.token; // Access the token from the response body
            
            if (token) {
                sessionStorage.setItem('token', token); // Save the token to sessionStorage
                navigate('/dashboard');
            } else {
                console.error('No token received');
            }
        } else {
            const errorMessage = await response.text();
            setError('Login failed: ' + errorMessage);
            console.error('Login failed:', errorMessage);
        }
    } catch (err) {
        setError(err.message);
    }
};


  return (
    <div>
      <div className='flex md:flex-col justify-center h-dvh'>
        <div className='flex-row md:flex justify-around'>
          <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              placeholder="Enter your username"
              pattern="[^ ]+"  
              title="Spaces are not allowed"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
            <h5 className='text-sm text-center py-4'>Forgot Password?</h5>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800">
              Login
            </button>
            <h5 className='text-sm text-center py-4'>Don't have an account? 
              <Link to="/signup">
                <button className="text-black px-4 rounded-lg">Sign Up</button>
              </Link>
            </h5>
          </form>
          <div>
            Image box
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
