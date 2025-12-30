import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 pb-12 pt-8 animate-fadeIn">
      <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">Get in Touch</h1>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Contact Info */}
        <div className="w-full md:w-1/3">
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Headquarters</h3>
            <p className="font-mono-custom text-sm text-gray-600 mb-2">Cathalia Residence HQ</p>
            <p className="font-mono-custom text-sm text-gray-600">Jl. Jend. Sudirman Kav 52-53<br/>Jakarta Selatan, 12190<br/>Indonesia</p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
            <p className="font-mono-custom text-sm text-gray-600 mb-2">
              <i className="fa-solid fa-phone mr-2"></i> +62 21 555 0199
            </p>
            <p className="font-mono-custom text-sm text-gray-600">
              <i className="fa-solid fa-envelope mr-2"></i> hello@cathalia.com
            </p>
          </div>
          
          <div className="p-6 bg-[#B8F2B8] border border-black">
            <h4 className="font-bold mb-2">Looking for a room?</h4>
            <p className="text-sm">Cara tercepat: cek halaman "Explore" dan booking langsung!</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-2/3">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-sm mb-2">FIRST NAME</label>
                <input type="text" className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-bold text-sm mb-2">LAST NAME</label>
                <input type="text" className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-sm mb-2">EMAIL ADDRESS</label>
              <input type="email" className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors" />
            </div>

            <div>
              <label className="block font-bold text-sm mb-2">SUBJECT</label>
              <select className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors bg-white">
                <option>General Inquiry</option>
                <option>Booking Issue</option>
                <option>Partnership</option>
                <option>Press</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-sm mb-2">MESSAGE</label>
              <textarea rows={6} className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors"></textarea>
            </div>

            <button type="button" className="bg-black text-white font-bold px-10 py-4 rounded-none hover:bg-[#B8F2B8] hover:text-black transition-colors w-full md:w-auto">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}