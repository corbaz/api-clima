import { useState, useEffect } from "react";

import Portada from "../../assets/Portada.webp";

// import cielo from "../../assets/Cielo.webp";
// import Thunderstorm from "../../assets/Thunderstorm.webp";
// import Rain from "../../assets/Rain.webp";
// import Drizzle from "../../assets/Drizzle.webp";
// import Snow from "../../assets/Snow.webp";
// import Bruma from "../../assets/Bruma.webp";
// import Clear from "../../assets/Clear.webp";
// import Noche_Clara from "../../assets/Noche_Clara.webp";
// import Clouds from "../../assets/Clouds.webp";
// import Noche_Nublada from "../../assets/Noche_Nublada.webp";

import ApiClima from "./ApiClima";
import { Clima5 } from "./Clima5";

import ApiPronostico from "./ApiPronostico";
import { ClimaP } from "./ClimaP";

import { Presentacion } from "./Presentacion";

export const Main = (props) => {
  const { datos, pais, ciudad } = props;
  const [clima, setClima] = useState({});
  const [pronostico, setPronostico] = useState({});

  useEffect(() => {
    const API = async () => {
      if (ciudad) {
        setClima(await ApiClima(ciudad));
        if (clima.Latitud !== undefined) {
          setPronostico(await ApiPronostico(clima.Latitud, clima.Longitud));
        }

        // } else {
        //   alert("No hay datos para mostrar");
        // }
      } else {
        setClima({ Imagen: Portada });
      }
      return;
    };
    API();
  }, [ciudad, clima.Latitud !== undefined]);

  return (
    <div
      className="min-h-screen w-full z-10 flex bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${clima.Imagen})` }}
    >
      {clima.Temperatura !== undefined && ciudad ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-4 mt-20 md:mt-32 mx-auto mb-6">
          <Clima5 datos={datos} ciudad={ciudad} pais={pais} clima={clima} />
          <ClimaP
            datos={datos}
            ciudad={ciudad}
            pais={pais}
            pronostico={pronostico}
          />
        </div>
      ) : (
        <Presentacion datos={datos} />
      )}
    </div>
  );
};
