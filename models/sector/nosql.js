import mongoose from "mongoose";

const { Schema } = mongoose;

const sectorSchema = new Schema({
    idSector:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    idRuta:{
        type: Number,
        required: true,
    },
    sucursal:{
        type: String,
        required: true,
    },
    locomocion:{
        type: String,
        required: true,
    },
});

const Sector = mongoose.model('sector', sectorSchema);

export default Sector;
