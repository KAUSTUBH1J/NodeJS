const dbConnect = require('./dbConnection');

const deleteData = async () => {
    const data = await dbConnect();
    let result = await data.deleteOne({name: 'sumsung s24 ultra'});
    console.log(result);
}

deleteData();