import mongoose from "mongoose";
import values from "./const.js";

const conexionMongo = mongoose.connect(values.URI_MONGO, {
    dbName : values.MONGODB_name,
    user: values.MONGODB_user,
    pass: values.MONGODB_pass,
}).then(async (db) => {
    console.log("MONGODB: Conectado");

    console.log("MONGODB: Colecciones:")
    // Fetch and print all documents from each collection
    const collections = await mongoose.connection.db.listCollections().toArray();
    collections.forEach(async (collection) => {
        const data = await mongoose.connection.collection(collection.name).find().toArray();
        console.log(JSON.stringify(data, null, 2));
    });
    
    

}).catch((err) => {
    console.log(err);
});

export default conexionMongo;