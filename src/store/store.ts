import { configureStore } from '@reduxjs/toolkit'

import  moviesReducer from "../slice/movies";
import filmReducer from "../slice/selectedFilm";
import favoritesReducer from "../slice/favorite";
import trendsReducer from "../slice/trendFilms";
import searchReducer from "../slice/search";

const rootReduce = {
    movies: moviesReducer,
    film: filmReducer,
    favorites: favoritesReducer,
    trends: trendsReducer,
    search:searchReducer,
}

const store = configureStore({
    reducer: rootReduce,
})

export default store;