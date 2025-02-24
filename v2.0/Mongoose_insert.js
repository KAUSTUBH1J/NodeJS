const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost:27017/E-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
})
const ProductsModel = mongoose.model('products',productSchema)
const insert = async () =>{

    let data = new ProductsModel({name:'iPhone', price: 10000, category:'smart phone'});
    let result = await data.save();

    console.log(result);

}

const Update = async () =>{
    
}