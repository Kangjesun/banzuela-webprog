import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 flex flex-col">
      <NavBar />
      <main className="pb-16 pt-20 flex-grow">
        <Outlet />
      </main>

      {/*Footer*/}
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
              aria-label="X Twitter"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              <FaTwitter size={16} />
            </a>
          </div>

    
          <div className="order-2 md:order-2 text-center flex flex-col items-center">
            <span className="text-yellow-500 font-semibold text-base tracking-widest font-serif italic">
              Vogue Avenue
            </span>
            <div className="text-gray-400 text-[10px] mt-1">
              &copy; {new Date().getFullYear()} All rights reserved
            </div>
          </div>

  
          <div className="flex gap-2 md:gap-4 order-3 md:order-3 text-[10px] uppercase font-medium tracking-widest font-sans">
            <a href="/" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
            <a href="/articles" className="hover:text-yellow-400 transition-colors duration-300">Articles</a>
            <a href="/about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
            <a href="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;