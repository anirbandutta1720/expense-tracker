const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const Expense = require('./model/expense');
const app = express();


const databaseURI = 'mongodb+srv://anirban_test:pK71Lv16ZyxhrERc@cluster0.lgndd.mongodb.net/expense-tracker?retryWrites=true&w=majority';
const port = process.env.PORT || 8080;
const router = express.Router();

mongo.connect(databaseURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongo.connection.once('open', () => {
    console.log('connected to database');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(`/graphiql`, graphqlHTTP({ schema: require(`./schema.js`), graphiql: true }));

//router
router.get('/expense', function (req, res) {
    Expense.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
app.use('/api', router);
app.listen(port, () => {
    console.log('Server running succefully on '+ port);
})