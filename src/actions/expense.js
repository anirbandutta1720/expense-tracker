import { ADD_EXPENSE } from "../actiontypes/expense";

export const addExpense = (data) => dispatch => {
    dispatch({
        type: ADD_EXPENSE,
        payload: data
    })
}