import { useState } from "react";
import fb from "../../assets/fb.svg";
import lin from "../../assets/lin.svg";
import wa from "../../assets/wa.svg";
import logoDynamik from "../../assets/logoDynamik.mp4";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: fb, alt: "Facebook", href: "https://www.facebook.com/eric.colin.motion.design" },
    { icon: lin, alt: "Linkedin", href: "https://www.linkedin.com/in/eric-colin-graphics/" },
    { icon: wa, alt: "Whatsapp", href: "https://www.whatsapp.com" },
  ];

  return (
    <nav className="bg-[#FFDC03]">
      <div className="mx-auto max-w-4xl flex justify-between items-center px-8 py-2">

        {/* Logo */}
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
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-700">
              {link.name}
            </a>
          ))}

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="w-8 h-8"
              />
            </a>
          ))}
        </div>

        {/* Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 px-8 pb-6 bg-[#FFDC03]">

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col items-start space-y-2 pt-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>

        </div>
      )}
    </nav>
  );
}