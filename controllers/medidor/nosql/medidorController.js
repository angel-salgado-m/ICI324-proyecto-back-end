import Medidor from '../../../models/medidor/nosql.js'; 

let nosqlMedidor = {};

nosqlMedidor.getMedidores = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const data = await Medidor.find({}, { _id: 0, __v: 0});

            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Medidores en nosql"
                });
            };

            return res.status(200).json({
                success: false,
                message: "No hay medidores en BD Mongo"
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

nosqlMedidor.getMedidorById = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idMedidor = req.params.id;

        if(typeBd === 'nosql'){
            const medidor = await Medidor.findById(idMedidor, { _id: 0, __v: 0});
            
            if(medidor){
                return res.status(200).json({
                    success: true,
                    medidor
                });
            };
            return res.status(200).json({
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

nosqlMedidor.modificarSerial = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idMedidor = req.params.id;
        const serial = req.body.serial;

        if(typeBd === 'nosql'){
            const medidor = await Medidor.findById(idMedidor);
            
            if(medidor){
                medidor.serialNumber = serial;
                await medidor.save();
                return res.status(200).json({
                    success: true,
                    medidor
                });
            };
            return res.status(200).json({
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

nosqlMedidor.createMedidor = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const newMedidor = new Medidor(req.body);
            await newMedidor.save();
            return res.status(200).json({
                success: true,
                message: "Medidor creado exitosamente"
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

nosqlMedidor.deleteMedidor = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idMedidor = req.params.id;

        if(typeBd === 'nosql'){
            const medidor = await Medidor.findByIdAndDelete(idMedidor);
            
            if(medidor){
                return res.status(200).json({
                    success: true,
                    message: "Medidor eliminado exitosamente"
                });
            };
            return res.status(200).json({
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

export default nosqlMedidor;