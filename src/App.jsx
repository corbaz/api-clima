import { useState } from "react";
import "./App.css";

import Presentacion from "./components/Presentacion";
import Clima5 from "./components/Clima5";

export function App({
  ciudad,
  buenos_aires,
  madrid,
  paris,
  washington,
  moscu,
}) {
  const [presentacion, setPresentacion] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {presentacion ? (
          <Presentacion setPresentacion={setPresentacion} />
        ) : (
          <Clima5 setPresentacion={setPresentacion} />
        )}
      </header>
    </div>
  );
}
