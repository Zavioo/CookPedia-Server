const mongoose = require('mongoose')

const textimonySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
          type:String,
          required:true
    },
    status:{
        type:String,
        required:true,
        default:'pending'
    }
})

const textimanilas = mongoose.model('textimanilas',textimonySchema)

module.exports = textimanilas;