import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
const ExpenseListItem = ({ viewer }) => {
  console.log("Inside expense list");
  console.log(viewer);
  return <div>{viewer.category}</div>;
};

export default createFragmentContainer(ExpenseListItem, {
  viewer: graphql`
    fragment ExpenseListItem_viewer on Expense {
      id
      category
      amount
      date
    }
  `
});
