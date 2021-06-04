# api

> challenge colektia

# Paso 1

Forkearse el repositorio o descargarlo.

# Paso 2

Tener instalado Node.js

# Paso 3

Crea una base de datos llamada peliculas con mysql.
Tener un usuario y contraseña para conectarse a la misma.
En mi caso utilice xampp.

# Paso 3

Abrir el directorio por linea de comando entrar en la carpeta api .

# Paso 4

Una vez que entramos en la carpeta api hacer npm install , para descargar las dependencias del proyecto.

# Paso 5

Cuando se terminen de descargar las dependencias hacer npm start para correr el backend.

# Paso 6

Escribir en el navegador la siguiente direccion http://localhost:3000/ , si nos da el siguiente mensaje hicimos las cosas bien Cannot Get /

# Paso 7

Si queremos probar solamente el backend , podemos usar Postman para chequear las rutas del back.Con los siguentes endpoint:

- [ ] **GET /movie**:
  - Devuelve las peliculas de la base de datos.
- [ ] **POST /movie/**:
  - Agrega una pelicula a la base de datos .Se le pasan los datos por body.
- [ ] **PUT /movie/:id**:
  - Dado un id de pelicula modifica esa pelicula con los datos que vienen en el body.
- [ ] **DELETE /movie/id**:
  - Elimina una pelicula con el id de pelicula de la base de datos.
