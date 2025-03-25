'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'painting', path: '/painting' },
  { name: 'clothing', path: '/clothing' },
  { name: 'metalwork', path: '/metalwork' },
];

export default function Navbar() {
  const pathname = usePathname();
  // Determine basePath based on environment
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/sisely-web';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full max-w-5xl mx-auto px-4 pt-4 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-10 h-10 mr-4">
              <Image
                src={`${basePath}/SisSpiral.png`}
                alt="Sisely Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Hamburger button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-wrap gap-8 text-3xl font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:underline ${
                  pathname === item.path ? 'font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="md:hidden pt-4 flex flex-col items-center gap-4 text-2xl font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:underline ${
                  pathname === item.path ? 'font-bold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 