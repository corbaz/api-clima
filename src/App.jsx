import { useState } from "react";
import "./App.css";

import { Presentacion } from "./components/Presentacion";
import { Clima5 } from "./components/Clima5";

export const App = () => {
  const [presentacion, setPresentacion] = useState(true);
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
};
