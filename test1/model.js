const  mongoose  = require("mongoose");

const Schema = mongoose.Schema

const mySchema = new Schema({

})

const products = mongoose.model('products',mySchema)

module.exports = products