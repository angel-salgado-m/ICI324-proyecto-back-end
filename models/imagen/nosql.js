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
    // Puede que no sea necesario este dato, revisar en los metodos sql.
    idRegistro:{
        type: Schema.Types.ObjectId,
        ref: 'registro', //referencia a la tabla registro ?? * (Por comprobar)
        required: true,
    },
});

const Imagen = mongoose.model('imagen', imagenSchema);

export default Imagen;