import { ADD_TODO, DELETE_TODO } from "./todoActionTypes";

const initialState = {
    todos: [],
}

type ACTIONTYPE =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number };
  
export const todoReducer = (state: typeof initialState = initialState, action: ACTIONTYPE) => {

    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo, id) => id !== action.payload)]
            }
        default:
            return state
    }
}