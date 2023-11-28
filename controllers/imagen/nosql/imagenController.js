import Imagen from '../../../models/imagen/nosql.js';

let nosqlImagen = {};

nosqlImagen.getImagen = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;
        const idImagen = req.params.id;

        if(typeBd === 'nosql'){
            const imagen = await Imagen.findById(idImagen, { _id: 0, __v: 0});
            
            if(imagen){
                return res.status(200).json({
                    success: true,
                    imagen
                });
            };
            return res.status(404).json({
                success: false,
                error:"Imagen no encontrada"
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

nosqlImagen.crearImagen = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const { img } = req.body;

            const imagen = await Imagen.create({
                img
            });

            return res.status(201).json({
                success: true,
                imagen
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

nosqlImagen.eliminarImagen = async (req, res, next) => {
    try {
        const typeBd = req.params.typeBd;
        const idImagen = req.params.id;

        if(typeBd === 'nosql'){
            const imagen = await Imagen.findByIdAndDelete(idImagen);

            if(imagen){
                return res.status(200).json({
                    success: true,
                    imagen
                });
            };
            return res.status(404).json({
                success: false,
                error:"Imagen no encontrada"
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


export default nosqlImagen;