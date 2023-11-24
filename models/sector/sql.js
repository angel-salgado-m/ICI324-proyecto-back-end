import Sequelize from "sequelize";
import sequelize from "../../utils/sequelizeConnection.js";

const Sector = sequelize.define('Sector', {
    
        idSector: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        idRuta: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        sucursal: {
            type: Sequelize.CHAR(50),
            allowNull: false,
        },
        locomocion: {
            type: Sequelize.CHAR(50),
            allowNull: false,
        },
    },
    {
        // Opciones adicionales
        tableName: 'sector'
    }
);

export default Sector;