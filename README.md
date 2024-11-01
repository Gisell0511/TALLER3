# Taller Grupal 3: Simulación de Inicio de Sesión con Consumo de API 👥

## 🎯 Objetivo
Crear una aplicación que simule el inicio de sesión de usuarios y consuma una API externa. La temática de la aplicación es libre y puede incluir recetas, libros, películas, productos, etc.

## 🌐 Integrantes
- **Gisell**
- **Andrea**
- **Maria**

## 📁 Estructura del Proyecto
El proyecto está organizado en las siguientes páginas:

- **`src/pages/Login.js`**: Página de inicio de sesión.
- **`src/pages/Register.js`**: Página de registro de usuarios.
- **`src/pages/Home.js`**: Página principal que se carga después de iniciar sesión.
- **`src/pages/ApiResults.js`**: Página que muestra los resultados de la API consumida.

## 🗺 Organización de Rutas
- **`/login`**: Carga el componente `Login`.
- **`/register`**: Carga el componente `Register`.
- **`/home`**: Carga el componente `Home` (solo accesible si el usuario está autenticado).
- **`/results`**: Carga el componente `ApiResults` que muestra los datos consumidos desde la API (solo accesible si el usuario está autenticado).
- **Ruta 404**: Manejo de páginas inexistentes.

## ⚠️ Requisitos Importantes
- Implementar formularios en `Login.js` y `Register.js` que actualicen el estado de autenticación con Redux.
- Validar que el usuario esté autenticado para acceder a las rutas protegidas (`/home`, `/results`).
- Usar una API accesible y sin restricciones de token o autenticación.

## 🚀 Despliegue
- **Repositorio**: [Enlace a tu repositorio de GitHub](URL_DE_TU_REPOSITORIO)
- **Proyecto Desplegado**: [Enlace al proyecto desplegado en Netlify](URL_DE_TU_PROYECTO)

## 📅 Fecha Límite
**31 de octubre**

## 🤝 Contribuciones
Si tienes preguntas o necesitas ayuda, no dudes en contactarnos. ¡Estamos aquí para apoyarte! 

---

¡Gracias por revisar nuestro proyecto! 🎉
