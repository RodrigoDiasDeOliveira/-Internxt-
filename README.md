# -Internxt-
![internext II](https://github.com/user-attachments/assets/d00623c0-29a6-4fe7-88f9-3baa7bd4f1f9)

Internxt - Proyecto de Gestión de Archivos Descripción Internxt es una aplicación web diseñada para gestionar archivos de manera segura y eficiente. Permite a los usuarios subir, listar, descargar y eliminar archivos, aplicando las mejores prácticas de seguridad y privacidad.

Requisitos Frontend React con TypeScript: Para desarrollar una interfaz sencilla y atractiva. Rutas de autenticación: Autenticación de usuarios mediante JWT. Gestión de estado: Uso de Hooks y Context API o Redux para manejar el estado global. Seguridad: Protección de rutas para usuarios autenticados y cifrado de archivos utilizando AES-256. Backend Node.js y Express: Para crear una API RESTful que permita operaciones CRUD. MongoDB: Para almacenar metadatos de archivos (nombre, fecha de subida, usuario). Cifrado: Uso de AES-256 para cifrar archivos antes de almacenarlos. Autenticación: Implementación de JWT para proteger las rutas de la API.

Instalación Clona el repositorio:

bash git clone [URL del repositorio] cd internxt Instala las dependencias del frontend:

bash cd frontend npm install Instala las dependencias del backend:

bash cd backend npm install Configura las variables de entorno para el backend en un archivo .env.

Ejecución Para ejecutar la aplicación:

Inicia el servidor del backend:

bash cd backend npm run dev Inicia el servidor del frontend:

bash cd frontend npm run dev La aplicación estará disponible en http://localhost:3000.

Pruebas Utiliza Postman o Insomnia para probar las operaciones de carga, listado, descarga y eliminación de archivos, así como el registro e inicio de sesión de usuarios.

Cumplimiento con GDPR Internxt se toma en serio la privacidad y seguridad del usuario. Implementa:

Derecho al olvido: Endpoint para eliminar todos los archivos y datos asociados de forma permanente. Portabilidad de datos: Endpoint para descargar todos los archivos y datos personales en un archivo comprimido. Consentimiento y registro de actividades: Sistema para rastrear y registrar todas las actividades relacionadas con los archivos del usuario. Contribuciones Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

Licencia Este proyecto está bajo la licencia [Nombre de la licencia].

Edit in StackBlitz next generation editor ⚡️

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/RodrigoDiasDeOliveira/-Internxt-)
