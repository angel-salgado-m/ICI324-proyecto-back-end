import mongoose from "mongoose";
const { Schema } = mongoose;

const imagenSchema = new Schema({
    idImagen:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    img:{
        type: String,
        required: true,
    },
});

const Imagen = mongoose.model('imagen', imagenSchema);

export default Imagen;