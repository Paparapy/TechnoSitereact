import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/web.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        isOpen
          ? "bg-gradient-to-t from-blue-700 via-blue-600 to-pink-800"
          : scrolled
          ? "bg-blue-900 opacity-60"
          : "bg-gradient-to-r from-blue-800 via-pink-500 to-pink-600"
      } transition-colors duration-300 p-4`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-white">Agence</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            style={{ display: isOpen ? "none" : "block" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          ref={menuRef}
          className={`lg:flex lg:items-center lg:justify-center lg:space-x-8 w-full lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-end w-full mb-4 lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <Link
            to="/"
            onClick={() => {
              setActiveLink("#home");
              closeMenu();
            }}
            className={`block text-center py-2 ${
              activeLink === "#home"
                ? "text-pink-300 font-bold  px-6 py-2 rounded-lg "
                : " duration-500 "
            } font-semibold text-blue-200 hover:text-white`}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setActiveLink("#about");
              closeMenu();
            }}
            className={`block text-center py-2 ${
              activeLink === "#about"
                ? "text-pink-300 font-bold "
                : " duration-500  "
            } font-semibold text-blue-200 hover:text-white`}
          >
            About
          </Link>
          <Link
            to="/blog"
            onClick={() => {
              setActiveLink("#blog");
              closeMenu();
            }}
            className={`block text-center py-2 ${
              activeLink === "#blog"
                ? "text-pink-300 font-bold "
                : " duration-500"
            } font-semibold text-blue-200 hover:text-white`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setActiveLink("#contact");
              closeMenu();
            }}
            className={`block text-center py-2 ${
              activeLink === "#contact"
                ? "text-pink-300 font-bold"
                : " duration-500 "
            } font-semibold text-blue-200 hover:text-white`}
          >
            Contact
          </Link>
        </div>
        <div className="items-center hidden lg:flex">
          <img
            src={Images}
            alt=""
            className="w-10 cursor-pointer hover:opacity-90"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
