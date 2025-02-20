const express = require('express')
const insert = require('../insert.js');
const dbConnect = require('../dbConnection');
const app = express();

app.use(express.json());

app.get('/',async (req, resp)=>{
    let data = await dbConnect();
    
    data = await data.find().toArray();
    resp.send({code: 200, data:data});
});

app.post('/addProduct',async (req, resp)=>{
    // console.log(req.body);
    let result;
    let Error_message = [];
    let error = false;
    if(!req.body.name){
        let mass = 'Product name is requried.';
        Error_message.push(mass);
        error = true;
    }

    if(!req.body.price){
        let mass = 'Price is requried.';
        Error_message.push(mass);
        error = true;
    }

    if(!req.body.category){
        let mass = 'category is requried.';
        Error_message.push(mass);
        error = true;
    }
    let inresult;
    let message ;
    if(!error){
        let name        = req.body.name;
        let price       = req.body.price;
        let category    = req.body.category;
        inresult      =  await insert(name,price,category);
        console.log(inresult);
        if(inresult.acknowledged){
            message = 'success';
        }else{
            message = 'Faild';
        }
    }

    result = {
        code    : error ? 100 : 200,
        message : error ? 'Error': message,
        Error   : Error_message,
        data    :  inresult 
    }
    resp.send(result);
});

app.listen(2000);