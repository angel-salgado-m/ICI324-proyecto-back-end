import Sequelize from 'sequelize';

const MedidorModel = (sequelize, Sequelize) => {
  return sequelize.define('Medidor', {
    idMedidor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    serialNumber: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    fechaMod: {
        type: Sequelize.DATE,
        allowNull: false,
    },
  }, {
    // Opciones adicionales
    tableName: 'medidor',
    freezeTableName: true,
  });
};

export default MedidorModel;