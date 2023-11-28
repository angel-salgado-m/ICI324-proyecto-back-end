import Direccion from '../../../models/direccion/nosql.js';

let nosqlDireccion = {};

nosqlDireccion.listarDirecciones = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const data = await Direccion.find({}, { _id: 0, __v: 0});

            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Direcciones en nosql"
                });
            };

            return res.status(200).json({
                success: false,
                message: "No hay direcciones en BD Mongo"
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

nosqlDireccion.listarById = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idDireccion = req.params.id;

        if(typeBd === 'nosql'){
            const direccion = await Direccion.findById(idDireccion, { _id: 0, __v: 0});
            
            if(direccion){
                return res.status(200).json({
                    success: true,
                    direccion
                });
            };
            return res.status(200).json({
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

nosqlDireccion.cambiarDatos = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idDireccion = req.params.id;

        if(typeBd === 'nosql'){
            const direccionOriginal = await Direccion.findById(idDireccion);

            if(direccionOriginal){
                const { direccion, pob, blk, dep } = req.body;

                if(direccion) direccionOriginal.direccion = direccion;
                if(pob) direccionOriginal.pob = pob;
                if(blk) direccionOriginal.blk = blk;
                if(dep) direccionOriginal.dep = dep;

                const direccionActualizada = await direccionOriginal.save();

                return res.status(200).json({
                    success: true,
                    direccionActualizada
                });
            };
            return res.status(200).json({
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

nosqlDireccion.crearDireccion = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const { idSector, idCliente, direccion, pob, blk, dep } = req.body;

        if(typeBd === 'nosql'){
            const nuevaDireccion = new Direccion({
                idSector,
                idCliente,
                direccion,
                pob,
                blk,
                dep
            });

            const direccionGuardada = await nuevaDireccion.save();

            return res.status(200).json({
                success: true,
                direccionGuardada
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

nosqlDireccion.eliminarDireccion = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const idDireccion = req.params.id;

        if(typeBd === 'nosql'){
            const direccionEliminada = await Direccion.findByIdAndDelete(idDireccion);

            if(direccionEliminada){
                return res.status(200).json({
                    success: true,
                    direccionEliminada
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

export default nosqlDireccion;