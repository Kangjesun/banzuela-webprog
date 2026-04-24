import { NavLink } from "react-router-dom";
import logo from "../assets/images/VogueAvenue1.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
  { label: "Sign In", to: "/auth/signin" },
  { label: "Sign Up", to: "/auth/signup" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition",
    isActive
      ? "border-[#D4AF37] bg-[#D4AF37] text-black"
      : "border-transparent text-[#E5E5E5] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-white",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2A2A] bg-gradient-to-r from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] shadow-md">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-3 py-2 sm:px-4">
        <NavLink to="/" className="flex items-center gap-3 pl-19">
          <img
            src={logo}
            alt="Vogue Avenue Logo"
            className="h-15 w-auto object-contain"
          />
        </NavLink>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-2">

          {/* MAIN LINKS */}
          <nav className="flex items-center gap-2">
            {links.slice(0, 3).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* DIVIDER */}
          <div className="h-5 w-px bg-[#D4AF37]/40 mx-1" />

          {/* AUTH LINKS */}
          <div className="flex items-center gap-2">
            {links.slice(3).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5E5E5] transition hover:text-[#D4AF37]"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

        </div>

      </div>
    </header>
  );
};

export default NavBar;