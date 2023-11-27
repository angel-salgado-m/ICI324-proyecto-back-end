import mongoose, { mongo } from "mongoose";
import values from "./const.js";

const conexionMongo = mongoose.connect(values.URI_MONGO, {
    dbName : values.MONGODB_name,
    user: values.MONGODB_user,
    pass: values.MONGODB_pass,
}).then(() => {
    console.log("MONGODB: Conectado");
}).catch((err) => {
    console.log(err);
});

export default conexionMongo;
