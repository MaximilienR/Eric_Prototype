export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const formData = JSON.parse(event.body);
    const access_key = process.env.WEB3FORMS_KEY;

    if (!access_key) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: "Missing WEB3FORMS_KEY" }),
      };
    }

    // Prépare le payload JSON
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      privacy: formData.privacy ? true : false,
      access_key,
    };

    console.log("FormData reçu:", formData);
    console.log("Payload envoyé (JSON):", payload);

    // Envoi de la requête
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Vérifie le type de contenu avant JSON.parse
    const contentType = response.headers.get("content-type");

    let result;
    if (contentType && contentType.includes("application/json")) {
      // Si le serveur renvoie du JSON.
      result = await response.json();
    } else {
      // Si le serveur renvoie du HTML ou autre, ne pas planter
      const text = await response.text();
      console.warn("Réponse non-JSON reçue :", text);
      result = { success: false, error: "Réponse inattendue du serveur", raw: text };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };

  } catch (error) {
    console.error("Erreur submitForm:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}