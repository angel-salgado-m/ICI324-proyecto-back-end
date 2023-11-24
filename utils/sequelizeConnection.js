import { Sequelize } from "sequelize";
import values from "./const.js";

const sequelize = new Sequelize(
    values.DATABASE,
    values.BD_USER,
    values.BD_PASS,
    {
        host: values.BD_HOST,
        dialect: "mysql",
        logging: false,
        define: {
            timestamps: false,
        },
    }
);

sequelize.authenticate().then(() => {

        console.log('Sequelize Conectado');
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    }
);

export default sequelize;
