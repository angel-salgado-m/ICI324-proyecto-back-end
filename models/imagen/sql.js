import Sequelize from 'sequelize';

const ImagenModel = (sequelize, Sequelize) => {
  return sequelize.define('Imagen', {
    idImagen: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idRegistro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'registro',
            key: 'idRegistro'
        }
    },
  }, {
    // Opciones adicionales
    tableName: 'imagen',
    freezeTableName: true,
  });
};

export default ImagenModel;