import { useState } from "react";
import "./App.css";
import { datos, ciudades } from "./models/data";

import { Menu } from "./components/Menu.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";

export const App = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  return (
    <div className="App-header">
      <Menu
        datos={datos}
        ciudades={ciudades}
        setPais={setPais}
        setCiudad={setCiudad}
      />
      <Main datos={datos} ciudades={ciudades} pais={pais} ciudad={ciudad} />
      <Footer datos={datos} />
    </div>
  );
};
