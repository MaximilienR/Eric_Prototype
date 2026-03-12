import React, { useState } from "react";
import * as Yup from "yup";

export default function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Le nom doit contenir au moins 2 caractères")
      .required("Le nom est obligatoire"),
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
    message: Yup.string()
      .min(10, "Le message doit contenir au moins 10 caractères")
      .required("Le message est obligatoire"),
    privacy: Yup.boolean()
      .oneOf([true], "Vous devez accepter la politique de confidentialité")
      .required("Vous devez accepter la politique de confidentialité"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    setErrors({});

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // Transforme la checkbox en boolean
    data.privacy = data.privacy === "on";

    try {
      await schema.validate(data, { abortEarly: false });

      const response = await fetch("/.netlify/functions/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        setResult("✅ Message envoyé avec succès !");
        event.target.reset();
      } else {
        setResult("❌ Erreur lors de l'envoi");
      }
    } catch (validationError) {
      if (validationError.inner) {
        const newErrors = {};
        validationError.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
      setResult("❌ Erreur de validation");
    }
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center p-6 bg-[#FFDC03]">
      <form onSubmit={onSubmit} className="w-full max-w-2xl flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center text-black">Contactez-moi</h1>

        <input type="text" name="name" placeholder="Votre nom" className="bg-white p-4 rounded-xl" />
        {errors.name && <p className="text-red-600">{errors.name}</p>}

        <input type="email" name="email" placeholder="Votre email" className="bg-white p-4 rounded-xl" />
        {errors.email && <p className="text-red-600">{errors.email}</p>}

        <textarea
          name="message"
          rows="6"
          placeholder="Votre message"
          className="bg-white p-4 rounded-xl resize-none"
        />
        {errors.message && <p className="text-red-600">{errors.message}</p>}

        {/* Checkbox de confidentialité */}
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" name="privacy" className="w-5 h-5" />
          Je reconnais avoir pris connaissance de la politique de confidentialité et je l'accepte
        </label>
        {errors.privacy && <p className="text-red-600">{errors.privacy}</p>}

        <button type="submit" className="bg-black text-white p-4 rounded-xl hover:bg-gray-800">
          Envoyer
        </button>

        <span className="text-center font-semibold">{result}</span>
      </form>
    </div>
  );
}