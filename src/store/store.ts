import { configureStore } from '@reduxjs/toolkit'

import  moviesReducer from "../slice/movies";

const rootReduce = {
    movies: moviesReducer,
}

const store = configureStore({
    reducer: rootReduce,
})

export default store;