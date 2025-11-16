/*
 Muestra todas las series que devuelve la búsqueda.
 Cuando se hace clic en una serie, muestra su descripción justo debajo.

 Recibe:
 - series: array de series de TVMaze
 - onAlternarFavorito: función para añadir o quitar de favoritos
 - favoritos: lista actual de favoritos
*/

import { useState } from "react";
import ResumenSerie from "./ResumenSerie.jsx";
import "./ListaDeSeries.css";

export default function ListaDeSeries({ series, onAlternarFavorito, favoritos }) {
  
  // Estado para saber qué serie tiene su descripción abierta
  const [serieAbierta, setSerieAbierta] = useState(null);

  // Si no hay series, mostramos un mensaje sencillo
  if (!series || series.length === 0) {
    return <p>No hay series para mostrar. Prueba a buscar otra.</p>;
  }

  // Maneja el click en una serie para abrir/cerrar su descripción
  const manejarClickSerie = (serie) => {
    // Si la serie ya está abierta, la cierra
    if (serieAbierta && serieAbierta.id === serie.id) {
      setSerieAbierta(null);
    } 
    // Si no está abierta, la abre
    else {
      setSerieAbierta(serie);
    }
  };

  return (
    <div className="lista-series">
      {series.map((serie) => {
        
        // Determina si esta serie está marcada como favorita
        const esFavorito = favoritos.some((fav) => fav.id === serie.id);

        // Verifica si esta serie es la que está abierta actualmente
        const abierta = serieAbierta && serieAbierta.id === serie.id;

        return (
          <div key={serie.id} className="serie-item">
            
            {/* Componente que muestra la parte visual de cada serie */}
            <ResumenSerie
              serie={serie}
              onSeleccionarSerie={() => manejarClickSerie(serie)} // Al hacer clic, abre/cierra
              onAlternarFavorito={onAlternarFavorito} // Añadir o quitar favorito
              esFavorito={esFavorito} // Indica si es favorito
            />

            {/* Si esta serie está abierta, mostramos su descripción debajo */}
            {abierta && (
              <div className="detalle-inline">
                
                {/* Algunos resúmenes vienen en HTML, por eso usamos dangerouslySetInnerHTML */}
                {serie.summary ? (
                  <div dangerouslySetInnerHTML={{ __html: serie.summary }} />
                ) : (
                  <p>Sin descripción disponible.</p>
                )}

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
