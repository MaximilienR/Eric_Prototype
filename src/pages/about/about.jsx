import React from "react";
import photo from "../../assets/photo.avif";

export default function About() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* On réduit gap-16 à gap-8 pour rapprocher les colonnes */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* 🔹 Colonne gauche : Image */}
          <div className="flex-1 flex justify-center md:justify-start md:max-w-[180px]">
            <img
              src={photo}
              alt="Photo de profil"
              className="hidden md:block object-cover rounded-lg"
              style={{ maxHeight: "300px", width: "100%" }}
            />
          </div>

          {/* 🔵 Colonne centrale : Texte */}
          <div className="flex-1 md:flex-[2]">
            <h2 className="text-4xl font-bold mb-6">Qui suis-je ?</h2>
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

          {/* 🔴 Colonne droite : Services */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Services</h2>
            <ul className="list-disc pl-5 space-y-3 text-lg">
              <li>Animation 2D</li>
              <li>Publicités sur les réseaux sociaux</li>
              <li>Vidéos institutionnelles</li>
              <li>Animation typographique</li>
              <li>Vidéos explicatives</li>
              <li>Animations de logos</li>
              <li>Habillage vidéo</li>
              <li>Affichage numérique extérieur</li>
              <li>Design graphique & infographie</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}