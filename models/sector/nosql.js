import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

const sectorSchema = new Schema({
    idSector:{
        type: Number,
        required: true,
        unique: true,
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
