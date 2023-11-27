import Sequelize from 'sequelize';
import sequelize from '../../../utils/sequelizeConnection.js';
import RegistroModelFunction from '../../../models/registro/sql.js';

const RegistroModel = RegistroModelFunction(sequelize, Sequelize);

let sqlRegistro = {};

sqlRegistro.crearRegistro = async (req, res, next) => {
    try {
        const bdSelection = req.params.typeBd;
        const registro = req.body;

        if(bdSelection === 'sql'){
            const data = await RegistroModel.create(registro);
            if(data){
                return res.status(201).json({
                    success: true,
                    data,
                    message: "Registro creado en sequelize"
                });
            };
            return res.status(500).json({
                success: false,
                message: "Error al crear registro en bd sql"
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

sqlRegistro.listarRegistros = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await RegistroModel.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Registro en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay Registros en bd sql"
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

sqlRegistro.listarInconclusos = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await RegistroModel.findAll({
                where: {
                    estado: 'inconcluso'
                }
            }); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Registro en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay Registros en bd sql"
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

sqlRegistro.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idRegistro = req.params.id;

        if(typeBd === 'sql'){
            const registro = await RegistroModel.findByPk(idRegistro);
            
            if(registro){
                return res.status(200).json({
                    success: true,
                    registro
                });
            };
            return res.status(404).json({
                success: false,
                error:"Registro no encontrado"
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

sqlRegistro.registrosHoy = async (req, res, next) => {
    try {
        const estado = req.params.estado;
        const count = await RegistroModel.count({ 
            where: { 
                fecha: Sequelize.literal('DATE(fecha) = CURRENT_DATE'), 
                estado: estado 
            } 
        });
        const registros = await RegistroModel.findAll({ 
            where: { 
                fecha: Sequelize.literal('DATE(fecha) = CURRENT_DATE'), 
                estado: estado 
            } 
        });
        return res.status(200).json({
            success: true,
            count,
            registros
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error
        });
    };
};

sqlRegistro.registrosAnteriores = async (req, res, next) => {
    try {
        const estado = req.params.estado;
        const count = await RegistroModel.count({ 
            where: { 
                fecha: { [Sequelize.Op.lt]: Sequelize.literal('CURRENT_DATE') }, 
                estado: estado 
            } 
        });
        const registros = await RegistroModel.findAll({ 
            where: { 
                fecha: { [Sequelize.Op.lt]: Sequelize.literal('CURRENT_DATE') }, 
                estado: estado 
            } 
        });
        return res.status(200).json({
            success: true,
            count,
            registros
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error
        });
    };
};

export default sqlRegistro;
