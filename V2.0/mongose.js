const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/E-comm');

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    category : String
});

const productModel = mongoose.model('product',productSchema);

const insert = async () => {
    let data = new productModel({
        name: 'pixal',
        price: 45000,
        category: 'mobile'
    })
    let result = await data.save();
    console.log(result);
}

insert();
