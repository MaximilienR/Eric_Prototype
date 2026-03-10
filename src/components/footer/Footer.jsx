import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_footer.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* Conteneur principal du footer */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-24 text-center md:text-left p-6">

        {/* Logo */}
        <div className="w-48 flex justify-center md:justify-start mb-6 md:mb-0">
          <img src={logo} alt="Logo" className="w-32 h-32 rounded-full" />
        </div>

        {/* Navigation */}
        <div className="w-48 flex flex-col items-start space-y-4 text-lg">
          <Link to="/" className="hover:text-gray-400 transition">Accueil</Link>
          <Link to="/about" className="hover:text-gray-400">À propos</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>

        {/* Infos */}
        <div className="w-48 flex flex-col items-start space-y-4 text-lg">
          <Link to="/mention" className="hover:text-gray-400">Mention légale</Link>
          <Link to="/confidentiel" className="hover:text-gray-400 whitespace-nowrap">
            Politique de confidentialité
          </Link>
        </div>
      </div>

      {/* Texte de copyright */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © 2026 Eric Colin – Tous droits réservés
      </div>
    </footer>
  );
}