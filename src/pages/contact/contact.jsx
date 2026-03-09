import React, { useState } from "react";
import * as Yup from "yup";

export default function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  // 🔥 Schéma Yup.
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

    acceptTerms: Yup.boolean()
      .oneOf([true], "Vous devez accepter les termes et conditions")
      .required("Vous devez accepter les termes et conditions"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    setErrors({});

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // ✅ Convertir la checkbox en boolean.
    data.acceptTerms = data.acceptTerms === "on";

    // ✅ Validation avec Yup
    try {
      await schema.validate(data, { abortEarly: false });

      formData.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_KEY
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const res = await response.json();

      if (res.success) {
        setResult("✅ Message envoyé avec succès !");
        event.target.reset();
      } else {
        setResult(
          "❌ Message non envoyé ...il s'agit de la version demo, les messages ne sont pas réellement envoyés ici "
        );
      }
    } catch (validationError) {
      // ❌ Gestion erreurs validation
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
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl flex flex-col gap-6"
      >
        <h1 className="text-4xl font-bold text-center text-black">
          Contactez-moi
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="bg-white p-4 rounded-xl"
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="bg-white p-4 rounded-xl"
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}

        <textarea
          name="message"
          rows="6"
          placeholder="Votre message"
          className="bg-white p-4 rounded-xl resize-none"
        />
        {errors.message && (
          <p className="text-red-600">{errors.message}</p>
        )}

        {/* ✅ Checkbox termes et conditions */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="acceptTerms"
            className="w-4 h-4"
          />
          <span>J'accepte les termes et conditions</span>
        </label>
        {errors.acceptTerms && (
          <p className="text-red-600">{errors.acceptTerms}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white p-4 rounded-xl hover:bg-gray-800"
        >
          Envoyer
        </button>

        <span className="text-center font-semibold">{result}</span>
      </form>
    </div>
  );
}