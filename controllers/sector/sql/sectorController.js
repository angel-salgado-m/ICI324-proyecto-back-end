import Sequelize from 'sequelize';
import { conexionSql, Sector } from '../../../utils/sequelizeConnection.js';

let sqlSector = {};

sqlSector.listarSectores = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await Sector.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Sectores en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay Sectores en bd sql"
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

sqlSector.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idSector = req.params.id;

        if(typeBd === 'sql'){
            const sector = await Sector.findByPk(idSector);
            
            if(sector){
                return res.status(200).json({
                    success: true,
                    sector
                });
            };
            return res.status(404).json({
                success: false,
                error:"Sector no encontrado"
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

export default sqlSector;