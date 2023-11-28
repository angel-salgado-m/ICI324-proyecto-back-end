import Sector from '../../../models/sector/nosql.js';

let nosqlSector = {};

nosqlSector.getSectores = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const data = await Sector.find({}, { _id: 0, __v: 0});

            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Sectores en nosql"
                });
            };

            return res.status(200).json({
                success: false,
                message: "No hay sectores en BD Mongo"
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

nosqlSector.getSectorById = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idSector = req.params.id;

        if(typeBd === 'nosql'){
            const sector = await Sector.findById(idSector, { _id: 0, __v: 0});
            
            if(sector){
                return res.status(200).json({
                    success: true,
                    sector
                });
            };
            return res.status(200).json({
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

nosqlSector.createSector = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const { idRuta, sucursal, locomocion } = req.body;

            const newSector = new Sector({
                idRuta,
                sucursal,
                locomocion
            });

            await newSector.save();

            return res.status(200).json({
                success: true,
                message: "Sector creado en BD Mongo"
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

nosqlSector.deleteSector = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const idSector = req.params.id;

            const sector = await Sector.findByIdAndDelete(idSector);

            if(sector){
                return res.status(200).json({
                    success: true,
                    message: "Sector eliminado en BD Mongo"
                });
            };

            return res.status(200).json({
                success: false,
                message: "Sector no encontrado"
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

export default nosqlSector;