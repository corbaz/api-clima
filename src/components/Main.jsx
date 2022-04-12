import { useState, useEffect } from "react";
// import { FormularioCiudad } from "./FormularioCiudad";

export const Main = (props) => {
  const { pais, ciudad } = props;
  const [clima, setClima] = useState({});

  useEffect(() => {
    const API = async () => {
      if (ciudad) {
        const URL_WEB = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "41c24d525dac0eed946d6145c5e582c5";
        const API_URL = `${URL_WEB}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;

        const respuestaApi = await fetch(API_URL);
        const datosJson = await respuestaApi.json();
        // console.log(datosJson);

        if (datosJson) {
          const UTC_TimezoneOffset_Pais = datosJson.timezone * 1000;
          const UTC_TimezoneOffset_Local =
            new Date().getTimezoneOffset() * 60 * 1000;

          const UTC_Local = new Date().getTime();
          const UTC = UTC_Local + UTC_TimezoneOffset_Local;
          const UTC_Pais = UTC + UTC_TimezoneOffset_Pais;

          //   console.clear();
          //   console.log("UTC", UTC);
          //   console.log("UTC_Local", UTC_Local);
          //   console.log("UTC_TimezoneOffset_Pais", UTC_TimezoneOffset_Pais);
          //   console.log("UTC_TimezoneOffset_Local", UTC_TimezoneOffset_Local);
          //   console.log("Hora UTC", new Date(UTC));
          //   console.log("Hora UTC_Local", new Date(UTC_Local));
          //   console.log("Hora UTC_Pais", new Date(UTC_Pais));

          const FECHA = new Date(UTC_Pais).toLocaleDateString("es-AR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour24: "numeric",
            hour: "numeric",
            minute: "numeric",
          });

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
            Temperatura: `${datosJson.main.temp.toFixed(0)}°`,
            Termica: `${datosJson.main.feels_like.toFixed(0)}°C`,
            Maxima: `${datosJson.main.temp_max.toFixed(1)}°C ↑`,
            Minima: `${datosJson.main.temp_min.toFixed(1)}°C ↓`,
            Humedad: `${datosJson.main.humidity} %`,
            Presion: `${datosJson.main.pressure} hPa`,
            Viento: `${(datosJson.wind.speed * 3.6).toFixed(0)} km/h`,
            Dirección: `${datosJson.wind.deg}°`,
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
        <div className="flex1 mx-auto my-auto mt-24">
          {/* <h1 className="text-blue-700 text-4xl mx-auto mb-8">Clima 5</h1> */}
          <div className="text-3xl mx-auto">{ciudad}</div>
          <div className="text-xl mx-auto mb-8">{pais}</div>
          <div className="text-2xl font-bold mx-auto mb-2">{clima.Fecha}</div>
          <div className="text-xl font-bold mx-auto mb-2">
            {`Max: ${clima.Maxima}`}
          </div>{" "}
          <div className="text-xl font-bold mx-auto mb-4">
            {`Min:  ${clima.Minima}`}
          </div>
          <div className="text-8xl mx-auto mb-4">{`${clima.Temperatura} `}</div>
          <div className="text-xl mx-auto mb-2">
            {`Sensación térmica de ${clima.Termica} `}
          </div>
          <div className="text-xl mx-auto mb-2">{`${clima.Estado} `}</div>
          <img
            className="text-3xl mx-auto mb-2"
            src={clima.Imagen}
            alt={clima.Estado}
          />
          <div className="text-base md:text-xl  mx-auto mb-2">
            {`Humedad 💧 ${clima.Humedad} ¦ Presión 🌡 ${clima.Presion} `}
          </div>
          <div className="text-base md:text-xl mx-auto mb-2">
            {`Visivilidad 👁 ${clima.Visibilidad} ¦ Viento 🪁 ${clima.Viento} `}
          </div>
          <div className="text-base md:text-xl mx-auto mb-2">
            {`Salida del Sol 🌞 ${clima.Amanecer} ¦ Puesta del Sol 🌜 ${clima.Atardecer} `}
          </div>
        </div>
      </div>
    )
  );
};