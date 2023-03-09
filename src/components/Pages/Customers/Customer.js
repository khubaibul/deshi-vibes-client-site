import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Customer = ({ customer, deleteCustomer }) => {
    return (
        <div className="w-full lg:flex md:flex sm:flex items-center justify-between lg:px-7 px-3 py-2 gap-x-4 border cursor-pointer border-primary">
            <div className='flex-1'>
                <h2 className="font-semibold text-neutral">Name: {customer?.userName}</h2>
            </div>
            <div className='flex-1'>
                <h2 className="font-semibold text-neutral">Email: {customer?.email}</h2>
            </div>
            <div className='flex gap-x-4 items-center'>
                <button
                    onClick={() => deleteCustomer(customer.email)}
                    className='w-8 h-8 rounded-full flex justify-center items-center text-red bg-secondary hover:bg-gray-dark active:bg-opacity-80'>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default Customer;