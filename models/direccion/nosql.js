import mongoose from "mongoose";
const { Schema } = mongoose.Schema;

const direccionSchema = new Schema({
    idDireccion:{
        type: Number,
        required: true,
        unique: true,
    },
    idSector:{
        type: Number,
        required: true,
    },
    idCliente:{
        type: Number,
        required: true,
    },
    pob:{
        type: String,
        required: true,
    },
    blk:{
        type: String,
        required: true,
    },
    dep:{
        type: String,
        required: true,
    },
});

const Direccion = mongoose.model('direccion', direccionSchema);

export default Direccion;
