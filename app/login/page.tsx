import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-24 flex justify-center items-center min-h-[60vh] animate-fadeIn">
      <div className="w-full max-w-md border border-black p-8 md:p-12 bg-white shadow-xl">
        <h1 className="text-3xl font-black mb-8 text-center uppercase tracking-tight">Login</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block font-bold text-sm mb-2">EMAIL</label>
            <input type="email" className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors" placeholder="your@email.com" />
          </div>
          
          <div>
            <label className="block font-bold text-sm mb-2">PASSWORD</label>
            <input type="password" className="w-full border border-gray-300 p-4 rounded-none focus:border-black outline-none transition-colors" placeholder="••••••••" />
          </div>

          <div className="flex justify-between items-center text-xs font-mono-custom">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-black" />
              <span>Remember me</span>
            </label>
            <a href="#" className="underline hover:text-gray-600">Forgot password?</a>
          </div>

          <button type="button" className="w-full bg-black text-white font-bold py-4 rounded-none hover:bg-[#B8F2B8] hover:text-black transition-colors uppercase tracking-wide">
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm font-mono-custom text-gray-500">
          Don't have an account? <a href="#" className="text-black font-bold underline">Register</a>
        </div>
      </div>
    </div>
  );
}