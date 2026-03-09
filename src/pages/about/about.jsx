import React from "react";
import photo from "../../assets/photo.avif";

export default function About() {
  return (
    <>
      {/* 🔥 Container avec centrage verticalddd */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            {/* 🔵 Colonne gauche */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">
                
             

                Qui suis-je ?

                {/* 🔹 Photo pour desktop */}
                <img
                  src={photo}
                  alt="Photo de profil"
                  className="w-32 h-32 rounded-full ml-4 mr-4 inline-block hidden md:inline-block"
                />
              </h2>

              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Graphiste depuis les années 90, j’ai développé une solide
                  expérience dans la création visuelle et la communication.
                </p>

                <p>
                  Aujourd’hui, je suis freelance en graphisme et motion design.
                  Je vous accompagne dans la création de visuels animés qui
                  permettent d’expliquer clairement un message.
                </p>

                <p>
                  Je transforme votre message ou votre produit en vidéo animée.
                </p>

                <p className="mt-6 font-medium">
                  Je suis toujours disponible pour échanger autour d’un projet
                  ou d’un café ☕️
                  <br />
                  N’hésitez pas à me contacter 🙂
                </p>
              </div>
            </div>

            {/* 🔴 Colonne droite */}
            <div className="flex-1 bg-gray-100 p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">
                Services
              </h2>

              <ul className="space-y-3 text-lg">
                <li>✅ Animation 2D</li>
                <li>✅ Publicités sur les réseaux sociaux</li>
                <li>✅ Vidéos institutionnelles</li>
                <li>✅ Animation typographique</li>
                <li>✅ Vidéos explicatives</li>
                <li>✅ Animations de logos</li>
                <li>✅ Habillage vidéo</li>
                <li>✅ Affichage numérique extérieur</li>
                <li>✅ Design graphique & infographie</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}