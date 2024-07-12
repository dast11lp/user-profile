

# Perfil de Usuario - Página Web

## Descripción

Este proyecto es una página web de perfil de usuario que incluye información básica, una lista de intereses y una sección de contacto. La página está construida usando Next.js 14 y React, con estilos responsivos sin frameworks de CSS como Bootstrap.

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/dast11lp/user-profile.git
    cd user-profile
    ```

2. Instala las dependencias:

    Usando npm:

    ```bash
    npm install
    ```

    Usando yarn:

    ```bash
    yarn install
    ```

## Uso

1. Inicia el servidor de desarrollo:

    Usando npm:

    ```bash
    npm run dev
    ```

    Usando yarn:

    ```bash
    yarn dev
    ```

2. Abre el navegador y ve a [http://localhost:3000](http://localhost:3000) para ver la página web. (en caso de que el puerto ya se encuentre ocupado, utilizará el siguiente, para esta seguros mirar la consola)

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev` o `yarn dev`: Inicia el servidor de desarrollo.
- `npm run build` o `yarn build`: Compila la aplicación para producción.

## Funcionalidades

- **Cabecera:** Muestra el nombre del usuario y una imagen de perfil.
- **Sección Sobre Mí:** Contiene una breve descripción del usuario.
- **Lista de Intereses:** Muestra una lista de intereses del usuario.
- **Formulario de Contacto:** Incluye campos para nombre, email y mensaje, con validación básica y mensaje de éxito al enviar.
