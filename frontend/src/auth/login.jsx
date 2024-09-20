import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (ev) => {
    ev.preventDefault();
    console.log(email, password);
    api.post("/user/login", { email, password }).then((res) => {
      // console.log(res);
      if (res.status != 200) {
        console.log(res);
      } else {
        console.log(res.data["id"]);
        window.localStorage.setItem("id", res.data["id"]);
        navigate("/");
      }
    });
    // navigate("/");
  };
  return (
    <div className="relative py-3 sm:max-w-full sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5 justify-center">
            <h4>USER LOGIN</h4>
          </div>
          <form className="mt-5" onSubmit={handleLogin}>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              placeholder="Enter your email"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              value={email}
              required
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              placeholder="Enter your password"
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              value={password}
              required
            />
            <div className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer">
              <Link to="/signup">
                Don't have an account ?{" "}
                <span className="text-blue-400">Signup please</span> !
              </Link>
            </div>
            <div className="flex justify-center w-full items-center mt-2">
              <input
                type="submit"
                className="flex items-center justify-center py-2 px-20 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                value={"Login"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
