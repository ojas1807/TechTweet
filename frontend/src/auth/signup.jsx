import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const navigate = useNavigate();

  const handleSignin = (ev) => {
    ev.preventDefault();
    console.log(name, email, phone, password);
    api.post("/user/register", { name, email, phone, password }).then((res) => {
      // console.log(res);
      if (res.status != 200) {
        console.log(res.data);
      } else {
        console.log(res.data["id"]);
        window.localStorage.setItem("id", res.data["id"]);
        navigate("/");
      }
    });
  };
  return (
    <div className="relative py-3 sm:max-w-full sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5 justify-center">
            <h4>USER LOGIN</h4>
          </div>
          <form className="mt-5" onSubmit={handleSignin}>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Fullname
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="text"
              onChange={(ev) => {
                setName(ev.target.value);
              }}
              value={name}
              required
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              value={email}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Phone Number
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="tel"
              placeholder="Enter your phone number"
              required
              onChange={(ev) => {
                setPhone(ev.target.value);
              }}
              value={phone}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              placeholder="Enter your password"
              required
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              value={password}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Retype Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              placeholder="confirm your password"
              required
              onChange={(ev) => {
                setRePassword(ev.target.value);
              }}
              value={repassword}
            />
            <div className="mb-4">
              <div className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer">
                <Link to="/login">
                  Already have an account ?{" "}
                  <span className="text-blue-400">Login please</span> ! !
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full items-center">
              <input
                type="submit"
                className="flex items-center justify-center py-2 px-20 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                value={"Let's Go"}
              />
            </div>
            <div className="flex justify-center items-center mt-5"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
