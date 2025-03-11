import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/arrow.svg";
import lines from "../assets/images/lines.png";
import ex from "../assets/images/ex.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = {
    services: {
      title: "Services",
      items: [
        "B2B Marketing",
        "Go-to-Market Strategy",
        "Market Expansion",
        "Growth Marketing",
        "CMO & Marketing Strategy",
        "Data & AI",
        "High Intent Lead Generation",
        "CAC & LTV Optimisation",
        "Paid & Performance Marketing",
        "Conversion Rate Optimisation (CRO)",
        "Sales Team Enablement",
        "Content & SEO",
        "Branding"
      ]
    },
    verticles: {
      title: "Verticles",
      items: [
        "B2B",
        "Direct to Consumer",
        "Consumer Services"
      ]
    },
    marketing: {
      title: "Marketing Solutions",
      items: [
        "Paid Media",
        "Performance Marketing, Paid Media, Paid Social",
        "Earned Media:",
        "Public relations, Influencer, Affiliate",
        "Owned Media",
        "SEO, Social Media, Branding, Email & SMS, Content Marketing, CROces"
      ]
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="relative" ref={headerRef}>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center w-full px-[3%] pt-6 pb-4 bg-white z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setActiveDropdown(null);
            }}
            className="block lg:hidden flex items-center justify-center w-8 h-8"
          >
            <img 
              src={isMenuOpen ? ex : lines} 
              alt={isMenuOpen ? "Close Menu" : "Open Menu"} 
              className="w-6 h-6"
            />
          </button>
          <img src={logo} alt="Company Logo" className="w-[120px] h-auto object-contain" />
        </div>

        {/* Navigation and Button Container - Desktop */}
        <div className="flex items-center justify-end min-w-fit gap-[10%]">
          <nav className="hidden lg:flex items-center gap-[10%] text-lg font-normal text-black min-w-fit">
            {Object.entries(navItems).map(([key, { title }]) => (
              <div key={key} className="relative group">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(key);
                  }}
                  className="hover:text-indigo-500 flex items-center whitespace-nowrap py-6"
                >
                  {title}
                  <img 
                    src={arrow} 
                    alt="Arrow" 
                    className={`ml-1 w-3 h-3 group-hover:[filter:invert(39%)_sepia(57%)_saturate(1235%)_hue-rotate(214deg)_brightness(97%)_contrast(101%)] transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} 
                  />
                </button>
                {/* Desktop Dropdown */}
                <div 
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 w-[280px] ${
                    activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-4">
                    {navItems[key].items.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-6 py-3 text-sm hover:bg-indigo-50 hover:text-indigo-500 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Work With Us Button Container */}
          <div className="min-w-fit ml-[10%]">
            <Button variant="primary">
              Work with us
            </Button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[88px]" />

      {/* Mobile Menu */}
      <div className={`fixed top-[80px] left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${
        isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      } lg:hidden`}>
        <nav className="flex flex-col px-[3%] py-6">
          {Object.entries(navItems).map(([key, { title, items }]) => (
            <div key={key} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(key);
                }}
                className="w-full hover:text-indigo-500 flex items-center justify-between whitespace-nowrap py-4 text-lg"
              >
                {title}
                <img 
                  src={arrow} 
                  alt="Arrow" 
                  className={`ml-2 w-4 h-4 transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} 
                />
              </button>
              {/* Mobile Dropdown */}
              <div 
                className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                  activeDropdown === key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-2">
                  {items.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-6 py-3 text-sm hover:bg-indigo-50 hover:text-indigo-500"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
