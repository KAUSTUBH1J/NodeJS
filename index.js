// const { hash } = require('crypto');
// const http = require('http')

// const data = {
//     name: 'kaustubh jadhav',
//     email: 'kaustubh.jadhav@gmail.com'

// }

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'application/JSON'})
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4500);

// const fs = require('fs')

// const path = require('path')

// const dirpath = path.join(__dirname)
// const curd_files = `${dirpath}/files_curd`;
// console.log(dirpath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${curd_files}/test${i}.txt`, 'just test');
// }


// fs.readFile(`${curd_files}/test.txt`,'utf8',(error, data)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(data);
// })

// fs.unlinkSync(`${curd_files}/test.txt`);


// let a = 10;
// console.log(++a);

///////////////////////////////////////////////////////

// const express = require('express');
// const path = require('path');

// const public_path = path.join(__dirname,'public');

// const app = express();
// app.use(express.static(public_path)); 

// app.get('',(_,res)=>{
//     res.sendFile(public_path,'home.html');
// });

// app.listen(4500);

//////////////////////////////////////////////////////
// EJS And Middleware

// const express = require('express');
// const app = express();

// const reqFiltre = (req, resp, next) =>{
//     if(!req.query.age){
//         resp.send('Please provide Your Age');
//     }else if(req.query.age <= 18){
//         resp.send('You are under aged');
//     }else{
//         next();
//     }
// }

// app.set('view engine','ejs');
// app.use(reqFiltre);


// app.get('/',(req, resp)=>{
//     const data = {
//         name: 'kaustubh',
//         email: 'kaustubh@gmail.com'
//     };
//     const product = [
//         {
//             name: 'CPU',
//             qty: 2,
//             price: 42000
//         },
//         {
//             name: 'Moniter',
//             qty: 2,
//             price: 22000
//         },
//         {
//             name: 'Mouse',
//             qty: 2,
//             price: 200
//         },
//         {
//             name: 'keyboard',
//             qty: 10,
//             price: 1200
//         },
//     ]

//     resp.render('home',{data, product});
// });


// app.get('/about',(req,resp)=>{
//     resp.render('about')
// })

// app.listen(4500);


/////////////////////////////////////////////////////////////


// const { MongoClient } = require('mongodb');

// const url =  'mongodb://localhost:27017';
// const DatabaseName = 'E-comm';
// const client  = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     db = result.db(DatabaseName);
//     collection = db.collection('products');
//     let data = await collection.find({}).toArray();
//     console.log(data); 
// }

// getData();

///////////////////////////////////////////////

const { MongoClient } = require('mongodb');

const url =  'mongodb://localhost:27017';
const DatabaseName = 'E-comm';
const client  = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    db = result.db(DatabaseName);
    return db.collection('products');
}

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})