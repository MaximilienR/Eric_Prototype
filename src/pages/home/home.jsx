import React from "react";
import { Link } from "react-router-dom";
import About from "../about/about";
import Contact from "../contact/contact";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div id="accueil" className="min-h-screen flex flex-col items-center justify-center bg-[#FFDC03] text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-red-500">Hello !</span> Je suis Eric Colin,
          <br />
          graphiste & motion designer..
        </h1>

        <a
          href="#contact"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Me contacter
        </a>
      </div>

      {/* SHOWREEL */}
      <section className="min-h-screen w-full bg-black text-center px-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-8 text-white">
          Showreel
        </h2>

        <div className="flex justify-center w-full">
          <video
            className="w-[40%] md:w-[50%] rounded-2xl shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}