import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../firebase/Firebase.config";

const initialState = {
    user: {},
    role: "",
    isLoading: false,
    googleLoading: false,
    isError: false,
    error: ""
};

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user;
});

export const updateUser = createAsyncThunk("auth/updateUser", async (name, photo) => {
    const data = await updateProfile(auth.currentUser,
        {
            displayName: name,
            photoURL: photo,
        }
    );
    return data.user;
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user;
});


export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider)
    return data.user;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {}
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        toggleLoading: (state) => {
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = {};
                state.isError = true;
                state.error = action.error.message
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = {};
                state.isError = true;
                state.error = action.error.message
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = {};
                state.isError = true;
                state.error = action.error.message
            })
            .addCase(googleLogin.pending, (state) => {
                state.googleLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.googleLoading = false;
                state.user = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.googleLoading = false;
                state.user = {};
                state.isError = true;
                state.error = action.error.message
            })
    }
});

export const { logout, setUser, toggleLoading } = authSlice.actions;

export default authSlice.reducer;