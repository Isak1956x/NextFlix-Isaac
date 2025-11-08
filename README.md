<img width="1729" height="855" alt="image" src="https://github.com/user-attachments/assets/7a10a49b-0d7d-408e-84a0-cd3ccdc8e7e2" />
<p align="center">
  <img src="https://i.imgur.com/f3xWv9u.png" alt="NextFlix Banner" width="100%">
</p>

<h1 align="center">🎬 NextFlix — App de Gestión de Cine</h1>

<p align="center">
  <em>Tu propia plataforma de series, creada con Node.js, Express y Handlebars.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js" alt="Node.js Badge">
  <img src="https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express" alt="Express Badge">
  <img src="https://img.shields.io/badge/Handlebars-HBS-orange?logo=handlebarsdotjs" alt="Handlebars Badge">
  <img src="https://img.shields.io/badge/Bootstrap-5.x-blueviolet?logo=bootstrap" alt="Bootstrap Badge">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License Badge">
</p>

---

## 🚀 Objetivo General
Desarrollar una **aplicación de gestión de cine** utilizando **Node.js** y **Express.js**, implementando la arquitectura **MVC (Modelo-Vista-Controlador)** con **persistencia en archivos JSON** para el manejo de datos.

---

## 🧩 Características Principales

### 🏠 **Home**
- Menú principal con opciones:
  - 🏠 Ir al Home  
  - 🎞️ Series  
  - 🎭 Géneros  
- Muestra un listado de series con:
  - 📺 Nombre  
  - 🖼️ Imagen de portada  
  - 🎭 Género  
  - 🔘 Botón “Ver Detalle” (título + reproductor de YouTube)  
- Filtros disponibles:
  - 🔍 Buscar por nombre.  
  - 🎛️ Filtrar por género (select dinámico).

---

### 🎞️ **Mantenimiento de Series**
- 📋 Listado con todas las series registradas.
- ➕ **Crear nueva serie**:
  - Campos: nombre, imagen, video (YouTube) y género.
  - Validaciones: todos los campos requeridos.
- ✏️ **Editar serie** existente con datos precargados.
- ❌ **Eliminar serie** con confirmación antes de borrar.
- 🔁 Redirección automática al listado tras crear, editar o eliminar.

---

### 🎭 **Mantenimiento de Géneros**
- 📋 Listado con todos los géneros.
- ➕ **Crear género nuevo** (nombre requerido).
- ✏️ **Editar género existente** con datos precargados.
- ❌ **Eliminar género** con confirmación.
- 🔁 Redirección automática tras cada acción.

---

## ⚙️ Requerimientos Técnicos

- 🟢 **Node.js** como entorno de ejecución.  
- ⚡ **Express.js** como framework principal.  
- 🧱 Patrón **MVC (Modelo - Vista - Controlador)**.  
- 🎨 **Bootstrap 5** para diseño y estilo.  
- 💾 **Persistencia con archivos JSON** (simulando base de datos).  
- 🪄 **Handlebars (HBS)** como motor de plantillas, con layout principal `layout.hbs`.

---



