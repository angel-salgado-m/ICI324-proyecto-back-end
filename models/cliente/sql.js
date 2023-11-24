import Sequelize from "sequelize";
import sequelize from "../../utils/sequelizeConnection.js";

const Cliente = sequelize.define('Cliente', {

    idCliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },

},
{
    // Opciones adicionales
    tableName: 'cliente'
}
);

export default Cliente;


