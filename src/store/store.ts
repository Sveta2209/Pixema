import { configureStore } from '@reduxjs/toolkit'

import  moviesReducer from "../slice/movies";
import filmReducer from "../slice/selectedFilm";
import favoritesReducer from "../slice/favorite";

const rootReduce = {
    movies: moviesReducer,
    film: filmReducer,
    favorites: favoritesReducer,
}

const store = configureStore({
    reducer: rootReduce,
})

export default store;