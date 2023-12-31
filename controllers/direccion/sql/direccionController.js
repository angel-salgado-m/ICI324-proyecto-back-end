import Sequelize from 'sequelize';
import { conexionSql } from '../../../utils/sequelizeConnection.js';

import { Direccion, Registro } from '../../../utils/sequelizeConnection.js';


let sqlDireccion = {};

sqlDireccion.listarDirecciones = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        if(bdSelection === 'sql'){
            const data = await Direccion.findAll(); //funciones de sequilize
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
            const direccion = await Direccion.findByPk(idDireccion);
            
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

sqlDireccion.cambiarDatos = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idDireccion = req.params.id;
        const { pob, blk, dep } = req.body;

        if(typeBd === 'sql'){

            const direccion = await Direccion.findByPk(idDireccion);
            
            if(direccion){

                direccion.pob = pob;
                direccion.blk = blk;
                direccion.dep = dep;
                await direccion.save();

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
}

sqlDireccion.listarPorIdSector = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;
        const idSector = req.params.id; // Suponiendo que el parámetro sea idSector

        if (typeBd === 'sql') {
            // Realizar la consulta para obtener las direcciones por idSector
            const direcciones = await Direccion.findAll({
                where: {
                    idSector: idSector,
                },
            });

            if (direcciones.length > 0) {
                return res.status(200).json({
                    success: true,
                    direcciones,
                });
            } else {
                return res.status(404).json({
                    success: false,
                    error: "No se encontraron direcciones para el idSector proporcionado",
                });
            }
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error,
        });
    }
};

sqlDireccion.dp = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;
        const id = req.params.id; // Suponiendo que el parámetro sea idSector

        if (typeBd === 'sql') {
            const direccionesSinRegistroHoy = await Direccion.findAll({
                where: { idSector: id }, // Filtrar por sector
                include: [{
                    model: Registro,
                    required: false, // LEFT JOIN
                    where: {
                        [Sequelize.Op.or]: [
                            { fecha: { [Sequelize.Op.lt]: new Date() } }, // Registros con fecha anterior a hoy
                            { fecha: null }, // Registros sin fecha
                        ],
                    },
                }],
            });

            if (direccionesSinRegistroHoy.length > 0) {
                return res.status(200).json({
                    success: true,
                    direccionesSinRegistroHoy,
                });
            } else {
                return res.status(200).json({
                    success: false,
                    error: "No se encontraron direcciones sin registro de hoy",
                });
            }


        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error,
        });
    }
};


export default sqlDireccion;