import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md hover:bg-blue-700 transition duration-300 dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              MyApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="home"
              className="text-white hover:underline hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
            <span className="text-white hover:underline hover:text-gray-200 cursor-pointer transition duration-300">
              <Link to="about">About</Link>
            </span>
            <Link
              to="contactUs"
              className="text-white hover:underline hover:text-gray-200 transition duration-300"
            >
              Contact
            </Link>
            <ThemeBtn />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="home"
            className="text-white block hover:underline hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <span className="text-white block hover:underline hover:text-gray-200 transition duration-300">
            <Link to="about">About</Link>
          </span>
          <Link
            to="contactUs"
            className="text-white block hover:underline hover:text-gray-200 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
