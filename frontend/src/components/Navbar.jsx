"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white w-full border-b border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mr-2">
                  <div className="h-4 w-4 bg-black rounded-full"></div>
                </div>
                <span className="font-bold text-xl">Vercel Clone</span>
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1 px-2">
                    <a
                      href="/solutions/frontend"
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Frontend
                    </a>
                    <a
                      href="/solutions/backend"
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Backend
                    </a>
                    <a
                      href="/solutions/fullstack"
                      className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      Fullstack
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Sign Up
            </a>
            <Link
              href={
                "https://github.com/niks-nikhil-anand/VercelClone_NodeJs_ExpressJs"
              }
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Portfolio
          </a>
          <a
            href="/solutions"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Solutions
          </a>
          <a
            href="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Pricing
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-800">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-gray-800"></div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Guest User</div>
              <div className="text-sm font-medium text-gray-400">
                guest@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Login
            </a>
            <a
              href="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
