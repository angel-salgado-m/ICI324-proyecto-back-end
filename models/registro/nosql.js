import mongoose from "mongoose";

const { Schema } = mongoose;

const registroSchema = new Schema({
    idRegistro:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    idDireccion:{
        type: Schema.Types.ObjectId,
        ref: 'direccion',
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    asunto:{
        type: String,
        required: false,
    },
    descripcion:{
        type: String,
        required: false,
    },
    estado:{
        type: String,
        required: true,
    },
    idImg:{
        type: Schema.Types.ObjectId,
        ref: 'imagen',
        required: false,
    },
    fecha:{
        type: Date,
        required: true,
    },
});

const Registro = mongoose.model('registro', registroSchema);

export default Registro;