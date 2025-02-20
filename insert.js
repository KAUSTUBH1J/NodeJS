const dbConnect = require('./dbConnection.js');

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

// console.log()



const insert = async (name , price, category) =>{
    console.log('insert call');
    let data = await dbConnect();
    let result = await data.insertOne({
        name: name,
        price: price,
        category: category
    });
    return result;
}

module.exports = insert;
