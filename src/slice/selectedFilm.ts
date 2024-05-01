import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FilmState, MovieDetails} from "../types/types";

const movieKey = "113df6aa";

export const fetchOneMovie = createAsyncThunk <MovieDetails, string | undefined, { rejectValue: string }> (
    'selectedfilm/fetchOneMovie',
    async function (imdbID, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${imdbID}&plot=full`);
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

const initialState: FilmState = {
    selectedFilm: null,
    status: null,
    error: null
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchOneMovie.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchOneMovie.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.selectedFilm = payload;
        }),
        builder.addCase(fetchOneMovie.rejected, isError)
    }
});

const isError = (state: any, {payload}: {payload: any}) => {
    state.status = "rejected";
    state.error = payload;
};

const {actions, reducer} = filmSlice;
export default reducer;