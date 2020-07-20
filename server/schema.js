const graphql = require("graphql");

const Expense = require("./model/expense");

const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const ExpenseType = new GraphQLObjectType({
  name: "Expense",
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
const CreateExpenseInput = new GraphQLInputObjectType({
  name: "CreateExpenseInput",
  fields: () => ({
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
  name: "ExpenseQueryType",
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
  name: "Mutation",
  fields: {
    addExpense: {
      type: ExpenseType,
      args: {
        input: { type: new GraphQLNonNull(CreateExpenseInput) }
      },
      resolve(parent, { input }) {
        let expense = new Expense({
          category: input.category,
          amount: input.amount,
          date: input.date
        });
        return expense.save();
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: ExpenseQuery,
  mutation: ExpenseMutation
});
