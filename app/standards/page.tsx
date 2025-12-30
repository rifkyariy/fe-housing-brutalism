import Link from 'next/link';

export default function StandardsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 pb-12 pt-8 animate-fadeIn">
      <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">Our Standards</h1>
      
      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Komitmen Kami untuk Kualitas Terbaik</h2>
          <p className="font-mono-custom text-gray-600 leading-relaxed mb-8">
            Bukan sekadar kost. Di Cathalia, kami hadirkan pengalaman hunian level selanjutnya dengan standar industri tertinggi.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <div>
              <div className="text-4xl font-black text-[#B8F2B8] text-shadow-sm mb-1">100%</div>
              <h4 className="font-bold text-sm">Verified Property</h4>
              <p className="font-mono-custom text-xs text-gray-500">Inspeksi langsung tiap unit</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#B8F2B8] text-shadow-sm mb-1">24 Hr</div>
              <h4 className="font-bold text-sm">Max Response</h4>
              <p className="font-mono-custom text-xs text-gray-500">Untuk request maintenance</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#B8F2B8] text-shadow-sm mb-1">4.8</div>
              <h4 className="font-bold text-sm">Average Rating</h4>
              <p className="font-mono-custom text-xs text-gray-500">Dari penghuni kami</p>
            </div>
            <div>
              <div className="text-4xl font-black text-[#B8F2B8] text-shadow-sm mb-1">0</div>
              <h4 className="font-bold text-sm">Hidden Fees</h4>
              <p className="font-mono-custom text-xs text-gray-500">Harga transparan & inklusif</p>
            </div>
          </div>
        </div>
        <div className="h-[400px] bg-gray-200 rounded-none overflow-hidden">
          <img src="https://images.unsplash.com/photo-1649769425648-078160aeec2c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Standards" />
        </div>
      </div>

      {/* Pillars Section */}
      <div className="bg-gray-50 p-8 md:p-12 border border-gray-200 mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Our Core Pillars</h2>
          <p className="font-mono-custom text-gray-600">Empat fondasi utama di setiap properti Cathalia.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cleanliness */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white border border-black flex items-center justify-center text-xl">
              <i className="fa-solid fa-spa"></i>
            </div>
            <h3 className="font-bold text-xl">Guaranteed Cleanliness</h3>
            <p className="font-mono-custom text-sm text-gray-600 mb-4">Kamar bersih total sebelum check-in. Standar hotel bintang lima di setiap sudut.</p>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Deep cleaning</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Sprei baru</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Sanitasi rutin</li>
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white border border-black flex items-center justify-center text-xl">
              <i className="fa-solid fa-shield"></i>
            </div>
            <h3 className="font-bold text-xl">24/7 Security</h3>
            <p className="font-mono-custom text-sm text-gray-600 mb-4">Aman maksimal dengan CCTV, kartu akses, dan sekuriti yang jaga terus.</p>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> CCTV area umum</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Smart card access</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Satpam 24 jam</li>
            </ul>
          </div>

          {/* Response */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white border border-black flex items-center justify-center text-xl">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3 className="font-bold text-xl">Fast Response</h3>
            <p className="font-mono-custom text-sm text-gray-600 mb-4">Tim maintenance kami gerak cepat. Masalah beres maksimal dalam 24 jam.</p>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Hotline 24 jam</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> App reporting</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Teknisi ahli</li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white border border-black flex items-center justify-center text-xl">
              <i className="fa-solid fa-users"></i>
            </div>
            <h3 className="font-bold text-xl">Positive Community</h3>
            <p className="font-mono-custom text-sm text-gray-600 mb-4">Lingkungan terkurasi. Aman, nyaman, dan profesional.</p>
            <ul className="text-xs font-bold space-y-2">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> ID Verification</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Background check</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-xs"></i> Community rules</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Acceptance Process (New Section) */}
      <div className="mb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Acceptance Process</h2>
          <p className="font-mono-custom text-gray-600">Langkah simpel jadi bagian dari Cathalia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">01</div>
            <div className="relative z-10 pt-6">
              <h3 className="text-xl font-bold mb-3">Choose Room</h3>
              <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                Pilih kamar yang pas sama vibe kamu.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">02</div>
            <div className="relative z-10 pt-6">
              <h3 className="text-xl font-bold mb-3">Schedule Visit</h3>
              <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                Cek langsung lokasi dan fasilitasnya.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">03</div>
            <div className="relative z-10 pt-6">
              <h3 className="text-xl font-bold mb-3">Verify Data</h3>
              <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                Isi form dan upload dokumen, beres.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="text-6xl font-black text-[#B8F2B8] opacity-60 absolute -top-8 -left-2 z-0">04</div>
            <div className="relative z-10 pt-6">
              <h3 className="text-xl font-bold mb-3">Move In</h3>
              <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">
                Bayar deposit, terima kunci, welcome home!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mini CTA */}
      <div className="bg-black text-white p-12 text-center rounded-none relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Experience Our Premium Standards</h2>
          <p className="font-mono-custom text-sm text-gray-400 mb-8 max-w-xl mx-auto">
            Cek langsung kenapa ribuan profesional memilih Cathalia.
          </p>
          <Link href="/contact" className="bg-white text-black font-bold rounded-none px-8 py-4 hover:bg-[#B8F2B8] transition-colors uppercase text-sm tracking-wide inline-block">
            Schedule Visit
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}