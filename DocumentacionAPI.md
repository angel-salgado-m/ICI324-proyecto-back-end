# Documentación API REST de proyecto de medidores de gas

# Introducción

Esta API proporciona consultas y datos generales de la base de datos a ser utilizada para la aplicación web de medidores de gas, para ser usado por sus trabajadores.
Contiene distintos tipos de consultas a las tablas disponibles y tambien actualizaciones a distintas tablas.


### Versiones
- [v1]: [Primera iteración de la API, queries CRUD basicas]

## Endpoints

### **[cliente]**
Obtener todos los clientes:
- **Método HTTP**: [GET]
- **Ruta**: [/cliente/allClientes]
- **Descripción**: [Este endpoint devuelve todos los clientes disponibles en la base de datos.]
- **Parámetros de entrada**:
  - No tiene parametros de entrada
- **Respuestas esperadas**:
  - Código de estado 200: [Cuando se devuelve el JSON de la tabla clientes correctamente.]
  - Código de estado 500: [Cuando el back-end no encuentra la tabla de clientes o no se conecta a la base de datos]

---

### **[Trabajador]**
Obtener todos los trabajadores
- **Método HTTP**: [GET]
- **Ruta**: [/trabajador/allTrabajadores]
- **Descripción**: [Este endpoint permite obtener una lista de todos los trabajadores registrados en el sistema.]
- **Parámetros de entrada**:
  - No tiene parametros de entrada.
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve el JSON de la tabla trabajador correctamente]
  - Código de estado 500: [Cuando el back-end no encuentra la tabla de trabajadores o no se conecta a la base de datos]

Obtener trabajador por cargo
- **Método HTTP**: [GET]
- **Ruta**: [/trabajador/:cargo]
- **Descripción**: [Este endpoint permite obtener una lista de todos los trabajadores registrados en el sistema segun su cargo.]
- **Parámetros de entrada**:
  - `cargo` (obligatorio): El cargo de los trabajadores que se quieren ver (Puede ser "Lector" o "Inspector")
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve el JSON de la consulta correctamente]
  - Código de estado 400: [Cuando el cargo que se busca no es valido]
  - Código de estado 500: [Cuando el back-end no ejecuta bien la consulta o no se conecta a la base de datos]

Actualizar nombre del trabajador
- **Método HTTP**: [PUT]
- **Ruta**: [/trabajador/:rut]
- **Descripción**: [Este endpoint permite cambiar el nombre a un trabajador segun su RUT]
- **Parámetros de entrada**:
  - `rut` (obligatorio): El rut del trabajador al que se le cambiara el nombre.
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve un JSON con el codigo y la cantidad de filas afectadas.]
  - Código de estado 500: [Cuando el back-end no ejecuta bien la consulta o no se conecta a la base de datos]
  
Añadir trabajador a la tabla trabajador
- **Método HTTP**: [POST]
- **Ruta**: [/trabajador/add]
- **Descripción**: [Este endpoint permite añadir un trabajador a la base de datos]
- **Parámetros de entrada**:
  - `rut` (obligatorio): El rut del trabajador que será añadido a la base de datos.
  - `idSector` (obligatorio): El sector al que pertenece el trabajador.
  - `nombre` (obligatorio): El nombre del trabajador.
  - `password` (obligatorio): Contraseña del trabajador.
  - `cargo` (obligatorio): Cargo del trabajador ("Lector" o "Inspector").
  - `horario` (obligatorio): Horario que posee el trabajador.
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve un JSON con el codigo y la cantidad de filas afectadas.]
  - Código de estado 500: [Cuando el back-end no ejecuta bien la consulta o no se conecta a la base de datos]
  
---

  ### **[Sector]**
Actualizar sucursal de un sector según ID
- **Método HTTP**: [PUT]
- **Ruta**: [/sector/:id]
- **Descripción**: [Este endpoint permite actualizar la sucursal de un sector según la ID en la dirección y su nombre entregado.]
- **Parámetros de entrada**:
- `sucursal` (obligatorio): Nombre de la nueva sucursal.
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve el JSON con el codigo y la respuesta de la query]
  - Código de estado 500: [Cuando el back-end no encuentra la tabla de trabajadores o no se conecta a la base de datos]

---

### **[Consultas]**
Obtener resultados de consultas por ID
- **Método HTTP**: [GET]
- **Ruta**: [/consulta/:id]
- **Descripción**: [Este endpoint permite ejecutar una consulta específica en la base de datos y recuperar sus resultados.]
- **Parámetros de entrada**:
  - `id` (obligatorio): El ID de la consulta que se ejecutará.
- **Respuestas esperadas**:
  - Código de estado 200: [La solicitud se completó con éxito y se devuelven los resultados de la consulta.]
  - Código de estado 400: [La consulta especificada no se encontró o no es válida.]
  - Código de estado 500: [Cuando existe un error interno en el servidor]

**Consultas SELECT disponibles**
1. Mostrar a todos los trabajadores y sus sectores.
2. Mostrar todas las direcciones y los nombres de los clientes correspondientes.
3. Seleccionar todos los trabajadores y sus respectivos sectores y rutas.
4. Obtener todas las direcciones de una sucursal específica.
5. Listar todos los registros que son del tipo 'Novedad'.

---

## Autenticación y Autorización
En siguientes entregas, se tiene planeado crear un sistema de login, donde el trabajador puede ingresar usando su rut/contraseña. Una vez ingresado, éste puede tener distintas facultades dentro del sistema
- **Autenticación**:
  - [Un formulario de login con sus respectivas medidas de seguridad.]
- **Autorización**:
  - [Según atributo de 'cargo' que tenga el usuario o trabajador.]

## Errores
Descripción de posibles códigos de error y su significado.

- Código de estado 400: [Quiere decir que el usuario ingresó una ruta incorrecta o inexistente]
- Código de estado 500: [Significa que el servidor no pudo hacer una conexión a la base de datos o su lógica falló.]

## Ejemplos
Ejemplos de solicitudes y respuestas para cada endpoint.

### **[cliente]**
#### [Solicitud de Ejemplo]
```
GET http://localhost:3030/cliente/allClientes
Content-Type: application/json
```
### [Respuesta de ejemplo]
```
{
  "success": true,
  "clientes": [
    {
      "idCliente": 1,
      "nombre": "Cliente 1",
      "telefono": null
    },
    {
      "idCliente": 2,
      "nombre": "Cliente 2",
      "telefono": null
    },
    {
      "idCliente": 3,
      "nombre": "Cliente 3",
      "telefono": null
    },
    {
      "idCliente": 4,
      "nombre": "Cliente 4",
      "telefono": null
    },
    {
      "idCliente": 5,
      "nombre": "Cliente 5",
      "telefono": null
    }
  ]
}
```

### **[trabajador]**
#### [Solicitud de Ejemplo]
```
GET http://localhost:3030/trabajador/trabajador/Inspector
Content-Type: application/json
```
### [Respuesta de ejemplo]
```
{
  "success": true,
  "trabajadores": [
    {
      "rut": "20692041-6",
      "idSectores": 2,
      "nombre": "Angel Salgado",
      "password": "secreto123",
      "cargo": "Inspector",
      "horario": "Horario 2"
    },
    {
      "rut": "22222222-2",
      "idSectores": 1,
      "nombre": "Ana Rodriguez",
      "password": "password2",
      "cargo": "Inspector",
      "horario": "Horario 2"
    },
    {
      "rut": "44444444-4",
      "idSectores": 3,
      "nombre": "Maria Sanchez",
      "password": "password4",
      "cargo": "Inspector",
      "horario": "Horario 4"
    }
  ]
}
```

### **[consultas]**
#### [Solicitud de Ejemplo]
```
GET http://localhost:3030/consulta/consulta/4
Content-Type: application/json
```
### [Respuesta de ejemplo]
```
{
  "success": true,
  "trabajadores": [
    {
      "idDireccion": 4,
      "idSector": 4,
      "idCliente": 4,
      "pob": "Población 4",
      "blk": "Bloque D",
      "dep": "Departamento 104"
    }
  ]
}
```

### **[sector]**
#### [Solicitud de Ejemplo]
```
PUT http://localhost:3030/sector/sector/2
Content-Type: application/json

{
  "sucursal": "Sucursal Z"
}
```
### [Respuesta de ejemplo]
```
{
  "success": true,
  "response": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 0  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
}
```

## Consideraciones de Seguridad
Actualmente la api no posee medidas de seguridad ya que no posee funcionalidades de verificación aún, sin embargo, en futuras entregas se puede implementar el uso de distintos Middlewares y encriptación para asegurar la seguridad de los datos en la base de datos.
