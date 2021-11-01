import { ADD_TODO, REMOVE_TODO, MARK_COMPLETE } from "../types";

const initialState = [];

const toDoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [...state, payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== payload);
        case MARK_COMPLETE:
            console.log(state);
            return state.map((todo) => {
                if (todo.id === payload) todo.is_complete = true;
                return todo;
                });
        default:
            return state;
    }
};

export default toDoReducer;
