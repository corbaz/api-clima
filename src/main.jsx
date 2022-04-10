import React from "react";
import ReactDOM from "react-dom";

//Importación del CSS y Tailwind
import "./index.css";

import AppRedux from "./store/store";

// Importación el componente Provider para usar el contexto de Redux de la libreria React-Redux
import { Provider } from "react-redux";

// Importación la función createStore para la creación del store.
import { createStore } from "redux";

// Importación la funcion AppReducer para la creación del store.
// AppReducer recibira el estado actual del store y la action que se va a ejecutar.
import { AppReducer } from "./reducers/AppReducer";

// Creación del store (AppStore) con el reducer importado (AppReducer)
const AppStore = createStore(AppReducer);

ReactDOM.render(
  <React.StrictMode>
    {/* Para usar el contexto Redux, debemos pasarle al componente Provider el store creado como props */}
    {/* Envolviendo el componente App con el componente Provider y pasando como props el store creado, permitimos que el store esté disponible en todos los componentes de la App */}
    {/* Todavia debemos crear la conexion para que el componente App pueda leer el estado global del store y pueda hacer dispatch de la actions.*/}
    {/* Para crear la conexión del componente App con Redux debemos
     crear una nueva carpeta en nuestro proyecto llamada containers. */}

    <Provider store={AppStore}>
      <AppRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
