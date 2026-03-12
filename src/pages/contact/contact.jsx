import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
    privacy: false,
  };

  const validationSchema = Yup.object().shape({
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

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus({ result: "Envoi en cours..." });

    try {
      const payload = {
        ...values,
        access_key: "268424bb-d427-4207-acdd-229341faff08",  
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const res = await response.json();

      if (res.success) {
        setStatus({ result: "✅ Message envoyé avec succès !" });
        resetForm();
      } else {
        setStatus({ result: "❌ Erreur lors de l'envoi" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ result: "❌ Erreur réseau, veuillez réessayer" });
    }

    setSubmitting(false);
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Contactez-moi</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form className="flex flex-col gap-6">
              <Field
                type="text"
                name="name"
                placeholder="Votre nom"
                className="bg-white p-4 rounded-xl"
              />
              <ErrorMessage name="name" component="p" className="text-red-600" />

              <Field
                type="email"
                name="email"
                placeholder="Votre email"
                className="bg-white p-4 rounded-xl"
              />
              <ErrorMessage name="email" component="p" className="text-red-600" />

              <Field
                as="textarea"
                name="message"
                rows="6"
                placeholder="Votre message"
                className="bg-white p-4 rounded-xl resize-none"
              />
              <ErrorMessage name="message" component="p" className="text-red-600" />

              <label className="flex items-center gap-2 text-black">
                <Field type="checkbox" name="privacy" className="w-5 h-5" />
                Je reconnais avoir pris connaissance de la politique de confidentialité et je l'accepte
              </label>
              <ErrorMessage name="privacy" component="p" className="text-red-600" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white p-4 rounded-xl hover:bg-gray-800"
              >
                Envoyer
              </button>

              {status && status.result && (
                <span className="text-center font-semibold">{status.result}</span>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}