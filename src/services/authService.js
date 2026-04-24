import { BASE_URL, getHeaders, handleResponse } from "./config";

export const authService = {
  // Función para registrar usuarios nuevos
  registrar: async (userData) => {
    const res = await fetch(`${BASE_URL}/api/Auth/Registrar`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        idRol: userData.idRol || 2,
        nombre: userData.nombre,
        correo: userData.correo,
        telefono: userData.telefono,
        password: userData.password,
      }),
    });

    return handleResponse(res);
  },

  // Login — devuelve el token JWT como texto plano
  login: async (credentials) => {
    const res = await fetch(`${BASE_URL}/api/Auth/Login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        correo: credentials.correo,
        password: credentials.password,
      }),
    });

    if (!res.ok) {
      throw new Error("Correo o contraseña incorrectos");
    }

    // El backend devuelve el token como texto plano, no como JSON
    const data = await res.json();
    return data.token || data;
  },
};
