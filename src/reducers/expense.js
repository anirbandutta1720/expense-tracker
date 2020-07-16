import { ADD_EXPENSE } from "../actiontypes/expense";
const INITIAL_STATE = {
    expense: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            console.log(action.payload)
            return { ...state, expense: action.payload }
        default:
            return state
    }
}