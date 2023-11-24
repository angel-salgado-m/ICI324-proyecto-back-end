import mysql2 from 'mysql2/promise';
import connectionConfig from '../utils/connection.js';

const createConnection = async ( ) => {
    return await mysql2.createConnection(connectionConfig);
}

const getAllClientes = async (req, res) => {

    try{
        const connection = await createConnection();
        console.log("Usando metodo getAllClientes");
        const [rows] = await connection.execute('SELECT * from cliente');
        await connection.end();

    return res.status(200).json({
        success: true,
        clientes: rows
    });

    } catch(error) {
        return res.status(500).json({
            status: false,
            error: "Problema al obtener el cliente",
            code: error
        });
    }

};

export {
    getAllClientes
};
