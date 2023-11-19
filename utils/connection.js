import mysql2 from 'mysql2';
import values from './const.js';

/* The `connectionConfig` object is storing the configuration details for connecting to a MySQL
database. It includes the following properties: */
const connectionConfig = {
    host: values.BD_HOST,
    user: values.BD_USER,
    password: values.BD_PASS,
    database: values.DATABASE
};
/* The code is creating a connection to a MySQL database using the `mysql2` library. */

 /*const connection = mysql2.createConnection({
    host: connectionConfig.host,
    user: connectionConfig.user,
    password: connectionConfig.password
});
*/
export default connectionConfig;