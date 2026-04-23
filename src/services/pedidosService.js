import { BASE_URL, getHeaders, handleResponse } from "./config";

export const pedidosService = {
  // Crear un pedido (Ruta real según Swagger: /api/Pedido)
  create: async (pedidoData) => {
    const res = await fetch(`${BASE_URL}/api/Pedido`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(pedidoData),
    });
    return handleResponse(res);
  },

  // Obtener historial de pedidos (Ruta real según Swagger: /api/Pedido/Cliente)
  getMisPedidos: async () => {
    const res = await fetch(`${BASE_URL}/api/Pedido/Cliente`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // Extra: Cancelar pedido (Ruta real según Swagger: /api/Pedido/Cancelar/{pedidoId})
  cancelarPedido: async (pedidoId) => {
    const res = await fetch(`${BASE_URL}/api/Pedido/Cancelar/${pedidoId}`, {
      method: "POST",
      headers: getHeaders(),
    });
    return handleResponse(res);
  },
};
