import Sequelize from 'sequelize';
import { conexionSql } from '../../utils/sequelizeConnection.js';

const RegistroModel = (conexionSql, Sequelize) => {
  return conexionSql.define('Registro', {
    idRegistro: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idDireccion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'direccion',
            key: 'idDireccion'
        }
    },
    tipo: {
        type: Sequelize.ENUM('lectura', 'revision', 'novedad'),
        defaultValue: 'novedad',
        allowNull: false,
    },
    asunto: {
        type: Sequelize.ENUM('actCliente', 'actMedidor', 'errorLectura'),
        allowNull: true,
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    estado: {
        type: Sequelize.ENUM('check','uncheck' ),
        required: false,
        allowNull: false,
        defaultValue: 'uncheck',
    },
    idImg: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
    },
  }, {
    // Opciones adicionales
    tableName: 'registro',
    freezeTableName: true,
  });
};

export default RegistroModel;