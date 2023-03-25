import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    checkedCartProducts: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        selectedCartProducts: (state, action) => {
            const cart = state.checkedCartProducts;
            const exist = cart.find(p => p._id === action.payload._id);

            if (exist) {
                state.checkedCartProducts = state.checkedCartProducts.filter(product => product._id !== action.payload._id)
            }
            else {
                state.checkedCartProducts.push(action.payload);
            }
        }
    }
})

export const { selectedCartProducts } = cartSlice.actions;

export default cartSlice.reducer;