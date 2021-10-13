const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('User', PostSchema)