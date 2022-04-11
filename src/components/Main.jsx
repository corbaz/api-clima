import { useState, useEffect } from "react";
// import { FormularioCiudad } from "./FormularioCiudad";

export const Main = (props) => {
  const { cod, pais, ciudad } = props;
  const [datos, setDatos] = useState({});
  useEffect(() => {
    const API = async () => {
      if (ciudad) {
        const URL_WEB = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "41c24d525dac0eed946d6145c5e582c5";
        const API_URL = `${URL_WEB}?q=${ciudad}&appid=${API_KEY}`;

        const respuestaApi = await fetch(API_URL);
        const datosJson = await respuestaApi.json();
        console.log(datosJson);
        setDatos(datosJson);
        return;
      }
    };
    API();
  }, [ciudad]);

  return (
    ciudad && (
      <div className="h-screen w-full flex">
        <div className="flex1 mx-auto my-auto">
          {/* <FormularioCiudad /> */}
          <h1 className="text-blue-700 text-4xl mx-auto mb-48">Clima 5</h1>
          <div className=" text-orange-500 text-2xl mx-auto">{datos.name}</div>
          <div className=" text-orange-500 text-2xl mx-auto">
            {`${pais} (${cod.toLowerCase()})`}
          </div>
          <div className=" text-orange-500 text-2xl mx-auto">{ciudad}</div>
        </div>
      </div>
    )
  );
};
