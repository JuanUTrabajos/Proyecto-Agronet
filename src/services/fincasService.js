import { BASE_URL, getHeaders, handleResponse } from "./config";

export const fincasService = {
  // Obtener todas las fincas del usuario
  getAll: async () => {
    // Cambiado para que coincida con Swagger: /api/Finca
    const res = await fetch(`${BASE_URL}/api/Finca`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // Crear una nueva finca
  create: async (fincaData) => {
    // Cambiado para que coincida con Swagger: /api/Finca
    const res = await fetch(`${BASE_URL}/api/Finca`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(fincaData),
    });
    return handleResponse(res);
  },
};
