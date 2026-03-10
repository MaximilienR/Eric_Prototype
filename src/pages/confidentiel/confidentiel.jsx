import React from 'react'

export default function Confidentiel() {
  return (
 <div className="min-h-screen  bg-[#FFDC03]
    py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Politique de confidentialité
        </h1>

        <p className="mb-6 text-gray-600">
          En conformité avec le règlement n°2016/679, dit Règlement général pour la protection des données (RGPD) et la loi n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, les données à caractère personnel recueillies sur le site de l’entreprise font l’objet d’une déclaration auprès du Délégué à la Protection des données (DPO) de l’entreprise. Elles sont exclusivement à usage interne de l’entreprise
        </p>

        {/* Qui suis-je */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Qui suis-je ?
          </h2>

          <div className="space-y-2 text-gray-600">
            <p><strong>Eric Colin</strong> – Motion Designer Freelance</p>
            <p>Statut : Bénéficiaire d’un CAPE jusqu’au 02/02/2027 – Espace des Entrepreneurs</p>
            <p>Code NAF : 8899B</p>
            <p>Adresse : 4, rue des Buisses – 59000 Lille</p>
            <p>Email : eric.colin.pro@gmail.com</p>
            <p>SIRET : 418 541 553 000 32</p>
            <p>TVA intracommunautaire : FR 23 418 541 553</p>
          </div>

          <p className="mt-4 text-gray-600">
            Je suis responsable du traitement des données collectées via ce site.
          </p>
        </section>

        {/* Données collectées */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Quelles données sont collectées ?
          </h2>

          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Votre nom</li>
            <li>Votre adresse email</li>
            <li>Le contenu de votre message</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Ces données sont fournies volontairement. Elles ne sont ni cédées,
            échangées ou louées.
          </p>
        </section>

        {/* Finalité */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Pourquoi ces données sont collectées ?
          </h2>
        <p>Les informations sont utilisées uniquement pour :</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Répondre à votre demande</li>
            <li>Échanger à propos d’un projet</li>
            <li>Établir un devis si nécessaire</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Vos données ne sont jamais vendues, louées ou transmises à des tiers.
          </p>
        </section>

        {/* Durée */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Durée de conservation
          </h2>

          <p className="text-gray-600">
            Les données sont conservées pendant la durée des échanges professionnels,
            puis supprimées au maximum 3 ans après le dernier contact.
          </p>
        </section>

        {/* Hébergement */}
       <section className="mb-8">
  <h2 className="text-xl font-semibold mb-4 text-gray-800">
    Hébergement des données
  </h2>

  <div className="text-gray-600 space-y-2">
    <p>
      Le site est hébergé par : <strong>Framer B.V.</strong>
    </p>
    <p>Rozengracht 207B</p>
    <p>1016 LZ Amsterdam – Pays-Bas</p>
    <p>Site web : https://www.framer.com</p>
  </div>

  <p className="mt-4 text-gray-600">
    Des mesures de sécurité sont mises en place pour protéger vos informations.
  </p>
</section>
        {/* Droits */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Vos droits
          </h2>

          <p className="text-gray-600 mb-4">
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification,
            de suppression, d’opposition, de limitation ou de portabilité des données.
          </p>

          <p className="text-gray-600">
            Vous pouvez exercer ces droits par email à :
            <strong> eric.colin.pro@gmail.com </strong>
            ou par courrier à :
            4 rue des Buisses – 59000 Lille.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Cookies
          </h2>

          <p className="text-gray-600">
            Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.
            Vous pouvez configurer votre navigateur pour les refuser.
          </p>
        </section>

       

      </div>
    </div>  )
}
