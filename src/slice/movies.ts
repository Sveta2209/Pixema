import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResponse, MoviesParams, MoviesState} from "../types/types";

const movieKey = "113df6aa";

export const fetchMovies = createAsyncThunk <MovieResponse, MoviesParams> (
    'movies/fetchMovies',
    async function ({filmTitle, page}, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=${filmTitle}&page=${page}`);
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

// export const fetchOneMovie = createAsyncThunk  (
//     'movies/fetchOneMovie',
//     async function (imdbID: string, {rejectWithValue}) {
//         try {
//             const responce = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${imdbID}&plot=full`);
//             if (!responce.ok) {
//                 throw new Error("Что-то пошло не так")
//             }
//             const data = await responce.json();
//             return data;
//         }
//         catch (error) {
//             return rejectWithValue((error as Error).message);
//         }
//     }
// )

const initialState: MoviesState = {
    films: [],
    status: null,
    error: null,
    // selectedFilm: null,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchMovies.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchMovies.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.films.push(...payload.Search);
        }),
        builder.addCase(fetchMovies.rejected, isError)
        // builder.addCase(fetchOneMovie.pending, (state: any) => {
        //     state.status = "loading";
        //     state.error = null;
        // }),
        // builder.addCase(fetchOneMovie.fulfilled, (state: any, {payload}: {payload: any}) => {
        //     state.status = "resolved";
        //     state.error = null;
        //     console.log (payload)
        //     state.selectedFilm = payload;
        //     console.log (state.selectedFilm)
        // }),
        // builder.addCase(fetchOneMovie.rejected, isError)
    }
});

const isError = (state: any, {payload}: {payload: any}) => {
    state.status = "rejected";
    state.error = payload;
};

const {actions, reducer} = moviesSlice;
export default reducer;