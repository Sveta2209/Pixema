import { configureStore } from '@reduxjs/toolkit'

import  moviesReducer from "../slice/movies";
import filmReducer from "../slice/selectedFilm";

const rootReduce = {
    movies: moviesReducer,
    film: filmReducer,
}

const store = configureStore({
    reducer: rootReduce,
})

export default store;