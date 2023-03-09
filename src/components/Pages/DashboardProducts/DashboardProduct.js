import React from 'react';
import { FaTrash } from 'react-icons/fa';

const DashboardProduct = ({ product, deleteProduct }) => {
    console.log(product);
    const { _id, image, name, sell } = product;
    return (
        <div className="w-full lg:h-[100px] flex items-center justify-between lg:px-7 px-3 border cursor-pointer border-primary font-bebas tracking-wider">
            <div className='flex items-center gap-x-4 lg:w-[400px] md:w-[350px] sm:w-[350px] w-full'>
                <img className="p-2 h-24 w-24" src={image} alt="product" />
                <h2 className="font-semibold text-neutral">{name}</h2>
            </div>
            <div className='lg:w-[120px]'>
                <p>Sell: {sell}</p>
            </div>
            <div className='flex gap-x-4 items-center'>
                <button
                    onClick={() => deleteProduct(_id)}
                    className='w-8 h-8 rounded-full flex justify-center items-center text-red bg-secondary hover:bg-gray-dark active:bg-opacity-80'>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default DashboardProduct;