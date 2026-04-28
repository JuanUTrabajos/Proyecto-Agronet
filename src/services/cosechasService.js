import { BASE_URL, getHeaders, handleResponse } from "./config";

export const cosechasService = {
  // 1. Obtener productos disponibles (Catálogo) para el dropdown
  getProductos: async () => {
    const res = await fetch(`${BASE_URL}/api/Productos`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // 2. Obtener el listado de todas las cosechas (para la tabla de la derecha)
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/api/Cosecha`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // 3. Publicar una nueva cosecha (Botón Publicar)
  create: async (cosechaData) => {
    const res = await fetch(`${BASE_URL}/api/Cosecha`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(cosechaData),
    });
    return handleResponse(res);
  },
  update: async (id, cosechaData) => {
    const res = await fetch(`${BASE_URL}/api/Cosecha/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(cosechaData),
    });
    return handleResponse(res);
  },
  getCatalogo: async () => {
    const res = await fetch(`${BASE_URL}/api/Cosecha/Catalogo`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },
  // 4. Eliminar una cosecha si fuera necesario
  delete: async (id) => {
    const res = await fetch(`${BASE_URL}/api/Cosecha/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    return handleResponse(res);
  },
};
