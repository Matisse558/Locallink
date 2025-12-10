import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111010] border-t border-[#2b1a13] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fdf3e7]">LocalLinkNL</h3>
            <p className="text-[#d7c6b8] text-sm leading-relaxed">
              Direct bookings, local stays. Keep your spend within the Dutch economy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#fdf3e7]">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  Suppliers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#fdf3e7]">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:contact@locallinknl.nl" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#fdf3e7]">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-[#d7c6b8] hover:text-[#fdf3e7] transition-colors duration-200 text-sm">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2b1a13] mt-8 pt-8 text-center text-[#7a6a60] text-sm">
          <p>&copy; {new Date().getFullYear()} LocalLinkNL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
