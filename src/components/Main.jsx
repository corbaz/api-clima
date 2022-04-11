import { useState, useEffect } from "react";
// import { FormularioCiudad } from "./FormularioCiudad";

export const Main = (props) => {
  const { cod, pais, ciudad } = props;
  const [clima, setClima] = useState({});

  useEffect(() => {
    const API = async () => {
      if (ciudad) {
        const URL_WEB = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "41c24d525dac0eed946d6145c5e582c5";
        const API_URL = `${URL_WEB}?q=${ciudad}&appid=${API_KEY}&units=metric`;

        const respuestaApi = await fetch(API_URL);
        const datosJson = await respuestaApi.json();
        console.log(datosJson);
        if (datosJson) {
          const FECHA = new Date(datosJson.dt * 1000).toLocaleDateString(
            "es-AR",
            {
              weekday: "long",
              month: "long",
              day: "numeric",
            }
          );

          const SOL = new Date(datosJson.sys.sunrise * 1000).toLocaleTimeString(
            "es-AR",
            {
              hour: "numeric",
              hour24: "true",
              minute: "numeric",
            }
          );
          const LUNA = new Date(datosJson.sys.sunset * 1000).toLocaleTimeString(
            "es-AR",
            {
              hour: "numeric",
              hour24: "true",
              minute: "numeric",
            }
          );
          const data = {
            Temperatura: `${datosJson.main.temp.toFixed(0)} ºC`,
            Termica: `${datosJson.main.feels_like.toFixed(0)} ºC`,
            Maxima: `${datosJson.main.temp_max.toFixed(1)} ºC ↑`,
            Minima: `${datosJson.main.temp_min.toFixed(1)} ºC ↓`,
            Humedad: `${datosJson.main.humidity} %`,
            Presion: `${datosJson.main.pressure} hPa`,
            Viento: `${(datosJson.wind.speed * 3.6).toFixed(0)} km/h`,
            Dirección: `${datosJson.wind.deg} º`,
            Visibilidad: `${datosJson.visibility} m`,
            Pais: datosJson.sys.country,
            Ciudad: datosJson.name,
            Amanecer: SOL,
            Atardecer: LUNA,
            Fecha: FECHA,
            Imagen: `http://openweathermap.org/img/wn/${datosJson.weather[0].icon}@2x.png`,
            Estado: `${datosJson.weather[0].description}`,
          };
          //alert(JSON.stringify(data));
          setClima(data);
        } else {
          alert("fallo");
        }
        return;
      }
    };
    API();
  }, [ciudad]);

  return (
    ciudad &&
    clima && (
      <div className="h-screen w-full flex">
        <div className="flex1 mx-auto my-auto">
          {/* <h1 className="text-blue-700 text-4xl mx-auto mb-8">Clima 5</h1> */}
          <div className=" text-orange-500 text-3xl mx-auto">{ciudad}</div>
          <div className=" text-orange-500 text-xl mx-auto mb-8">{pais}</div>
          <div className=" text-black text-2xl font-bold mx-auto mb-2">
            {clima.Fecha}
          </div>
          <div className=" text-orange-500 text-xl font-bold mx-auto mb-2">
            {`Max: ${clima.Maxima}`}
          </div>{" "}
          <div className=" text-orange-500 text-xl font-bold mx-auto mb-4">
            {`Min:  ${clima.Minima}`}
          </div>
          <div className=" text-orange-500 text-8xl mx-auto mb-4">
            {`${clima.Temperatura} `}
          </div>
          <div className=" text-orange-500 text-xl mx-auto mb-2">
            {`Sensación térmica de ${clima.Termica} `}
          </div>
          <img
            className=" text-orange-500 text-3xl mx-auto mb-2"
            src={clima.Imagen}
            alt={clima.Estado}
          />
          <div className=" text-orange-500 text-xl mx-auto mb-2">
            {`Humedad 💧 ${clima.Humedad} - Presión 🌡 ${clima.Presion} `}
          </div>
          <div className=" text-orange-500 text-xl mx-auto mb-2">
            {`Visivilidad 👁 ${clima.Visibilidad} - Viento 🪁 ${clima.Viento} `}
          </div>
          <div className=" text-orange-500 text-xl mx-auto mb-2">
            {`Salida del Sol 🌞 ${clima.Amanecer} - Puesta del Sol 🌜 ${clima.Atardecer} `}
          </div>
        </div>
      </div>
    )
  );
};
