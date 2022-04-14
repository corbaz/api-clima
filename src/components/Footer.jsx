import React from "react";

const tw = {
  footer:
    "fixed z-20 bottom-2 rounded-lg bg-slate-500 bg-opacity-70 text-base text-center text-white",
  a: "no-underline hover:text-yellow-500 px-4",
};

export const Footer = (props) => {
  const { url_programador, programador, url_empresa, empresa } = props.datos;

  return (
    <div className={tw.footer}>
      <a
        className={tw.a}
        href={url_programador}
        target="_blank"
        rel="noopener noreferrer"
      >
        {programador}
      </a>
      {" || "}
      <a
        className={tw.a}
        href={url_empresa}
        target="_blank"
        rel="noopener noreferrer"
      >
        {empresa}
      </a>
    </div>
  );
};

export default Footer;
