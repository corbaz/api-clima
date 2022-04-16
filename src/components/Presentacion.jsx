import React from "react";

export const Presentacion = (props) => {
  const { titulo, empresa } = props.datos;

  return (
    <div className="z-50 grid w-full place-items-center">
      <div className="pt-[450px] text-center text-5xl font-extrabold">
        {titulo}
      </div>
      <h1 className="px-10 pb-10 text-3xl text-gray-200 font-extrabold text-center">
        {empresa}
      </h1>
    </div>
  );
};
