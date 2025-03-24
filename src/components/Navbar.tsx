'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'painting', path: '/painting' },
  { name: 'clothing', path: '/clothing' },
  { name: 'metalwork', path: '/metalwork' },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full max-w-5xl mx-auto px-4 pt-4 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-10 h-10 mr-4">
              <Image 
                src="/SisSpiral.png" 
                alt="Sisely Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>
        
        <ul className="flex flex-wrap gap-8 text-3xl font-medium">
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
    </nav>
  );
} 