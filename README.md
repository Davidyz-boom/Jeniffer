# 🏢 ControlLabs API - Scaffold Base (Sesión 1)

Proyecto base desarrollado con **Node.js** y **Express.js** aplicando **Clean Architecture** para el Sistema de Préstamo de Salas de Cómputo del SENA.

---

## 🏛️ Estructura de Directorios (Clean Architecture Scaffold)

El proyecto organiza sus carpetas por capas de responsabilidad:

```text
control-labs-api/
├── .env                  # Variables de entorno (puerto, configuraciones locales)
├── .env.example          # Plantilla del archivo de entorno
├── .gitignore            # Exclusión de node_modules/ y .env
├── package.json          # Metadatos, scripts ("dev", "start") y dependencias
├── server.js             # Punto de entrada exclusivo HTTP (listen y dotenv)
├── README.md             # Documentación del proyecto
└── src/
    ├── app.js            # Configuración de Express, middlewares y rutas
    ├── config/           # Conexión a BD y configuraciones de terceros
    ├── controllers/      # Controladores HTTP (reciben req, envían res)
    ├── middlewares/      # Middlewares (autenticación, logging, errores)
    ├── models/           # Modelos de base de datos
    ├── routes/           # Enrutadores modulares de Express
    └── services/         # Lógica pura del negocio (reglas SENA)
```

---

## 🚀 Scripts Disponibles

En la terminal puedes ejecutar:

- **Modo Desarrollo (con Nodemon):**
  ```bash
  npm run dev
  ```

- **Modo Producción:**
  ```bash
  npm start
  ```

---

## 🩺 Endpoint de Prueba (Health Check)

- **URL:** `http://localhost:3000/api/v1/health`
- **Método:** `GET`
- **Respuesta esperada:**
  ```json
  {
    "status": "success",
    "message": "ControlLabs API operando correctamente",
    "timestamp": "2026-11-24T..."
  }
  ```
