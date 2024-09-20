import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="relative py-3 sm:max-w-full sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5 justify-center">
            <h4>USER LOGIN</h4>
          </div>
          <div className="mt-5">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              placeholder="Enter your email"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center w-full items-center">
            <button className="flex items-center justify-center py-2 px-20 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              Log In
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg">
              <svg
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add Google logo or icon here */}
              </svg><Link to="/signup">Signup for Free !!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
