import { useState, useEffect } from "react";

import Portada from "../../assets/Portada.webp";

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
    const consultarClima = async () => {
      if (ciudad) {
        setClima(await ApiClima(ciudad));
      } else {
        setClima({ Imagen: Portada });
      }
    };
    consultarClima();
    return;
  }, [ciudad]);

  useEffect(() => {
    const consultarPronostico = async () => {
      if (clima.Latitud && clima.Longitud) {
        setPronostico(await ApiPronostico(clima.Latitud, clima.Longitud));
      }
    };
    consultarPronostico();
    return;
  }, [clima]);

  return (
    <div
      className="min-h-screen w-full z-10 flex bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${clima.Imagen})` }}
    >
      {clima.Temperatura !== undefined && ciudad ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-4 mt-20 md:mt-32 mx-auto mb-6">
          <Clima5 datos={datos} ciudad={ciudad} pais={pais} clima={clima} />
          <ClimaP pronostico={pronostico} />
        </div>
      ) : (
        <Presentacion datos={datos} />
      )}
    </div>
  );
};
