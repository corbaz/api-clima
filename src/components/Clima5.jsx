import React, { useState } from "react";
import { Menu } from "./Menu.jsx";
import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";

export const Clima5 = (props) => {
  const [ciudad, setCiudad] = useState("");
  return (
    <>
      <Menu setPresentacion={props.setPresentacion} setCiudad={setCiudad} />
      <Main ciudad={ciudad}></Main>
      <Footer />
    </>
  );
};
