const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    prod_id:{type: String, required: true,max:60},
    nombre:{type: String, required: true,max:60},
    tamaño:{type: String, required: true,max:40},
    marca:{type: String, required: true,max:40},
    cantidad:{type: Number, required: true,max:45},
    precio:{type: Number, required: true,max:1000000},
    });

module.exports = mongoose.model("productos", ProductosSchema);