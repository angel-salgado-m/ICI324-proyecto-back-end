import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

const medidorSchema = new Schema({
    idMedidor:{
        type: Number,
        required: true,
        unique: true,
    },
    idCliente:{
        type: Number,
        required: true,
    },
    serialNumber:{
        type: String,
        required: true,
    },
    fechaMod:{
        type: Date,
        required: true,
    }
});

const Medidor = mongoose.model('medidor', medidorSchema);

export default Medidor;
