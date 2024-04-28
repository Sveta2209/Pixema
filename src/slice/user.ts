import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { AuthForUser} from "../types/types";
import { auth } from "../firebase";

export interface userState {
    name: string | null;
    email: string | null;
    isAuth?: boolean;
    id?: null;
    status?: string | null;
    error?: string | null;
}

export const fetchSignUpUser = createAsyncThunk<userState, AuthForUser>(
    "user/fetchSignUpUser",
    async ({ email, password, name }) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        if (user) {
            await updateProfile(user, { displayName: name });
        return {
            name: user.displayName,
            email: user.email,
        };
    }
    throw new Error("User registration failed!");
    },
);

export const fetchSignInUser = createAsyncThunk<userState, AuthForUser>(
    "user/fetchSignInUser",
    async ({ email, password }) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
        return {
            name: user.displayName,
            email: user.email,
        };
    } catch (error) {
        throw error;
    }
    },
);

export const fetchLogout = createAsyncThunk("auth/logout", () => {
    try {
        auth.signOut();
    } catch (error) {
        throw error;
    }
});

const initialState: userState = {
    name: null,
    email: null,
    isAuth: false,
    id: null,
    status: null,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.email = payload.email;
            state.id = payload.id;
        },
    },
    extraReducers: (builder) => {
        return builder.addCase(fetchSignUpUser.pending, (state) => {}),
        builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
            state.status = "resolved";
            state.name = payload.name;
            state.email = payload.email;
            state.isAuth = true;
            console.log(state.name);
            console.log(state.email);
        }),
        builder.addCase(fetchSignUpUser.rejected, isError),
        builder.addCase(fetchSignInUser.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
            state.status = "resolved";
            state.name = payload.name;
            state.email = payload.email;
            state.isAuth = true;
        }),
        builder.addCase(fetchSignInUser.rejected, isError),
        builder.addCase(fetchLogout.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchLogout.fulfilled, (state) => {
            state.isAuth = false;
            state.email = null;
            state.name = null;
            state.status = "resolved";
        }),
        builder.addCase(fetchLogout.rejected, isError)
    }
});

const isError = (state: userState, {payload}: {payload:any}) => {
    state.status = "rejected";
    state.error = payload;
};

const {actions, reducer} = userSlice;
export const {setUser} = actions;
export default reducer;