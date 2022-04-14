import React from "react";

export const Presentacion = (props) => {
  const { titulo, empresa } = props.datos;

  return (
    <div className="z-50 grid w-full place-items-center">
      <div className="pt-[360px] text-center text-6xl font-extrabold">
        {titulo}
      </div>
      <h1 className="px-10 pb-20 text-4xl text-gray-100 font-extrabold text-center">
        {empresa}
      </h1>
    </div>
  );
};
