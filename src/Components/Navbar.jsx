import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPath = useLocation().pathname;
  const activeClass =
    "bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none   focus:ring-indigo-600";

  return (
    <>
      <section className=" w-full px-8 text-gray-100 bg-linear-65 from-purple-500 to-pink-500">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link
              to="/"
              className="flex items-center mb-5 font-medium text-white lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-2xl font-black leading-none text-white select-none">
                PR<span className="text-white">.</span>
              </span>
            </Link>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <Link
              to="/login"
              className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-100 whitespace-no-wrap hover:text-white ${
                currentPath == "/login" ? activeClass : ""
              }`}>
              Sign in
            </Link>
            <Link
              to="/"
              className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-100 whitespace-no-wrap hover:text-white ${
                currentPath == "/" ? activeClass : ""
              }`}>
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
