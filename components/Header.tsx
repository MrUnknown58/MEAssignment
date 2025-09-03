"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex space-x-2 items-center cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="https://static.wixstatic.com/media/5bc310_986847197cba4b5ebf919aad737b3f29~mv2.png"
                alt="Mobius logo"
                className="h-7 sm:h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Mobius</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="#get-started"
              className="inline-flex px-4 py-2 rounded-xl text-gray-400 border-2 hover:bg-black hover:text-white font-semibold text-lg shadow-md transition-colors cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
