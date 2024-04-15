import { configureStore } from '@reduxjs/toolkit'

import  moviesReducer from "../slice/movies";
import filmReducer from "../slice/selectedFilm";
import favoritesReducer from "../slice/favorite";
import trendsReducer from "../slice/trendFilms";

const rootReduce = {
    movies: moviesReducer,
    film: filmReducer,
    favorites: favoritesReducer,
    trends: trendsReducer,
}

const store = configureStore({
    reducer: rootReduce,
})

export default store;