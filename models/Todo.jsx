const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.models.Todo || mongoose.model('Todo', todoSchema);