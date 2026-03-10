import { useState } from "react";
import fb from "../../assets/fb.svg";
import lin from "../../assets/lin.svg";
import wa from "../../assets/wa.svg";
import logoDynamik from "../../assets/logoDynamik.mp4";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFDC03]">
      <div className="mx-auto max-w-4xl flex justify-between items-center px-8 py-2">
        
        <a href="#accueil">
          <video
            src={logoDynamik}
            autoPlay
            loop
            muted
            className="w-64 h-36 rounded-lg object-contain"
          />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-black">
          <a href="#accueil" className="hover:text-gray-700">
            Accueil
          </a>

          <a href="#about" className="hover:text-gray-700">
            À propos
          </a>

          <a href="#contact" className="hover:text-gray-700">
            Contact
          </a>

          <img src={fb} alt="Facebook" className="w-8 h-8" />
          <img src={lin} alt="Linkedin" className="w-8 h-8" />
          <img src={wa} alt="Whatsapp" className="w-8 h-8" />
        </div>

        {/* Bouton Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-yellow-400 pb-4 space-y-3 text-black">
          
          <a
            href="#accueil"
            className="hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>

          <a
            href="#about"
            className="hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </a>

          <a
            href="#contact"
            className="hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <div className="flex space-x-4 pt-2">
            <img src={fb} alt="Facebook" className="w-8 h-8" />
            <img src={lin} alt="Linkedin" className="w-8 h-8" />
            <img src={wa} alt="Whatsapp" className="w-8 h-8" />
          </div>

        </div>
      )}
    </nav>
  );
}