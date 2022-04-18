import { useState, useEffect } from "react";

import Portada from "../../assets/Portada.webp";

import cielo from "../../assets/Cielo.webp";
import Thunderstorm from "../../assets/Thunderstorm.webp";
import Rain from "../../assets/Rain.webp";
import Drizzle from "../../assets/Drizzle.webp";
import Snow from "../../assets/Snow.webp";
import Bruma from "../../assets/Bruma.webp";
import Clear from "../../assets/Clear.webp";
import Noche_Clara from "../../assets/Noche_Clara.webp";
import Clouds from "../../assets/Clouds.webp";
import Noche_Nublada from "../../assets/Noche_Nublada.webp";

import { Clima5 } from "./Clima5";
import { Presentacion } from "./Presentacion";

export const Main = (props) => {
  const { datos, pais, ciudad } = props;
  const [clima, setClima] = useState({});

  useEffect(() => {
    const API = async () => {
      if (ciudad) {
        const URL_WEB = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "41c24d525dac0eed946d6145c5e582c5";
        const API_URL = `${URL_WEB}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;

        const respuestaApi = await fetch(API_URL);
        const datosJson = await respuestaApi.json();

        if (datosJson) {
          const UTC_TimezoneOffset_Pais = datosJson.timezone * 1000;
          const UTC_TimezoneOffset_Local =
            new Date().getTimezoneOffset() * 60 * 1000;

          const UTC_Local = new Date().getTime();
          const UTC = UTC_Local + UTC_TimezoneOffset_Local;
          const UTC_Pais = UTC + UTC_TimezoneOffset_Pais;

          //console.clear();
          //console.log("UTC", UTC);
          //console.log("UTC_Local", UTC_Local);
          //console.log("UTC_TimezoneOffset_Pais", UTC_TimezoneOffset_Pais);
          //console.log("UTC_TimezoneOffset_Local", UTC_TimezoneOffset_Local)
          //console.log("Hora UTC", new Date(UTC));
          //console.log("Hora UTC_Local", new Date(UTC_Local));
          //console.log("Hora UTC_Pais", new Date(UTC_Pais));

          const FECHA = new Date(UTC_Pais).toLocaleDateString("es-AR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour24: "numeric",
            hour: "numeric",
            minute: "numeric",
          });

          const UTC_Sol =
            datosJson.sys.sunrise * 1000 +
            UTC_TimezoneOffset_Local +
            UTC_TimezoneOffset_Pais;

          const SOL = new Date(
            datosJson.sys.sunrise * 1000 +
              UTC_TimezoneOffset_Local +
              UTC_TimezoneOffset_Pais
          ).toLocaleTimeString("es-AR", {
            hour24: "true",
            hour: "numeric",
            minute: "numeric",
          });

          const UTC_Luna =
            datosJson.sys.sunset * 1000 +
            UTC_TimezoneOffset_Local +
            UTC_TimezoneOffset_Pais;

          const LUNA = new Date(
            datosJson.sys.sunset * 1000 +
              UTC_TimezoneOffset_Local +
              UTC_TimezoneOffset_Pais
          ).toLocaleTimeString("es-AR", {
            hour24: "true",
            hour: "numeric",
            minute: "numeric",
          });

          // console.log("SOL", SOL, UTC_Sol);
          // console.log("LUNA", LUNA, UTC_Luna);
          // console.log(
          //   "FECHA :>> ",
          //   new Date(UTC_Pais).toLocaleTimeString("es-AR", {
          //     hour24: "true",
          //     hour: "numeric",
          //     minute: "numeric",
          //   }),
          //   UTC_Pais
          // );

          const NOCHE = UTC_Pais >= UTC_Luna || UTC_Pais < UTC_Sol;
          console.log("NOCHE :>> ", NOCHE);

          const data = {
            Temperatura: `${datosJson.main.temp.toFixed(0)}°`,
            Termica: `${datosJson.main.feels_like.toFixed(0)}°`,
            Maxima: `${datosJson.main.temp_max.toFixed(1)}°C ↑`,
            Minima: `${datosJson.main.temp_min.toFixed(1)}°C ↓`,
            Humedad: `${datosJson.main.humidity} %`,
            Presion: `${datosJson.main.pressure} hPa`,
            Viento: `${(datosJson.wind.speed * 3.6).toFixed(0)} km/h`,
            Dirección: `${datosJson.wind.deg}°`,
            Visibilidad: `${(datosJson.visibility / 1000).toFixed(0)} km`,
            Pais: datosJson.sys.country,
            Ciudad: datosJson.name,
            Amanecer: SOL,
            Atardecer: LUNA,
            Fecha: FECHA,
            Icono: `http://openweathermap.org/img/wn/${datosJson.weather[0].icon}@2x.png`,
            Imagen:
              datosJson.weather[0].main === "Thunderstorm"
                ? Thunderstorm
                : datosJson.weather[0].main === "Drizzle"
                ? Drizzle
                : datosJson.weather[0].main === "Rain"
                ? Rain
                : datosJson.weather[0].main === "Snow"
                ? Snow
                : datosJson.weather[0].id >= "700" &&
                  datosJson.weather[0].id <= "799"
                ? Bruma
                : datosJson.weather[0].main === "Clear" && NOCHE === false
                ? Clear
                : datosJson.weather[0].main === "Clear" && NOCHE === true
                ? Noche_Clara
                : datosJson.weather[0].main === "Clouds" &&
                  datosJson.weather[0].id > "802" &&
                  NOCHE === false
                ? Clouds
                : datosJson.weather[0].main === "Clouds" &&
                  datosJson.weather[0].id > "802" &&
                  NOCHE === true
                ? Noche_Nublada
                : cielo,
            Estado: datosJson.weather[0].description.toUpperCase(),
          };
          setClima(data);
        } else {
          alert("No hay datos para mostrar");
        }
      } else {
        setClima({ Imagen: Portada });
      }
      return;
    };
    API();
  }, [ciudad]);

  return (
    <div
      className="h-screen w-full fixed z-10 flex bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${clima.Imagen})` }}
    >
      {clima.Temperatura !== undefined && ciudad ? (
        <Clima5 ciudad={ciudad} pais={pais} clima={clima} />
      ) : (
        <Presentacion datos={datos} />
      )}
      ;
    </div>
  );
};
