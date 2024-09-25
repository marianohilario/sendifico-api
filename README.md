<p align="center">
  <a href="https://sendifico.com" target="blank"><img src="https://sendifico.com/wp-content/uploads/2022/09/Logo-Sendifico.png" width="500"></a>
</p>

# Sendifico API

## Descripción

Sendifico API es una aplicación que permite obtener información sobre Pokemon utilizando la PokeAPI. Proporciona endpoints para obtener una lista de Pokemon, así como detalles específicos de un Pokemon y sus tipos.

### Tecnologías Utilizadas

- **NestJS**: Un framework de Node.js para construir aplicaciones del lado del servidor.
- **Axios**: Una biblioteca para hacer solicitudes HTTP.
- **TypeScript**: Un superconjunto de JavaScript que permite la tipificación estática.

## Endpoints

- **GET `/api/pokemon`**: Devuelve una lista de los primeros 100 Pokemon.
- **GET `/api/pokemon/:id`**: Devuelve información sobre un Pokemon específico, incluyendo su nombre y tipos.
- **GET `/api/pokemonAndTypes/:id`**: Devuelve información sobre un Pokemon específico, incluyendo su nombre, tipos y traducciones en español y japonés.

## Instrucciones para Ejecutar la API

### Prerequisitos

1. **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. **npm**: El gestor de paquetes de Node.js.

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/marianohilario/sendifico-api
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

### Ejecución de la API

Para ejecutar la API en modo desarrollo, utiliza el siguiente comando:

```bash
npm run start:dev
```

La API estará disponible en **http://localhost:3000**

## Endpoints

### Obtener un saludo

**GET /**

Devuelve un saludo de bienvenida.

### Obtener todos los Pokemon

**GET /api/pokemon**

Devuelve una lista de los primeros 100 Pokemon.

### Obtener un Pokemon por ID

**GET /api/pokemon/:id**

Devuelve la información del Pokemon correspondiente al ID proporcionado. Si el Pokemon no se encuentra, se lanzará un error 400 (Bad Request).

### Obtener un Pokemon y sus tipos por ID

**GET /api/pokemonAndTypes/:id**

Devuelve la información del Pokemon y detalles sobre sus tipos. Si el Pokemon no se encuentra, se lanzará un error 400 (Bad Request).

## Manejo de Errores

**400 Bad Request:** Cuando se intenta acceder a un Pokemon que no existe.

**503 Service Unavailable:** Cuando la API de Pokemon externa no está disponible.

Proyecto Realizado por [Mariano Hilario](https://www.linkedin.com/in/marianohilario/)
