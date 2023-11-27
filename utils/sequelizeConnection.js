import { Sequelize } from "sequelize";
import values from "./const.js";

// Importacion de modelos
import ClienteModel from "../models/cliente/sql.js";
import DireccionModel from "../models/direccion/sql.js";
import ImagenModel from "../models/imagen/sql.js";
import MedidorModel from "../models/medidor/sql.js";
import RegistroModel from "../models/registro/sql.js";
import SectorModel from "../models/sector/sql.js";
import TrabajadorModel from "../models/trabajador/sql.js";

// Importacion de relaciones entre modelos
import confExtra from "./sequelizeExtra.js";

const conexionSql = new Sequelize(
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

// Inicializacion de modelos
const Cliente = ClienteModel(conexionSql, Sequelize);
const Direccion = DireccionModel(conexionSql, Sequelize);
const Imagen = ImagenModel(conexionSql, Sequelize);
const Medidor = MedidorModel(conexionSql, Sequelize);
const Registro = RegistroModel(conexionSql, Sequelize);
const Sector = SectorModel(conexionSql, Sequelize);
const Trabajador = TrabajadorModel(conexionSql, Sequelize);

// Asociacion de modelos
confExtra(conexionSql);

conexionSql.authenticate().then(() => {

        console.log('SEQUELIZE: Conectado');
    }).catch((error) => {
        console.error('SEQUELIZE: Error al conectar: ', error);
    }
);

// "Alter : true" para desarrollo
conexionSql.sync({ alter: true }).then(() => { // alter: true, para 
    console.log("SEQUELIZE: tablas sincronizadas");
});

export default conexionSql;
