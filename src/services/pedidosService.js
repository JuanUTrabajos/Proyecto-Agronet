// services/pedidosService.js
import { BASE_URL, getHeaders, handleResponse } from "./config";

export const pedidosService = {
  // ── COMPRADOR ──────────────────────────────────────────────────

  create: async (pedidoData) => {
    const res = await fetch(`${BASE_URL}/api/Pedido`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(pedidoData),
    });
    return handleResponse(res);
  },

  getMisPedidos: async () => {
    const res = await fetch(`${BASE_URL}/api/Pedido/Cliente`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  cancelarPedido: async (pedidoId) => {
    const res = await fetch(`${BASE_URL}/api/Pedido/Cancelar/${pedidoId}`, {
      method: "POST",
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // ── AGRICULTOR ─────────────────────────────────────────────────

  // 🆕 Ver pedidos recibidos por el agricultor logueado
  getPedidosAgricultor: async () => {
    const res = await fetch(`${BASE_URL}/api/Pedido/Agricultor`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // 🆕 Aprobar o rechazar un pedido
  // nuevoEstado: "Aprobado" | "Rechazado"
  cambiarEstado: async (pedidoId, nuevoEstado) => {
    const res = await fetch(`${BASE_URL}/api/Pedido/${pedidoId}/estado`, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(nuevoEstado), // ← sin el objeto, solo el string
    });
    return handleResponse(res);
  },
  // ── TRAZABILIDAD ───────────────────────────────────────────────
  getTrazabilidadAgricultor: async () => {
    const res = await fetch(`${BASE_URL}/api/Trazabilidad/Agricultor`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  crearTrazabilidad: async (datos) => {
    const res = await fetch(`${BASE_URL}/api/Trazabilidad`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(datos),
    });
    return handleResponse(res);
  },

  getTrazabilidadCliente: async () => {
    const res = await fetch(`${BASE_URL}/api/Trazabilidad/Cliente`, {
      headers: getHeaders(),
    });
    return handleResponse(res);
  },
};
