import Sequelize from 'sequelize';
import sequelize from '../../utils/sequelizeConnection.js';


const DireccionModel = (sequelize, Sequelize) => {
  return sequelize.define('Direccion', {
    idDireccion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idSector: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    pob: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    blk: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    dep: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
  }, {
    // Opciones adicionales
    tableName: 'direccion',
    freezeTableName: true,
  });
};

export default DireccionModel;