import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

const registroSchema = new Schema({
    idRegistro:{
        type: Number,
        required: true,
        unique: true,
    },
    idDireccion:{
        type: Number,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    asunto:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    estado:{
        type: String,
        required: true,
    },
    idImg:{
        type: Number,
        required: true,
    },
    fecha:{
        type: Date,
        required: true,
    },
});

const Registro = mongoose.model('registro', registroSchema);

export default Registro;