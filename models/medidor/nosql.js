import mongoose from "mongoose";

const { Schema } = mongoose;

const medidorSchema = new Schema({
    idMedidor:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: 'cliente',
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
