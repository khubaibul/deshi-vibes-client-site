import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://deshi-vibes-server.vercel.app' }),
    tagTypes: ['deleteProduct', 'deleteProduct', 'deleteCustomer', 'deleteFromCart', 'shipped, canceled'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
            providesTags: ['deleteProduct']
        }),
        getProductById: builder.query({
            query: (_id) => `/product/${_id}`,
        }),
        deleteProductById: builder.mutation({
            query: (_id) => ({
                url: `/delete-product/${_id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['deleteProduct']
        }),
        getCustomers: builder.query({
            query: () => "/all-customer",
            providesTags: ['deleteCustomer']
        }),
        deleteCustomerByEmail: builder.mutation({
            query: (email) => ({
                url: `/delete-customer/${email}`,
                method: "DELETE"
            }),
            invalidatesTags: ['deleteCustomer']
        }),
        getCartProductByEmail: builder.query({
            query: (email) => `/cart-product/${email}`,
            providesTags: ['deleteFromCart']
        }),
        deleteCartProductById: builder.mutation({
            query: (productId) => ({
                url: `/delete-cart-product/${productId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['deleteFromCart']
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
        addToPayment: builder.mutation({
            query: (data) => ({
                url: "/ssl-commerz/payments",
                method: "POST",
                body: data
            })
        }),
        getOrdersByEmail: builder.query({
            query: (email) => `/my-orders/${email}`,
        }),
        getAllOrders: builder.query({
            query: () => "/all-orders",
            providesTags: ['shipped, canceled']
        }),
        setShippedInOrder: builder.mutation({
            query: (_id) => ({
                url: `/shipped-order/${_id}`,
                method: "PATCH",
                body: { _id }
            }),
            invalidatesTags: ['shipped, canceled']
        }),
        setCanceledInOrder: builder.mutation({
            query: (_id) => ({
                url: `/canceled-order/${_id}`,
                method: "PATCH",
                body: { _id }
            }),
            invalidatesTags: ['shipped, canceled']
        }),
    }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation, useAddToCartMutation, useGetCartProductByEmailQuery, useDeleteCartProductByIdMutation, useGetCustomersQuery, useDeleteCustomerByEmailMutation, useDeleteProductByIdMutation, useAddToPaymentMutation, useGetOrdersByEmailQuery, useGetAllOrdersQuery, useSetShippedInOrderMutation, useSetCanceledInOrderMutation } = productsApi;