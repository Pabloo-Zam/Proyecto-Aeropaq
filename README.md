a. Tecnologías y versiones

Este proyecto fue desarrollado como una aplicación web estática usando React y Vite. La interfaz fue construida con JSX y CSS, manteniendo una estructura modular basada en componentes reutilizables. La navegación interna del sitio se implementó con React Router DOM, utilizando HashRouter para asegurar compatibilidad con GitHub Pages. El despliegue se realizó mediante GitHub Pages y la publicación del build se gestionó con la librería gh-pages.

Tecnologías principales utilizadas:

React
Vite
React Router DOM
CSS
Git y GitHub
GitHub Pages
gh-pages

Versiones recomendadas o utilizadas en el proyecto:

Node.js versión 18 o superior
npm versión 9 o superior
React 19
Vite 7


b. Cómo ejecutar el proyecto

Primero se debe clonar el repositorio en la máquina local. Después, se debe ingresar a la carpeta del proyecto e instalar las dependencias con npm. Una vez instaladas, se puede iniciar el servidor de desarrollo para visualizar la aplicación en el navegador.

Comandos básicos:

git clone https://github.com/TU_USUARIO/Proyecto-Aeropaq.git
cd Proyecto-Aeropaq
npm install
npm run dev

Después de ejecutar npm run dev, Vite mostrará una dirección local en la terminal, normalmente similar a http://localhost:5173/, desde donde se podrá abrir el proyecto en el navegador.

c. Decisiones técnicas relevantes

El proyecto fue organizado con una estructura modular para facilitar el mantenimiento, la escalabilidad y la reutilización de componentes. Se separaron las páginas principales, los componentes visuales, el enrutador, los estilos y las utilidades, con el objetivo de mantener una distribución clara del código.

La carpeta components contiene los componentes reutilizables del sitio. Dentro de ella se separaron los componentes de estructura general, como la barra de navegación y el pie de página, y los componentes de la pantalla de inicio, como portada, servicios, cobertura, cómo funciona, nosotros, preguntas frecuentes y contacto. Esto permitió dividir la landing page en bloques independientes y fáciles de modificar.

La carpeta pages contiene las vistas principales de la aplicación. Se utilizó una página de inicio, una página para el cotizador y páginas separadas para cada servicio, con el objetivo de manejar un sitio multipágina dentro de React.
