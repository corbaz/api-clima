import React from "react";
import { datos } from "../models/data";

const css = {
  a: {
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

const tw = {
  footer:
    "fixed bottom-4 text-[#174a9b] text-base flex justify-center items-center",
  a: "text-[#174a9b] hover:text-yellow-500 py-2 px-4",
};

const Footer = () => {
  const { url_programador, programador, url_empresa, empresa } = datos;

  return (
    <div className={tw.footer}>
      <div>
        <a
          className={tw.a}
          style={css.a}
          href={url_programador}
          target="_blank"
          rel="noopener noreferrer"
        >
          {programador}
        </a>
      </div>

      <div>{" || "}</div>
      <div>
        <a
          className={tw.a}
          style={css.a}
          href={url_empresa}
          target="_blank"
          rel="noopener noreferrer"
        >
          {empresa}
        </a>
      </div>
    </div>
  );
};

export default Footer;
