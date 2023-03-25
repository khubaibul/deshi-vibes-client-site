import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import cartSlice from '../features/cart/cartSlice';
import { productsApi } from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        auth: authSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});