import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_footer.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🔥 Deux colonnes */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* 🔵 Colonne 1 - Navigation */}
          <div className="flex flex-col space-y-4 text-lg">
             <img
                        src={logo}
                        alt="Logo"
  className="w-32 h-32 rounded-full"
                      />
          </div>
          {/* 🔵 Colonne 1 - Navigation */}

            <div className="flex flex-col space-y-4 text-lg">
            <a href="#" className="hover:text-gray-400 transition">
              Accueil
            </a>

               <Link to="/about" className="hover:text-gray-700">
                        À propos
                      </Link>

            <a href="#" className="hover:text-gray-400 transition">
              Contact
            </a>
          </div>

          {/* 🔴 Colonne 2 - Infos */}
          <div className="flex flex-col space-y-4 text-lg">
              <Link to="/mention" className="hover:text-gray-700">
            Mention légale
          </Link>

              <Link to="/confidentiel" className="hover:text-gray-700">
           Politique de confidentialité
          </Link>

          </div>

        </div>

        {/* 🔥 Petite signature en bas */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} — Tous droits réservés
        </div>

      </div>
    </footer>
  );
}