import React, { useState, useRef } from 'react';
import Profile from './Profile';

const LoginForm = () => {
  const [username, setUsername] = useState(''); 
  const [tempUsername, setTempUsername] = useState(''); 
  const pass = useRef();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={(e) => { 
          e.preventDefault();
          setUsername(tempUsername);  
          setTempUsername(''); 
          pass.current.value = ''; 
          alert('Your Login Info is Saved');
        }}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={tempUsername} 
              onChange={(e) => setTempUsername(e.target.value)} 
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={pass}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <Profile username={username} /> 
      </div>
    </div>
  );
};

export default LoginForm;
