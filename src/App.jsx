import { useState } from "react";

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

// --- 🚀 COMPONENTE PRINCIPAL ---

function App() {
  const [logeado, setLogeado] = useState(false);

  const [esRegistro, setEsRegistro] = useState(false);

  const [seccion, setSeccion] = useState("dashboard");

  const [mostrarLogin, setMostrarLogin] = useState(false);

  // --- 🧠 ESTADOS CRUD ---

  const [fincas, setFincas] = useState([
    {
      id: 1,
      nombre: "La Esperanza",
      municipio: "Ibagué",
      direccion: "Vereda El Salado",
      latitud: "4.43",
      longitud: "-75.21",
      usuario: "Admin",
    },
  ]);

  const [cosechas, setCosechas] = useState([
    {
      id: 1,
      finca: "La Esperanza",
      producto: "Café",
      cantidad: 500,
      precio: 15000,
      fecha: "2024-05-20",
      estado: "Disponible",
    },
  ]);

  const [pedidos, setPedidos] = useState([
    {
      id: 101,
      comprador: "Juan Perez",
      producto: "Café",
      cantidad: 10,
      estado: "Pendiente",
      fecha: "2024-04-15",
      total: 150000,
    },
  ]);

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

  // Búsqueda y Filtros — separados por nombre e ID (métodos distintos en backend)

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

  const guardarFinca = () => {
    if (!formFinca.nombre || !formFinca.municipio)
      return alert("Completa los campos");

    if (formFinca.id) {
      setFincas(
        fincas.map((f) => (f.id === formFinca.id ? { ...formFinca } : f)),
      );
    } else {
      setFincas([
        ...fincas,
        { ...formFinca, id: Date.now(), usuario: "Admin" },
      ]);
    }

    setFormFinca({
      id: null,
      nombre: "",
      municipio: "",
      direccion: "",
      latitud: "",
      longitud: "",
    });
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

            <form
              onSubmit={(e) => {
                e.preventDefault();

                setLogeado(true);
              }}
            >
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

                  <select
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

              <input
                type="email"
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
            Muestra resumen general: ventas totales, cosechas activas,
            fincas registradas y tabla de actividad reciente.
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
              <div style={glassCardStyle}>
                <p style={{ color: "#ccc", fontSize: "0.85rem", margin: 0 }}>
                  Ventas Totales
                </p>

                <h2 style={{ fontSize: "1.8rem", margin: "10px 0" }}>
                  $4.200.000
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

                    <th style={{ padding: "12px" }}>Ubicación</th>

                    <th style={{ padding: "12px" }}>Estado</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <td style={{ padding: "15px" }}>Café Excelso</td>

                    <td style={{ padding: "15px" }}>Finca La Nube</td>

                    <td style={{ padding: "15px" }}>
                      <span
                        style={{
                          color: "#4ade80",

                          background: "rgba(74, 222, 128, 0.2)",

                          padding: "5px 10px",

                          borderRadius: "8px",
                        }}
                      >
                        En proceso
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ============================================================
            SECCIÓN: MIS FINCAS
            Formulario para crear/editar fincas (nombre, municipio,
            dirección, latitud, longitud) + listado con búsqueda,
            edición y eliminación.
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
            Formulario para registrar/editar cosechas (finca, producto,
            cantidad, precio, fecha, estado) + tabla con búsqueda,
            edición y eliminación.
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
            Tabla de pedidos recibidos con filtros por estado
            (Todos, Pendiente, Aprobado, Rechazado) y botones
            de aprobar / rechazar cada pedido.
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
