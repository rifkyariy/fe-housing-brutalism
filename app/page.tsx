"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 pb-12">
        {/* HERO SECTION */}
        <div className="hero-container flex flex-col lg:flex-row mb-16 relative">
            
            {/* Left: Content */}
            <div className="w-full lg:w-[45%] bg-white p-8 md:p-16 flex flex-col justify-center relative z-10">
                {/* City Dropdown */}
                <div className="mb-12 md:mb-20 relative group">
                    <button 
                        className="text-5xl md:text-7xl font-bold flex items-center gap-4 hover:opacity-60 transition-opacity text-left leading-tight" 
                        onClick={() => setIsCityMenuOpen(!isCityMenuOpen)}
                    >
                        Jakarta <i className="fa-solid fa-chevron-down text-2xl md:text-4xl"></i>
                    </button>
                    {/* Hero Dropdown */}
                    {isCityMenuOpen && (
                        <div className="absolute top-full left-0 mt-4 w-64 bg-white border border-gray-200 rounded-none shadow-xl p-2 z-50" onMouseLeave={() => setIsCityMenuOpen(false)}>
                            <div className="p-3 bg-gray-100 font-bold text-sm flex justify-between items-center cursor-default">
                                <span>Jakarta</span>
                                <span className="w-2 h-2 bg-green-500 rounded-full city-select-cursor"></span>
                            </div>
                            <div className="p-3 hover:bg-gray-50 text-gray-400 cursor-not-allowed text-sm flex justify-between items-center">
                                <span>Bali</span>
                                <span className="text-[10px] border border-gray-300 px-1 rounded">SOON</span>
                            </div>
                            <div className="p-3 hover:bg-gray-50 text-gray-400 cursor-not-allowed text-sm flex justify-between items-center">
                                <span>Bandung</span>
                                <span className="text-[10px] border border-gray-300 px-1 rounded">SOON</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Typewriter Description */}
                <div className="max-w-md">
                    <p className="font-mono-custom text-sm md:text-[15px] leading-relaxed text-gray-800 uppercase tracking-wide">
                        Premium co-living spaces designed for the modern urban lifestyle. Experience community, comfort, and convenience in the heart of the city.
                    </p>
                </div>
            </div>

            {/* Right: Green Graphic */}
            <div className="w-full lg:w-[55%] hero-green-section flex items-center p-8 md:p-16 lg:pl-24">
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-black tracking-tight text-black">
                    Unlock your<br/>next move.
                </h1>
            </div>
        </div>

        {/* THE EXPERIENCE (USP) */}
        <section className="mb-20 px-2">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-black pb-4">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Cathalia Experience</h2>
                <Link href="/standards" className="hidden md:block font-mono-custom text-sm underline underline-offset-4 cursor-pointer">LEARN MORE ABOUT US</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {/* Feature 1 */}
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                        <i className="fa-solid fa-couch"></i>
                    </div>
                    <h3 className="text-xl font-bold">Fully Furnished</h3>
                    <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                        Move in ready. Just bring your suitcase and we handle the rest.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                        <i className="fa-regular fa-calendar-check"></i>
                    </div>
                    <h3 className="text-xl font-bold">Flexible Contracts</h3>
                    <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                        Stay for a month or a year. Extend anytime with ease.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <h3 className="text-xl font-bold">Community Events</h3>
                    <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                        Connect with like-minded people at our weekly curated events.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <h3 className="text-xl font-bold">24/7 Support</h3>
                    <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                        Our team is always available to help you with anything you need.
                    </p>
                </div>
            </div>
        </section>

        {/* LISTINGS PREVIEW */}
        <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">Featured Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {/* Listing 1 */}
                <div className="card-zoom-container relative h-[400px] md:h-[500px] rounded-none overflow-hidden cursor-pointer group bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop" 
                         className="card-zoom-image w-full h-full object-cover" alt="Kampung Bali 1" />
                    <div className="absolute top-6 left-6 bg-[#B8F2B8] px-3 py-1 text-xs font-bold uppercase tracking-wider border border-black rounded-none z-10 text-black">Available Now</div>
                    <div className="absolute top-6 right-6 bg-white px-4 py-2 font-bold text-sm border border-black rounded-none z-10 shadow-sm">Rp 4.5jt<span className="text-gray-500 font-normal">/mo</span></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-1">Kampung Bali 1</h3>
                        <p className="font-mono-custom text-xs opacity-90">Studio • 28m² • Private Bath</p>
                    </div>
                </div>
                {/* Listing 2 */}
                <div className="card-zoom-container relative h-[400px] md:h-[500px] rounded-none overflow-hidden cursor-pointer group bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop" 
                         className="card-zoom-image w-full h-full object-cover" alt="Petojo Selatan" />
                    <div className="absolute top-6 right-6 bg-white px-4 py-2 font-bold text-sm border border-black rounded-none z-10 shadow-sm">Rp 3.8jt<span className="text-gray-500 font-normal">/mo</span></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-1">Petojo Selatan</h3>
                        <p className="font-mono-custom text-xs opacity-90">Standard • 20m² • Near Transport</p>
                    </div>
                </div>
                {/* Listing 3 */}
                <div className="card-zoom-container relative h-[400px] md:h-[500px] rounded-none overflow-hidden cursor-pointer group bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop" 
                         className="card-zoom-image w-full h-full object-cover" alt="Cideng" />
                     <div className="absolute top-6 right-6 bg-white px-4 py-2 font-bold text-sm border border-black rounded-none z-10 shadow-sm">Rp 4.2jt<span className="text-gray-500 font-normal">/mo</span></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-1">Cideng</h3>
                        <p className="font-mono-custom text-xs opacity-90">Ensuite • 22m² • Modern Design</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="/explore" className="bg-black text-white font-bold rounded-none px-10 py-4 hover:bg-[#B8F2B8] hover:text-black hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wide shadow-lg">
                    View All Locations
                </Link>
            </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-24 bg-gray-50 rounded-none p-8 md:p-16">
            <div className="max-w-3xl mb-12">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">How It Works</h2>
                <p className="font-mono-custom text-sm md:text-base text-gray-600 leading-relaxed">
                    Solusi hunian modern. Privat atau sharing? Tersedia di 25+ lokasi strategis dengan kemudahan penuh.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative"><div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">01</div><div className="relative z-10 pt-6"><h3 className="text-xl font-bold mb-3">Choose Your Stay</h3><p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Isi formulir online simpel, pilih kamar impianmu.</p></div></div>
                <div className="relative"><div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">02</div><div className="relative z-10 pt-6"><h3 className="text-xl font-bold mb-3">Sales Follow-up</h3><p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Tim kami akan kontak untuk finalisasi detail.</p></div></div>
                <div className="relative"><div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">03</div><div className="relative z-10 pt-6"><h3 className="text-xl font-bold mb-3">Online Contract</h3><p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Tanda tangan kontrak digital, cepat dan aman.</p></div></div>
                <div className="relative"><div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">04</div><div className="relative z-10 pt-6"><h3 className="text-xl font-bold mb-3">Move-in</h3><p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Ikuti petunjuk email, bawa koper, dan selamat datang!</p></div></div>
            </div>
        </section>

        {/* HIGHLIGHT FEATURE CAROUSEL */}
        <section className="mb-24">
            <div className="flex justify-between items-end mb-10 px-2">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Included Perks</h2>
                <div className="flex gap-2">
                    <button onClick={() => scrollCarousel(-350)} className="w-12 h-12 rounded-none border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={() => scrollCarousel(350)} className="w-12 h-12 rounded-none border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div ref={carouselRef} className="flex gap-4 overflow-x-auto hide-scrollbar snap-x-mandatory pb-4 px-2">
                
                {/* Item 1: WiFi */}
                <div className="min-w-[300px] md:min-w-[350px] h-[500px] rounded-none relative overflow-hidden snap-center group shrink-0 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000&auto=format&fit=crop" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="WiFi" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">High-Speed WiFi</h3>
                        <p className="font-mono-custom text-xs opacity-80">Internet kencang untuk WFH atau streaming tanpa buffer.</p>
                    </div>
                </div>

                {/* Item 2: Cleaning */}
                <div className="min-w-[300px] md:min-w-[350px] h-[500px] rounded-none relative overflow-hidden snap-center group shrink-0 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cleaning" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Weekly Cleaning</h3>
                        <p className="font-mono-custom text-xs opacity-80">Kamar dibersihkan rutin, sprei diganti berkala.</p>
                    </div>
                </div>

                {/* Item 3: Registration */}
                <div className="min-w-[300px] md:min-w-[350px] h-[500px] rounded-none relative overflow-hidden snap-center group shrink-0 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Registration" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Easy Registration</h3>
                        <p className="font-mono-custom text-xs opacity-80">Proses administrasi mudah, bisa domisili.</p>
                    </div>
                </div>

                {/* Item 4: Smart App */}
                <div className="min-w-[300px] md:min-w-[350px] h-[500px] rounded-none relative overflow-hidden snap-center group shrink-0 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Smart App" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Smart App</h3>
                        <p className="font-mono-custom text-xs opacity-80">Kelola tagihan dan lapor masalah lewat aplikasi.</p>
                    </div>
                </div>

                {/* Item 5: Design Furniture */}
                <div className="min-w-[300px] md:min-w-[350px] h-[500px] rounded-none relative overflow-hidden snap-center group shrink-0 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop" 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Furniture" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Design Furniture</h3>
                        <p className="font-mono-custom text-xs opacity-80">Furniture estetik dan fungsional standar hotel.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-black text-white rounded-none p-10 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black mb-6">Found your place yet?</h2>
                <p className="font-mono-custom text-sm md:text-base text-gray-400 mb-8">
                    GABUNG BERSAMA RIBUAN MEMBER CATHALIA LAINNYA. DAPATKAN UPDATE TERBARU DAN INFO LOKASI EKSKLUSIF.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" className="flex-1 bg-transparent border border-white/30 rounded-none px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors font-mono-custom text-sm" />
                    <button className="bg-white text-black font-bold rounded-none px-8 py-4 hover:bg-[#B8F2B8] transition-colors uppercase text-sm tracking-wide">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-none blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </section>
    </div>
  );
}
