import React from 'react';
import climasData from '../climas.json';


export default function Home() {
  const { titulo, introduccion, metodologia, ciudadesConMejorClima } = climasData;

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{introduccion}</p>
      <h2>Metodología</h2>
      <ul>
        {metodologia.pasos.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ul>
      <h2>Mapa Generado</h2>
      <img src={metodologia.imagenes.mapaGenerado} alt="Mapa Generado" />

      <h2>Mapa Recortado</h2>
      <img src={metodologia.imagenes.mapaRecortado} alt="Mapa Recortado" />

      <h2>Mapa de Temperaturas Máximas</h2>
      <img src={metodologia.imagenes.Maximo} alt="Mapa de Temperaturas Máximas" />

      <h2>Mapa de Temperaturas Mínimas</h2>
      <img src={metodologia.imagenes.Minimo} alt="Mapa de Temperaturas Mínimas" />

      <h2>Mapa de Precipitación</h2>
      <img src={metodologia.imagenes.mapaPrecipitacion} alt="Mapa de Precipitación" />

      <h2>Mapa de Intersección</h2>
      <img src={metodologia.imagenes.mapaInterseccion} alt="Mapa de Intersección" />

      <h2>Mapa Final - Ciudades con Clima Perfecto</h2>
      <img src={metodologia.imagenes.mapaFinal} alt="Mapa Final - Ciudades con Clima Perfecto" />
      <a href="https://drive.google.com/drive/folders/15ea37l8MjDIxRVkZCMIDsVt3umA9LhKS?usp=drive_link" target="_blank" rel="noopener noreferrer">
        Visit the Google Drive Folder
      </a>
      <h2>Ciudades con el Mejor Clima en Colombia</h2>
      <ul>
        {ciudadesConMejorClima.map((ciudad, index) => (
          <li key={index}>
            <h3>{ciudad.nombre}</h3>
            <p><strong>Ubicación:</strong> {ciudad.ubicacion}</p>
            <p><strong>Características:</strong> {ciudad.caracteristicas}</p>
            <img src={ciudad.imagen} alt={ciudad.nombre} />
            <img src={ciudad.imagen2} alt={`${ciudad.nombre} 2`} />
            <h2>Link to Google Drive Folder</h2>
          </li>
          
        ))}
      </ul>
    </div>
  );
}
