import Sequelize from 'sequelize';
import { conexionSql } from '../../utils/sequelizeConnection.js';

const ClienteModel = (conexionSql, Sequelize) => {
  return conexionSql.define('Cliente', {
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
  }, {
    // Opciones adicionales
    tableName: 'cliente',
    freezeTableName: true,
  });
};

export default ClienteModel;