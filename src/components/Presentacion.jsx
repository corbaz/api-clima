import React from "react";

import { datos } from "../models/data";
import { Footer } from "./Footer.jsx";

export const Presentacion = (props) => {
  const css = {
    logo: {
      height: "40vmin",
      pointerEvents: "none",
    },
    button: {
      fontSize: "calc(6px + 2vmin)",
    },
  };
  const tw = {
    button: "mt-8 bg-[#174a9b] text-red-500 font-bold py-1 px-4 rounded-full",
  };

  return (
    <>
      <img src="/assets/favicon.svg" style={css.logo} alt="logo" />
      <p>{datos.titulo}</p>
      <p>{datos.empresa}</p>
      <p>
        <button
          type="button"
          className={tw.button}
          style={css.button}
          onClick={() => props.setPresentacion(false)}
        >
          {datos.boton}
        </button>
      </p>
      <Footer />
    </>
  );
};
