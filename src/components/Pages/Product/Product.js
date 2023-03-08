import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, image, name, price } = product;
    return (
        <Link to={`/product-detail/${_id}`} className='bg-gray hover:shadow-lg hover:-translate-y-2 transition-all duration-500'>
            <img className='lg:h-96 md:h-96 h-[400px] w-full' src={image} alt="" />
            <div className='flex justify-between p-2 mt-4'>
                <p className='text-lg font-bebas tracking-widest'>{name}</p>
                <p className='text-lg font-bebas tracking-widest'>${price}.00</p>
            </div>
        </Link>
    );
};

export default Product;