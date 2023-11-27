import Sequelize from 'sequelize';
import sequelize from '../../../utils/sequelizeConnection.js';
import DireccionModelFunction from '../../../models/direccion/sql.js';

const DireccionModel = DireccionModelFunction(sequelize, Sequelize);

let sqlDireccion = {};

sqlDireccion.listarDirecciones = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await DireccionModel.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Direcciones en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay direcciones en bd sql"
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

sqlDireccion.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idDireccion = req.params.id;

        if(typeBd === 'sql'){
            const direccion = await DireccionModel.findByPk(idDireccion);
            
            if(direccion){
                return res.status(200).json({
                    success: true,
                    direccion
                });
            };
            return res.status(404).json({
                success: false,
                error:"Direccion no encontrada"
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

export default sqlDireccion;