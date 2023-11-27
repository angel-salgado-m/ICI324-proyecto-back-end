import Sequelize from 'sequelize';
import sequelize from '../../../utils/sequelizeConnection.js';
import MedidorModelFunction from '../../../models/medidor/sql.js';

const MedidorModel = MedidorModelFunction(sequelize, Sequelize);

let sqlMedidor = {};

sqlMedidor.listarMedidores = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await MedidorModel.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Medidores en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay medidores en bd sql"
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

sqlMedidor.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idMedidor = req.params.id;

        if(typeBd === 'sql'){
            const medidor = await MedidorModel.findByPk(idMedidor);
            
            if(medidor){
                return res.status(200).json({
                    success: true,
                    medidor
                });
            };
            return res.status(404).json({
                success: false,
                error:"Medidor no encontrado"
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

sqlMedidor.modificarSerial = async (req, res, next) => {
    try {

        const typeBd = req.params.typeBd;
        const idMedidor = req.params.id;
        const { nuevoSerial } = req.body;

        if(typeBd === 'sql'){

            const medidor = await MedidorModel.findByPk(idMedidor);

            if(medidor){
                
                medidor.serialNumber = nuevoSerial
                await cliente.save();

                return res.status(200).json({
                    success: true,
                    medidor
                });
            };
            
            return res.status(404).json({
                success: false,
                error: "Medidor no encontrado"
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
}

export default sqlMedidor;