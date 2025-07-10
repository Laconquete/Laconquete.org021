import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-lg">La Conquête</span>
            </div>
            <p className="text-gray-300 text-sm">
              "La conquête des âmes, la conquête des terres"
            </p>
            <p className="text-gray-400 text-sm">
              Une église évangélique dédiée à la transformation des vies par l'Évangile de Jésus-Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-white transition-colors">
                  Activités
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-white transition-colors">
                  Départements
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors">
                  Médias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  520, Avenue N'Djamena, À côté de la Cour d'Ordre Militaire<br />
                  Haut-Katanga, RDC
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+243 997 030 259</p>
                  <p>+243 814 065 815</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/laconquete_eec/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@LaconqueteEEC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="https://wa.me/243997030259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Église Évangélique La Conquête. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Fondée le 21 novembre 2004
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;