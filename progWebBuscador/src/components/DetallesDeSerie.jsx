/*
 Muestra la información completa de una serie específica seleccionada por el usuario desde la lista.
 Incluye descripción, género, idioma, calificación, y permite añadirla o quitarla de favoritos.

 Props que recibe:
 - serie: objeto con toda la información de la serie seleccionada
 - onCerrar: función para cerrar el modal
 - onAlternarFavorito: función para añadir o quitar la serie de favoritos
 - esFavorita: booleano que indica si esta serie ya está marcada como favorita
*/

import "./DetallesDeSerie.css";

export default function DetallesDeSerie({ serie, onCerrar, onAlternarFavorito, esFavorita }) {
  
  // Si no hay serie seleccionada, no se muestra nada
  if (!serie) return null;

  return (
    // Contenedor general del modal (incluye el fondo semitransparente)
    <div className="modal-detalles">

      {/* Caja principal del modal con el contenido */}
      <div className="modal-contenido">

        {/* Botón para cerrar el modal */}
        <button className="cerrar" onClick={onCerrar}>✖</button>

        {/* Título: nombre de la serie (solo si existe) */}
        {serie.name && <h2>{serie.name}</h2>}

        {/* Imagen de la serie (solo si existe) */}
        {serie.image && serie.image.medium && (
          <img
            src={serie.image.medium}
            alt={serie.name || "Imagen de la serie"}
          />
        )}

        {/* Descripción en HTML proporcionada por la API TVMaze */}
        {serie.summary && (
          <div
            className="descripcion"
            dangerouslySetInnerHTML={{ __html: serie.summary }} // Inserta HTML tal cual
          />
        )}

        {/* Lista de géneros (si hay) */}
        {serie.genres && serie.genres.length > 0 && (
          <p><strong>Géneros:</strong> {serie.genres.join(", ")}</p>
        )}

        {/* Idioma de la serie */}
        {serie.language && (
          <p><strong>Idioma:</strong> {serie.language}</p>
        )}

        {/* Rating de TVMaze */}
        {serie.rating && serie.rating.average && (
          <p><strong>Rating:</strong> {serie.rating.average}</p>
        )}

        {/* Botón para añadir o quitar de favoritos */}
        <button onClick={() => onAlternarFavorito(serie)}>
          {esFavorita ? "★ Eliminar de favoritos" : "☆ Añadir a favoritos"}
        </button>

      </div>
    </div>
  );
}
