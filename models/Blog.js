const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    
}, {timestamps: true})

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogSchema);