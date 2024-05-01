import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { MovieResponse, TrendState} from "../types/types";

const movieKey = "113df6aa";

export const fetchTrends = createAsyncThunk <MovieResponse, string | undefined> (
    'trends/fetchTrends',
    async function (title, {rejectWithValue}) {
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

const initialState: TrendState = {
    trends: [],
    status: null,
    error: null,
}

const trendsSlice = createSlice({
    name: 'trends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addCase(fetchTrends.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchTrends.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.trends = payload.Search;
        }),
        builder.addCase(fetchTrends.rejected, isError)
    }
});

const isError = (state: any, {payload}: {payload: any}) => {
    state.status = "rejected";
    state.error = payload;
};

const {actions, reducer} = trendsSlice;
export default reducer;