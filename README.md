# Proyecto Clima

## Vite.js + React + Tailwind CSS v3

```
-------------
Instalar VITE
-------------

Con NPM :
_________

npm create vite@latest


Con Yarn:
_________

yarn create vite


__________________________________
Instalar dependencias mode_modules
__________________________________

Con NPM:    npm i


Con Yarn:   yarn


---------------------
Instalar TAILWIND 3.0
---------------------

Con NPM:

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest


Con Yarn:

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest


----------------------------------------------------------------
Creamos el archivo de configuración de Tailwind CSS y de PostCSS
----------------------------------------------------------------
'tailwind.config.js' - 'postcss.config.js'
----------------------------------------------------------------

npx tailwindcss init -p


en el archivo generado 'tailwind.config.js' modificamos el content:

module.exports = {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
    extend: {},
  },
  plugins: [],
};


agregaremos las directivas en el index.css

/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

```