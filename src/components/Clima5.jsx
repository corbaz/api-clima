import React, { useState } from "react";
import { Menu } from "./Menu.jsx";
import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";

export const Clima5 = (props) => {
  const [cod, setCod] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [offset, setOffset] = useState(0);
  return (
    <>
      <Menu
        setPresentacion={props.setPresentacion}
        setCod={setCod}
        setPais={setPais}
        setCiudad={setCiudad}
        setOffset={setOffset}
      />
      <Main cod={cod} pais={pais} ciudad={ciudad} offset={offset} />
      <Footer />
    </>
  );
};
