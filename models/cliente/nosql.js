import mongoose from "mongoose";

const { Schema } = mongoose;

const clienteSchema = new Schema({
    idCliente:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    nombre:{
        type: String,
        required: true,
    }
});

const Cliente = mongoose.model('cliente', clienteSchema);

export default Cliente;