import React from "react";
import logo from "../../assets/logo_footer.svg";
import fw from "../../assets/fw.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";

export default function Footer() {
  // Fonction pour scroller doucement vers un élément
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Remonter en haut de page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-400">

      {/* Conteneur principal */}
      <div className="flex flex-col md:flex-row justify-center items-start max-w-4xl mx-auto p-6 gap-8">

        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-32 rounded-lg object-contain"
          />
        </div>

        {/* Navigation interne */}
        <div className="flex flex-col items-start space-y-4 text-lg">
          <button
            onClick={() => scrollToSection("#accueil")}
            className="hover:text-gray-200 transition text-left"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="hover:text-gray-200 transition text-left"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="hover:text-gray-200 transition text-left"
          >
            Contact
          </button>
        </div>

        {/* Infos légales */}
        <div className="flex flex-col items-start space-y-4 text-lg">
             <Link to="/mention" 
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-gray-200 transition">Mention légale</Link>
          <Link
            to="/confidentiel"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

            className="hover:text-gray-200 transition whitespace-nowrap"
          >
            Politique de confidentialité
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-start space-y-4 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={fw} alt="Facebook" className="w-4 h-4 brightness-0 invert" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={linkedin} alt="LinkedIn" className="w-4 h-4 brightness-0 invert" />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={whatsapp} alt="WhatsApp" className="w-4 h-4 brightness-0 invert" />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © 2026 Eric Colin – Tous droits réservés
      </div>

      {/* Bouton remonter en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        ↑
      </button>

    </footer>
  );
}