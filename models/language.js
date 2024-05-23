const mongoose = require('mongoose')
const {Schema} = mongoose

// schema
const languageSchema = new Schema({
    name: {type: String, required:true},
    greeting: String,
    pnagram: String,
    filler: String
})



// model & export
const Language = mongoose.model('Language', languageSchema)
module.exports = Language