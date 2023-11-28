import Sequelize from 'sequelize';
import { conexionSql, Trabajador } from '../../../utils/sequelizeConnection.js';

import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
dotenv.config({ path: '../../../.env'});

let sqlTrabajador = {};

sqlTrabajador.listarTrabajadores = async (req, res, next) => {    
    try {
        const bdSelection = req.params.typeBd;
        console.log(bdSelection);

        if(bdSelection === 'sql'){
            const data = await Trabajador.findAll(); //funciones de sequilize
            if(data.length > 0){
                return res.status(200).json({
                    success: true,
                    data,
                    message: "Trabajadores en sequelize"
                });
            };

            return res.status(404).json({
                success: false,
                message: "No hay trabajadores en bd sql"
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

sqlTrabajador.crearTrabajador = async (req, res, next) => {
    try {
        const typeBd  = req.params.typeBd;
        const { rut, idSector, nombre, apellido, password, cargo, horario} = req.body;
        if(typeBd === 'sql'){
            const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const trabajador = await Trabajador.create({
                rut,
                idSector,
                nombre,
                apellido,
                password: hashedPassword,
                cargo,
                horario,
            });
            if(trabajador){
                return res.status(201).json({
                    success: true,
                    trabajador
                });
            };
            return res.status(404).json({
                success: false,
                error:"Datos incorrectos"
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

sqlTrabajador.validarTrabajador = async (req, res, next) => {

    const { rut, password } = req.body;

    try {
        // Encontrar RUT
        const trabajador = await Trabajador.findOne({ where: { rut: rut } });
        if (!trabajador) {
            return res.status(400).json({ 
                message: 'Clave o RUT incorrecta.' 
            });
        }

        // Comparacion de password dada
        bcrypt.compare(password, trabajador.password, (compareErr, match) => {
            if (compareErr || !match) {
                return res.status(400).json({ message: 'Clave o RUT incorrecta.' });

            } else {
                let token;
                if (trabajador.cargo === 'administrador') {
                    token = jwt.sign({rut: trabajador.rut,cargo: trabajador.cargo }, 'stil', { expiresIn: '8h' });
                    return res.status(200).json({ token,cargo: trabajador.cargo});
                } else {
                    token = jwt.sign({ rut: trabajador.rut, cargo: trabajador.cargo, sector: trabajador.idSector }, 'stil', { expiresIn: '8h' });
                    return res.status(200).json({ token, cargo: trabajador.cargo, sector: trabajador.idSector });
                }
            }
        });

    } catch (error) { return res.status(400).json({ message: error.message }); }
};

export default sqlTrabajador;