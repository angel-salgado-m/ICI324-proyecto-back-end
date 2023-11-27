import mongoose from 'mongoose';

const { Schema } = mongoose.Schema;

const trabajadorSchema = new Schema({
    rut:{
        type: String,
        required: true,
        unique: true,
    },
    idSector:{
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    cargo:{
        type: String,
        required: true,
    },
    horario:{
        type: String,
        required: true,
    },
    imgWorker:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'imagen',
    },
});

const Trabajador = mongoose.model('trabajador', trabajadorSchema);

export default Trabajador;