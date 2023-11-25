import Sequelize from 'sequelize';
import sequelize from '../../../utils/sequelizeConnection.js';
import TrabajadorModelFunction from '../../../models/trabajador/sql.js';

const TrabajadorModel = TrabajadorModelFunction(sequelize, Sequelize);

let sqlTrabajador = {};

sqlTrabajador.listarTrabajadores = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await TrabajadorModel.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Trabajadores en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay trabajadores en bd sql"
            });
        };

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error
        });
    };
};

sqlTrabajador.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idTrabajador = req.params.id;

        if(typeBd === 'sql'){
            const trabajador = await TrabajadorModel.findByPk(idTrabajador);
            
            if(trabajador){
                return res.status(200).json({
                    success: true,
                    trabajador
                });
            };
            return res.status(404).json({
                success: false,
                error:"Trabajador no encontrado"
            });
        };

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error
        });
    };
};

export default sqlTrabajador;