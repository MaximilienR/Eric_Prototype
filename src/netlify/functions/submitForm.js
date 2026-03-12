import fetch from "node-fetch";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const formData = JSON.parse(event.body);
    const access_key = process.env.VITE_WEB3FORMS_KEY;

    const payload = new URLSearchParams({
      ...formData,
      access_key,
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error }),
    };
  }
}