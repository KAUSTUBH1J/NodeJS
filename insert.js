const dbConnect = require('./dbConnection.js');

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})

// console.log()

const name = process.argv[2];
const price = process.argv[3];
const category = process.argv[4];


const insert = async () =>{
    console.log('insert call');
    let data = await dbConnect();
    let result = await data.insertOne({
        name: name,
        price: price,
        category: category
    });
    console.log(result)
}
insert();