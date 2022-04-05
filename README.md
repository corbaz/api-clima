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


-------------------------------------------------------------------
Creacióon de archivos de configuración de Tailwind CSS y de PostCSS
-------------------------------------------------------------------
'tailwind.config.js' - 'postcss.config.js'
-------------------------------------------------------------------

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


para el mensaje de Warning: "Unknown at rule @tailwind",

1. Simplemente vaya a la configuración de usuario (ctrl +,) para acceso directo.
2. Busque CSS en la barra de búsqueda. 
3. Busque el (CSS> Lint:Unknown At Rules) 
4. Seleccione "Ignorar" de las opciones desplegables.

```

### Documentación Oficial de Vite: https://vitejs.dev/

### Documentación Oficial de React: https://es.reactjs.org/

### Documentación Oficial de TailwindCSS: https://tailwindcss.com


git init

Quick setup — if you’ve done this kind of thing before
or	
https://github.com/corbaz/api-clima.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# api-clima" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/corbaz/api-clima.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/corbaz/api-clima.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.