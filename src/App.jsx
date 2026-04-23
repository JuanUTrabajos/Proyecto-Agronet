import { useState, useEffect } from "react";
import { useAgronet } from "./context/AgronetContext";
import { fincasService } from "./services/fincasService";

import fondoImagen from "./assets/fondo.jpg";

// --- 🎨 CONFIGURACIÓN DE ESTILO (SaaS Moderno del Código B) ---

const theme = {
  primary: "#ccff00",
  secondary: "#4ade80",
  dark: "#000800",
  glass: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  textMain: "#ffffff",
  textMuted: "#a1a1aa",
};

// --- 🏗️ COMPONENTE LANDING PAGE (DISEÑO CÓDIGO B + LÓGICA CÓDIGO A) ---

function LandingPage({ alIniciarSesion }) {
  return (
    <div
      style={{
        backgroundColor: theme.dark,
        color: theme.textMain,
        fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 8%",
          position: "fixed",
          width: "100%",
          top: 0,
          backgroundColor: "rgba(0, 8, 0, 0.8)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
          borderBottom: theme.border,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: theme.primary,
          }}
        >
          🚜 Agronet
        </div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <a
            href="#beneficios"
            style={{
              color: theme.textMain,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Beneficios
          </a>
          <a
            href="#proceso"
            style={{
              color: theme.textMain,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Cómo funciona
          </a>
          <button
            onClick={alIniciarSesion}
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              padding: "8px 20px",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
          background: `radial-gradient(circle at top, #0a2e0a 0%, ${theme.dark} 70%)`,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "850",
            lineHeight: "1.1",
            marginBottom: "20px",
          }}
        >
          El campo se mueve rápido. <br />
          <span style={{ color: theme.secondary }}>
            Agronet se mueve más rápido.
          </span>
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: theme.textMuted,
            maxWidth: "700px",
            margin: "0 auto 40px auto",
          }}
        >
          Escala tu negocio agrícola con la plataforma de gestión líder en
          trazabilidad, rendimiento y conexión directa con el mercado.
        </p>
        <button
          onClick={alIniciarSesion}
          style={{
            backgroundColor: theme.primary,
            color: "#000",
            padding: "18px 40px",
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Comenzar ahora
        </button>
      </section>

      {/* Beneficios */}
      <section
        id="beneficios"
        style={{ padding: "100px 8%", backgroundColor: theme.dark }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "60px",
          }}
        >
          Diseñado para el agricultor moderno
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: "🌱",
              t: "Trazabilidad Total",
              d: "Historial riguroso de cada lote para una producción de alta calidad.",
            },
            {
              icon: "📈",
              t: "Gestión Eficiente",
              d: "Toma las riendas de tu producción desde la siembra hasta la recolección.",
            },
            {
              icon: "🤝",
              t: "Venta Directa",
              d: "Elimina intermediarios y conecta con compradores finales para mayor utilidad.",
            },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                padding: "40px",
                borderRadius: "24px",
                background: theme.glass,
                border: theme.border,
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                {b.icon}
              </div>
              <h3 style={{ color: theme.secondary, marginBottom: "15px" }}>
                {b.t}
              </h3>
              <p style={{ color: theme.textMuted, lineHeight: "1.6" }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo Funciona */}
      <section
        id="proceso"
        style={{ padding: "100px 8%", backgroundColor: "#000c00" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "60px",
          }}
        >
          Tu camino al éxito digital
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {[
            {
              n: "01",
              t: "Registra tu Finca",
              d: "Geolocaliza tus predios y define tus áreas de cultivo.",
            },
            {
              n: "02",
              t: "Gestiona Cosechas",
              d: "Monitorea el ciclo de vida y proyecta tus rendimientos.",
            },
            {
              n: "03",
              t: "Publica y Vende",
              d: "Pon tu producto a la vista de miles de compradores.",
            },
          ].map((p, i) => (
            <div key={i} style={{ flex: "1 1 250px" }}>
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "800",
                  color: "rgba(204, 255, 0, 0.1)",
                  display: "block",
                }}
              >
                {p.n}
              </span>
              <h3 style={{ marginTop: "-20px", marginBottom: "10px" }}>
                {p.t}
              </h3>
              <p style={{ color: theme.textMuted }}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section
        style={{
          padding: "100px 8%",
          textAlign: "center",
          background: `linear-gradient(to bottom, ${theme.dark}, #0a2e0a)`,
        }}
      >
        <div
          style={{
            padding: "80px 40px",
            borderRadius: "40px",
            backgroundColor: theme.primary,
            color: "#000",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            ¿Listo para transformar tu tierra?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              fontWeight: "500",
            }}
          >
            Únete a los cientos de agricultores que ya están escalando con
            Agronet.
          </p>
          <button
            onClick={alIniciarSesion}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "20px 50px",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Empezar hoy
          </button>
        </div>
      </section>

      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          color: theme.textMuted,
          borderTop: theme.border,
        }}
      >
        <p>© 2026 Agronet. Innovación para el campo colombiano.</p>
      </footer>
    </div>
  );
}

// ================================================================
// 🧩 MÓDULO COMPRADOR — NUEVO COMPONENTE (no modifica código base)
// Contiene: Catálogo, Mis Pedidos y Trazabilidad
// ================================================================

function DashboardComprador({
  cosechasDisponibles,
  alCerrarSesion,
  containerStyle,
  inputStyle,
  buttonStyle,
  glassCardStyle,
}) {
  const [seccionC, setSeccionC] = useState("catalogo");

  // ✅ LIMPIO — ID arranca en 1, sin asumir pedidos previos quemados
  const [siguienteId, setSiguienteId] = useState(1);

  // ✅ LIMPIO — Sin pedido inicial quemado; se llenará desde la API
  const [misPedidos, setMisPedidos] = useState([]);

  // ✅ LIMPIO — Sin registro inicial quemado; se llenará desde la API
  const [trazabilidad, setTrazabilidad] = useState([]);

  // --- Filtros catálogo ---
  const [filtroProducto, setFiltroProducto] = useState("");
  const [filtroMunicipio, setFiltroMunicipio] = useState("");

  // --- Pedido en proceso ---
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidadPedido, setCantidadPedido] = useState("");

  // --- Filtro mis pedidos ---
  const [filtroEstadoPedido, setFiltroEstadoPedido] = useState("Todos");

  const sidebarItemStyle = (activo) => ({
    cursor: "pointer",
    color: activo ? "#ccff00" : "#ccc",
    padding: "8px 0",
  });

  const badgeEstado = (estado) => {
    const colores = {
      Pendiente: { bg: "rgba(255, 200, 0, 0.15)", text: "#ffc800" },
      Aprobado: { bg: "rgba(74, 222, 128, 0.15)", text: "#4ade80" },
      Rechazado: { bg: "rgba(255, 95, 95, 0.15)", text: "#ff5f5f" },
      Cancelado: { bg: "rgba(160, 160, 160, 0.15)", text: "#a0a0a0" },
    };
    const c = colores[estado] || { bg: "rgba(255,255,255,0.1)", text: "#fff" };
    return (
      <span
        style={{
          backgroundColor: c.bg,
          color: c.text,
          padding: "4px 12px",
          borderRadius: "8px",
          fontSize: "0.8rem",
          fontWeight: "600",
        }}
      >
        {estado}
      </span>
    );
  };

  // --- Acción: hacer pedido ---
  const hacerPedido = () => {
    if (!cantidadPedido || Number(cantidadPedido) <= 0)
      return alert("Ingresa una cantidad válida.");
    const nuevoPedido = {
      id: siguienteId,
      productoNombre: productoSeleccionado.producto,
      finca: productoSeleccionado.finca,
      cantidad: Number(cantidadPedido),
      precio: productoSeleccionado.precio,
      estado: "Pendiente",
      fecha: new Date().toISOString().split("T")[0],
    };
    setMisPedidos([...misPedidos, nuevoPedido]);
    setTrazabilidad([
      ...trazabilidad,
      {
        id: siguienteId + 1,
        pedidoId: nuevoPedido.id,
        finca: nuevoPedido.finca,
        producto: nuevoPedido.productoNombre,
        estadoAnterior: "—",
        estadoNuevo: "Pendiente",
        fecha: nuevoPedido.fecha,
        observacion: "Pedido creado por el comprador.",
      },
    ]);
    setSiguienteId(siguienteId + 2);
    setProductoSeleccionado(null);
    setCantidadPedido("");
    setSeccionC("misPedidos");
  };

  // --- Acción: cancelar pedido ---
  const cancelarPedido = (id) => {
    const pedido = misPedidos.find((p) => p.id === id);
    if (!pedido) return;
    const estadoAnterior = pedido.estado;
    setMisPedidos(
      misPedidos.map((p) => (p.id === id ? { ...p, estado: "Cancelado" } : p)),
    );
    setTrazabilidad([
      ...trazabilidad,
      {
        id: siguienteId,
        pedidoId: id,
        finca: pedido.finca,
        producto: pedido.productoNombre,
        estadoAnterior,
        estadoNuevo: "Cancelado",
        fecha: new Date().toISOString().split("T")[0],
        observacion: "Cancelado por el comprador.",
      },
    ]);
    setSiguienteId(siguienteId + 1);
  };

  const catalogoFiltrado = cosechasDisponibles
    .filter((c) => c.estado === "Disponible")
    .filter((c) =>
      c.producto.toLowerCase().includes(filtroProducto.toLowerCase()),
    )
    .filter((c) =>
      (c.municipio || "").toLowerCase().includes(filtroMunicipio.toLowerCase()),
    );

  return (
    <div style={containerStyle}>
      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.75) !important; opacity: 1 !important; }
        select option { color: #333; background: #fff; }
      `}</style>

      {/* ── Sidebar Comprador ── */}
      <div
        style={{
          width: "240px",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(20px)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderRight: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2
          style={{ color: "#ccff00", margin: "0 0 8px 0", fontSize: "1.3rem" }}
        >
          🚜 Agronet
        </h2>
        <p
          style={{
            color: "#a1a1aa",
            fontSize: "0.75rem",
            margin: "0 0 24px 0",
          }}
        >
          Panel Comprador
        </p>
        <nav style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={sidebarItemStyle(seccionC === "catalogo")}
            onClick={() => setSeccionC("catalogo")}
          >
            🛒 Catálogo
          </div>
          <div
            style={sidebarItemStyle(seccionC === "misPedidos")}
            onClick={() => setSeccionC("misPedidos")}
          >
            📋 Mis Pedidos
          </div>
          <div
            style={sidebarItemStyle(seccionC === "trazabilidad")}
            onClick={() => setSeccionC("trazabilidad")}
          >
            🔍 Trazabilidad
          </div>
        </nav>
        <div
          style={{
            marginTop: "auto",
            cursor: "pointer",
            color: "#ff5f5f",
            fontWeight: "bold",
          }}
          onClick={alCerrarSesion}
        >
          🚪 Cerrar Sesión
        </div>
      </div>

      {/* ── Contenido Principal ── */}
      <div
        style={{ flex: 1, padding: "40px", overflowY: "auto", color: "#fff" }}
      >
        {/* ============================================================
            SECCIÓN COMPRADOR: CATÁLOGO DE PRODUCTOS
        ============================================================ */}
        {seccionC === "catalogo" && (
          <div>
            <header style={{ marginBottom: "32px" }}>
              <h1 style={{ marginBottom: "6px" }}>🛒 Catálogo de Productos</h1>
              <p style={{ color: "#a1a1aa" }}>
                Explora las cosechas disponibles y realiza tu pedido.
              </p>
            </header>
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "28px",
                flexWrap: "wrap",
              }}
            >
              <input
                placeholder="🔍 Filtrar por producto"
                style={{ ...inputStyle, maxWidth: "240px", marginBottom: 0 }}
                value={filtroProducto}
                onChange={(e) => setFiltroProducto(e.target.value)}
              />
              <input
                placeholder="📍 Filtrar por municipio"
                style={{ ...inputStyle, maxWidth: "240px", marginBottom: 0 }}
                value={filtroMunicipio}
                onChange={(e) => setFiltroMunicipio(e.target.value)}
              />
            </div>

            {/* Modal hacer pedido */}
            {productoSeleccionado && (
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 999,
                }}
              >
                <div
                  style={{
                    ...glassCardStyle,
                    width: "100%",
                    maxWidth: "380px",
                    padding: "36px",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <h3 style={{ color: "#ccff00", marginBottom: "6px" }}>
                    📦 Hacer Pedido
                  </h3>
                  <p
                    style={{
                      color: "#a1a1aa",
                      fontSize: "0.9rem",
                      marginBottom: "20px",
                    }}
                  >
                    {productoSeleccionado.producto} —{" "}
                    {productoSeleccionado.finca}
                  </p>
                  <p
                    style={{
                      color: "#ccc",
                      fontSize: "0.85rem",
                      marginBottom: "16px",
                    }}
                  >
                    Precio unitario:{" "}
                    <strong style={{ color: "#4ade80" }}>
                      ${productoSeleccionado.precio?.toLocaleString()}
                    </strong>
                  </p>
                  <input
                    type="number"
                    placeholder="Cantidad (Kg/L)"
                    style={inputStyle}
                    value={cantidadPedido}
                    onChange={(e) => setCantidadPedido(e.target.value)}
                    min="1"
                  />
                  {Number(cantidadPedido) > 0 && (
                    <p
                      style={{
                        color: "#4ade80",
                        fontSize: "0.85rem",
                        marginBottom: "12px",
                      }}
                    >
                      Total estimado:{" "}
                      <strong>
                        $
                        {(
                          Number(cantidadPedido) * productoSeleccionado.precio
                        ).toLocaleString()}
                      </strong>
                    </p>
                  )}
                  <button style={buttonStyle} onClick={hacerPedido}>
                    Confirmar Pedido
                  </button>
                  <button
                    style={{
                      ...buttonStyle,
                      backgroundColor: "#444",
                      marginTop: "6px",
                    }}
                    onClick={() => {
                      setProductoSeleccionado(null);
                      setCantidadPedido("");
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            {catalogoFiltrado.length === 0 ? (
              <div
                style={{
                  ...glassCardStyle,
                  textAlign: "center",
                  color: "#a1a1aa",
                  padding: "60px",
                }}
              >
                No hay productos disponibles con ese filtro.
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "20px",
                }}
              >
                {catalogoFiltrado.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      ...glassCardStyle,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ fontSize: "2rem" }}>
                      {c.producto === "Café"
                        ? "☕"
                        : c.producto === "Cacao"
                          ? "🍫"
                          : c.producto === "Aguacate"
                            ? "🥑"
                            : "🌾"}
                    </div>
                    <h3 style={{ margin: 0, color: "#ccff00" }}>
                      {c.producto}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "#a1a1aa",
                        fontSize: "0.85rem",
                      }}
                    >
                      🏡 {c.finca}
                    </p>
                    {c.municipio && (
                      <p
                        style={{
                          margin: 0,
                          color: "#a1a1aa",
                          fontSize: "0.85rem",
                        }}
                      >
                        📍 {c.municipio}
                      </p>
                    )}
                    <p
                      style={{ margin: 0, color: "#ccc", fontSize: "0.85rem" }}
                    >
                      Disponible:{" "}
                      <strong style={{ color: "#4ade80" }}>
                        {c.cantidad} Kg/L
                      </strong>
                    </p>
                    <p
                      style={{ margin: 0, color: "#ccc", fontSize: "0.85rem" }}
                    >
                      Precio:{" "}
                      <strong style={{ color: "#4ade80" }}>
                        ${c.precio?.toLocaleString()} / unidad
                      </strong>
                    </p>
                    <button
                      style={{
                        ...buttonStyle,
                        marginTop: "auto",
                        marginBottom: 0,
                      }}
                      onClick={() => setProductoSeleccionado(c)}
                    >
                      Hacer pedido
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================
            SECCIÓN COMPRADOR: MIS PEDIDOS
        ============================================================ */}
        {seccionC === "misPedidos" && (
          <div>
            <header style={{ marginBottom: "32px" }}>
              <h1 style={{ marginBottom: "6px" }}>📋 Mis Pedidos</h1>
              <p style={{ color: "#a1a1aa" }}>
                Consulta y gestiona todos tus pedidos realizados.
              </p>
            </header>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "24px",
                flexWrap: "wrap",
              }}
            >
              {["Todos", "Pendiente", "Aprobado", "Rechazado", "Cancelado"].map(
                (e) => (
                  <button
                    key={e}
                    onClick={() => setFiltroEstadoPedido(e)}
                    style={{
                      ...buttonStyle,
                      width: "auto",
                      padding: "7px 18px",
                      marginBottom: 0,
                      backgroundColor:
                        filtroEstadoPedido === e
                          ? "#4ade80"
                          : "rgba(255,255,255,0.08)",
                      color: filtroEstadoPedido === e ? "#000" : "#ccc",
                    }}
                  >
                    {e}
                  </button>
                ),
              )}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "18px",
              }}
            >
              {misPedidos
                .filter(
                  (p) =>
                    filtroEstadoPedido === "Todos" ||
                    p.estado === filtroEstadoPedido,
                )
                .map((p) => (
                  <div
                    key={p.id}
                    style={{
                      ...glassCardStyle,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <h4 style={{ margin: 0, color: "#ccff00" }}>
                          {p.productoNombre}
                        </h4>
                        <p
                          style={{
                            margin: "4px 0 0",
                            color: "#a1a1aa",
                            fontSize: "0.82rem",
                          }}
                        >
                          🏡 {p.finca}
                        </p>
                      </div>
                      {badgeEstado(p.estado)}
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "10px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6px",
                        fontSize: "0.83rem",
                        color: "#ccc",
                      }}
                    >
                      <span>
                        📦 Cantidad: <strong>{p.cantidad}</strong>
                      </span>
                      <span>
                        💰 Precio:{" "}
                        <strong>${p.precio?.toLocaleString()}</strong>
                      </span>
                      <span>
                        🧾 Total:{" "}
                        <strong style={{ color: "#4ade80" }}>
                          ${(p.cantidad * p.precio).toLocaleString()}
                        </strong>
                      </span>
                      <span>
                        📅 Fecha: <strong>{p.fecha}</strong>
                      </span>
                      <span style={{ gridColumn: "1/-1" }}>
                        🔖 ID:{" "}
                        <strong style={{ color: "#a1a1aa" }}>{p.id}</strong>
                      </span>
                    </div>
                    {p.estado === "Pendiente" && (
                      <button
                        style={{
                          ...buttonStyle,
                          backgroundColor: "#7f1d1d",
                          marginBottom: 0,
                          marginTop: "4px",
                        }}
                        onClick={() => cancelarPedido(p.id)}
                      >
                        Cancelar pedido
                      </button>
                    )}
                  </div>
                ))}
              {misPedidos.filter(
                (p) =>
                  filtroEstadoPedido === "Todos" ||
                  p.estado === filtroEstadoPedido,
              ).length === 0 && (
                <div
                  style={{
                    ...glassCardStyle,
                    textAlign: "center",
                    color: "#a1a1aa",
                    padding: "50px",
                    gridColumn: "1/-1",
                  }}
                >
                  No tienes pedidos con ese estado.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ============================================================
            SECCIÓN COMPRADOR: TRAZABILIDAD
        ============================================================ */}
        {seccionC === "trazabilidad" && (
          <div>
            <header style={{ marginBottom: "32px" }}>
              <h1 style={{ marginBottom: "6px" }}>
                🔍 Trazabilidad de Pedidos
              </h1>
              <p style={{ color: "#a1a1aa" }}>
                Historial completo de cambios de estado de todos tus pedidos.
              </p>
            </header>
            <div style={{ display: "grid", gap: "14px" }}>
              {trazabilidad.length === 0 ? (
                <div
                  style={{
                    ...glassCardStyle,
                    textAlign: "center",
                    color: "#a1a1aa",
                    padding: "50px",
                  }}
                >
                  No hay registros de trazabilidad aún.
                </div>
              ) : (
                [...trazabilidad].reverse().map((t) => (
                  <div
                    key={t.id}
                    style={{
                      ...glassCardStyle,
                      borderLeft: "3px solid #ccff00",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "12px",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "#ccff00",
                            fontWeight: "700",
                            fontSize: "0.85rem",
                          }}
                        >
                          ID Pedido: {t.pedidoId}
                        </span>
                        <span style={{ color: "#a1a1aa", fontSize: "0.8rem" }}>
                          📅 {t.fecha}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "0.83rem",
                        }}
                      >
                        <span
                          style={{
                            color: "#a0a0a0",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            padding: "3px 10px",
                            borderRadius: "6px",
                          }}
                        >
                          {t.estadoAnterior}
                        </span>
                        <span style={{ color: "#a1a1aa" }}>→</span>
                        {badgeEstado(t.estadoNuevo)}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(160px, 1fr))",
                        gap: "8px",
                        fontSize: "0.83rem",
                        color: "#ccc",
                        marginBottom: "10px",
                      }}
                    >
                      <span>
                        🏡 Finca:{" "}
                        <strong style={{ color: "#fff" }}>{t.finca}</strong>
                      </span>
                      <span>
                        🌾 Producto:{" "}
                        <strong style={{ color: "#fff" }}>{t.producto}</strong>
                      </span>
                    </div>
                    {t.observacion && (
                      <div
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          fontSize: "0.82rem",
                          color: "#a1a1aa",
                          borderLeft: "2px solid rgba(204,255,0,0.3)",
                        }}
                      >
                        💬 <em>{t.observacion}</em>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ================================================================
// FIN MÓDULO COMPRADOR
// ================================================================

// --- 🚀 COMPONENTE PRINCIPAL ---

function App() {
  // ✅ CAMBIO 1 — Conectado al contexto: fincas, cosechas, loading y cargarDatosInciales
  //    vienen del AgronetContext en lugar de useState local
  const { fincas, setFincas, cosechas, setCosechas, cargarDatosInciales } =
    useAgronet();

  const [logeado, setLogeado] = useState(false);
  const [esRegistro, setEsRegistro] = useState(false);
  const [seccion, setSeccion] = useState("dashboard");
  const [mostrarLogin, setMostrarLogin] = useState(false);

  // --- 🧩 MÓDULO COMPRADOR: rol del usuario activo ---
  const [rolUsuario, setRolUsuario] = useState("");

  // --- 🧩 MÓDULO COMPRADOR: mapa de correos registrados { correo -> rol }
  //     Incluye dos correos de demo para pruebas rápidas.
  const [usuariosRegistrados, setUsuariosRegistrados] = useState({
    "agricultor@demo.com": "1",
    "comprador@demo.com": "2",
  });

  // ✅ CAMBIO 3 — Carga inicial: llama a cargarDatosInciales() al montar el componente
  useEffect(() => {
    cargarDatosInciales();
  }, [cargarDatosInciales]);

  // --- 🧠 ESTADOS CRUD ---

  // ✅ LIMPIO — Sin pedido quemado; se llenará desde la API
  const [pedidos] = useState([]);

  // Estados de Formularios
  const [formFinca, setFormFinca] = useState({
    id: null,
    nombre: "",
    municipio: "",
    direccion: "",
    latitud: "",
    longitud: "",
  });
  const [formCosecha, setFormCosecha] = useState({
    id: null,
    finca: "",
    producto: "",
    cantidad: "",
    precio: "",
    fecha: "",
    estado: "Disponible",
  });

  // Búsqueda y Filtros
  const [busquedaFincaNombre, setBusquedaFincaNombre] = useState("");
  const [busquedaFincaId, setBusquedaFincaId] = useState("");
  const [busquedaCosechaNombre, setBusquedaCosechaNombre] = useState("");
  const [busquedaCosechaId, setBusquedaCosechaId] = useState("");
  const [filtroPedido, setFiltroPedido] = useState("Todos");

  // --- 🎨 ESTILOS ---
  const containerStyle = {
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: "#1b5e20",
    backgroundImage: logeado
      ? `linear-gradient(rgba(0, 40, 0, 0.7), rgba(0, 20, 0, 0.6)), url(${fondoImagen})`
      : `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${fondoImagen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    justifyContent: logeado ? "flex-start" : "center",
    alignItems: logeado ? "stretch" : "center",
    margin: 0,
    transition: "all 0.5s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxSizing: "border-box",
    fontSize: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#ffffff",
    outline: "none",
    caretColor: "#ffffff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "5px",
  };

  const glassCardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
  };

  // --- 🛠️ LÓGICA CRUD ---

  // ✅ CAMBIO 2 — guardarFinca es ahora async y llama a fincasService.create()
  //    antes de actualizar el estado local cuando es una finca nueva
  const guardarFinca = async () => {
    if (!formFinca.nombre || !formFinca.municipio)
      return alert("Completa los campos");

    try {
      // Creamos el objeto con las MAYÚSCULAS que pide tu DB
      const fincaParaEnviar = {
        Nombre: formFinca.nombre,
        Municipio: formFinca.municipio,
        Direccion: formFinca.direccion,
        Latitud: parseFloat(formFinca.latitud) || 0,
        Longitud: parseFloat(formFinca.longitud) || 0,
        // No envíes FincaId ni IdUsuario, el Backend los pone solo.
      };

      if (formFinca.id) {
        // Lógica de actualizar (si ya la tienes)
      } else {
        // Enviamos a la API de Render
        const creada = await fincasService.create(fincaParaEnviar);
        setFincas([...fincas, creada]);
        alert("¡Finca registrada exitosamente!");
      }

      // Limpiamos el formulario (aquí sí usas tus variables de estado en minúscula)
      setFormFinca({
        id: null,
        nombre: "",
        municipio: "",
        direccion: "",
        latitud: "",
        longitud: "",
      });
    } catch (error) {
      console.error("Error detallado:", error);
      alert(
        "Error al conectar con Render. Revisa que el servidor no esté 'dormido'.",
      );
    }
  };
  const eliminarFinca = (id) => setFincas(fincas.filter((f) => f.id !== id));

  const guardarCosecha = () => {
    if (!formCosecha.finca || !formCosecha.producto)
      return alert("Completa los campos");
    if (formCosecha.id) {
      setCosechas(
        cosechas.map((c) => (c.id === formCosecha.id ? { ...formCosecha } : c)),
      );
    } else {
      setCosechas([...cosechas, { ...formCosecha, id: Date.now() }]);
    }
    setFormCosecha({
      id: null,
      finca: "",
      producto: "",
      cantidad: "",
      precio: "",
      fecha: "",
      estado: "Disponible",
    });
  };

  const eliminarCosecha = (id) =>
    setCosechas(cosechas.filter((c) => c.id !== id));

  // --- RENDERIZADO CONDICIONAL ---
  if (!logeado) {
    if (!mostrarLogin) {
      return <LandingPage alIniciarSesion={() => setMostrarLogin(true)} />;
    } else {
      // 🧩 MÓDULO COMPRADOR: manejador del formulario de auth
      // — Registro: guarda correo+rol en el mapa de usuarios
      // — Login: busca el correo en el mapa y asigna su rol
      const handleSubmit = (e) => {
        e.preventDefault();
        const correo = e.target.correo.value.trim().toLowerCase();

        if (esRegistro) {
          const rolSeleccionado = e.target.rol.value || "1";
          setUsuariosRegistrados((prev) => ({
            ...prev,
            [correo]: rolSeleccionado,
          }));
          setRolUsuario(rolSeleccionado);
        } else {
          const rolEncontrado = usuariosRegistrados[correo] || "1";
          setRolUsuario(rolEncontrado);
        }
        setLogeado(true);
      };

      return (
        <div style={containerStyle}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.35)",
              padding: "40px",
              borderRadius: "30px",
              width: "90%",
              maxWidth: "380px",
              textAlign: "center",
              backdropFilter: "blur(12px)",
            }}
          >
            <h1
              style={{
                color: "#0a3d0a",
                marginBottom: "5px",
                fontSize: "2.3rem",
              }}
            >
              🚜 Agronet
            </h1>
            <p
              style={{
                color: "#0a3d0a",
                marginBottom: "30px",
                fontWeight: "600",
              }}
            >
              {esRegistro ? "Crea tu cuenta agrícola" : "¡Bienvenido de nuevo!"}
            </p>

            <form onSubmit={handleSubmit}>
              {esRegistro && (
                <>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    style={{
                      ...inputStyle,
                      color: "#333",
                      backgroundColor: "white",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    style={{
                      ...inputStyle,
                      color: "#333",
                      backgroundColor: "white",
                    }}
                  />
                  {/* 🧩 MÓDULO COMPRADOR: select de rol, solo visible en registro, name="rol" */}
                  <select
                    name="rol"
                    style={{
                      ...inputStyle,
                      color: "#333",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <option value="">¿Tu rol en el campo?</option>
                    <option value="1">Agricultor</option>
                    <option value="2">Comprador</option>
                  </select>
                </>
              )}
              {/* name="correo" para leerlo en handleSubmit */}
              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                style={{
                  ...inputStyle,
                  color: "#333",
                  backgroundColor: "white",
                }}
                required
              />
              <input
                type="password"
                placeholder="Contraseña segura"
                style={{
                  ...inputStyle,
                  color: "#333",
                  backgroundColor: "white",
                }}
                required
              />
              <button type="submit" style={buttonStyle}>
                {esRegistro ? "Crear Cuenta" : "Inicia Sesión"}
              </button>
            </form>

            <button
              onClick={() => setEsRegistro(!esRegistro)}
              style={{
                width: "100%",
                marginTop: "25px",
                backgroundColor: "transparent",
                border: "none",
                color: "#0a3d0a",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              {esRegistro
                ? "¿Ya tienes cuenta? Inicia sesión"
                : "¿Aún no tienes cuenta? Regístrate aquí"}
            </button>
            <p
              style={{
                marginTop: "15px",
                color: "#0a3d0a",
                fontSize: "0.8rem",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setMostrarLogin(false)}
            >
              ← Volver al inicio
            </p>
          </div>
        </div>
      );
    }
  }

  // --- 🧩 MÓDULO COMPRADOR: enrutamiento por rol ---
  if (logeado && rolUsuario === "2") {
    return (
      <DashboardComprador
        cosechasDisponibles={cosechas}
        alCerrarSesion={() => {
          setLogeado(false);
          setRolUsuario("");
        }}
        containerStyle={containerStyle}
        inputStyle={inputStyle}
        buttonStyle={buttonStyle}
        glassCardStyle={glassCardStyle}
      />
    );
  }

  // --- DASHBOARD: Estructura principal con Sidebar + Contenido principal ---
  return (
    <div style={containerStyle}>
      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.75) !important; opacity: 1 !important; }
        select option { color: #333; background: #fff; }
      `}</style>

      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(20px)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          borderRight: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ color: "#4ade80", margin: "0 0 30px 0" }}>Agronet</h2>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            color: "#ccc",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              color: seccion === "dashboard" ? "#4ade80" : "#ccc",
            }}
            onClick={() => setSeccion("dashboard")}
          >
            📊 Dashboard
          </div>
          <div
            style={{
              cursor: "pointer",
              color: seccion === "fincas" ? "#4ade80" : "#ccc",
            }}
            onClick={() => setSeccion("fincas")}
          >
            🏡 Mis Fincas
          </div>
          <div
            style={{
              cursor: "pointer",
              color: seccion === "cosechas" ? "#4ade80" : "#ccc",
            }}
            onClick={() => setSeccion("cosechas")}
          >
            🌱 Cosechas
          </div>
          <div
            style={{
              cursor: "pointer",
              color: seccion === "pedidos" ? "#4ade80" : "#ccc",
            }}
            onClick={() => setSeccion("pedidos")}
          >
            📦 Pedidos
          </div>
        </nav>
        <div
          style={{
            marginTop: "auto",
            cursor: "pointer",
            color: "#ff5f5f",
            fontWeight: "bold",
          }}
          onClick={() => setLogeado(false)}
        >
          🚪 Cerrar Sesión
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{ flex: 1, padding: "40px", overflowY: "auto", color: "#fff" }}
      >
        {/* ============================================================
            SECCIÓN: DASHBOARD
        ============================================================ */}
        {seccion === "dashboard" && (
          <>
            <header style={{ marginBottom: "40px" }}>
              <h1>Panel del Vendedor</h1>
              <p style={{ color: "#4ade80" }}>
                Gestiona tus tierras y ventas en tiempo real.
              </p>
            </header>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "25px",
                marginBottom: "40px",
              }}
            >
              {/* ✅ LIMPIO — Ventas Totales calculadas desde pedidos reales */}
              <div style={glassCardStyle}>
                <p style={{ color: "#ccc", fontSize: "0.85rem", margin: 0 }}>
                  Ventas Totales
                </p>
                <h2 style={{ fontSize: "1.8rem", margin: "10px 0" }}>
                  $
                  {pedidos
                    .reduce((acc, p) => acc + (p.total || 0), 0)
                    .toLocaleString()}
                </h2>
              </div>
              <div style={glassCardStyle}>
                <p style={{ color: "#ccc", fontSize: "0.85rem", margin: 0 }}>
                  Cosechas Activas
                </p>
                <h2 style={{ fontSize: "1.8rem", margin: "10px 0" }}>
                  {cosechas.length}
                </h2>
              </div>
              <div style={glassCardStyle}>
                <p style={{ color: "#ccc", fontSize: "0.85rem", margin: 0 }}>
                  Fincas Registradas
                </p>
                <h2 style={{ fontSize: "1.8rem", margin: "10px 0" }}>
                  {fincas.length}
                </h2>
              </div>
            </div>
            <div style={glassCardStyle}>
              <h3 style={{ marginBottom: "20px", color: "#4ade80" }}>
                Actividad Reciente
              </h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      color: "#ccc",
                    }}
                  >
                    <th style={{ padding: "12px" }}>Producto</th>
                    <th style={{ padding: "12px" }}>Comprador</th>
                    <th style={{ padding: "12px" }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {/* ✅ LIMPIO — Actividad reciente desde pedidos reales */}
                  {pedidos.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        style={{
                          padding: "20px 12px",
                          color: "#a1a1aa",
                          textAlign: "center",
                        }}
                      >
                        Sin actividad reciente.
                      </td>
                    </tr>
                  ) : (
                    [...pedidos]
                      .reverse()
                      .slice(0, 5)
                      .map((p) => (
                        <tr
                          key={p.id}
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <td style={{ padding: "15px" }}>{p.producto}</td>
                          <td style={{ padding: "15px" }}>{p.comprador}</td>
                          <td style={{ padding: "15px" }}>
                            <span
                              style={{
                                color: "#4ade80",
                                background: "rgba(74, 222, 128, 0.2)",
                                padding: "5px 10px",
                                borderRadius: "8px",
                              }}
                            >
                              {p.estado}
                            </span>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ============================================================
            SECCIÓN: MIS FINCAS
        ============================================================ */}
        {seccion === "fincas" && (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px", maxWidth: "400px" }}>
              <h2 style={{ marginBottom: "20px" }}>
                {formFinca.id ? "Editar Finca" : "🏡 Nueva Finca"}
              </h2>
              <div style={glassCardStyle}>
                <input
                  placeholder="Nombre de la finca"
                  style={inputStyle}
                  value={formFinca.nombre}
                  onChange={(e) =>
                    setFormFinca({ ...formFinca, nombre: e.target.value })
                  }
                />
                <input
                  placeholder="Municipio"
                  style={inputStyle}
                  value={formFinca.municipio}
                  onChange={(e) =>
                    setFormFinca({ ...formFinca, municipio: e.target.value })
                  }
                />
                <input
                  placeholder="Dirección"
                  style={inputStyle}
                  value={formFinca.direccion}
                  onChange={(e) =>
                    setFormFinca({ ...formFinca, direccion: e.target.value })
                  }
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    placeholder="Latitud"
                    style={inputStyle}
                    value={formFinca.latitud}
                    onChange={(e) =>
                      setFormFinca({ ...formFinca, latitud: e.target.value })
                    }
                  />
                  <input
                    placeholder="Longitud"
                    style={inputStyle}
                    value={formFinca.longitud}
                    onChange={(e) =>
                      setFormFinca({ ...formFinca, longitud: e.target.value })
                    }
                  />
                </div>
                <button style={buttonStyle} onClick={guardarFinca}>
                  {formFinca.id ? "Actualizar" : "Guardar Finca"}
                </button>
                {formFinca.id && (
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#555" }}
                    onClick={() =>
                      setFormFinca({
                        id: null,
                        nombre: "",
                        municipio: "",
                        direccion: "",
                        latitud: "",
                        longitud: "",
                      })
                    }
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </div>
            <div style={{ flex: "2", minWidth: "400px" }}>
              <h2 style={{ marginBottom: "20px" }}>Listado de Fincas</h2>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
              >
                <input
                  placeholder="🔍 Buscar por nombre"
                  style={{ ...inputStyle, marginBottom: "0" }}
                  onChange={(e) => setBusquedaFincaNombre(e.target.value)}
                />
                <input
                  placeholder="🔍 Buscar por ID"
                  style={{ ...inputStyle, marginBottom: "0" }}
                  onChange={(e) => setBusquedaFincaId(e.target.value)}
                />
              </div>
              <div style={{ display: "grid", gap: "15px" }}>
                {fincas
                  .filter(
                    (f) =>
                      f.nombre
                        .toLowerCase()
                        .includes(busquedaFincaNombre.toLowerCase()) &&
                      f.id.toString().includes(busquedaFincaId),
                  )
                  .map((f) => (
                    <div
                      key={f.id}
                      style={{
                        ...glassCardStyle,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <h4 style={{ margin: 0, color: theme.secondary }}>
                          {f.nombre}{" "}
                          <small style={{ color: "#aaa" }}>(ID: {f.id})</small>
                        </h4>
                        <p
                          style={{
                            margin: "5px 0",
                            fontSize: "0.85rem",
                            color: "#ccc",
                          }}
                        >
                          {f.municipio} - {f.direccion}
                        </p>
                        <small style={{ color: theme.primary }}>
                          📍 {f.latitud}, {f.longitud}
                        </small>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => setFormFinca(f)}
                          style={{
                            background: "none",
                            border: "none",
                            color: theme.secondary,
                            cursor: "pointer",
                          }}
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => eliminarFinca(f.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#ff5f5f",
                            cursor: "pointer",
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            SECCIÓN: COSECHAS
        ============================================================ */}
        {seccion === "cosechas" && (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px", maxWidth: "400px" }}>
              <h2 style={{ marginBottom: "20px" }}>
                {formCosecha.id ? "Editar Cosecha" : "🌱 Nueva Cosecha"}
              </h2>
              <div style={glassCardStyle}>
                <select
                  style={{ ...inputStyle, color: "#333", background: "white" }}
                  value={formCosecha.finca}
                  onChange={(e) =>
                    setFormCosecha({ ...formCosecha, finca: e.target.value })
                  }
                >
                  <option value="">Seleccionar finca...</option>
                  {fincas.map((f) => (
                    <option key={f.id} value={f.nombre}>
                      {f.nombre}
                    </option>
                  ))}
                </select>
                <select
                  style={{ ...inputStyle, color: "#333", background: "white" }}
                  value={formCosecha.producto}
                  onChange={(e) =>
                    setFormCosecha({ ...formCosecha, producto: e.target.value })
                  }
                >
                  <option value="">Producto...</option>
                  <option value="Café">Café</option>
                  <option value="Cacao">Cacao</option>
                  <option value="Aguacate">Aguacate</option>
                </select>
                <input
                  type="number"
                  placeholder="Cantidad (Kg/L)"
                  style={inputStyle}
                  value={formCosecha.cantidad}
                  onChange={(e) =>
                    setFormCosecha({ ...formCosecha, cantidad: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Precio por unidad"
                  style={inputStyle}
                  value={formCosecha.precio}
                  onChange={(e) =>
                    setFormCosecha({ ...formCosecha, precio: e.target.value })
                  }
                />
                <input
                  type="date"
                  style={inputStyle}
                  value={formCosecha.fecha}
                  onChange={(e) =>
                    setFormCosecha({ ...formCosecha, fecha: e.target.value })
                  }
                />
                <select
                  style={{ ...inputStyle, color: "#333", background: "white" }}
                  value={formCosecha.estado}
                  onChange={(e) =>
                    setFormCosecha({ ...formCosecha, estado: e.target.value })
                  }
                >
                  <option value="Disponible">Disponible</option>
                  <option value="En crecimiento">En crecimiento</option>
                  <option value="Vendido">Vendido</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
                <button style={buttonStyle} onClick={guardarCosecha}>
                  {formCosecha.id ? "Actualizar" : "Publicar"}
                </button>
              </div>
            </div>
            <div style={{ flex: "2", minWidth: "400px" }}>
              <h2 style={{ marginBottom: "20px" }}>Listado de Cosechas</h2>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              >
                <input
                  placeholder="🔍 Buscar por producto"
                  style={{ ...inputStyle, marginBottom: "0" }}
                  onChange={(e) => setBusquedaCosechaNombre(e.target.value)}
                />
                <input
                  placeholder="🔍 Buscar por ID"
                  style={{ ...inputStyle, marginBottom: "0" }}
                  onChange={(e) => setBusquedaCosechaId(e.target.value)}
                />
              </div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "10px",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid #444",
                      textAlign: "left",
                      fontSize: "0.85rem",
                      color: theme.secondary,
                    }}
                  >
                    <th style={{ padding: "10px" }}>ID</th>
                    <th style={{ padding: "10px" }}>Producto</th>
                    <th style={{ padding: "10px" }}>Finca</th>
                    <th style={{ padding: "10px" }}>Cant.</th>
                    <th style={{ padding: "10px" }}>Precio</th>
                    <th style={{ padding: "10px" }}>Estado</th>
                    <th style={{ padding: "10px" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cosechas
                    .filter(
                      (c) =>
                        c.producto
                          .toLowerCase()
                          .includes(busquedaCosechaNombre.toLowerCase()) &&
                        c.id.toString().includes(busquedaCosechaId),
                    )
                    .map((c) => (
                      <tr
                        key={c.id}
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          fontSize: "0.85rem",
                        }}
                      >
                        <td style={{ padding: "10px" }}>{c.id}</td>
                        <td style={{ padding: "10px" }}>{c.producto}</td>
                        <td style={{ padding: "10px" }}>{c.finca}</td>
                        <td style={{ padding: "10px" }}>{c.cantidad}</td>
                        <td style={{ padding: "10px" }}>${c.precio}</td>
                        <td style={{ padding: "10px" }}>
                          <span
                            style={{
                              color:
                                c.estado === "Disponible"
                                  ? theme.secondary
                                  : "#aaa",
                            }}
                          >
                            {c.estado}
                          </span>
                        </td>
                        <td style={{ padding: "10px" }}>
                          <button
                            onClick={() => setFormCosecha(c)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => eliminarCosecha(c.id)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#ff5f5f",
                            }}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ============================================================
            SECCIÓN: PEDIDOS
        ============================================================ */}
        {seccion === "pedidos" && (
          <div>
            <h1 style={{ marginBottom: "20px" }}>📦 Gestión de Pedidos</h1>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              {["Todos", "Pendiente", "Aprobado", "Rechazado"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltroPedido(f)}
                  style={{
                    ...buttonStyle,
                    width: "auto",
                    padding: "8px 20px",
                    backgroundColor:
                      filtroPedido === f
                        ? theme.secondary
                        : "rgba(255,255,255,0.1)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div style={glassCardStyle}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid #444",
                      color: theme.secondary,
                    }}
                  >
                    <th style={{ padding: "12px" }}>ID</th>
                    <th style={{ padding: "12px" }}>Comprador</th>
                    <th style={{ padding: "12px" }}>Producto</th>
                    <th style={{ padding: "12px" }}>Total</th>
                    <th style={{ padding: "12px" }}>Estado</th>
                    <th style={{ padding: "12px" }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos
                    .filter(
                      (p) =>
                        filtroPedido === "Todos" || p.estado === filtroPedido,
                    )
                    .map((p) => (
                      <tr
                        key={p.id}
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <td style={{ padding: "12px" }}>{p.id}</td>
                        <td style={{ padding: "12px" }}>{p.comprador}</td>
                        <td style={{ padding: "12px" }}>
                          {p.producto} (x{p.cantidad})
                        </td>
                        <td style={{ padding: "12px" }}>
                          ${p.total.toLocaleString()}
                        </td>
                        <td style={{ padding: "12px" }}>{p.estado}</td>
                        <td
                          style={{
                            padding: "12px",
                            display: "flex",
                            gap: "5px",
                          }}
                        >
                          <button
                            style={{
                              padding: "5px",
                              borderRadius: "5px",
                              border: "none",
                              cursor: "pointer",
                              backgroundColor: theme.secondary,
                            }}
                          >
                            ✅
                          </button>
                          <button
                            style={{
                              padding: "5px",
                              borderRadius: "5px",
                              border: "none",
                              cursor: "pointer",
                              backgroundColor: "#ff5f5f",
                            }}
                          >
                            ❌
                          </button>
                        </td>
                      </tr>
                    ))}
                  {/* ✅ LIMPIO — Mensaje vacío si no hay pedidos */}
                  {pedidos.filter(
                    (p) =>
                      filtroPedido === "Todos" || p.estado === filtroPedido,
                  ).length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        style={{
                          padding: "30px 12px",
                          textAlign: "center",
                          color: "#a1a1aa",
                        }}
                      >
                        No hay pedidos con ese estado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
