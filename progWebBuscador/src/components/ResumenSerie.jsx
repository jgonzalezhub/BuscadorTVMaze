/*
  Componente que muestra un resumen visual de una serie:
  - Imagen
  - Nombre
  - Botón para añadir o quitar de favoritos
  Al hacer clic en la imagen, se abre el modal con detalles completos.
*/

import "./ResumenSerie.css";

export default function ResumenSerie({ serie, onSeleccionarSerie, onAlternarFavorito, esFavorito }) {

  // Si por alguna razón 'serie' no existe, no renderiza nada
  if (!serie) return null;

  return (
    <div className="resumen-serie">

      {/* Imagen de la serie (si existe). Al hacer clic se abre el modal con los detalles */}
      {serie.image && serie.image.medium && (
        <img
          src={serie.image.medium}
          alt={serie.name || "Imagen de la serie"}
          onClick={() => onSeleccionarSerie(serie)} // Ejecuta la función para abrir los detalles
        />
      )}

      {/* Nombre de la serie. Solo se muestra si existe */}
      {serie.name && <h3>{serie.name}</h3>}

      {/* Botón para añadir o quitar la serie de favoritos */}
      <button
        className={esFavorito ? "favorito" : ""}  // Cambia el estilo si es favorita
        onClick={() => onAlternarFavorito(serie)} // Ejecuta la función de favorito
      >
        {esFavorito ? "★ Eliminar de favoritos" : "☆ Añadir a favoritos"}{/* Texto dinámico */}
      </button>

    </div>
  );
}
