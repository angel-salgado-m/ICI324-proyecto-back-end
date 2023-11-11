const mysql2 = require('mysql2/promise');
const connectionConfig = require('../utils/db.js');

const createConnection = async ( ) => {
    return await mysql2.createConnection(connectionConfig);
}

const getAllTrabajadores = async (req, res) => {

    try{
        const connection = await createConnection();
        console.log("Usando metodo getAllTrabajadores");
        const [rows] = await connection.execute('SELECT * from trabajador');
        await connection.end();

    return res.status(200).json({
        success: true,
        trabajadores: rows
    });

    } catch(error) {
        return res.status(500).json({
            status: false,
            error: "Problema al obtener el trabajador",
            code: error
        });
    }

};

const getTrabajadorByCargo = async (req, res) => {
    try {
      const cargo = req.params.cargo;

      if(cargo != "Lector" && cargo != "Inspector"){
        return res.status(400).json({
          status: false,
          error: "El cargo ingresado no es valido",
          code: error
        });
      }
      console.log("Usando metodo getTrabajadorByCargo");
      const connection = await createConnection();
      const [rows] = await connection.execute('SELECT * FROM trabajador WHERE cargo = ?', [cargo]);
      await connection.end();
  
      return res.status(200).json({
        success: true,
        trabajadores: rows
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        error: "Problema al obtener el cliente",
        code: error
      });
    }
};

const updateNombreTrabajador = async (req, res) => {
  try {
    rut = req.params.rut;
    nombre = req.body.nombre;
    console.log("Usando metodo updateNombreTrabajador");
    const connection = await createConnection();
    const [result] = await connection.execute('UPDATE trabajador SET nombre = ? WHERE rut = ?', [nombre, rut]);
    await connection.end();

    return res.status(200).json({
      success: true,
      affectedRows: result.affectedRows
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      error: "Problema al actualizar el trabajador",
      code: error
    });
  }
};

const addTrabajador = async (req, res) => {
  try {
    console.log(req.body);
    rut = req.body.rut;
    idSector = req.body.idSectores;
    nombre = req.body.nombre;
    password = req.body.password;
    cargo = req.body.cargo;
    horario = req.body.horario;

    console.log("Usando metodo addTrabajador");
    const connection = await createConnection();
    const [result] = await connection.execute('INSERT INTO trabajador (rut, idSectores, nombre, password, cargo, horario) VALUES (?, ?, ?, ?, ?, ?)',
     [rut, idSector, nombre, password, cargo, horario]);
    await connection.end();

    return res.status(200).json({
      success: true,
      affectedRows: result.affectedRows
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      error: "Problema al añadir el trabajador",
      code: error
    });
  }
};
module.exports = {
    getAllTrabajadores,
    getTrabajadorByCargo,
    updateNombreTrabajador,
    addTrabajador,
};
