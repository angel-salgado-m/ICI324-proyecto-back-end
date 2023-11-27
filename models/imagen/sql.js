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
        type: Sequelize.BLOB("long"),
        allowNull: false,
    },
  }, {
    // Opciones adicionales
    tableName: 'imagen',
    freezeTableName: true,
  });
};

export default ImagenModel;