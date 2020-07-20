import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../environment";
import ExpenseListItem from "../../components/Expenses/ExpenseListItem/ExpenseListItem";
const ExpenseList = () => {
  const ExpenseListQuery = graphql`
    query ExpenseListQuery {
      expenses {
        ...ExpenseListItem_viewer
      }
    }
  `;
  return (
    <QueryRenderer
      environment={environment}
      query={ExpenseListQuery}
      render={({ error, props }) => {
        console.log(props);
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return props.expenses.map((exp, i) => {
            return <ExpenseListItem key={i} viewer={exp} />;
          });
        }
        return <div>Loading</div>;
      }}
    />
  );
};
export default ExpenseList;
