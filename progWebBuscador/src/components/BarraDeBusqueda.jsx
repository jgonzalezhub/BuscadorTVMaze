/*
 Es el componente donde el usuario puede escribir el nombre de una serie y realizar la búsqueda.
 Contiene un campo de texto y un botón, y al enviarse, comunica el término de búsqueda
 al componente principal (App.jsx) mediante la función onSearch pasada por props.
*/

import { useState } from "react";
import "./BarraDeBusqueda.css";

export default function BarraDeBusqueda({ onSearch }) {

  // Estado para guardar lo que el usuario escribe en el input
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  // Función que se ejecuta cuando se envía el formulario (clic en buscar o Enter)
  const handleSubmit = (e) => {
    e.preventDefault();             // Previene la recarga completa de la página
    onSearch(terminoBusqueda);      // Pasa el texto buscado al componente padre (App)
  };

  return (
    <form onSubmit={handleSubmit} className="barra-busqueda">
      
      {/* Campo de texto controlado por React */}
      <input
        type="text"
        placeholder="Escribe el nombre de una serie"
        value={terminoBusqueda}                       // El valor del input viene del estado
        onChange={(e) => setTerminoBusqueda(e.target.value)}  // Actualiza el estado con lo que escribe el usuario
      />
      
      {/* Botón para iniciar la búsqueda */}
      <button type="submit">Buscar</button>
    </form>
  );
}
