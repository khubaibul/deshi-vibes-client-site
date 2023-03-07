import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://e-shop-server-livid.vercel.app/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
        getProductById: builder.query({
            query: (_id) => `/product/${_id}`,
        }),
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;