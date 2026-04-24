import { BASE_URL, getHeaders } from "./config";

export const fincasService = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/api/Finca`, {
      headers: getHeaders(),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }
    return res.json();
  },

  create: async (fincaData) => {
    const res = await fetch(`${BASE_URL}/api/Finca`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(fincaData),
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error del servidor:", errorText);
      throw new Error(`Error ${res.status}: ${errorText}`);
    }
    return res.json();
  },

  update: async (fincaId, fincaData) => {
    const res = await fetch(`${BASE_URL}/api/Finca/${fincaId}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify({
        nombreFinca: fincaData.nombre,
        municipio: fincaData.municipio,
        direccion: fincaData.direccion,
        latitud: parseFloat(fincaData.latitud) || 0,
        longitud: parseFloat(fincaData.longitud) || 0,
      }),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }
    return res.json();
  },

  delete: async (fincaId) => {
    const res = await fetch(`${BASE_URL}/api/Finca/${fincaId}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }
    return true;
  },
};
