# Blog Microservicios

Este repositorio contiene una aplicación basada en microservicios que incluye una API en FastAPI, una aplicación web en Flask, una base de datos PostgreSQL y un proxy inverso con Nginx. La aplicación está orquestada con Docker Compose.

## 👩🏼 Autor

[@estudiante](https://github.com/estudiante)

## 📂 Estructura del Proyecto

  ```
  blog-microservicios/
  ├── .gitignore
  ├── README.md             # este archivo
  ├── docker-compose.yml    # Configuración del grupo de contenedores
  ├── database/             # Base de datos PostgreSQL
  │   ├── Dockerfile        # Configuración del contenedor 'database'
  │   └── init.sql          # Script de inicialización
  ├── api/                  # API desarrollada en FastAPI
  │   ├── Dockerfile        # Configuración del contenedor 'api'
  │   ├── requirements.txt  # dependencias del proyecto 'api'
  │   └── app/
  │       └── main.py       # Punto de entrada
  ├── web/                  # Aplicación web en Flask
  │   ├── Dockerfile        # Configuración del contenedor 'web'
  │   ├── requirements.txt  # dependencias del proyecto 'web'
  │   └── app/
  │       └── main.py       # Punto de entrada
  └── proxy/                # Nginx como proxy inverso
      ├── Dockerfile        # Configuración del contenedor 'proxy'
      └── nginx.conf        # Configuración de Nginx
  ```

## 🚀 Ejecución

1. Clonar el repositorio:

  ```bash
  git clone https://github.com/estudiante/blog-microservicios.git
  cd blog-microservicios
  ```

2. Construir y levantar los servicios:

   ```bash
   docker-compose up --build
   ```

3. Desde el navegador, acceder a: [http://localhost](http://localhost)

## 🛠 Tecnologías

- **FastAPI** (API Backend)
- **Flask** (Aplicación Web)
- **PostgreSQL** (Base de Datos)
- **Nginx** (Proxy Inverso)
- **Docker & Docker Compose** (Contenerización y Orquestación)

