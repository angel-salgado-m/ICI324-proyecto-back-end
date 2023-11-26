import Sequelize from 'sequelize';

const RegistroModel = (sequelize, Sequelize) => {
  return sequelize.define('Registro', {
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
    tipo: {
        type: Sequelize.ENUM('lectura', 'revision', 'novedad'),
        defaultValue: 'novedad',
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    estado: {
        type: Sequelize.ENUM('check','uncheck' ),
        allowNull: false,
    },
    idImg: {
        type: Sequelize.INTEGER,
        allowNull: false,
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