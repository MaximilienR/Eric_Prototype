import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_footer.svg";
import fw from "../../assets/fw.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      
      {/* Conteneur principal du footer */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-4xl mx-auto p-6 gap-8">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-32 rounded-lg object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-start space-y-4 text-lg">
          <Link to="/" className="hover:text-gray-200 transition">Accueil</Link>
          <Link to="/about" className="hover:text-gray-200 transition">À propos</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </div>

        {/* Infos légales */}
        <div className="flex flex-col items-start space-y-4 text-lg">
          <Link to="/mention" className="hover:text-gray-200 transition">Mention légale</Link>
          <Link
            to="/confidentiel"
            className="hover:text-gray-200 transition whitespace-nowrap"
          >
            Politique de confidentialité
          </Link>
        </div>

     <div className="flex flex-col items-start space-y-4 text-lg">
 
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition"
  >
<img src={fw} alt="Facebook" className="w-4 h-4 brightness-0 invert" />  </a>

<a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition"
  >
<img src={linkedin} alt="linkedin" className="w-4 h-4 brightness-0 invert" />  </a>

<a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition"
  >
<img src={whatsapp} alt="whatsapp" className="w-4 h-4 brightness-0 invert" />  </a>
</div>


      </div>

      {/* Texte de copyright */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © 2026 Eric Colin – Tous droits réservés
      </div>
    </footer>
  );
}