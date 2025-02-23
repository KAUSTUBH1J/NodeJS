const mongoose = require('mongoose');
const express = require('express');
// const { name } = require('ejs');

const app = express();

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/E-comm');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const productModel = mongoose.model('product',productSchema);

app.post('/create', async (req,resp)=>{
    let data = new productModel(req.body)
    let result = await data.save(data);
    resp.send(result);
});

app.get('/list',async (req,resp)=>{
    let data = await productModel.find();
    resp.send(data);
});

app.delete('/delete/:_id', async (req,resp)=>{
    let data = await productModel.deleteOne(req.params);
    resp.send(data);
});

app.put('/Update/:name', async (req, resp)=>{
    let data = await productModel.updateOne(req.params,{$set:req.body})
    resp.send(data);
});

app.get('/Serach/:key', async (req, resp)=>{
    let data = await productModel.find({
        '$or':[
            {"name":{$regex: req.params.key}},
            {"category":{$regex: req.params.key}}
        ]
    })
    resp.send(data);
})

app.listen(2000);