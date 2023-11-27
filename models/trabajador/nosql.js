import mongoose from 'mongoose';

const { Schema } = mongoose;

const trabajadorSchema = new Schema({
    rut:{
        type: String,
        required: true,
        unique: true,
    },
    idSector:{
        type: Schema.Types.ObjectId,
        ref: 'sector',
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
});

const Trabajador = mongoose.model('trabajador', trabajadorSchema);

export default Trabajador;