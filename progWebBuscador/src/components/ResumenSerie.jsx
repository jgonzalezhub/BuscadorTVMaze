/*
  Al hacer clic en la imagen abre el modal de detalles.
  Permite alternar favoritos con el botón de estrella.
*/
import "./ResumenSerie.css";

export default function ResumenSerie({ serie, onSeleccionarSerie, onAlternarFavorito, esFavorito }) {
  if (!serie) return null; // Si no hay datos de la serie, no se muestra nada

  return (
    <div className="resumen-serie">

      {/* Imagen de la serie, clic para abrir detalles */}
      {serie.image && serie.image.medium && (
        <img
          src={serie.image.medium}
          alt={serie.name || "Imagen de la serie"}
          onClick={() => onSeleccionarSerie(serie)}
        />
      )}

      {/* Nombre de la serie */}
      {serie.name && <h3>{serie.name}</h3>}

      {/* Botón de favoritos */}
      <button 
        className={esFavorito ? "favorito" : ""}
        onClick={() => onAlternarFavorito(serie)}
      >
        {esFavorito ? "★ Quitar de favoritos" : "☆ Añadir a favoritos"}
      </button>
    </div>
  );
}
