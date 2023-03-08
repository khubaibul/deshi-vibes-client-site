import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
        getProductById: builder.query({
            query: (_id) => `/product/${_id}`,
        }),
        getCartProductByEmail: builder.query({
            query: (email) => `/cart-product/${email}`,
            providesTags: ['cartFromCart']
        }),
        deleteCartProductById: builder.mutation({
            query: (productId) => ({
                url: `/delete-cart-product/${productId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['cartFromCart']
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/add-product",
                method: "POST",
                body: data
            })
        }),
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/add-to-cart",
                method: "POST",
                body: data
            })
        }),
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation, useAddToCartMutation, useGetCartProductByEmailQuery, useDeleteCartProductByIdMutation } = productsApi;