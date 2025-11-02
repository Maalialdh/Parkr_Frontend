// src/utilities/sendRequest.js
const url = "http://127.0.0.1:8000"; // عدّل حسب السيرفر

export default async function sendRequest(path, method = "GET", payload, useToken = true) {
  const token = useToken ? localStorage.getItem("accessToken") : null;

  const options = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`${url}${path}`, options);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || "Error in request");
    }

    return data;
  } catch (err) {
    console.error("Error in sendRequest:", err);
    throw err;
  }
}
