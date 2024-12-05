const mongoose = require("mongoose")

const connectionString = process.env.DBCONNECTION

mongoose.connect(connectionString).then(res => {

    console.log("MongoDB Atles Succesfully Connected with CpaServer");

}).catch(err => {
    console.log("MongoDB Atles Connection Failed");
    console.log(err);
})