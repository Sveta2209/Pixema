import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResponse, Movie} from "../types/types";

const movieKey = "113df6aa";

interface searchState {
    search: Movie[];
    status: string | null;
    error: string | null;
}
export interface searchParams {
    title: string;
    page: number;
}

export const fetchSearch = createAsyncThunk <MovieResponse, searchParams> (
    'search/fetchSearch',
    async function ({ title, page }, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=${title}&page=${page}`);
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

const initialState: searchState = {
    search: [],
    status: null,
    error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchSearch.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchSearch.fulfilled, (state, {payload}) => {
            state.status = "resolved";
            state.error = null;
            state.search = payload.Search;
        }),
        builder.addCase(fetchSearch.rejected, isError)
    }
});

const isError = (state: searchState, {payload}: {payload: any}) => {
    if (payload) {
    state.status = "rejected";
    state.error = payload;
    state.search = [];
    }
};

const {actions, reducer} = searchSlice;
export default reducer;