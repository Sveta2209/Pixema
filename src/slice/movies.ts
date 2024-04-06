import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from "../types/types";

const movieKey = "113df6aa";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async function (title:string, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=${title}`);
            if (!responce.ok) {
                throw new Error("Что-то пошло не так")
            }
            const data = await responce.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        films: [],
        status: null,
        error: null
    },
    reducers: {
    addToFavoriteRedux(state: any, {payload}: {payload: any}) {
        state.films.push(payload);
        console.log(current(state.films))
        },
    },
    extraReducers: (builder) => {
        return builder.addCase(fetchMovies.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchMovies.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.films = payload.results;
        }),
        builder.addCase(fetchMovies.rejected, isError)
    }
});

const isError = (state: any, {payload}: {payload: any}) => {
    state.status = "rejected";
    state.error = payload;
};


const {actions, reducer} = moviesSlice;
export const {addToFavoriteRedux} = actions;
export default reducer;