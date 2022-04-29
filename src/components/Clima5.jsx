import React from "react";
import { Footer } from "./Footer.jsx";

export const Clima5 = (props) => {
  const { datos } = props;
  const { ciudad, pais, clima } = props;

  return (
    <div
      className="h-fit w-fit px-4 py-4
      text-center text-gray-100 
      bg-gray-700 bg-clip-padding bg-opacity-30 shadow-lg
      border-t-2 border-l-2 border-b border-r border-gray-300 rounded-3xl 
      mx-auto"
      style={{
        backdropFilter: blur("20px"),
      }}
    >
      <div className="text-5xl mb-0 text-amarillo">{ciudad}</div>
      <div className="text-2xl mb-2 text-amarillo">{pais}</div>
      <div className="text-6xl mb-4">{clima.Hora}</div>
      <div className="text-2xl mb-4">{clima.Fecha}</div>

      <div className="text-8xl mb-3 text-amarillo">{clima.Temperatura}</div>
      <div className="text-xl mb-0">{`Sensación térmica ${clima.Termica}`}</div>
      <div className="text-xl mb-0">{`Máxima: ${clima.Maxima}`}</div>
      <div className="text-xl mb-0">{`Mínima: ${clima.Minima}`}</div>
      <img className="mx-auto -mt-2" src={clima.Icono} alt={clima.Estado} />
      <div className="text-xl -mt-2 mb-2">{clima.Estado}</div>
      <div className="text-xs md:text-base mb-4">
        <div>{`Viento 🪁 ${clima.Viento} ¦ Humedad 💧 ${clima.Humedad}`}</div>
        <div>
          {`Visibilidad 👁 ${clima.Visibilidad} ¦ Presión 🌡 ${clima.Presion}`}
        </div>
        <div>
          {`Amanecer 🌞 ${clima.Amanecer} ¦ Anochecer 🌜 ${clima.Atardecer}`}
        </div>
      </div>
      <Footer datos={datos} />
    </div>
  );
};
