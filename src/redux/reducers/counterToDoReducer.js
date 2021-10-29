import { ADD_TODO, REMOVE_TODO } from "../types";

const initialState = [];

const toDoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id != payload);
        default:
            return state;
    }
};

export default toDoReducer;
