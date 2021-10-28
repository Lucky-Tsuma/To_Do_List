import { MARK_COMPLETE } from "../types";

export const markComplete = (id) => {
    return {
        type: MARK_COMPLETE,
        payload: id
    }
}