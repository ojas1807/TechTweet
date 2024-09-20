import React from 'react';
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="relative py-3 sm:max-w-full sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5 justify-center">
            <h4>USER LOGIN</h4>
          </div>
          <div className="mt-5">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Fullname
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              placeholder="Enter your full name "
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              placeholder="Enter your email"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Phone Number
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="tel"
              placeholder="Enter your phone number"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              placeholder="Enter your password"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Retry Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              placeholder="confirm your password"
            />
          </div>
          <div className="text-right mb-4">
            <div
              className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
            ><Link to="/login">
              Already have an account ? Login please ! 
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full items-center">
            <button className="flex items-center justify-center py-2 px-20 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            <Link to="/">
              Lets Go !!
            </Link>
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
          </div>
        </div>
      </div>
    </div>
  )
}
