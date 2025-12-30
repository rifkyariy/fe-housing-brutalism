import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                {/* Brand Column */}
                <div className="col-span-2 lg:col-span-2">
                    <Link href="/" className="text-3xl font-black tracking-tighter uppercase block mb-6">Cathalia</Link>
                    <p className="font-mono-custom text-xs text-gray-500 max-w-xs leading-relaxed mb-6">
                        Solusi hunian modern untuk profesional muda. Lebih dari sekadar tempat tidur, ini adalah gaya hidup baru.
                    </p>
                    <div className="flex gap-4">
                        <i className="fa-brands fa-instagram text-xl cursor-pointer hover:text-gray-600"></i>
                        <i className="fa-brands fa-twitter text-xl cursor-pointer hover:text-gray-600"></i>
                        <i className="fa-brands fa-linkedin text-xl cursor-pointer hover:text-gray-600"></i>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div>
                    <h4 className="font-bold mb-6">Company</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-600">
                        <li><Link href="/explore" className="hover:text-black">All Locations</Link></li>
                        <li><Link href="/standards" className="hover:text-black">Our Standards</Link></li>
                        <li><Link href="/rules" className="hover:text-black">Rules</Link></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-600">
                        <li><Link href="/help" className="hover:text-black">Help Center</Link></li>
                        <li><Link href="/rules" className="hover:text-black">House Rules</Link></li>
                        <li><Link href="/contact" className="hover:text-black">Contact Us</Link></li>
                        <li><Link href="/faq" className="hover:text-black">FAQs</Link></li>
                    </ul>
                </div>

                {/* Links Column 3 */}
                <div>
                    <h4 className="font-bold mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-600">
                        <li><Link href="/terms" className="hover:text-black">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
                        <li><Link href="/cookies" className="hover:text-black">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 font-mono-custom text-xs text-gray-400">
                <p>&copy; 2026 Cathalia. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span>Designed with ❤️ by Cathalia Team</span>
                </div>
            </div>
        </div>
    </footer>
  );
}
