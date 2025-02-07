const dbConnect = require('./dbConnection.js');

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})

const insert = async () =>{
    console.log('insert call');
    let data = await dbConnect();
    let result = await data.insertOne({
        name: 'sumsung s24 ultra',
        price: 150000,
        category: 'mobile'
    });
    console.log(result)
}
insert();