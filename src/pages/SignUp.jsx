import React from 'react';
import { Link } from 'react-router-dom';

const SignUpUser = (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const mail = document.getElementById('mail').value;
  const mobile = document.getElementById('mobile').value;
  const data = { username, password, mail, mobile };
  fetch('http://localhost:8080/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert('User Created Successfully');
        window.location.href = '/login';
      } else {
        alert('User Creation Failed Server Error or Username already exists Please try again');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const SignUp = () => {
  return (
    <div>
      <div className='flex md:flex-col justify-center h-dvh'>
        <div className='flex-row md:flex justify-around'>
          <div className='w-96 text-center py-8'>
            Join EQUI Today!<br />
            Take control of your financial future with powerful tools.<br /><br />
            Why Sign Up?<br />
            Track your budget easily.<br />
            Split expenses with friends and family.<br />
            Set and achieve savings goals.<br />
            Gain insights with advanced analytics.<br /><br />
            Create Your Account:<br />
            Enter a unique username.<br />
            Provide your email for verification.<br />
            Choose a strong password.<br />
          </div>
          <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={SignUpUser}>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              placeholder="Enter Username"
              required
              pattern="[^ ]+"
              title="Spaces are not allowed"
            />
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              placeholder="Enter Password"
              required
            />
            <input
              type="text"
              id="mail"
              name="mail"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              placeholder="Enter your Mail-Id"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address"
              required
            />
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              placeholder="Enter your Mobile Number"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800">
              Sign-Up
            </button>
            <h5 className='text-sm text-center py-4'>Already have an account?
              <Link to="/login">
                <button className="text-gray-600 hover:text-gray-900 px-4 py-2">Login</button>
              </Link>
            </h5>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
