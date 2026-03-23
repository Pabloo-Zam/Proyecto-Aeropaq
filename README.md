# AeroPaq - Plataforma Web Logística

## a. Tecnologías y versiones
Este proyecto fue desarrollado como una aplicación web estática utilizando React y Vite. La interfaz se construyó dividiendo la vista en componentes modulares y reutilizables, estilizados con CSS nativo. Para la navegación interna se implementó `react-router-dom` (usando `HashRouter` para evitar conflictos de rutas al desplegar en GitHub Pages). El despliegue final se maneja a través de GitHub Pages utilizando el paquete `gh-pages`.

**Versiones principales utilizadas:**
* Node.js (v18+)
* React (v18.2.0)
* Vite (v5.1.0)
* React Router DOM (v6.x)

## b. Cómo ejecutar el proyecto localmente
Para probar la aplicación en tu entorno local, asegúrate de tener Node.js instalado y sigue estos pasos en tu terminal:

1. Clona el repositorio:
   `git clone https://github.com/Pabloo-Zam/Proyecto-Aeropaq.git`
2. Ingresa a la carpeta del proyecto:
   `cd Proyecto-Aeropaq`
3. Instala las dependencias:
   `npm install`
4. Levanta el servidor de desarrollo:
   `npm run dev`

Al finalizar, Vite te mostrará en la consola una dirección local (usualmente `http://localhost:5173/`), a la cual puedes ingresar desde tu navegador para ver la página en vivo.

## c. Decisiones técnicas relevantes
* **Estructura de Componentes y Vistas:** Se dividió el proyecto separando los elementos UI reutilizables (como la barra de navegación, el pie de página y las tarjetas de servicio) en la carpeta `src/components/`, y las pantallas completas en `src/pages/`. Esto mantiene el código ordenado y facilita agregar nuevas funcionalidades o rutas en el futuro.
* **Enrutamiento:** Se optó por usar `HashRouter` en lugar del clásico `BrowserRouter`. Al ser una SPA (Single Page Application) estática alojada en GitHub Pages, esto previene el clásico error 404 que ocurre al intentar recargar la página directamente desde rutas específicas como la del cotizador.
* **Cotizador Dinámico en el Frontend:** Toda la lógica del cálculo de tarifas de envíos se maneja de forma reactiva en el cliente mediante estados de React (`useState`). Esto permite mostrarle al usuario el desglose de precios al instante, sin necesidad de conectarse a un servidor externo o recargar la página.
