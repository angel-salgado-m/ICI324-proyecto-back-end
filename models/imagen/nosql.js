import mongoose from "mongoose";
const { Schema } = mongoose.Schema;

const imagenSchema = new Schema({
    idImagen:{
        type: Number,
        required: true,
        unique: true,
    },
    img:{
        type: String,
        required: true,
    },
    // Puede que no sea necesario este dato, revisar en los metodos sql.
    idRegistro:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'registro' //referencia a la tabla registro ?? * (Por comprobar)
    },
});

const Imagen = mongoose.model('imagen', imagenSchema);

export default Imagen;