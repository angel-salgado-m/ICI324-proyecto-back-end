import Cliente from '../../../models/cliente/nosql.js';

let nosqlCliente = {};

nosqlCliente.listarClientes = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const data = await Cliente.find({}, { _id: 0, __v: 0});

            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Clientes en nosql"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay clientes en BD Mongo"
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

nosqlCliente.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idCliente = req.params.id;

        if(typeBd === 'nosql'){
            const cliente = await Cliente.findById(idCliente, { _id: 0, __v: 0});
            
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
        return res.status(500).json({
            success: false,
            error
        });
    };
};

nosqlCliente.crearCliente = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const cliente = req.body;

        if(typeBd === 'nosql'){
            const newCliente = new Cliente(cliente);
            await newCliente.save();

            return res.status(201).json({
                success: true,
                message: "Cliente creado"
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

nosqlCliente.actualizarCliente = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idCliente = req.params.id;
        const cliente = req.body;

        if(typeBd === 'nosql'){
            const clienteActualizado = await Cliente.findByIdAndUpdate(idCliente, cliente, { new: true });

            if(clienteActualizado){
                return res.status(200).json({
                    success: true,
                    message: "Cliente actualizado"
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
            error
        });
    };
}

export default nosqlCliente;
