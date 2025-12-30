import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 pb-12 pt-8 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">House Rules</h1>
      <p className="font-mono-custom text-gray-600 max-w-2xl mb-12 text-lg">Kenyamanan bersama adalah prioritas. Simpel: saling jaga, saling hargai.</p>

      {/* General Rules Grid */}
      <h2 className="text-3xl font-bold mb-8 border-b border-black pb-4 inline-block">General Rules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Item 1: Jam Malam */}
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
          <i className="fa-solid fa-clock text-3xl mb-4 group-hover:scale-110 transition-transform block"></i>
          <h3 className="text-xl font-bold mb-2">Curfew</h3>
          <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Pintu utama dikunci 23.00 - 05.00. Pulang telat? Lapor sekuriti ya.</p>
        </div>
        {/* Item 2: Ketenangan */}
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
          <i className="fa-solid fa-volume-xmark text-3xl mb-4 group-hover:scale-110 transition-transform block"></i>
          <h3 className="text-xl font-bold mb-2">Quiet Hours</h3>
          <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Tenang mulai 22.00 - 07.00. Hindari berisik biar tetangga nyaman.</p>
        </div>
        {/* Item 3: Tamu */}
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
          <i className="fa-solid fa-user-group text-3xl mb-4 group-hover:scale-110 transition-transform block"></i>
          <h3 className="text-xl font-bold mb-2">Guests</h3>
          <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Tamu boleh masuk 08.00 - 21.00, wajib lapor lobi. No sleepover.</p>
        </div>
        {/* Item 4: Merokok */}
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
          <i className="fa-solid fa-ban-smoking text-3xl mb-4 group-hover:scale-110 transition-transform block"></i>
          <h3 className="text-xl font-bold mb-2">Smoking</h3>
          <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Dilarang merokok di kamar/area tertutup. Silakan di area khusus.</p>
        </div>
        {/* Item 5: Hewan Peliharaan */}
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
          <i className="fa-solid fa-paw text-3xl mb-4 group-hover:scale-110 transition-transform block"></i>
          <h3 className="text-xl font-bold mb-2">Pets</h3>
          <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Maaf, hewan peliharaan belum diperbolehkan masuk gedung.</p>
        </div>
        {/* Item 6: Parkir */}
        <div className="border border-gray-200 p-8 hover:border-black transition-colors group">
          <i className="fa-solid fa-square-parking text-3xl mb-4 group-hover:scale-110 transition-transform block"></i>
          <h3 className="text-xl font-bold mb-2">Parking</h3>
          <p className="font-mono-custom text-xs text-gray-600 leading-relaxed">Parkir di tempat yang disediakan. Biaya terpisah ya.</p>
        </div>
      </div>

      {/* Dos & Don'ts */}
      <h2 className="text-3xl font-bold mb-8 border-b border-black pb-4 inline-block">Dos & Don'ts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Dos */}
        <div className="bg-gray-50 p-8 border border-green-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-green-500 text-white rounded-none flex items-center justify-center font-bold text-xl"><i className="fa-solid fa-check"></i></div>
            <h3 className="text-2xl font-bold">Please Do</h3>
          </div>
          <ul className="space-y-4 font-mono-custom text-sm text-gray-700">
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Gunakan fasilitas bersama dengan bijak</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Bayar sewa tepat waktu (tanggal 1-5)</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Jaga kebersihan kamar & area umum</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Lapor kerusakan segera</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Hemat listrik saat keluar kamar</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Hormati privasi tetangga</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Ikuti prosedur darurat</li>
            <li className="flex gap-3"><span className="text-green-600 font-bold">✓</span> Simpan barang berharga dengan aman</li>
          </ul>
        </div>
        {/* Don'ts */}
        <div className="bg-gray-50 p-8 border border-red-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-red-500 text-white rounded-none flex items-center justify-center font-bold text-xl"><i className="fa-solid fa-xmark"></i></div>
            <h3 className="text-2xl font-bold">Please Don't</h3>
          </div>
          <ul className="space-y-4 font-mono-custom text-sm text-gray-700">
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Buang sampah sembarangan</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Simpan bahan berbahaya/mudah terbakar</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Ubah instalasi listrik tanpa izin</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Sublet/sewakan ulang kamar</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Gandakan kunci diam-diam</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Aktivitas ilegal</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Merusak properti gedung</li>
            <li className="flex gap-3"><span className="text-red-600 font-bold">✕</span> Bikin keributan</li>
          </ul>
        </div>
      </div>

      {/* Sanctions */}
      <div className="bg-black text-white p-10 rounded-none relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Sanctions</h2>
          <p className="font-mono-custom text-sm text-gray-400 mb-8 max-w-2xl">Pelanggaran aturan akan dikenakan sanksi bertahap sesuai tingkatannya:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/20 p-6 hover:bg-white/10 transition-colors">
              <div className="text-red-500 font-bold text-lg mb-2">01</div>
              <h4 className="font-bold mb-2">Verbal Warning</h4>
              <p className="font-mono-custom text-xs text-gray-400">Peringatan lisan untuk pelanggaran ringan pertama.</p>
            </div>
            <div className="border border-white/20 p-6 hover:bg-white/10 transition-colors">
              <div className="text-red-500 font-bold text-lg mb-2">02</div>
              <h4 className="font-bold mb-2">Written Warning</h4>
              <p className="font-mono-custom text-xs text-gray-400">Peringatan tertulis jika pelanggaran berulang/sedang.</p>
            </div>
            <div className="border border-white/20 p-6 hover:bg-white/10 transition-colors">
              <div className="text-red-500 font-bold text-lg mb-2">03</div>
              <h4 className="font-bold mb-2">Fine</h4>
              <p className="font-mono-custom text-xs text-gray-400">Denda untuk kerusakan atau kerugian material.</p>
            </div>
            <div className="border border-white/20 p-6 hover:bg-white/10 transition-colors">
              <div className="text-red-500 font-bold text-lg mb-2">04</div>
              <h4 className="font-bold mb-2">Termination</h4>
              <p className="font-mono-custom text-xs text-gray-400">Putus kontrak & deposit hangus untuk pelanggaran berat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}