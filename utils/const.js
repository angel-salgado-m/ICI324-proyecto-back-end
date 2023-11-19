import 'dotenv/config.js';

const RUN_PORT = process.env.RUN_PORT;
const NODE_ENV = process.env.NODE_ENV;

// const URI_MONGO = process.env.URI_MONGO;

// BD
const BD_HOST = process.env.BD_HOST;
const BD_USER = process.env.BD_USER;
const BD_PASS = process.env.BD_PASS;
const DATABASE = process.env.DATABASE;

/* The code is creating an object called `object` and assigning it the values of the constants
`SECRET`, `NODE_ENV`, `RUN_PORT`, and `STATIC_PATH`. These constants are obtained from environment
variables using `process.env`. */
const object = {
    BD_HOST,
    BD_USER,
    BD_PASS,
    NODE_ENV,
    DATABASE,
    RUN_PORT,
}

Object.freeze(object) //The Object.freeze() static method freezes an object

export default object;