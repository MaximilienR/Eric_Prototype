import React from 'react'

export default function Mention() {

  return (
    <div className="min-h-screen  bg-[#FFDC03] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Mentions légales
        </h1>

         <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Éditeur du site
          </h2>

          <div className="space-y-2 text-gray-600">
            <p><strong>Eric Colin</strong> – Motion Designer Freelance</p>
            <p>Statut : Bénéficiaire d’un CAPE jusqu’au 02/02/2027 maximum – Espace des Entrepreneurs</p>
            <p>Code NAF : 8899B</p>
            <p>Adresse professionnelle : 4, rue des Buisses – 59000 Lille</p>
            <p>Email : eric.colin.pro@gmail.com</p>
            <p>SIRET : 418 541 553 000 32</p>
            <p>TVA intracommunautaire : FR 23 418 541 553</p>
            <p className="mt-4">
              Directeur de la publication : <strong>Eric Colin</strong> – 
              Contact : eric.colin.pro@gmail.com
            </p>
          </div>
        </section>

         <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Hébergement
          </h2>

          <div className="space-y-2 text-gray-600">
            <p>Le site est hébergé par :</p>
             <p>Rozengracht 207B</p>
            <p>1016 LZ Amsterdam</p>
            <p>Pays-Bas</p>
            <p>Site web : https://www.framer.com</p>
          </div>
        </section>

         <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Propriété intellectuelle
          </h2>

          <p className="text-gray-600 mb-4">
            L’ensemble du contenu présent sur ce site (textes, vidéos, animations,
            images, graphismes, logo, structure, design, etc.) est la propriété
            exclusive d’Eric Colin, sauf mention contraire.
          </p>

          <p className="text-gray-600">
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, est interdite sans autorisation
            écrite préalable.
          </p>
        </section>

         <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Responsabilité
          </h2>

          <p className="text-gray-600 mb-4">
            L’éditeur du site met tout en œuvre pour fournir des informations
            exactes et mises à jour.
          </p>

          <p className="text-gray-600">
            Cependant, il ne peut garantir l’exactitude, la complétude ou
            l’actualité des informations diffusées. L’utilisateur reconnaît
            utiliser ces informations sous sa responsabilité exclusive.
          </p>
        </section>

         <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Données personnelles
          </h2>

          <p className="text-gray-600 mb-4">
            Les informations collectées via le formulaire de contact (nom, email,
            message) sont utilisées uniquement dans le cadre de la relation
            commerciale. Elles ne sont ni vendues, ni cédées à des tiers.
          </p>

          <p className="text-gray-600">
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données.  
            Pour exercer ce droit : <strong>eric.colin.pro@gmail.com</strong>
          </p>
        </section>

         <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Cookies
          </h2>

          <p className="text-gray-600">
            Le site peut utiliser des cookies à des fins de mesure d’audience
            ou de bon fonctionnement technique.  
            Vous pouvez configurer votre navigateur pour les refuser.
          </p>
        </section>

      </div>
    </div>
  );
}