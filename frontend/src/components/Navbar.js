import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Activités & Départements", href: "/activities" },
    { name: "Médias", href: "/media" },
    { name: "Faire un Don", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo SVG intégré */}
              <div className="w-12 h-12 relative transform group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Cercle principal bleu */}
                  <circle cx="50" cy="50" r="45" fill="url(#blueGradient)" stroke="#1e40af" strokeWidth="2"/>
                  
                  {/* Cercle intérieur rouge */}
                  <circle cx="50" cy="50" r="30" fill="url(#redGradient)"/>
                  
                  {/* Croix */}
                  <rect x="47" y="30" width="6" height="40" fill="#dc2626" rx="1"/>
                  <rect x="35" y="47" width="30" height="6" fill="#dc2626" rx="1"/>
                  
                  {/* Bible ouverte */}
                  <path d="M40 65 L60 65 L58 75 L42 75 Z" fill="white" stroke="#374151" strokeWidth="1"/>
                  <line x1="50" y1="65" x2="50" y2="75" stroke="#374151" strokeWidth="1"/>
                  
                  {/* Colombe stylisée */}
                  <path d="M35 35 Q25 30 20 35 Q25 40 35 35 L40 40 Z" fill="white" opacity="0.9"/>
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#1e40af"/>
                    </linearGradient>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444"/>
                      <stop offset="100%" stopColor="#dc2626"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className={`transition-colors duration-300 ${
                scrolled ? "text-blue-600" : "text-white"
              }`}>
                <span className="font-bold text-lg">Église Évangélique</span>
                <div className="text-sm font-semibold opacity-90">La Conquête</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : scrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.href ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors duration-300 hover:bg-white/10"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      location.pathname === item.href
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;