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
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/add-product",
                method: "POST",
                body: data
            })
        })
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation } = productsApi;