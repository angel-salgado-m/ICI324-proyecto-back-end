import mysql2 from 'mysql2/promise';
import connectionConfig from '../utils/connection.js';

const createConnection = async ( ) => {
    return await mysql2.createConnection(connectionConfig);
};

const updateSucursal = async (req, res) => {

    try{
        id = req.params.id;
        sucursal = req.body.sucursal;
        console.log("Usando metodo updateSucursal");
        const connection = await createConnection();
        const [rows] = await connection.execute('UPDATE sector SET sucursal = ? WHERE idSector = ?;', 
        [sucursal, id]);
        await connection.end();

    return res.status(200).json({
        success: true,
        response: rows
    });

    } catch(error) {
        return res.status(500).json({
            status: false,
            error: "Problema al actualizar la sucursal.",
            code: error
        });
    }
    
};

export {
    updateSucursal
};