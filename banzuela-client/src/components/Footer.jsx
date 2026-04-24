import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/VogueAvenue1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">

        <div className="flex gap-2 md:gap-4 order-1 md:order-1">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <FaInstagram size={16} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            <FaTwitter size={16} />
          </a>
        </div>


        <div className="order-2 md:order-2 flex items-center gap-2">
          <img
            src={Logo}
            alt="Vogue Avenue Logo"
            className="h-15 w-auto object-contain"
          />

          <div className="flex flex-col text-center md:text-left">
            <span className="text-yellow-500 font-semibold text-base tracking-widest font-serif italic">
              Vogue Avenue
            </span>
            <div className="text-gray-400 text-[10px]">
              &copy; {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-2 md:gap-4 order-3 md:order-3 text-[10px] uppercase font-medium tracking-widest font-sans">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/articles" className="hover:text-yellow-400 transition-colors duration-300">
            Articles
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;