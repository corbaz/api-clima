import React from "react";
import ReactDOM from "react-dom";

//Importación del CSS y Tailwind
import "./index.css";

// Importación el componente Provider para usar el contexto de Redux de la libreria React-Redux - Provider es un HOC Higher Order Component
import { Provider } from "react-redux";

import { store } from "./store/store";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Para usar el contexto Redux, debemos pasarle al componente Provider el store creado como props */}
    {/* Envolviendo el componente App con el componente Provider y pasando como props el store creado, permitimos que el store esté disponible en todos los componentes de la App */}

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
