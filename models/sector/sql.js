import Sequelize from 'sequelize';
import { conexionSql } from '../../utils/sequelizeConnection.js';

const SectorModel = (conexionSql, Sequelize) => {
  return conexionSql.define('Sector', {
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
  }, {
    // Opciones adicionales
    tableName: 'sector',
    freezeTableName: true,
  });
};

export default SectorModel;