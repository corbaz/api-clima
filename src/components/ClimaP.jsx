import React from "react";

export const ClimaP = (props) => {
  const { datos } = props;
  const { ciudad, pais, pronostico } = props;
  let dia = "";

  return (
    <div
      className="h-[651px] md:h-[675px] w-[375px] p-4
      text-center text-gray-100
      bg-gray-700 bg-clip-padding bg-opacity-30 shadow-lg
      border-t-2 border-l-2 border-b border-r border-gray-300 rounded-3xl 
      mx-auto"
      style={{
        backdropFilter: blur("20px"),
      }}
    >
      <div className="my-auto">
        {pronostico[0] !== undefined &&
          pronostico.map((item, index) => {
            // const cabeceraDia = () => {
            //   dia = item.FECHAPronostico;
            //   return <div className="text-2xl mb-6">{item.FECHAPronostico}</div>;
            // };
            // const cambiarDia = () => {
            //   dia = item.FECHAPronostico;
            // };

            return (
              <div
                key={index}
                className="h-[72px] bg-menu bg-clip-padding bg-opacity-30 rounded-lg my-1 mx-1 md:my-2 md:mt-1"
              >
                <div className="grid grid-rows-3 grid-cols-3 mx-auto my-auto  text-xl h-[72px] ">
                  <div>
                    <div className="text-2xl row-span-1 flex justify-center">
                      {item.FECHA_Pronostico_Corto}
                    </div>
                    <div className="grid row-span-2 py-auto">
                      <img
                        src={item.Icono}
                        className="h-14 w-14 mx-auto -my-3"
                        alt={item.Estado}
                      />
                    </div>
                  </div>

                  <div className="text-3xl row-span-3 flex justify-center items-center">
                    {item.Minima}
                  </div>
                  <div className="text-3xl row-span-3 flex justify-center items-center ">
                    {item.Maxima}
                  </div>
                </div>
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
};
