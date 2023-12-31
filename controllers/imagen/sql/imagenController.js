import Sequelize from 'sequelize';
import { conexionSql, Imagen } from '../../../utils/sequelizeConnection.js';
import path from 'path';

const sqlImagen = {};

sqlImagen.getImagen = async (req, res, next) => {

    try{
        const typeBd = req.params.typeBd;
        const idImagen = req.params.id;

        console.log(typeBd, idImagen);

        if(typeBd === 'sql'){
            const imagen = await Imagen.findByPk(idImagen);

            console.log(imagen);
            if(imagen){
                return res.status(200).sendFile(imagen.img);
            };

            return res.status(404).json({
                success: false,
                message: "Imagen no encontrada"
            });
        };
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al conectar con bd sql"
        });
    }
    
};

export default sqlImagen;