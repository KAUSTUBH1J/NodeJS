const express = require('express')

const dbConnect = require('../dbConnection');
const app = express();

app.use(express.json());

app.get('/',async (req, resp)=>{
    let data = await dbConnect();
    
    data = await data.find().toArray();
    resp.send({code: 200, data:data});
});

app.post('/add', (req, resp)=>{
    console.log(req.body);
    resp.send({name: req.body});
});

app.listen(2000);