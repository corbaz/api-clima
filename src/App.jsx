import { useState } from "react";
import "./App.css";
import { datos, ciudades } from "./models/data";

import { Menu } from "./components/Menu.jsx";
import { Main } from "./components/Main.jsx";

export const App = () => {
  console.clear();
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
    </div>
  );
};
