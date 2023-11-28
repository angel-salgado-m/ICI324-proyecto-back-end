import Trabajador from '../../../models/trabajador/nosql.js';

let nosqlTrabajador = {};

nosqlTrabajador.getTrabajadores = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const data = await Trabajador.find({}, { _id: 0, __v: 0});

            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Trabajadores en nosql"
                });
            };

            return res.status(200).json({
                success: false,
                message: "No hay trabajadores en BD Mongo"
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

nosqlTrabajador.createTrabajador = async (req, res) => {
    try {
        const typeBd = req.params.typeBd;

        if(typeBd === 'nosql'){
            const { rut, idSector, nombre, apellido, password, cargo, horario } = req.body;
            const trabajador = new Trabajador({ rut, idSector, nombre, apellido, password, cargo, horario });
            const data = await trabajador.save();

            if(data){
                return res.status(201).json({
                    success: true,
                    data,
                    message: "Trabajador creado en nosql"
                });
            };

            return res.status(400).json({
                success: false,
                message: "No se pudo crear el trabajador en BD Mongo"
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

nosqlTrabajador.deleteTrabajador = async (req, res) => {
    try {
        const typeBd  = req.params.typeBd;
        const idTrabajador = req.params.id;

        if(typeBd === 'nosql'){
            const trabajador = await Trabajador.findByIdAndDelete(idTrabajador);

            if(trabajador){
                return res.status(200).json({
                    success: true,
                    message: "Trabajador eliminado de BD Mongo"
                });
            };
            return res.status(200).json({
                success: false,
                error:"Trabajador no encontrado"
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

export default nosqlTrabajador;