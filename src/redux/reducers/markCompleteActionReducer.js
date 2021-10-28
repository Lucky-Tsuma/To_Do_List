import { MARK_COMPLETE } from "../types";

const initialState = [];

const markCompleteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MARK_COMPLETE:
            return state.map((todoItem) => {
                if (todoItem.id === payload) todoItem.is_complete = true;
                return todoItem;
            });
        default:
            return state;
    }
};

export default markCompleteReducer;