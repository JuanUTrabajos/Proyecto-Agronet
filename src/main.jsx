import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import "./index.css"; // Asegúrate de que esta línea esté si tienes estilos globales
import { AgronetProvider } from "./context/AgronetContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AgronetProvider>
      <App />
    </AgronetProvider>
  </StrictMode>,
);
