import { ADD_TODO, REMOVE_TODO } from "../types";

export const addToDo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const removeToDo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}