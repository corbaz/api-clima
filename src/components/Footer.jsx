import React from "react";

const tw = {
  footer: `bottom-2 pb-1 rounded-lg 
  bg-menu bg-opacity-80
  text-center text-white text-base
  w-[340px] mx-auto `,
  a: `no-underline hover:text-amarillo px-2`,
};

export const Footer = (props) => {
  const { url_programador, programador, url_empresa, empresa } = props.datos;

  return (
    <div className={tw.footer}>
      <a
        className={tw.a}
        href={url_empresa}
        target="_blank"
        rel="noopener noreferrer"
      >
        {empresa}
      </a>
      {" || "}
      <a
        className={tw.a}
        href={url_programador}
        target="_blank"
        rel="noopener noreferrer"
      >
        {programador}
      </a>
    </div>
  );
};

export default Footer;
