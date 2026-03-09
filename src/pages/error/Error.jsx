import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 px-4">
      <div className="bg-black shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">
          404
        </h1>

        <p className="text-gray-100 text-lg mb-6">
          Oups... La page que vous cherchez n'existe pas !
        </p>

        <Link
          to="/"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
        >
          Retour à l'accueil
        </Link>

      </div>
    </div>
  );
}