const mongo = require('mongoose');
const Schema = mongo.Schema;

const expenseSchema = new Schema({
    category: String,
    amount: Number,
    date: String
});

module.exports = mongo.model('Expense', expenseSchema);