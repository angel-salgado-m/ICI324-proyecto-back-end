import Sequelize from 'sequelize';
import { conexionSql, Registro, Imagen } from '../../../utils/sequelizeConnection.js';
import path from 'path';
import { fileURLToPath } from 'url';  // Para obtener directorio actual (Se puede cambiar?)

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Obtener directorio actual (Se puede cambiar?)

import multer from 'multer';

let sqlRegistro = {};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../../Images'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
  const upload = multer({ storage: storage });

sqlRegistro.crearRegistro = async (req, res, next) => {
    try {
        const bdSelection = req.params.typeBd;
        const registro = req.body;

        if(bdSelection === 'sql'){
            // Creacion del registro
            const data = await Registro.create(registro);

            // Condicional si se logra crear un registro
            if(data){
                
                // Si el registro viene con imagen
                if(req.file){
                    const imagen = await Imagen.create({
                        img: req.file.path,
                        idRegistro: data.idRegistro
                    });
                    data.idImg = imagen.idImagen;   // Set al idImg del registro como el idImg de la tabla imagen
                    await data.save();
                };

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
            const data = await Registro.findAll(); //funciones de sequilize
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

            const count = await Registro.count({ 
                where: { 
                    estado: 'uncheck' 
                } 
            });
            const data = await Registro.findAll({
                where: {
                    estado: 'uncheck'
                }
            }); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    count,
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
            const registro = await Registro.findByPk(idRegistro);
            
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
        const count = await Registro.count({ 
            where: { 
                fecha: Sequelize.literal('DATE(fecha) = CURRENT_DATE'), 
                estado: estado 
            } 
        });
        const registros = await Registro.findAll({ 
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
        const count = await Registro.count({ 
            where: { 
                fecha: { [Sequelize.Op.lt]: Sequelize.literal('CURRENT_DATE') }, 
                estado: estado 
            } 
        });
        const registros = await Registro.findAll({ 
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

export { sqlRegistro, upload };