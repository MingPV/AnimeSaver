const mongoose = require('mongoose')

// connect to mongoDB
const dbURL = "mongodb://localhost:27017/productDB"

//just fix bug
mongoose.set('strictQuery', true);

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

// design Schema
let productSchema = mongoose.Schema({
    animeName: String,
    point: Number,
})

// create model
let Product = mongoose.model("products", productSchema)

// export
module.exports = Product

// add more function
module.exports.saveProduct = function (model, data) {
    model.save(data)
}