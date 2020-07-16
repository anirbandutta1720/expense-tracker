const graphql = require('graphql');

const Expense = require('./model/expense');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const ExpenseType = new GraphQLObjectType({
    name: 'Expense',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        category: {
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat
        },
        date: {
            type: GraphQLString
        }
    })
});
const ExpenseQuery = new GraphQLObjectType({
    name: 'ExpenseQueryType',
    fields: {
        expense: {
            type: ExpenseType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Expense.findById(args.id);
            }
        },
        expenses: {
            type: new GraphQLList(ExpenseType),
            resolve(parent, args) {
                return Expense.find({});
            }
        }
    }
});
const ExpenseMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addExpense: {
            type: ExpenseType,
            args: {
                category: { type: GraphQLNonNull(GraphQLString) },
                amount: { type: GraphQLNonNull(GraphQLFloat) },
                date: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let expense = new Expense({
                    category: args.category,
                    amount: args.amount,
                    date: args.date
                });
                return expense.save();
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: ExpenseQuery,
    mutation: ExpenseMutation
});
