import React from 'react';
import { useDeleteCustomerByEmailMutation, useGetCustomersQuery } from '../../../features/products/productsSlice';
import Loader from '../../Shared/Loader/Loader';
import Customer from './Customer';

const Customers = () => {
    const { data: customers, isLoading, isError, error } = useGetCustomersQuery();
    const [removeCustomer, { data }] = useDeleteCustomerByEmailMutation();

    if (isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <Loader />
        </div>
    }

    const deleteCustomer = (email) => {
        removeCustomer(email)
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='mt-20'>
            <h3 className='text-center text-primary font-bebas text-2xl tracking-widest'>All Customers</h3>
            <div className='my-10 lg:px-40 md:px-20 px-4 grid gap-y-4'>
                {
                    customers?.map(customer =>
                        <Customer
                            key={customer._id}
                            customer={customer}
                            deleteCustomer={deleteCustomer}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Customers;