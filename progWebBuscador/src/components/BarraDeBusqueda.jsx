/*
Es el componente donde el usuario puede escribir el nombre de una serie y realizar la búsqueda.
Contiene un campo de texto y un botón, y al enviarse, comunica el término de búsqueda al componente principal (App.jsx)
*/


import { useState } from "react";
import "./BarraDeBusqueda.css";

export default function BarraDeBusqueda({ onSearch }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");// Estado para el término de búsqueda

  const handleSubmit = (e) => { // Al enviar el formulario
    e.preventDefault(); // Prevenir recarga de página
    onSearch(terminoBusqueda);// Llamar a la función pasada por props con el término de búsqueda
  };

  return (
    <form onSubmit={handleSubmit} className="barra-busqueda">
      <input
        type="text"
        placeholder="Escribe el nombre de una serie" 
        value={terminoBusqueda}// Valor del input controlado por el estado
        onChange={(e) => setTerminoBusqueda(e.target.value)}// Actualizar el estado con el valor del input
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
