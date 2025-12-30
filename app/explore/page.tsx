"use client";
import { useState } from 'react';

const listingsData = [
    {
        id: 1,
        name: "Kampung Bali 1",
        location: "Jakarta",
        type: "Studio",
        price: "4.5jt",
        status: "Available Now",
        statusColor: "bg-[#B8F2B8] text-black",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
        desc: "Studio • 28m² • Private Bath"
    },
    {
        id: 2,
        name: "Kampung Bali 2",
        location: "Jakarta",
        type: "Shared",
        price: "3.2jt",
        status: "",
        statusColor: "",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000&auto=format&fit=crop",
        desc: "Shared • 18m² • Community Kitchen"
    },
    {
        id: 3,
        name: "Petojo Selatan",
        location: "Jakarta",
        type: "Shared",
        price: "3.8jt",
        status: "Last Unit",
        statusColor: "bg-white text-black border border-black",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop",
        desc: "Standard • 20m² • Near Transport"
    },
    {
        id: 4,
        name: "Cideng",
        location: "Jakarta",
        type: "Ensuite",
        price: "4.2jt",
        status: "",
        statusColor: "",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop",
        desc: "Ensuite • 22m² • Modern Design"
    },
    {
        id: 5,
        name: "Jati Pulo",
        location: "Jakarta",
        type: "Studio",
        price: "3.5jt",
        status: "",
        statusColor: "",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
        desc: "Studio • 25m² • Quiet Area"
    },
    {
        id: 6,
        name: "Kebun Kacang",
        location: "Jakarta",
        type: "Loft",
        price: "5.0jt",
        status: "Premium",
        statusColor: "bg-black text-white border border-white",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
        desc: "Loft • 35m² • City View"
    },
    {
        id: 7,
        name: "Kampung Bali 3",
        location: "Jakarta",
        type: "Shared",
        price: "2.8jt",
        status: "Budget",
        statusColor: "bg-gray-800 text-white",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000&auto=format&fit=crop",
        desc: "Shared • 16m² • Cozy Room"
    },
    {
        id: 8,
        name: "Cideng Barat",
        location: "Jakarta",
        type: "Studio",
        price: "4.0jt",
        status: "",
        statusColor: "",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
        desc: "Studio • 24m² • City Center"
    },
    {
        id: 9,
        name: "Petojo Utara",
        location: "Jakarta",
        type: "Ensuite",
        price: "4.8jt",
        status: "New",
        statusColor: "bg-[#B8F2B8] text-black",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000&auto=format&fit=crop",
        desc: "Ensuite • 30m² • Luxury Finish"
    },
    {
        id: 10,
        name: "Jati Baru",
        location: "Jakarta",
        type: "Loft",
        price: "5.5jt",
        status: "Exclusive",
        statusColor: "bg-black text-white border border-white",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
        desc: "Loft • 40m² • Industrial Style"
    },
    {
        id: 11,
        name: "Kebun Sirih",
        location: "Jakarta",
        type: "Studio",
        price: "4.3jt",
        status: "",
        statusColor: "",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
        desc: "Studio • 26m² • Strategic Location"
    },
    {
        id: 12,
        name: "Tanah Abang View",
        location: "Jakarta",
        type: "Shared",
        price: "3.0jt",
        status: "Promo",
        statusColor: "bg-red-500 text-white",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
        desc: "Shared • 20m² • Great View"
    }
];

export default function Explore() {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredListings = listingsData.filter(item => {
        const matchesFilter = filter === 'all' || item.type === filter;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                              item.desc.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
    const paginatedItems = filteredListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pb-12 pt-8">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Explore Locations</h1>
            <p className="font-mono-custom text-gray-600 max-w-2xl mb-12">Pilihan properti di area paling hidup di Jakarta. Mulai dari studio privat sampai loft bersama yang asik.</p>
            
            {/* Search & Filter Controls */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
                    {/* Search */}
                    <div className="relative w-full md:w-1/2">
                        <input 
                            type="text" 
                            placeholder="Search locations..." 
                            className="w-full border border-black p-4 pl-12 rounded-none focus:outline-none focus:bg-gray-50 font-mono-custom text-sm transition-colors"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <i className="fa-solid fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    
                    {/* Filters */}
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {['all', 'Studio', 'Shared', 'Ensuite', 'Loft'].map(type => (
                            <button 
                                key={type}
                                className={`px-6 py-3 text-sm font-bold border border-black rounded-none transition-colors ${filter === type ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                                onClick={() => handleFilterChange(type)}
                            >
                                {type === 'all' ? 'All' : type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 min-h-[400px]">
                {paginatedItems.length > 0 ? (
                    paginatedItems.map(item => (
                        <div key={item.id} className="card-zoom-container relative h-[400px] rounded-none overflow-hidden cursor-pointer group bg-gray-200 fade-in">
                            <img src={item.image} alt={item.name} className="card-zoom-image w-full h-full object-cover" />
                            {item.status && (
                                <div className={`absolute top-6 left-6 px-3 py-1 text-xs font-bold uppercase border z-10 ${item.statusColor}`}>
                                    {item.status}
                                </div>
                            )}
                            <div className="absolute top-6 right-6 bg-white px-4 py-2 font-bold text-sm border border-black rounded-none z-10 shadow-sm">
                                Rp {item.price}<span className="text-gray-500 font-normal">/mo</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                                <p className="font-mono-custom text-xs opacity-90">{item.desc}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-3 text-center py-10 text-gray-500 font-mono-custom">No listings found matching your criteria.</div>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 font-mono-custom text-sm">
                    <button 
                        className="pagination-btn" 
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button 
                        className="pagination-btn" 
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
