# 🌤️ Weather App - REST API Integration

Aplicación web dinámica para la consulta meteorológica en tiempo real. Este proyecto se centra en el consumo asíncrono de APIs REST de terceros y la actualización dinámica de la interfaz de usuario basándose en peticiones de red.

🔗 **[Ver Demo en Vivo](https://appclimatejs.netlify.app)**

## 🚀 Características Principales

* **Búsqueda en Tiempo Real:** Consulta de condiciones climáticas actuales mediante entrada del usuario.
* **Consumo de API REST:** Integración con servicios meteorológicos externos utilizando `fetch` y promesas (`async/await`).
* **Manipulación del DOM:** Renderizado dinámico de los datos estructurados (JSON) devueltos por la API directamente en la vista.
* **Manejo de Errores:** Captura y gestión de respuestas fallidas de red para mejorar la experiencia de usuario (UX).

## 🛠️ Tecnologías Utilizadas

* **Vanilla JavaScript (ES6+)**
* **Integración de APIs de Terceros**
* **HTML5 & CSS3**

## 🧠 Retos Técnicos
El núcleo arquitectónico de esta aplicación reside en el manejo de operaciones asíncronas en JavaScript. Se priorizó un código modular para separar la lógica de la petición de red (fetching) de la lógica de renderizado visual, asegurando buenas prácticas en el ciclo de vida de la aplicación.
