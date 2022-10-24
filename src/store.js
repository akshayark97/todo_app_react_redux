import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './redux/todoReducer'

const store = configureStore({ reducer: todoReducer })

export default store