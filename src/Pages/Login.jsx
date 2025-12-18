import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Services/api.js";
import { toast } from "react-toastify";
import { LuEyeOff } from "react-icons/lu";
import { GoEye } from "react-icons/go";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data);
      toast.success(response.data.message);
      setError(null);
      navigate("/success");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-5 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
            Or
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              create a new account
            </a>
          </p>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-100 p-3 mb-4 text-red-600 rounded">
                  {error}
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5  text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700">
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm relative">
                  <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                  <button
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    aria-pressed={isVisible}
                    aria-controls="password">
                    {isVisible ? (
                      <LuEyeOff size={20} aria-hidden="true" />
                    ) : (
                      <GoEye size={20} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                {/* <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember"
                    type="checkbox"
                    defaultValue={1}
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900">
                    Remember me
                  </label>
                </div> */}

                <div className="text-sm leading-5">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Sign in
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
