import Sequelize from 'sequelize';

const TrabajadorModel = (sequelize, Sequelize) => {
  return sequelize.define('Trabajador', {
    rut: {
        type: Sequelize.CHAR(10),
        primaryKey: true,
        allowNull: false,
    },
    idSector: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nombre: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    apellido: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    password: {
        type: Sequelize.CHAR(24),
        allowNull: false,
    },
    cargo: {
        type: Sequelize.ENUM('Lector', 'Inspector'),
        allowNull: false,
    },
    horario: {
        type: Sequelize.CHAR(20),
        allowNull: false,
    },
    imgWorker: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
  }, {
    // Opciones adicionales
    tableName: 'trabajador',
    freezeTableName: true,
  });
};

export default TrabajadorModel;