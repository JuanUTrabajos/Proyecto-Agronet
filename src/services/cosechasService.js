import { BASE_URL, getHeaders, handleResponse } from "./config";

export const cosechasService = {
  // Ver cosechas disponibles para el mercado (Ruta real según Swagger)
  getDisponibles: async () => {
    // Cambiamos /cosechas/disponibles por /api/Cosecha/Catalogo
    const res = await fetch(`${BASE_URL}/api/Cosecha/Catalogo`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // Publicar nueva cosecha (Ruta real según Swagger)
  create: async (cosechaData) => {
    // Cambiamos /cosechas por /api/Cosecha
    const res = await fetch(`${BASE_URL}/api/Cosecha`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(cosechaData),
    });
    return handleResponse(res);
  },
};
