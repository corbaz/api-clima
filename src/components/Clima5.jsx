import React, { useState } from "react";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";

const Clima5 = (props) => {
  const [ciudad, setCiudad] = useState("");
  return (
    <>
      <Menu setPresentacion={props.setPresentacion} setCiudad={setCiudad} />
      <h1>{ciudad}</h1>
      <Footer />
    </>
  );
};

export default Clima5;
