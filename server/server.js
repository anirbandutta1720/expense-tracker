const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const Expense = require('./model/expense');
const app = express();
const cors = require('cors');

const databaseURI = 'mongodb+srv://anirban_test:pK71Lv16ZyxhrERc@cluster0.lgndd.mongodb.net/expense-tracker?retryWrites=true&w=majority';
const port = process.env.PORT || 8080;

mongo.connect(databaseURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongo.connection.once('open', () => {
    console.log('connected to database');
})
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(`/graphql`, cors(), graphqlHTTP({ schema: require(`./schema.js`), graphiql: true }));
app.listen(port, () => {
    console.log('Server running succefully on ' + port);
})