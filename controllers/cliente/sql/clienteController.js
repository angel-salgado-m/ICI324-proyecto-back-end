import Sequelize from 'sequelize';
import sequelize from '../../../utils/sequelizeConnection.js';
import ClienteModelFunction from '../../../models/cliente/sql.js';

const ClienteModel = ClienteModelFunction(sequelize, Sequelize);

let sqlCliente = {};

sqlCliente.listarClientes = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await ClienteModel.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Clientes en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay clientes en bd sql"
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

sqlCliente.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idCliente = req.params.id;

        if(typeBd === 'sql'){
            const cliente = await ClienteModel.findByPk(idCliente);
            
            if(cliente){
                return res.status(200).json({
                    success: true,
                    cliente
                });
            };
            return res.status(404).json({
                success: false,
                error:"Cliente no encontrado"
            });
        };

        next();

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            error:"Cliente no encontrado"
        });
    };
};

sqlCliente.cambiarNombre = async (req, res, next) => {
    try {
        
        const typeBd  = req.params.typeBd;
        const idCliente = req.params.id;
        const { nombre } = req.body;

        if(typeBd === 'sql'){
            const cliente = await ClienteModel.findByPk(idCliente);
            
            if(cliente){
                cliente.nombre = nombre;
                await cliente.save();
                return res.status(200).json({
                    success: true,
                    cliente
                });
            };
            return res.status(404).json({
                success: false,
                error:"Cliente no encontrado"
            });
        };

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error:"Error en el servidor"
        });
    };
}

export default sqlCliente;