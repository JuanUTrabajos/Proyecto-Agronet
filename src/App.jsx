import { useState, useEffect, useRef } from "react";
import { useAgronet } from "./context/AgronetContext";
import { fincasService } from "./services/fincasService";
import { authService } from "./services/authService";
import { cosechasService } from "./services/cosechasService";
import { pedidosService } from "./services/pedidosService";

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

function FaqSection() {
  const [abierto, setAbierto] = useState(null);
  const preguntas = [
    {
      p: "¿Es gratuito registrarse en Agronet?",
      r: "Sí, el registro es completamente gratuito tanto para agricultores como para compradores. Puedes crear tu cuenta y empezar a usar la plataforma sin costo.",
    },
    {
      p: "¿Cómo garantizan la calidad de los productos?",
      r: "Cada cosecha tiene trazabilidad completa: origen, fecha, condiciones de cultivo y estado. Los compradores pueden ver el historial completo antes de hacer un pedido.",
    },
    {
      p: "¿Puedo cancelar un pedido después de hacerlo?",
      r: "Sí, los compradores pueden cancelar pedidos que estén en estado Pendiente. Una vez aprobado por el agricultor, el pedido no puede cancelarse.",
    },
    {
      p: "¿En qué departamentos de Colombia opera Agronet?",
      r: "Actualmente operamos en todo el territorio colombiano. Cualquier agricultor con finca registrada puede publicar sus cosechas y recibir pedidos de compradores en todo el país.",
    },
    {
      p: "¿Cómo me pagan como agricultor?",
      r: "El pago se coordina directamente entre el agricultor y el comprador una vez aprobado el pedido. Agronet gestiona la conexión y la trazabilidad; el proceso de pago es acordado entre las partes.",
    },
  ];
  return (
    <section
      style={{
        padding: "100px 8%",
        backgroundColor: "#000c00",
        position: "relative",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "16px",
          color: "#fff",
        }}
      >
        Preguntas frecuentes
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#a1a1aa",
          marginBottom: "60px",
          fontSize: "1.1rem",
        }}
      >
        Todo lo que necesitas saber antes de empezar.
      </p>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {preguntas.map((item, i) => (
          <div
            key={i}
            style={{
              borderRadius: "16px",
              border:
                abierto === i
                  ? "1px solid rgba(74,222,128,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              transition: "border 0.3s, box-shadow 0.3s",
              boxShadow:
                abierto === i ? "0 0 20px rgba(74,222,128,0.1)" : "none",
            }}
          >
            <button
              onClick={() => setAbierto(abierto === i ? null : i)}
              style={{
                width: "100%",
                padding: "20px 24px",
                background:
                  abierto === i
                    ? "rgba(74,222,128,0.07)"
                    : "rgba(255,255,255,0.03)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: abierto === i ? "#4ade80" : "#fff",
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "left",
                gap: "12px",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              {item.p}
              <span
                style={{
                  fontSize: "1.3rem",
                  flexShrink: 0,
                  display: "inline-block",
                  transition: "transform 0.3s",
                  transform: abierto === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            {abierto === i && (
              <div
                style={{
                  padding: "0 24px 20px 24px",
                  color: "#a1a1aa",
                  lineHeight: "1.7",
                  fontSize: "0.95rem",
                  animation: "fadeSlideIn 0.25s ease forwards",
                }}
              >
                {item.r}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ParticleCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("agronet-particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let animId;

    const particles = Array.from({ length: 72 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74,222,128,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(74,222,128,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      id="agronet-particles"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function AnimatedSection({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function LandingPage({ alIniciarSesion }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };
  const fadeInDelay1 = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
  };
  const fadeInDelay2 = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
  };

  return (
    <div
      style={{
        backgroundColor: theme.dark,
        color: theme.textMain,
        fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(204,255,0,0.3); } 50% { box-shadow: 0 0 0 14px rgba(204,255,0,0); } }
        @keyframes floatY { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes glowPulse { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
        .nav-link { color: #ccc; text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
        .nav-link:hover { color: #4ade80; }
        .benefit-card { padding:40px; border-radius:24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s, border 0.3s, box-shadow 0.3s; cursor:default; }
        .benefit-card:hover { transform: translateY(-10px); border: 1px solid rgba(74,222,128,0.4); box-shadow: 0 0 30px rgba(74,222,128,0.12); }
        .step-card { flex: 1 1 250px; border-left: 2px solid #4ade80; padding-left: 24px; transition: transform 0.3s, border-color 0.3s; }
        .step-card:hover { transform: translateX(8px); border-color: #ccff00; }
        .cta-btn { background:#000; color:#fff; padding:20px 50px; border-radius:50px; font-size:1.2rem; font-weight:bold; border:none; cursor:pointer; transition: transform 0.2s, background 0.3s; }
        .cta-btn:hover { transform: scale(1.06); background: #1a1a1a; }
      `}</style>

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 5%",
          position: "fixed",
          width: "100%",
          top: 0,
          backgroundColor: "rgba(0,8,0,0.85)",
          backdropFilter: "blur(14px)",
          zIndex: 1000,
          borderBottom: "1px solid rgba(74,222,128,0.15)",
          boxSizing: "border-box",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: theme.primary,
            animation: "floatY 4s ease-in-out infinite",
          }}
        >
          🚜 Agronet
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#beneficios" className="nav-link">
            Beneficios
          </a>
          <a href="#proceso" className="nav-link">
            Cómo funciona
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
          <button
            onClick={alIniciarSesion}
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "8px 22px",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4ade80";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.borderColor = "#4ade80";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(ellipse at 50% 0%, #0d3d0d 0%, ${theme.dark} 65%)`,
        }}
      >
        <ParticleCanvas />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)",
            animation: "glowPulse 4s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "50px",
              border: "1px solid rgba(74,222,128,0.4)",
              backgroundColor: "rgba(74,222,128,0.08)",
              color: "#4ade80",
              fontSize: "0.82rem",
              fontWeight: "600",
              marginBottom: "28px",
              letterSpacing: "0.05em",
              ...fadeIn,
            }}
          >
            🌿 Plataforma agrícola #1 de Colombia
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "850",
              lineHeight: "1.1",
              marginBottom: "20px",
              ...fadeInDelay1,
            }}
          >
            El campo se mueve rápido. <br />
            <span
              style={{
                color: theme.secondary,
                textShadow: "0 0 40px rgba(204,255,0,0.35)",
              }}
            >
              Agronet se mueve más rápido.
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: theme.textMuted,
              maxWidth: "700px",
              margin: "0 auto 40px auto",
              ...fadeInDelay2,
            }}
          >
            Escala tu negocio agrícola con la plataforma de gestión líder en
            trazabilidad, rendimiento y conexión directa con el mercado.
          </p>
          <div style={{ ...fadeInDelay2 }}>
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
                animation: "pulse 2.5s infinite",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Comenzar ahora →
            </button>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "rgba(255,255,255,0.3)",
            fontSize: "1.5rem",
            animation: "floatY 2s ease-in-out infinite",
            zIndex: 1,
          }}
        >
          ↓
        </div>
      </section>

      {/* Beneficios */}
      <section
        id="beneficios"
        style={{ padding: "100px 8%", backgroundColor: theme.dark }}
      >
        <AnimatedSection>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "16px",
            }}
          >
            Diseñado para el agricultor moderno
          </h2>
          <p
            style={{
              textAlign: "center",
              color: theme.textMuted,
              marginBottom: "60px",
              fontSize: "1.1rem",
            }}
          >
            Todo lo que necesitas para gestionar, vender y crecer.
          </p>
        </AnimatedSection>
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
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="benefit-card">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                  {b.icon}
                </div>
                <h3 style={{ color: theme.secondary, marginBottom: "15px" }}>
                  {b.t}
                </h3>
                <p style={{ color: theme.textMuted, lineHeight: "1.6" }}>
                  {b.d}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Cómo Funciona */}
      <section
        id="proceso"
        style={{
          padding: "100px 8%",
          backgroundColor: "#000c00",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "16px",
            }}
          >
            Tu camino al éxito digital
          </h2>
          <p
            style={{
              textAlign: "center",
              color: theme.textMuted,
              marginBottom: "60px",
              fontSize: "1.1rem",
            }}
          >
            En tres pasos simples, transforma tu finca en un negocio moderno.
          </p>
        </AnimatedSection>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "40px",
            position: "relative",
            zIndex: 1,
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
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className="step-card">
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    color: "rgba(204,255,0,0.15)",
                    display: "block",
                  }}
                >
                  {p.n}
                </span>
                <h3
                  style={{
                    marginTop: "-10px",
                    marginBottom: "10px",
                    color: "#fff",
                  }}
                >
                  {p.t}
                </h3>
                <p style={{ color: theme.textMuted }}>{p.d}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <AnimatedSection>
        <div id="faq">
          <FaqSection />
        </div>
      </AnimatedSection>

      {/* CTA Final */}
      <section
        style={{
          padding: "100px 8%",
          textAlign: "center",
          background: `linear-gradient(to bottom, ${theme.dark}, #0a2e0a)`,
        }}
      >
        <AnimatedSection>
          <div
            style={{
              padding: "80px 40px",
              borderRadius: "40px",
              backgroundColor: theme.primary,
              color: "#000",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.06)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: "-30px",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.04)",
                pointerEvents: "none",
              }}
            />
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                marginBottom: "20px",
                position: "relative",
                zIndex: 1,
              }}
            >
              ¿Listo para transformar tu tierra?
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "40px",
                fontWeight: "500",
                position: "relative",
                zIndex: 1,
              }}
            >
              Únete a los cientos de agricultores que ya están escalando con
              Agronet.
            </p>
            <button
              className="cta-btn"
              onClick={alIniciarSesion}
              style={{ position: "relative", zIndex: 1 }}
            >
              Empezar hoy
            </button>
          </div>
        </AnimatedSection>
      </section>

      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          color: theme.textMuted,
          borderTop: "1px solid rgba(74,222,128,0.15)",
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
  alCerrarSesion,
  containerStyle,
  inputStyle,
  buttonStyle,
  glassCardStyle,
}) {
  const [seccionC, setSeccionC] = useState("catalogo");
  const [catalogo, setCatalogo] = useState([]);
  const [siguienteId, setSiguienteId] = useState(1);
  const [misPedidos, setMisPedidos] = useState([]);
  const [trazabilidad, setTrazabilidad] = useState([]);
  // ✅ CAMBIO A — nuevo estado para datos reales del API
  const [trazabilidadCliente, setTrazabilidadCliente] = useState([]);
  const [filtroProducto, setFiltroProducto] = useState("");
  const [filtroMunicipio] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidadPedido, setCantidadPedido] = useState("");
  const [filtroEstadoPedido, setFiltroEstadoPedido] = useState("Todos");

  const [fincasMap, setFincasMap] = useState({});

  useEffect(() => {
    pedidosService
      .getMisPedidos()
      .then((data) => {
        console.log("📦 MIS PEDIDOS (raw):", JSON.stringify(data, null, 2));
        setMisPedidos(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("Error al cargar mis pedidos:", err));
  }, []);

  useEffect(() => {
    cosechasService
      .getCatalogo()
      .then((data) => setCatalogo(data))
      .catch((err) => console.error("Error al cargar catálogo:", err));
  }, []);

  // ✅ CAMBIO B — useEffect que consume GET /api/Trazabilidad/Cliente
  useEffect(() => {
    pedidosService
      .getTrazabilidadCliente()
      .then((data) => setTrazabilidadCliente(Array.isArray(data) ? data : []))
      .catch((err) =>
        console.error("Error al cargar trazabilidad cliente:", err),
      );
  }, []);

  useEffect(() => {
    fincasService
      .getAll()
      .then((data) => {
        const mapa = {};
        data.forEach((f) => {
          const nombre = f.nombre || f.nombreFinca || "";
          if (nombre) mapa[nombre] = f.municipio || "";
        });
        setFincasMap(mapa);
      })
      .catch((err) => console.error("Error al cargar fincas:", err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      cosechasService
        .getCatalogo()
        .then((data) => setCatalogo(data))
        .catch((err) => console.error("Error al filtrar catálogo:", err));
    }, 400);
    return () => clearTimeout(timer);
  }, [filtroProducto]);

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

  const hacerPedido = async () => {
    if (!cantidadPedido || Number(cantidadPedido) <= 0)
      return alert("Ingresa una cantidad válida.");
    try {
      await pedidosService.create({
        idCosecha: productoSeleccionado.cosechaId,
        cantidadSolicitada: Number(cantidadPedido),
      });
      alert("¡Pedido realizado exitosamente!");
      setProductoSeleccionado(null);
      setCantidadPedido("");
      setSeccionC("misPedidos");
    } catch (error) {
      alert("Error al hacer el pedido: " + error.message);
    }
  };

  const cancelarPedido = async (id) => {
    const pedido = misPedidos.find((p) => (p.pedidoId ?? p.id) === id);
    if (!pedido) return;
    const estadoAnterior = pedido.estado ?? pedido.estadoPedido ?? "Pendiente";
    try {
      await pedidosService.cancelarPedido(id);
      setMisPedidos((prev) =>
        prev.map((p) =>
          (p.pedidoId ?? p.id) === id ? { ...p, estado: "Cancelado" } : p,
        ),
      );
      setTrazabilidad([
        ...trazabilidad,
        {
          id: siguienteId,
          pedidoId: id,
          finca: pedido.fincaNombre ?? pedido.finca ?? "—",
          producto: pedido.productoNombre ?? pedido.producto ?? "—",
          estadoAnterior,
          estadoNuevo: "Cancelado",
          fecha: new Date().toISOString().split("T")[0],
          observacion: "Cancelado por el comprador.",
        },
      ]);
      setSiguienteId(siguienteId + 1);
    } catch (err) {
      alert("Error al cancelar: " + err.message);
    }
  };

  const catalogoFiltrado = catalogo
    .filter((c) => c.estado === "Disponible")
    .filter((c) =>
      filtroProducto
        ? (c.productoNombre || "")
            .toLowerCase()
            .includes(filtroProducto.toLowerCase())
        : true,
    )
    .filter((c) =>
      filtroMunicipio
        ? (fincasMap[c.fincaNombre] || "")
            .toLowerCase()
            .includes(filtroMunicipio.toLowerCase())
        : true,
    );

  return (
    <div style={containerStyle}>
      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.75) !important; opacity: 1 !important; }
        select option { color: #333; background: #fff; }
      `}</style>

      <div
        style={{
          width: "clamp(140px, 18vw, 240px)",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(20px)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          flexShrink: 0,
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

      <div
        style={{ flex: 1, padding: "40px", overflowY: "auto", color: "#fff" }}
      >
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
            </div>

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
                    {productoSeleccionado.productoNombre} —{" "}
                    {productoSeleccionado.fincaNombre}
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
                      ${productoSeleccionado.precioPorUnidad?.toLocaleString()}
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
                          Number(cantidadPedido) *
                          Number(productoSeleccionado.precioPorUnidad)
                        ).toLocaleString("es-CO")}
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
                    key={c.cosechaId}
                    style={{
                      ...glassCardStyle,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ fontSize: "2rem" }}>🌿</div>
                    <h3 style={{ margin: 0, color: "#ccff00" }}>
                      {c.productoNombre}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "#a1a1aa",
                        fontSize: "0.85rem",
                      }}
                    >
                      🏡 {c.fincaNombre}
                    </p>

                    <p
                      style={{ margin: 0, color: "#ccc", fontSize: "0.85rem" }}
                    >
                      Disponible:{" "}
                      <strong style={{ color: "#4ade80" }}>
                        {c.cantidadDisponible} Kg/L
                      </strong>
                    </p>
                    <p
                      style={{ margin: 0, color: "#ccc", fontSize: "0.85rem" }}
                    >
                      Precio:{" "}
                      <strong style={{ color: "#4ade80" }}>
                        ${c.precioPorUnidad?.toLocaleString()} / unidad
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
                    key={p.pedidoId ?? p.id}
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
                          {p.productoNombre ?? p.producto ?? "—"}
                        </h4>
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
                        📦 Cantidad:{" "}
                        <strong>
                          {p.cantidadSolicitada ?? p.cantidad ?? "—"}
                        </strong>
                      </span>
                      <span>
                        🔖 ID:{" "}
                        <strong style={{ color: "#a1a1aa" }}>
                          {p.pedidoId ?? p.id}
                        </strong>
                      </span>
                      <span style={{ gridColumn: "1/-1" }}>
                        💰 Total a pagar:{" "}
                        <strong style={{ color: "#4ade80" }}>
                          ${(p.totalPagar ?? 0).toLocaleString("es-CO")}
                        </strong>
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
                        onClick={() => cancelarPedido(p.pedidoId ?? p.id)}
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

        {/* ✅ CAMBIO C — Sección trazabilidad comprador consume trazabilidadCliente (API real) */}
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
              {trazabilidadCliente.length === 0 ? (
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
                [...trazabilidadCliente].reverse().map((t) => (
                  <div
                    key={t.trazabilidadId}
                    style={{
                      ...glassCardStyle,
                      borderLeft: "3px solid #ccff00",
                    }}
                  >
                    {/* Cabecera: ID Pedido + Fecha */}
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
                      <span
                        style={{
                          color: "#ccff00",
                          fontWeight: "700",
                          fontSize: "0.85rem",
                        }}
                      >
                        ID Pedido: {t.idPedido}
                      </span>
                      <span style={{ color: "#a1a1aa", fontSize: "0.8rem" }}>
                        📅 {t.fechaCambio ? t.fechaCambio.split("T")[0] : "—"}
                      </span>
                    </div>

                    {/* Estado anterior → nuevo */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.85rem",
                        marginBottom: "10px",
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
                        {t.estadoAnterior ?? "—"}
                      </span>
                      <span style={{ color: "#a1a1aa" }}>→</span>
                      {badgeEstado(t.estadoNuevo)}
                    </div>

                    {/* Observación */}
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
  const { fincas, setFincas, cargarDatosInciales } = useAgronet();
  const [cosechas, setCosechas] = useState([]);
  const [productos, setProductos] = useState([]);
  const [logeado, setLogeado] = useState(false);
  const [esRegistro, setEsRegistro] = useState(false);
  const [seccion, setSeccion] = useState("dashboard");
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [rolUsuario, setRolUsuario] = useState("");

  useEffect(() => {
    cargarDatosInciales();

    Promise.all([cosechasService.getProductos(), cosechasService.getAll()])
      .then(([productosData, cosechasData]) => {
        console.log("PRODUCTO[0]:", productosData[0]);
        console.log("COSECHA[0]:", cosechasData[0]);
        setProductos(productosData);
        setCosechas(cosechasData);
      })
      .catch((error) => {
        console.error("Error al cargar datos de cosechas:", error);
      });
  }, [cargarDatosInciales]);

  const [pedidos, setPedidos] = useState([]);
  const [trazabilidadAgricultor, setTrazabilidadAgricultor] = useState([]);

  useEffect(() => {
    if (logeado && rolUsuario === "1") {
      pedidosService
        .getPedidosAgricultor()
        .then((data) => setPedidos(Array.isArray(data) ? data : []))
        .catch((err) => console.error("Error al cargar pedidos:", err));

      pedidosService
        .getTrazabilidadAgricultor()
        .then((data) =>
          setTrazabilidadAgricultor(Array.isArray(data) ? data : []),
        )
        .catch((err) => console.error("Error al cargar trazabilidad:", err));
    }
  }, [logeado, rolUsuario]);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    password: "",
    rol: "2",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (esRegistro) {
      try {
        await authService.registrar({
          idRol: parseInt(formData.rol) || 2,
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: formData.telefono,
          password: formData.password,
        });

        alert("¡Usuario guardado en la base de datos MySQL!");
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          password: "",
          rol: "2",
        });
        setEsRegistro(false);
      } catch (error) {
        alert("Error al registrar en la API: " + error.message);
      }
    } else {
      try {
        const token = await authService.login({
          correo: formData.correo,
          password: formData.password,
        });

        const tokenValue = typeof token === "object" ? token.token : token;
        localStorage.setItem("agronet_token", tokenValue);

        const payload = JSON.parse(atob(tokenValue.split(".")[1]));
        const rol =
          payload[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ] || "";
        setRolUsuario(String(rol));
        setLogeado(true);
        Promise.all([cosechasService.getProductos(), cosechasService.getAll()])
          .then(([productosData, cosechasData]) => {
            setProductos(productosData);
            setCosechas(cosechasData);
          })
          .catch((error) => {
            console.error("Error al recargar cosechas:", error);
          });
      } catch (error) {
        alert("Error al iniciar sesión: " + error.message);
      }
    }
  };

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

  const [busquedaFincaNombre, setBusquedaFincaNombre] = useState("");
  const [busquedaFincaId, setBusquedaFincaId] = useState("");
  const [busquedaCosechaNombre, setBusquedaCosechaNombre] = useState("");
  const [busquedaCosechaId, setBusquedaCosechaId] = useState("");
  const [filtroPedido, setFiltroPedido] = useState("Todos");

  // ✅ Estados para el botón de observaciones en Trazabilidad
  const [actualizacionAbierta, setActualizacionAbierta] = useState(null);
  const [textoActualizacion, setTextoActualizacion] = useState("");

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

  const guardarFinca = async () => {
    if (!formFinca.nombre || !formFinca.municipio) {
      return alert("Completa los campos");
    }

    try {
      if (formFinca.id) {
        const actualizada = await fincasService.update(formFinca.id, formFinca);
        const fincaNormalizada = {
          ...actualizada,
          id: actualizada.fincaId ?? actualizada.id,
        };
        setFincas(
          fincas.map((f) => (f.id === formFinca.id ? fincaNormalizada : f)),
        );
        alert("Finca actualizada!");
        await cargarDatosInciales();
      } else {
        const fincaParaEnviar = {
          nombre: formFinca.nombre,
          municipio: formFinca.municipio,
          direccion: formFinca.direccion,
          latitud: parseFloat(formFinca.latitud) || 0,
          longitud: parseFloat(formFinca.longitud) || 0,
        };
        const creada = await fincasService.create(fincaParaEnviar);
        const fincaNormalizada = { ...creada, id: creada.fincaId ?? creada.id };
        setFincas([...fincas, fincaNormalizada]);
        alert("Finca guardada exitosamente en la nube!");
        await cargarDatosInciales();
      }

      setFormFinca({
        id: null,
        nombre: "",
        municipio: "",
        direccion: "",
        latitud: "",
        longitud: "",
      });
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error: " + error.message);
    }
  };

  const eliminarFinca = async (id) => {
    try {
      await fincasService.delete(id);
      setFincas(fincas.filter((f) => f.id !== id));
    } catch (error) {
      alert("Error al eliminar: " + error.message);
    }
  };

  const guardarCosecha = async () => {
    if (!formCosecha.finca || !formCosecha.producto) {
      return alert("Por favor, selecciona una finca y un producto.");
    }

    const mapaProductos = {
      "Manzana Roja": 1,
      "Bananos Maduros": 2,
      "Fresa Silvestre": 3,
      "Piña Oro Miel": 4,
      "Mango Tomy": 5,
      "Uva Isabela": 6,
      "Mora de Castilla": 7,
      "Naranja Valencia": 8,
      "Limón Tahití": 9,
      "Papaya Maradol": 10,
      "Tomate Chonto": 11,
      "Cebolla Cabezona": 12,
      "Zanahoria Premium": 13,
      "Lechuga Crespa": 14,
      "Brócoli Fresco": 15,
      "Pimentón Rojo": 16,
      "Pepino Cohombro": 17,
      "Espinaca Bogotana": 18,
      "Cebolla Larga": 19,
      "Ajo Morado": 20,
      "Arroz Blanco": 21,
      "Frijol Cargamanto": 22,
      "Lenteja Nacional": 23,
      "Maíz Amarillo": 24,
      "Arveja Seca": 25,
      "Garbanzo Lechoso": 26,
      "Cebada Perlada": 27,
      "Trigo en Grano": 28,
      "Frijol Bola Roja": 29,
      "Avena en Hojuelas": 30,
      "Papa Pastusa": 31,
      "Yuca Armonía": 32,
      "Papa Criolla": 33,
      "Arracacha Amarilla": 34,
      "Ñame Diamante": 35,
      "Batata Dulce": 36,
      "Papa Sabanera": 37,
      "Yuca Parafinada": 38,
      "Papa Capira": 39,
      "Ulluco Fresco": 40,
      "Fertilizante NPK": 41,
      "Urea 46%": 42,
      "Sustrato Orgánico": 43,
      "Semillas de Tomate": 44,
      "Insecticida Botánico": 45,
      "Fungicida Cúprico": 46,
      "Cal Agrícola": 47,
      "Herbicida Selectivo": 48,
      "Abono de Lombriz": 49,
      Microrrizas: 50,
    };

    const idProducto = mapaProductos[formCosecha.producto];
    if (!idProducto) return alert("Producto no reconocido.");

    try {
      const cosechaParaEnviar = {
        idFinca: parseInt(formCosecha.finca),
        idProducto: idProducto,
        cantidadDisponible: parseFloat(formCosecha.cantidad),
        precioPorUnidad: parseFloat(formCosecha.precio),
        fechaEstimada: new Date(formCosecha.fecha).toISOString(),
        estado: formCosecha.estado || "Disponible",
      };

      console.log("Enviando a la API:", cosechaParaEnviar);
      if (formCosecha.id) {
        await cosechasService.update(formCosecha.id, cosechaParaEnviar);
        alert("¡Cosecha actualizada exitosamente!");
      } else {
        await cosechasService.create(cosechaParaEnviar);
        alert("¡Cosecha guardada exitosamente!");
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

      if (typeof cargarDatosInciales === "function") {
        await cargarDatosInciales();
      }
      const [nuevosProductos, nuevasCosechas] = await Promise.all([
        cosechasService.getProductos(),
        cosechasService.getAll(),
      ]);
      setProductos(nuevosProductos);
      setCosechas(nuevasCosechas);
    } catch (error) {
      console.error("Error al guardar:", error);
      alert(
        "Error 400: El servidor rechazó los datos. Revisa la pestaña Network.",
      );
    }
  };

  const eliminarCosecha = async (id) => {
    try {
      await cosechasService.delete(id);
      setCosechas(cosechas.filter((c) => c.cosechaId !== id));
    } catch (error) {
      alert("Error al eliminar: " + error.message);
    }
  };

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

            <form onSubmit={handleSubmit}>
              {esRegistro && (
                <>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    style={{
                      ...inputStyle,
                      color: "#333",
                      backgroundColor: "white",
                    }}
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    style={{
                      ...inputStyle,
                      color: "#333",
                      backgroundColor: "white",
                    }}
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  <select
                    name="rol"
                    style={{
                      ...inputStyle,
                      color: "#333",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                    }}
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    <option value="">¿Tu rol en el campo?</option>
                    <option value="1">Agricultor</option>
                    <option value="2">Comprador</option>
                  </select>
                </>
              )}

              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                style={{
                  ...inputStyle,
                  color: "#333",
                  backgroundColor: "white",
                }}
                value={formData.correo}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña segura"
                style={{
                  ...inputStyle,
                  color: "#333",
                  backgroundColor: "white",
                }}
                value={formData.password}
                onChange={handleChange}
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

  if (logeado && rolUsuario === "2") {
    return (
      <DashboardComprador
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

  return (
    <div style={containerStyle}>
      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.75) !important; opacity: 1 !important; }
        select option { color: #333; background: #fff; }
      `}</style>

      {/* Sidebar */}
      <div
        style={{
          width: "clamp(160px, 20vw, 260px)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(20px)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          flexShrink: 0,
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
          <div
            style={{
              cursor: "pointer",
              color: seccion === "trazabilidad" ? "#4ade80" : "#ccc",
            }}
            onClick={() => setSeccion("trazabilidad")}
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
          onClick={() => setLogeado(false)}
        >
          🚪 Cerrar Sesión
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{ flex: 1, padding: "40px", overflowY: "auto", color: "#fff" }}
      >
        {/* SECCIÓN: DASHBOARD */}
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
                          key={p.pedidoId ?? p.id}
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <td style={{ padding: "15px" }}>
                            {p.productoNombre ?? p.producto}
                          </td>
                          <td style={{ padding: "15px" }}>
                            {p.compradorNombre ??
                              p.usuarioNombre ??
                              p.comprador ??
                              "—"}
                          </td>
                          <td style={{ padding: "15px" }}>
                            <span
                              style={{
                                color: "#4ade80",
                                background: "rgba(74, 222, 128, 0.2)",
                                padding: "5px 10px",
                                borderRadius: "8px",
                              }}
                            >
                              {p.estado ?? p.estadoPedido}
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

        {/* SECCIÓN: MIS FINCAS */}
        {seccion === "fincas" && (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "260px", maxWidth: "400px" }}>
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
            <div style={{ flex: "2", minWidth: "280px" }}>
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

        {/* SECCIÓN: COSECHAS */}
        {seccion === "cosechas" && (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "260px", maxWidth: "400px" }}>
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
                  {fincas &&
                    fincas.map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.nombreFinca || f.nombre}
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
                  <option value="">Seleccionar producto...</option>
                  {productos &&
                    productos.map((p) => (
                      <option key={p.nombre} value={p.nombre}>
                        {p.nombre}
                      </option>
                    ))}
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
                {formCosecha.id && (
                  <select
                    style={{
                      ...inputStyle,
                      color: "#333",
                      background: "white",
                    }}
                    value={formCosecha.estado}
                    onChange={(e) =>
                      setFormCosecha({ ...formCosecha, estado: e.target.value })
                    }
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="Encrecimiento">En crecimiento</option>
                    <option value="Vendidad">Vendido</option>
                    <option value="Cancelada">Cancelado</option>
                  </select>
                )}
                <button style={buttonStyle} onClick={guardarCosecha}>
                  {formCosecha.id ? "Actualizar" : "Publicar"}
                </button>
              </div>
            </div>
            <div style={{ flex: "2", minWidth: "280px" }}>
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
              <div style={{ overflowX: "auto" }}>
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
                          (c.productoNombre || "")
                            .toLowerCase()
                            .includes(busquedaCosechaNombre.toLowerCase()) &&
                          (c.cosechaId ?? "")
                            .toString()
                            .includes(busquedaCosechaId),
                      )
                      .map((c) => (
                        <tr
                          key={c.id}
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                            fontSize: "0.85rem",
                          }}
                        >
                          <td style={{ padding: "10px" }}>{c.cosechaId}</td>
                          <td style={{ padding: "10px" }}>
                            {c.productoNombre}
                          </td>
                          <td style={{ padding: "10px" }}>{c.fincaNombre}</td>
                          <td style={{ padding: "10px" }}>
                            {c.cantidadDisponible}
                          </td>
                          <td style={{ padding: "10px" }}>
                            ${c.precioPorUnidad}
                          </td>
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
                              onClick={() => {
                                const fincaEncontrada = fincas.find(
                                  (f) =>
                                    (f.nombre || f.nombreFinca) ===
                                    c.fincaNombre,
                                );
                                setFormCosecha({
                                  id: c.cosechaId,
                                  finca: fincaEncontrada
                                    ? fincaEncontrada.id
                                    : "",
                                  producto: c.productoNombre,
                                  cantidad: c.cantidadDisponible,
                                  precio: c.precioPorUnidad,
                                  fecha: c.fechaEstimada?.split("T")[0],
                                  estado: c.estado,
                                });
                              }}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() => eliminarCosecha(c.cosechaId)}
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
          </div>
        )}

        {/* SECCIÓN: PEDIDOS */}
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
            <div style={{ ...glassCardStyle, overflowX: "auto" }}>
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
                    <th style={{ padding: "12px" }}>Cantidad</th>
                    <th style={{ padding: "12px" }}>Estado</th>
                    <th style={{ padding: "12px" }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos
                    .filter(
                      (p) =>
                        filtroPedido === "Todos" ||
                        (p.estado ?? p.estadoPedido) === filtroPedido,
                    )
                    .map((p) => {
                      const pedidoId = p.pedidoId ?? p.id;
                      const comprador =
                        p.compradorNombre ??
                        p.usuarioNombre ??
                        p.comprador ??
                        "—";
                      const producto = p.productoNombre ?? p.producto ?? "—";
                      const cantidad = p.cantidadSolicitada ?? p.cantidad ?? 0;
                      const estado = p.estado ?? p.estadoPedido ?? "Pendiente";
                      return (
                        <tr
                          key={pedidoId}
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          <td style={{ padding: "12px" }}>{pedidoId}</td>
                          <td style={{ padding: "12px" }}>{comprador}</td>
                          <td style={{ padding: "12px" }}>
                            {producto} (x{cantidad})
                          </td>
                          <td style={{ padding: "12px" }}>{cantidad}</td>
                          <td style={{ padding: "12px" }}>
                            <span
                              style={{
                                color:
                                  estado === "Aprobado"
                                    ? "#4ade80"
                                    : estado === "Rechazado"
                                      ? "#ff5f5f"
                                      : "#ffc800",
                                backgroundColor:
                                  estado === "Aprobado"
                                    ? "rgba(74,222,128,0.15)"
                                    : estado === "Rechazado"
                                      ? "rgba(255,95,95,0.15)"
                                      : "rgba(255,200,0,0.15)",
                                padding: "4px 12px",
                                borderRadius: "8px",
                                fontSize: "0.8rem",
                                fontWeight: "600",
                              }}
                            >
                              {estado}
                            </span>
                          </td>
                          <td style={{ padding: "12px" }}>
                            {estado === "Pendiente" ? (
                              <div style={{ display: "flex", gap: "6px" }}>
                                <button
                                  onClick={async () => {
                                    try {
                                      await pedidosService.cambiarEstado(
                                        pedidoId,
                                        "Aprobado",
                                      );
                                      await pedidosService.crearTrazabilidad({
                                        idPedido: pedidoId,
                                        estadoNuevo: "Aprobado",
                                        observacion:
                                          "Pedido aprobado por el agricultor.",
                                      });
                                      setPedidos((prev) =>
                                        prev.map((x) =>
                                          (x.pedidoId ?? x.id) === pedidoId
                                            ? {
                                                ...x,
                                                estado: "Aprobado",
                                                estadoPedido: "Aprobado",
                                              }
                                            : x,
                                        ),
                                      );
                                      const nuevaTraz =
                                        await pedidosService.getTrazabilidadAgricultor();
                                      setTrazabilidadAgricultor(
                                        Array.isArray(nuevaTraz)
                                          ? nuevaTraz
                                          : [],
                                      );
                                    } catch (err) {
                                      alert("Error al aprobar: " + err.message);
                                    }
                                  }}
                                  style={{
                                    padding: "6px 12px",
                                    borderRadius: "8px",
                                    border: "none",
                                    cursor: "pointer",
                                    backgroundColor: "#4ade80",
                                    color: "#000",
                                    fontWeight: "700",
                                    fontSize: "0.8rem",
                                  }}
                                >
                                  ✅ Aprobar
                                </button>
                                <button
                                  onClick={async () => {
                                    try {
                                      await pedidosService.cambiarEstado(
                                        pedidoId,
                                        "Rechazado",
                                      );
                                      await pedidosService.crearTrazabilidad({
                                        idPedido: pedidoId,
                                        estadoNuevo: "Rechazado",
                                        observacion:
                                          "Pedido rechazado por el agricultor.",
                                      });
                                      setPedidos((prev) =>
                                        prev.map((x) =>
                                          (x.pedidoId ?? x.id) === pedidoId
                                            ? {
                                                ...x,
                                                estado: "Rechazado",
                                                estadoPedido: "Rechazado",
                                              }
                                            : x,
                                        ),
                                      );
                                      const nuevaTraz =
                                        await pedidosService.getTrazabilidadAgricultor();
                                      setTrazabilidadAgricultor(
                                        Array.isArray(nuevaTraz)
                                          ? nuevaTraz
                                          : [],
                                      );
                                    } catch (err) {
                                      alert(
                                        "Error al rechazar: " + err.message,
                                      );
                                    }
                                  }}
                                  style={{
                                    padding: "6px 12px",
                                    borderRadius: "8px",
                                    border: "none",
                                    cursor: "pointer",
                                    backgroundColor: "#ff5f5f",
                                    color: "#fff",
                                    fontWeight: "700",
                                    fontSize: "0.8rem",
                                  }}
                                >
                                  ❌ Rechazar
                                </button>
                              </div>
                            ) : (
                              <span
                                style={{ color: "#a1a1aa", fontSize: "0.8rem" }}
                              >
                                Sin acciones
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  {pedidos.filter(
                    (p) =>
                      filtroPedido === "Todos" ||
                      (p.estado ?? p.estadoPedido) === filtroPedido,
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

        {/* SECCIÓN: TRAZABILIDAD — con botón + Actualización */}
        {seccion === "trazabilidad" && (
          <div>
            <header style={{ marginBottom: "32px" }}>
              <h1 style={{ marginBottom: "6px" }}>🔍 Trazabilidad</h1>
              <p style={{ color: "#a1a1aa" }}>
                Historial de cambios de estado de los pedidos de tus cosechas.
              </p>
            </header>
            <div style={{ display: "grid", gap: "14px" }}>
              {trazabilidadAgricultor.length === 0 ? (
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
                [...trazabilidadAgricultor].reverse().map((t) => (
                  <div
                    key={t.trazabilidadId ?? t.id}
                    style={{
                      ...glassCardStyle,
                      borderLeft: "3px solid #4ade80",
                    }}
                  >
                    {/* Cabecera: ID Pedido + Fecha */}
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
                      <span
                        style={{
                          color: "#4ade80",
                          fontWeight: "700",
                          fontSize: "0.85rem",
                        }}
                      >
                        ID Pedido: {t.idPedido ?? t.pedidoId}
                      </span>
                      <span style={{ color: "#a1a1aa", fontSize: "0.8rem" }}>
                        📅 {t.fechaCambio ? t.fechaCambio.split("T")[0] : "—"}
                      </span>
                    </div>

                    {/* Estado anterior → nuevo */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.85rem",
                        marginBottom: "10px",
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
                      <span
                        style={{
                          backgroundColor: "rgba(74,222,128,0.15)",
                          color: "#4ade80",
                          padding: "4px 12px",
                          borderRadius: "8px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                        }}
                      >
                        {t.estadoNuevo}
                      </span>
                    </div>

                    {/* Observación existente */}
                    {t.observacion && (
                      <div
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          fontSize: "0.82rem",
                          color: "#a1a1aa",
                          borderLeft: "2px solid rgba(74,222,128,0.3)",
                          marginBottom: "10px",
                        }}
                      >
                        💬 <em>{t.observacion}</em>
                      </div>
                    )}

                    {/* Botón / formulario de actualización */}
                    {actualizacionAbierta === (t.trazabilidadId ?? t.id) ? (
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          marginTop: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        <input
                          placeholder="Escribe una observación..."
                          style={{
                            ...inputStyle,
                            marginBottom: 0,
                            flex: 1,
                            minWidth: "180px",
                          }}
                          value={textoActualizacion}
                          onChange={(e) =>
                            setTextoActualizacion(e.target.value)
                          }
                        />
                        <button
                          style={{
                            ...buttonStyle,
                            width: "auto",
                            padding: "8px 16px",
                            marginBottom: 0,
                          }}
                          onClick={async () => {
                            if (!textoActualizacion.trim())
                              return alert("Escribe una observación.");
                            try {
                              await pedidosService.crearTrazabilidad({
                                idPedido: t.idPedido ?? t.pedidoId,
                                estadoNuevo: t.estadoNuevo,
                                observacion: textoActualizacion,
                              });
                              const nuevaTraz =
                                await pedidosService.getTrazabilidadAgricultor();
                              setTrazabilidadAgricultor(
                                Array.isArray(nuevaTraz) ? nuevaTraz : [],
                              );
                              setActualizacionAbierta(null);
                              setTextoActualizacion("");
                            } catch (err) {
                              alert("Error: " + err.message);
                            }
                          }}
                        >
                          Enviar
                        </button>
                        <button
                          style={{
                            ...buttonStyle,
                            width: "auto",
                            padding: "8px 16px",
                            marginBottom: 0,
                            backgroundColor: "#444",
                          }}
                          onClick={() => {
                            setActualizacionAbierta(null);
                            setTextoActualizacion("");
                          }}
                        >
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <button
                        style={{
                          ...buttonStyle,
                          width: "auto",
                          padding: "6px 14px",
                          marginBottom: 0,
                          marginTop: "6px",
                          backgroundColor: "rgba(74,222,128,0.15)",
                          color: "#4ade80",
                          border: "1px solid rgba(74,222,128,0.3)",
                        }}
                        onClick={() => {
                          setActualizacionAbierta(t.trazabilidadId ?? t.id);
                          setTextoActualizacion("");
                        }}
                      >
                        + Actualización
                      </button>
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

export default App;
