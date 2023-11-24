import Sequelize from "sequelize";
import sequelize from "../../utils/sequelizeConnection.js";

// In progress
const Registro = sequelize.define('Registro', {
        idRegistro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        idDireccion: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        tipo: { // Hasta aca
            type: Sequelize.DATE,
            allowNull: false,
        },
        lectura: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    {
        // Opciones adicionales
        tableName: 'registro'
    }
);

export default Registro;