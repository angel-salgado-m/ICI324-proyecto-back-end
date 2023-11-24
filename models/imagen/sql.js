import Sequelize from "sequelize";
import sequelize from "../../utils/sequelizeConnection.js";

const Imagen = sequelize.define('Imagen', {
        
            idImagen: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            img: {
                type: Sequelize.BLOB("long"),
                allowNull: false,
            },
        },
        {
            // Opciones adicionales
            tableName: 'imagen'
        }
    );

export default Imagen;