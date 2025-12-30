"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm px-6 py-5 border-b border-transparent transition-all duration-300 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            {/* Left: Logo & Search */}
            <div className="flex items-center gap-12">
                <Link href="/" className="text-2xl font-black tracking-tighter uppercase select-none cursor-pointer">Cathalia</Link>
                
                {/* Nav Dropdown */}
                <div className="relative group">
                    <div 
                        className="hidden md:flex items-center gap-2 font-semibold cursor-pointer hover:opacity-70 transition-opacity" 
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <span>Find a Home</span>
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                    </div>
                    {/* Dropdown Menu */}
                    {isNavOpen && (
                        <div className="absolute top-full left-0 mt-4 w-64 bg-white border border-gray-200 shadow-xl p-2 z-50" onMouseLeave={() => setIsNavOpen(false)}>
                            {['Kampung Bali 1', 'Kampung Bali 2', 'Petojo Selatan', 'Cideng', 'Jati Pulo', 'Kebun Kacang'].map((loc) => (
                                <Link key={loc} href="/explore" className="block p-3 hover:bg-gray-50 cursor-pointer font-bold text-sm">
                                    {loc}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right: Links */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
                <Link href="/explore" className={`nav-link ${pathname === '/explore' ? 'active' : ''}`}>Explore</Link>
                <Link href="/standards" className={`nav-link ${pathname === '/standards' ? 'active' : ''}`}>Our Standards</Link>
                <Link href="/rules" className={`nav-link ${pathname === '/rules' ? 'active' : ''}`}>Rules</Link>
                <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                
                <Link href="/login" className="btn-outline border border-black px-5 py-2.5 rounded-none font-semibold hover:bg-black hover:text-white transition-colors">
                    Login
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        {/* Mobile Menu (Simplified) */}
        {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 flex flex-col gap-4 shadow-xl">
                <Link href="/explore" className="font-bold">Explore</Link>
                <Link href="/standards" className="font-bold">Our Standards</Link>
                <Link href="/rules" className="font-bold">Rules</Link>
                <Link href="/contact" className="font-bold">Contact</Link>
            </div>
        )}
    </nav>
  );
}
