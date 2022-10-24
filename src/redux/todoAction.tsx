import { ADD_TODO, DELETE_TODO, LINE_THROUGH } from "./todoActionTypes";

export const addTodo = (todo: any) => ({
    type: ADD_TODO,
    payload: todo
})

export const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    payload: id
})

export const lineThroughTodo = (id: number) => ({
    type: LINE_THROUGH,
    payload: id
})