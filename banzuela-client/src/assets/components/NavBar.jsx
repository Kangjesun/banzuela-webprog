import { NavLink } from 'react-router-dom';
import logo from '../styles/Vogue Avenue1.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300',
    isActive
      ? 'border-[#D4AF37] bg-[#D4AF37] text-black shadow-md'
      : 'border-transparent text-[#E5E5E5] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2A2A] bg-gradient-to-r from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vogue Avenue Logo"
            className="h-10 w-auto transform scale-200"
          />
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;