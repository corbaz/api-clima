import React, { useState } from "react";
import { Menu } from "./Menu.jsx";
import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";

export const Clima5 = (props) => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  return (
    <>
      <Menu
        setPresentacion={props.setPresentacion}
        setPais={setPais}
        setCiudad={setCiudad}
      />
      <Main pais={pais} ciudad={ciudad} />
      <Footer />
    </>
  );
};
