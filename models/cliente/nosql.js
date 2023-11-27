import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

const clienteSchema = new Schema({
    idCliente:{
        type: Number,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
    }
});

const Cliente = mongoose.model('cliente', clienteSchema);

export default Cliente;