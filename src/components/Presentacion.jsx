import React from "react";
import { Footer } from "./Footer.jsx";

export const Presentacion = (props) => {
  const { datos } = props;
  const { titulo, empresa } = props.datos;

  return (
    <div className="fixed bottom-2 w-full grid text-white text-center px-3 ">
      <div className="pb-36 text-5xl font-extrabold">{titulo}</div>
      <h1 className="pb-4 text-3xl font-extrabold">{empresa}</h1>
      <Footer datos={datos} />
    </div>
  );
};
