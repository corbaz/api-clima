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

export default async function ApiPronostico(latitud, longitud) {
    const URL_WEB = "https://api.openweathermap.org/data/2.5/onecall";
    const EXCLUIR = "exclude=current, minutely, hourly, alerts ";
    const API_KEY = "41c24d525dac0eed946d6145c5e582c5";

    const API_URL = `${URL_WEB}?lat=${latitud}&lon=${longitud
        }&${EXCLUIR}&appid=${API_KEY}&units=metric&lang=es`;
    // console.log('API_URL', API_URL)
    // const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&appid=41c24d525dac0eed946d6145c5e582c5&units=metric&lang=es";

    const respuestaApi = await fetch(API_URL);
    const datosJson = await respuestaApi.json();
    console.log('datosJson', datosJson)
    if (datosJson) {

        const UTC_TimezoneOffset_Pais = datosJson.timezone_offset * 1000;
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

        // const UTC_Sol =
        //     datosJson.city.sunrise * 1000 +
        //     UTC_TimezoneOffset_Local +
        //     UTC_TimezoneOffset_Pais;

        // const SOL = new Date(
        //     datosJson.city.sunrise * 1000 +
        //     UTC_TimezoneOffset_Local +
        //     UTC_TimezoneOffset_Pais
        // ).toLocaleTimeString("es-AR", {
        //     hour24: "true",
        //     hour: "numeric",
        //     minute: "numeric",
        // });

        // const UTC_Luna =
        //     datosJson.city.sunset * 1000 +
        //     UTC_TimezoneOffset_Local +
        //     UTC_TimezoneOffset_Pais;

        // const LUNA = new Date(
        //     datosJson.city.sunset * 1000 +
        //     UTC_TimezoneOffset_Local +
        //     UTC_TimezoneOffset_Pais
        // ).toLocaleTimeString("es-AR", {
        //     hour24: "true",
        //     hour: "numeric",
        //     minute: "numeric",
        // });

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

        // const NOCHE = UTC_Pais >= UTC_Luna || UTC_Pais < UTC_Sol;
        // console.log("NOCHE :>> ", NOCHE);

        let data = datosJson.daily.map(function (item, index) {

            const UTC_FECHA_Pronostico =
                item.dt * 1000 +
                UTC_TimezoneOffset_Local +
                UTC_TimezoneOffset_Pais;

            const FECHA_Pronostico = new Date(UTC_FECHA_Pronostico).
                toLocaleDateString("es-AR", {
                    weekday: "long",
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                });
            const FECHA_Pronostico_Corto = new Date(UTC_FECHA_Pronostico).
                toLocaleDateString("es-AR", {
                    weekday: "short",
                    day: "numeric",
                });

            const HORA_Pronostico = new Date(UTC_FECHA_Pronostico).
                toLocaleTimeString("es-AR", {
                    hour24: "true",
                    hour: "numeric",
                    minute: "numeric",
                });

            return {
                FECHAPronostico: FECHA_Pronostico,
                FECHA_Pronostico_Corto: FECHA_Pronostico_Corto,
                // HORAPronostico: HORA_Pronostico,
                // Temperatura: `${item.main.temp.toFixed(0)}°`,
                // Termica: `${item.main.feels_like.toFixed(0)}°`,
                Maxima: `${item.temp.max.toFixed(1)}°`,
                Minima: `${item.temp.min.toFixed(1)}°`,
                // Humedad: `${item.main.humidity} %`,
                // Presion: `${item.main.pressure} hPa`,
                // Viento: `${(item.wind.speed * 3.6).toFixed(0)} km/h`,
                // Dirección: `${item.wind.deg}°`,
                // Visibilidad: `${(item.visibility / 1000).toFixed(0)} km`,
                // Pais: datosJson.city.country,
                // Ciudad: datosJson.city.name,
                // Amanecer: SOL,
                // Atardecer: LUNA,
                Fecha: FECHA,
                Icono: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                // Imagen: item.weather[0].main === "Thunderstorm"
                //     ? Thunderstorm
                //     : item.weather[0].main === "Drizzle"
                //         ? Drizzle
                //         : item.weather[0].main === "Rain"
                //             ? Rain
                //             : item.weather[0].main === "Snow"
                //                 ? Snow
                //                 : item.weather[0].id >= "700" &&
                //                     item.weather[0].id <= "799"
                //                     ? Bruma
                //                     : item.weather[0].main === "Clear" && NOCHE === false
                //                         ? Clear
                //                         : item.weather[0].main === "Clear" && NOCHE === true
                //                             ? Noche_Clara
                //                             : item.weather[0].main === "Clouds" && NOCHE === false
                //                                 ? Clouds
                //                                 : item.weather[0].main === "Clouds" && NOCHE === true
                //                                     ? Noche_Nublada
                //                                     : cielo,
                Estado: item.weather[0].description.toUpperCase(),

            }
        })
        // console.log('ApiPronostico data', data, typeof data)
        return data;
    }
    return {}
}