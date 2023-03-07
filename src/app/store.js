import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import { productsApi } from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});