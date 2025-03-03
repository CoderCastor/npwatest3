import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left - Website Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-green-400">National Pharmacy Welfare Association</h2>
          <p className="text-sm text-gray-300 mt-1">Empowering the pharmacy community through advocacy and collaboration.</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <Link href="/about" className="text-gray-300 hover:text-green-400">About</Link>
          <Link href="/events" className="text-gray-300 hover:text-green-400">Events</Link>
          <Link href="/membership" className="text-gray-300 hover:text-green-400">Membership</Link>
          <Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
        </div>

        {/* Right - Social Media */}
        <div className="flex gap-4">
          <Link href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-blue-400">
            <Facebook size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-blue-400">
            <Twitter size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-blue-400">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
        © 2025 NPWA. All rights reserved. Developed by <span className="text-green-400">SoluxctionSpace Pvt Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
