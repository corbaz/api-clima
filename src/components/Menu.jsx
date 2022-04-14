import React from "react";
import { Provider } from "react-redux";
import logo from "../../assets/favicon.svg";

export const Menu = (props) => {
  const { datos, ciudades, setPais, setCiudad } = props;

  const tw = {
    nav: `fixed z-30 top-0 left-0 right-0 bg-[#174a9b] px-3 py-3`,

    titulo_logo: `self-center text-2xl font-semibold whitespace-nowrap text-white`,

    menu_hamburguesa: `flex justify-center items-center md:order-2`,

    boton_hamburguesa: `inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-white`,

    menu_paises: `hidden justify-between items-center w-full md:flex md:w-auto md:order-1`,

    ul: `flex flex-col mt-4 
      md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium`,

    li: `flex justify-center`,

    boton: `block py-2 pr-4 pl-3 text-blue-300 
      bg-transparent border-transparent border-b-2
      hover:text-white hover:border-b-2 hover:border-white`,
  };

  const abrirMenu = () => {
    const div = document.getElementById("mobile-menu-clima5");
    div.classList.toggle("hidden");
  };

  return (
    //Menu Nav
    <nav className={tw.nav}>
      {/* Contenedor del Menu Gral. */}
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Logo va a Presentacion */}
        <button className="flex items-center" onClick={() => setCiudad("")}>
          <img src={logo} className="mr-1 h-6 sm:h-9" alt={datos.titulo} />
          <span className={tw.titulo_logo}>{datos.titulo}</span>
        </button>

        {/*Menu Hamburguesa */}
        <div className={tw.menu_hamburguesa}>
          <button
            data-collapse-toggle="mobile-menu-clima5"
            type="button"
            className={tw.boton_hamburguesa}
            aria-controls="mobile-menu-clima5"
            aria-expanded="false"
            onClick={abrirMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Paises */}
        <div id="mobile-menu-clima5" className={tw.menu_paises}>
          <ul className={tw.ul}>
            {ciudades.map((item, index) => {
              return (
                <li key={index} className={tw.li}>
                  <button
                    type="button"
                    className={tw.boton}
                    onClick={() => {
                      setPais(item.pais);
                      setCiudad(item.ciudad);
                      abrirMenu();
                    }}
                  >
                    {item.ciudad}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
