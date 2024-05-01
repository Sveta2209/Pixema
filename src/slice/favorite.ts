import { createSlice, current } from '@reduxjs/toolkit';
import { Movie} from "../types/types";

interface favoriteState {
    favorites: Movie[];
}


const storedFavorites = localStorage.getItem("favorites");
const initialState: favoriteState = {
    favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
};


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const eachFavoritesIndex = state.favorites.findIndex(
                (item) => item?.imdbID === action.payload?.imdbID,
            );
            if (eachFavoritesIndex >= 0) {
                throw new Error ("You cannot add this film to wishlists anymore.");
            } else {
                state.favorites.push(action.payload);
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
        },
        removeFavorites: (state, action) => {
            const updatedFavorites = state.favorites?.filter(
                (item) => item?.imdbID !== action.payload?.imdbID,
            );
            state.favorites = updatedFavorites;
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
    
});

const {actions, reducer} = favoritesSlice;
export const {addToFavorites, removeFavorites} = actions;
export default reducer;