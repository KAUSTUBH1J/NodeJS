const dbConnect = require('./dbConnection.js');

const UpdateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany({ name : 'sumsung s24 ultra'},{$set: {price: 140000, category: 'smart phone'}})
    console.log(result);
}

UpdateData();