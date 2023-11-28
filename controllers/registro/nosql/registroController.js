import Registro from '../../../models/registro/nosql.js';

let nosqlRegistro = {};

nosqlRegistro.getRegistros = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const data = await Registro.find({}, { _id: 0, __v: 0});

            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Registros en nosql"
                });
            };

            return res.status(200).json({
                success: false,
                message: "No hay registros en BD Mongo"
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

nosqlRegistro.getRegistroById = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idRegistro = req.params.id;

        if(typeBd === 'nosql'){
            const registro = await Registro.findById(idRegistro, { _id: 0, __v: 0});
            
            if(registro){
                return res.status(200).json({
                    success: true,
                    registro
                });
            };
            return res.status(200).json({
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

nosqlRegistro.createRegistro = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const { idDireccion, tipo, asunto, descripcion, estado, idImg, fecha } = req.body;

            const registro = new Registro({
                idDireccion,
                tipo,
                asunto,
                descripcion,
                estado,
                idImg,
                fecha
            });

            const registroDB = await registro.save();

            if(registroDB){
                return res.status(200).json({
                    success: true,
                    message: "Registro creado correctamente"
                });
            };
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

nosqlRegistro.deleteRegistro = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idRegistro = req.params.id;

        if(typeBd === 'nosql'){
            const registro = await Registro.findByIdAndDelete(idRegistro);
            
            if(registro){
                return res.status(200).json({
                    success: true,
                    message: "Registro eliminado exitosamente"
                });
            };
            return res.status(200).json({
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

export default nosqlRegistro;