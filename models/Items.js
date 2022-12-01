const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    categoryname:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Item',ItemSchema)