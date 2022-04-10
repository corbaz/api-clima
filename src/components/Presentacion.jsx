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
      fontSize: "calc(2px + 2vmin)",
    },
  };
  const tw = {
    p: "text-[black]",
    button: "mt-8 p-8 bg-[#174a9b] text-white font-bold py-2 px-4 rounded-full",
  };

  return (
    <>
      <img src={datos.logo} style={css.logo} alt="logo" />
      <p className={tw.p}>{datos.titulo}</p>
      <p className={tw.p}>{datos.empresa}</p>
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
