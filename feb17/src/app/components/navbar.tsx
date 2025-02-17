"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">Logo</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/pag1" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pág 1 
            </Link>
            <Link href="/pag2" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pág 2
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;