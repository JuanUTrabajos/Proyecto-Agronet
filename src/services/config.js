// src/services/config.js
export const BASE_URL = import.meta.env.VITE_API_URL ?? "";

export const getHeaders = () => {
  const token = localStorage.getItem("agronet_token");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
};

export const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || "Error en la comunicación con Agronet",
    );
  }
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};
