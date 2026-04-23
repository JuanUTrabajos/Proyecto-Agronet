import { createContext, useState, useContext, useEffect } from "react";
/* eslint-disable react-refresh/only-export-components */
import { fincasService } from "../services/fincasService";
import { cosechasService } from "../services/cosechasService";

const AgronetContext = createContext();

export const AgronetProvider = ({ children }) => {
  const [fincas, setFincas] = useState([]);
  const [cosechas, setCosechas] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarDatosInciales = async () => {
    setLoading(true);
    try {
      const dataFincas = await fincasService.getAll();
      setFincas(dataFincas || []);
      const dataCosechas = await cosechasService.getDisponibles();
      setCosechas(dataCosechas || []);
    } catch (error) {
      console.error("Error en AgronetContext:", error);
    } finally {
      setLoading(false);
    }
  };

  // Aquí usamos useEffect para cargar los datos al abrir la app
  // Esto quitará el error de la línea 1
  useEffect(() => {
    cargarDatosInciales();
  }, []);

  return (
    <AgronetContext.Provider
      value={{
        fincas,
        setFincas,
        cosechas,
        loading,
        cargarDatosInciales,
      }}
    >
      {children}
    </AgronetContext.Provider>
  );
};

export const useAgronet = () => {
  const context = useContext(AgronetContext);
  if (!context) {
    throw new Error("useAgronet debe usarse dentro de un AgronetProvider");
  }
  return context;
};
