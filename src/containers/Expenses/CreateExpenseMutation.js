import { commitMutation, graphql } from "react-relay";
import environment from "../../environment";

const mutation = graphql`
  mutation CreateExpenseMutation($input: CreateExpenseInput!) {
    addExpense(input: $input) {
      category
      amount
      date
    }
  }
`;
export default (category, amount, date, callback) => {
  const variables = {
    input: {
      category,
      amount: parseFloat(amount),
      date
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: () => {
      callback();
    },
    updater: store => {
      const payload = store.getRootField('addExpense');
      console.log(store, payload);
    },
    onError: err => console.error(err)
  });
};
