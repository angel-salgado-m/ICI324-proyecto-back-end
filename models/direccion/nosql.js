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
