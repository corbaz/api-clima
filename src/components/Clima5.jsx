import React from "react";

export const Clima5 = (props) => {
  const { ciudad, pais, clima } = props;
  return (
    <div className="h-fit w-fit p-4 mx-auto my-auto rounded-xl text-center text-[gray] font-bold bg-slate-300 bg-opacity-70">
      <div className="text-5xl mb-0 text-[#e4a331]">{ciudad}</div>
      <div className="text-2xl mb-5 text-[#e4a331]">{pais}</div>
      <div className="text-2xl mb-5">{clima.Fecha}</div>
      <div className="text-8xl mb-5 text-[#e4a331]">{clima.Temperatura}</div>
      <div className="text-xl mb-2">{`Sensación térmica ${clima.Termica}`}</div>
      <div className="text-xl mb-0">{`Máxima: ${clima.Maxima}`}</div>
      <div className="text-xl mb-0">{`Mínina: ${clima.Minima}`}</div>
      <img className="mx-auto mb-0" src={clima.Icono} alt={clima.Estado} />
      <div className="text-xl mb-4">{clima.Estado}</div>
      <div className="text-sm md:text-base mb-2">
        <div>{`VIENTO 🪁 ${clima.Viento} ¦ HUMEDAD 💧 ${clima.Humedad}`}</div>
        <div>
          {`VISIBILIDAD 👁 ${clima.Visibilidad} ¦ PRESIÓN 🌡 ${clima.Presion}`}
        </div>
        <div>
          {`SALIDA DEL SOL 🌞 ${clima.Amanecer} ¦ PUESTA DEL SOL 🌜 ${clima.Atardecer}`}
        </div>
      </div>
    </div>
  );
};
