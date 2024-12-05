const express = require("express");
require("dotenv").config()
const cors = require("cors");
require ('./config/connection')
const router = require("./routes/router");


const Cpa = express();

Cpa.use(cors());
Cpa.use(express.json());
Cpa.use(router)

const PORT = 3000 || process.env.PORT ;

Cpa.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

Cpa.get('/',(req,res)=>{

    res.status(200).send(`<h1 style="color:red;">Cpa server Stareted at port and waiting for client request !!!</h1>`)

})