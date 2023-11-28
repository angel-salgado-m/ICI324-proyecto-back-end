import mongoose from "mongoose";
const { Schema } = mongoose;

const direccionSchema = new Schema({
    idDireccion:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    idSector:{
        type: Schema.Types.ObjectId,
        ref: 'sector',
        required: true,
    },
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    pob:{
        type: String,
        required: false,
    },
    blk:{
        type: String,
        required: false,
    },
    dep:{
        type: String,
        required: false,
    },
});

const Direccion = mongoose.model('direccion', direccionSchema);

export default Direccion;
