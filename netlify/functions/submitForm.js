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

    // Payload JSON
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      privacy: formData.privacy ? true : false,
      access_key,
    };

    console.log("FormData reçu:", formData);
    console.log("Payload envoyé (JSON):", payload);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

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